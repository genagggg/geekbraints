// Простая функция

// 'use strict'

// function sayHello() {
//     alert('hello')
// }

// sayHello()
// =========================================================

// Без параметров 

// new Date().getDay()

// new Date().getFullYear()

// function showDay() {
//     let dayNum = new Date().getDay()
//     let day = ''
//     switch (dayNum) {
//         case 1:
//             day = 'Понедельник'
//             break
//         case 2:
//             day = 'Вторник'
//             break
//         case 3:
//             day = 'Среда'
//             break
//         case 4:
//             day = 'Четверг'
//             break
//         case 5:
//             day = 'Пятница'
//             break
//         case 6:
//             day = 'Суббота'
//             break
//         case 0:
//             day = 'Воскресенье'
//             break
//         default:
//             day = false
//     }
//     alert(day)
// }

// showDay()
// =========================================================================
// Несколько функций 
// Конвертация валют

/**
//  * функция округляет число до сотых.
//  * @param {number} number число для округления.
//  * @returns {number}
//  */
// function roundToHundredths(number) {
//     return parseInt(number * 100) / 100
// }

// // *Функция конвертирует рубли в другую валюту.Функция
// // * @param {number}roubles величина в рублях.
// // * @param {string} currency поддерживаются значения "dollar" и 'euro'. 
// // * @returns {number}

// function convertCurrency(roubles, currency) {
//     let currencyCost = 0
//     switch (currency) {
//         case 'dollar':
//             currencyCost = 66
//             break
//         case 'euro':
//             currencyCost = 75
//             break
// default: throw new Error('Не верная валюта: ' + currency)
//     }
//     let result = roundToHundredths(roubles / currencyCost)
//     return result       //.toFixed(2)
// }

// let inDollars = convertCurrency(100, 'dollar')
// console.log('Ваша сумма в долларах: ' + inDollars)
// ============================================================================

// Параметры по умолчанию

// 'use strict'
// function setDiscount(discount = 10) {
//     if (discount > 30) {
//         return 30
//     }
//     return discount
// }

// let order1Discount = setDiscount(15)
// alert(order1Discount)

// let order2Discount = setDiscount()
// alert(order2Discount)

// =================================================================================

// // function declaration

// //можно вызвать до обьявления

// console.log(getSquare(2))

// /**
//  * Функция возводит аргумент в квадрат.
//  * @param {number} x
//  * @return {number}
//  *  */

// function getSquare(x) {
//     return x * x
// }

// ===============================================================================================
// // function expression анонимная функция нельзя вызывать сзаранее!
// console.log(getSquare) //Упадёт ошибка!

// let getSquare = function (x) {
//     return x * x
// }

// console.log(getSquare(3))


// --------------------------------------------------------------------------
// let clickHandler = function () {
//     alert('hello')
// }

// function clickHandler() {
//     alert('hello')
// }

// let button = document.querySelector('button')
// button.addEventListener('click', clickHandler)
// ============================================================================

// Не переданный аргумент
// 'use strict'
// function getName(name) {
//     console.log('Hello ' + name) //name undefined
// }

// getName()
// =====================================================================

// Если параметров больше

// function sayHello(name) {
//     console.log('hello' + name)
//     console.log(arguments)
// }

// sayHello('Петя', 'Вася', 'Катя')

// function sayHello(name, ...other) {
//     console.log('hello' + name)
//     console.log(other)
// }

// sayHello('Петя', 'Вася', 'Катя')
// ===========================================================================

// Возврат результата

// function getDay() {
//     let dayNum = new Date().getDay()
//     let day = ''

//     switch (dayNum) {
//         case 4:
//             day = 'Четверг'
//             break
//         case 5:
//             day = 'Пятница'
//             break
//     }
//     return day
// }

// let b = getDay()

// // let result = getDay()

// // alert(result)
// =============================================================================
// Несколько ретурнов

// function getDay() {
//     let dayNum = new Date().getDay()

//     switch (dayNum) {
//         case 4:
//             return 'Четверг'
//         case 5:
//             return 'Пятница'
//     }
// }

// let day = getDay()

// alert(day)

// ==================================================================================

// Параметры и прерывания

// function sum(a, b) {
//     return a + b
// }

// let result = sum(8, 9)
// alert(result)
// // alert(sum(4, 9))

// function sum(a, b) {
//     return a + b
//alert(b)
// }

// let result = sum(8, 9)
// alert(result)
// // alert(sum(4, 9))

// /**
//  * @param{*}num1
//  * @param{*}num2
//  */
// ----------------------------------------------------------------------
// Встроенная документация
// /**
//  * Функция складывает два числа
//  * @param {number} num1 пояснение 
//  * @param {number} num2 пояснение если оно требуется 
//  * @returns {number} пояснение
//  */
// function sum(num1, num2) {
//     return num1 + num2
// }
// alert(sum(9, 18))
// ========================================================================

// Пишите ветвление плоско

// 'use strict'

/**
 *
 * @param {number} num это число которое надо возвести в квадрат
 * @returns {number} вернёт квадрат параметра num
 */
// function getSquare(num) {
//     if (num === '') {
//         throw new Error('Вы ничего не ввели !!!')
//     }
//     if (num === null) {
//         throw new Error('Вы нажали отмена !!!')
//     }
//     num = Number(num)
//     if (isNaN(num)) {
//         throw new Error('Вы вывели некоректное значение !!!')
//     }

//     return num * num
// }

// let myNum = prompt('Введите число')

// alert(getSquare(myNum))
// ----------------------------------------------------------------------------------
// function getSquare(num) {
//     if (num === '') {
//         alert('Вы ничего не ввели !!!')
//         return
//     }
//     if (num === null) {
//         alert('Вы нажали отмена !!!')
//         return
//     }
//     num = Number(num)
//     if (isNaN(num)) {
//         alert('Вы вывели некоректное значение !!!')
//         return
//     }

//     return num * num
// }

// let myNum = prompt('Введите число')
// let result = getSquare(myNum)
// if (result !== undefined) {
//     alert(result)
// }
// ===================================================================================

// Стрелочные функции

// 'use strict'

// //function declaration
// function addition(a, b) {
//     return a + b
// }

// // -----------------------------------------

// //function expression

// const show = function (a, b) {
//     console.log(a, b)
// }

//без параметров и одна команда в функции
// const sayHello = () => console.log('hello')

//Без параметров и несколько команд в функции
// const func1 = () => {
//     const a = 5
//     console.log(a)
// }
// func1()

// //Один параметр
// const oneParam = num => console.log(num)

//тоже самое, но в формате function declaration

// 

// //Несколько параметров + фигурные скобки
// /**
//  * 
//  * @param {number} num1 первый параметр
//  * @param {number} num2 второй параметр
//  */
// const someParams = (num1, num2) => {
//     const a = num1 + num2
//     console.log(a)
// }
// someParams(9, 11)

// //Несколько параметров + одна команда

// // const paramCommand = (num1, num2) => num1 + num2
// // paramCommand(34, 37)
// // ==================================================================================
// //Рекурсия
// 'use strict'

// const riddle = parseInt(Math.random() * 100)

// function guess(num) {
//     let answer = parseInt(prompt('Угадайте число от 0 до 100'))
//     if (answer > num) {
//         alert('Ваше число слишком большое')
//     }
//     else if (answer < num) {
//         alert('Ваше число слишком маленькое')
//     }
//     else if (answer == num) {
//         alert('Вы угадали')
//         return
//     }
//     else {
//         alert('необходимо ввести число')
//     }
//     guess(num)
// }

// guess(riddle)

//Инкремент декремент

// 'use strict'

// let a = 0
// // let result = a++
// let result = ++a
// console.log(result)
// ==================================================================================
//Программа генерации паролей

// 'use strict'

// let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=@'
// let password = ''

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min
// }

// function generate(passLength) {
//     let symbolPosition = getRandomInt(0, 75)
//     password += symbols.charAt(symbolPosition)
//     passLength--
//     if (passLength != 0) {
//         generate(passLength)
//     }
// }

// function askPassLength() {
//     return parseInt(prompt('Введите длинну пароля'))
// }

// generate(askPassLength())

// alert(`Ваш пароль: ${password}`)
// ============================================================

//Конструкция console trace

// 'use strict'

// function hello() {
//     alert('Работает функция hello')
// }

// function world() {
//     alert('Работает функция world')
//     console.trace()
// // }
// ппп
// // function one() {
// //     hello()
// //     world()
// // }
// // one()
// // ============================================================
// //Поднятие переменных (hosting)
// ппппп
// // console.log(a)// Error
// // ---------------------------------------------------------------
// // console.log(a)//undefined
// // var a = 'hello'
// // console.log(a)//hello

// console.log(a)
// let a = 'hello'

// function hello() {
//     console.log(a)

//     var a = 'test'
// }

// hello()

// const a
// let b
// console.lo(a)
// a()
// function a() {
//     alert('Working')
// }

//Перекрытие переменной

// 'use strict'
// let num = 10
// function showNum(num) {
//     alert(num)
// }
// showNum(20)

// //Логические операторы
// 'use strict'
// const password = prompt('Введите пароль, где есть английские буквы и цифры, и длинна больше 5 символов')
// const lengthMore5 = password.length > 5
// const digitsPresented = /\d+/gm.test(password)
// const lettersPresented = /[a-zA-Z]+/gm.test(password)

// if (lengthMore5 && digitsPresented && lettersPresented) {
//     alert('Ваш пароль проходит !')
// }
// else {
//     alert('Ваш пароль не подходит !')
// }

//Сравнение null и undefined

// 'use strict'

// let n = null;
// let u;

// console.log(n == u)//true
// console.log(n === u)//false

//auto semicolon insertion

//Область видимости noKeyword

// a = 9
// console.log(a)
// console.log(window.a)

// function hello() {
//     a = 3
// }
// hello()
// console.log(a)

// if (true) {
//     a = 7
// }
// console.log(a)
// console.log(window.a)
//Ключевое слово var

// var a = 4;
// console.log(a);
// console.log(window.a)

// function hi() {
//     var a = 8;
//     console.log(a)
// }
// hi()
// //console.log(a)
// console.log(window.a)

// if (true) {
//     var a = 9;
// }

// console.log(a)
// console.log(window.a)

// //Область видимости let
// let a = 7;
// console.log(a)
// console.log(window.a)

// if (true) {
//     let a = 2;
//     console.log(a)
// }

// console.log(a)
// console.log(window.a)

// function redy() {
//     let a = 9;
//     const b = 10;
//     console.log(a, b)
// }
// redy()

// console.log(a, b)
// =====================================================================

// js Doc

// /**
//  * Функция складывает a , b
//  * @param {number} a входящий параметр
//  * @param {number} b входящий параметр
//  * @returns {number} Возвращает сумму a, b
//  */
// function animal(a, b) {
//     return a + b
// }

//Рекурсия

// function rek(n) {
//     if (n === 1) {
//         return n;
//     }
//     else {
//         return n * rek(n - 1)
//     }
// }

// console.log(rek(10))

// console.log(10 > 0 ? true : 'hi' == 'hi' ? false : true)