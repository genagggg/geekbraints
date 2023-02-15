//

// const os = require('os');
// console.log(os.cpus());

//Запись данных в фаил

const fs = require('fs');
let users = [{
    name: 'Иван',
    id: 10
}]

fs.writeFile('test.json', JSON.stringify(users), err => {
    if (err) {
        console.log(err)
    }
})

//Чтение данных и запись
let user = '{"name":"Ivan", "id":15}';
fs.readFile('test.json', 'UTF-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        let user = JSON.parse(data);
        user.push(JSON.parse(user));
        fs.writeFile('test.json', JSON.stringify(user))
    }
})