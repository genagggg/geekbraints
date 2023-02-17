export function timerJS() {

    let timerBox = document.querySelector('#timer');
    let timerInputValue = document.querySelector('#inputTimer');


    let buttonTime = document.querySelector('#buttonTimer');
    buttonTime.addEventListener('click', (event) => {
        let a = Number(timerInputValue.value);
        console.log(a)
        setInterval(function () {
            timerBox.innerHTML = a;
            console.log(a++, timerBox, timerInputValue,);
        }, 1000)
    })
    console.log(timerInputValue.value);


}