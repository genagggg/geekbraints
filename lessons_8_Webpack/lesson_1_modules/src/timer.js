export function timerJS() {
    let timerBox = document.querySelector('#timer');
    let timerInputValue = document.querySelector('#inputTimer');
    let buttonStart = document.querySelector('#buttonTimerStart');
    let buttonStop = document.querySelector('#buttonTimerStop');
    let a;
    let myInterval;

    buttonStart.addEventListener('click', (event) => {
        a = Number(timerInputValue.value)
        console.log(a)
        function intervalFunc() {
            timerBox.innerHTML = a--;
            console.log(a, timerBox, timerInputValue,);

        }

        myInterval = setInterval(intervalFunc, 1000);

    })
    buttonStop.addEventListener('click', (event) => {
        clearInterval(myInterval);
    })

    //jjjjjjjjjj

}