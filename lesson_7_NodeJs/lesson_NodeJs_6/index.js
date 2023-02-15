import readline from "readline";
import colors from "colors";
import path from "path";
import inquirer from "inquirer";
import fsp from "fs/promises";
import { reduce } from "rxjs";
const cluster = require('cluster');
const os = require('os');
const http = require('http');
const fs = require('fs');
const path = require('path');
const numCPUs = os.cpus().length;
const io = require('socket.io');

const app = http.createServer((request, response) => {
    if (request.method === 'GET') {
        const filePath = path.join(__dirname, 'index.html');
        readStream = fs.createReadStream(filePath);
        readStream.pipe(response);
    } else if (request.method === 'POST') {
        let data = '';
        request.on('data', chunk => {
            data += chunk;
        });
        request.on('end', () => {
            const parsedData = JSON.parse(data);
            console.log(parsedData);
            response.writeHead(200, { 'Content-Type': 'json' });
            response.end(data);
        });
    } else {
        response.statusCode = 405;
        response.end();
    }
});

const socket = io(app);
socket.on('connection', function (socket) {
    console.log('New connection');
    socket.on('CLIENT_MSG', (data) => {
        socket.emit('SERVER_MSG', { msg: data.msg.split('').reverse().join('') });
    });
});
app.listen(3000, 'localhost');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

const root = process.cwd();

const findFilesInDir = (dirName) => {
    return fsp
        .readdir(dirName)
        .then((choices) => {
            return inquirer.prompt([
                {
                    name: "fileName",
                    type: "list",
                    message: "Choose file",
                    choices,
                },
                {
                    name: "findString",
                    type: "input",
                    message: "Enter something for search",
                    async when({ fileName }) {
                        const fullPath = path.join(dirName, fileName);
                        const stat = await fsp.stat(fullPath);

                        return stat.isFile();
                    },
                },
            ]);
        })
        .then(async ({ fileName, findString }) => {
            const fullPath = path.join(dirName, fileName);
            if (findString === undefined) return findFilesInDir(fullPath);

            return Promise.all([
                fsp.readFile(fullPath, "utf-8"),
                Promise.resolve(findString),
            ]);
        })
        .then((result) => {
            if (result) {
                const [text, findString] = result;
                const pattern = new RegExp(findString, "g");
                let count = 0;
                const out = text.replace(pattern, () => {
                    count++;
                    return colors.red(findString);
                });

                console.log(out, "\n", colors.green(`Found ${count} values`));
            }
        });
};

rl.question(
    `You are in: ${root} \n Please enter the path to the directory: `,
    (dirPath) => {
        const dirName = path.join(root, dirPath);

        findFilesInDir(dirName);
    }
);

rl.on("close", () => process.exit(0));


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
        console.log(`Forking process number ${i}...`);
        cluster.fork();
    }
} else {
    console.log(`Worker ${process.pid} started...`);
    http.createServer((request, response) => {
        console.log(`Worker ${process.pid} handle this request...`);
        setTimeout(() => {
            if (request.method === 'GET') {

                const filePath = path.join(__dirname, 'index.html');

                readStream = fs.createReadStream(filePath);

                response.writeHead(200, { 'Content-Type': 'text/html' });

                readStream.pipe(response);
            } else if (request.method === 'POST') {
                let data = '';
                request.on('data', chunk => {
                    data += chunk;
                });
                request.on('end', () => {
                    const parsedData = JSON.parse(data);

                    console.log(parsedData);
                    response.writeHead(200, { 'Content-Type': 'json' });
                    response.end(data);
                });
            } else {
                response.statusCode = 405;
                response.end();
            }
        }, 5000);
    }).listen(3000, 'localhost');
}