const EventEmitter = require('events');

class TimerEmmiter extends EventEmitter { }
const emmiter = new TimerEmmiter();

emmiter.on('timerTick', ([dateInFuture, timer]) => {
    const dateNow = new Date();
    if (dateNow >= dateInFuture) {
        emmiter.emit('timerEnd', timer)
    } else {
        console.log(getPrettyTime((dateInFuture - dateNow) / 1000), 'left')
    }
})

emmiter.on('timerEnd', timer => {
    clearInterval(timer)
    console.log('Time is up!')
})

const getPrettyTime = (seconds) => {
    const arr = [
        Math.floor(seconds % 60),
        Math.floor((seconds / 60) % 60),
        Math.floor((seconds / (60 * 60)) % 24),
        Math.floor(seconds % (60 * 60 * 24)),
    ]

    return `${arr.pop()} days ${arr.pop()} hours ${arr.pop()} minutes ${arr.pop()} seconds`;
}

const start = (dateInFuture) => {
    setInterval(function () {
        emmiter.emit('timerTick', [dateInFuture, this])
    }, 1000)
}

const [hour, day, month, year] = process.argv[2].split('-')
const dateInFuture = new Date(year, month - 1, day, hour)
if (isNaN(dateInFuture)) {
    console.error('argument is bad')
    process.exit(0)

}
start(dateInFuture);