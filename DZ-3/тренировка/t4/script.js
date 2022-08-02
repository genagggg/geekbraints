'use strict';
//Сравнение по значению
// let str1 = 'hello';
// let str2 = 'hello';
// console.log(str1 === str2);//true

// let bool1 = true;
// let bool2 = true;
// console.log(bool1 === bool2);//true

// //Сравнение по ссылке
// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// console.log(array1 === array2);//false

// let obj1 = { name: 'Gena' };
// // let obj2 = { name: 'Jak' };

// // obj2.name = obj1.name;
// // console.log(obj2.name === obj1.name)

// for (let key in obj1) {
//     console.log(obj1[key])
// }
//==============================================================
//Оператор instaceOf

// function User() {

// }

// const user1 = new User();

// console.log(user1 instanceof User);//true
//==============================================================
//Типы на ES5 и ES6

// function A(param1) {
//     this.param1 = param1;
// }

// A.prototype.show = function () {
//     alert(this.param1);
// }

// let obj1 = new A('text');
// obj1.show()

// function keyPass() {
//     console.log('{')
//     for (let key in obj1) {

//         console.log(key, ':', obj1[key])
//     }
//     console.log('}')
// };

// keyPass();
//====================================================================================

// function A(param1) {
//     this.param1 = param1
// }
// A.prototype.show = function () {
//     alert(this.param1)
// }

// let obj1 = new A('text')

// obj1.show()

// class A {
//     constructor(param1) {
//         this.param1 = param1
//     }
//     show() {
//         alert(this.param1)
//     }
// }

// let obj1 = new A('text')

// obj1.show()

// for (let key in obj1) {
//     console.log(key, ':', obj1[key])
// }
// console.log(obj1 instanceof A)

//=================================================
// Механика наследования

// function A(param1) {
//     this.param1 = param1
// }

// A.prototype.show = function () {
//     alert(this.param1)
// }

// function B(param1, param2) {
//     A.call(this, param1)
//     this.param2 = param2
// }

// B.prototype = Object.create(A.prototype)
// B.prototype.constructor = B


// B.prototype.show2 = function () {
//     console.log(this.param2)
// }

// let bObj = new B('text1', 'text2')

// bObj.show()
// bObj.show2()
// ------------------------------------------------------------

// class A {
//     constructor(param1) {
//         this.param1 = param1
//     }

//     show() {
//         alert(this.param1)
//     }
// }

// class B extends A {
//     constructor(param1, param2) {
//         super(param1)
//         this.param2 = param2
//     }

//     show2() {
//         console.log(this.param2)
//     }
// }

// let bObj = new B('text1', 'text2')

// bObj.show()

// bObj.show2()

// class Person {
//     name = 'John';
//     age = 30;
// }
// const person1 = new Person();
// console.log(person1);
//==================================================

// this отсутствует в обычной функции

// function getCar(color) {

//     return color
// }

// const car1 = getCar('yellow')
// console.log(car1)
//===========================================================
// getters

// class User {
//     constructor(name, surname, num1, num2) {
//         this.name = name;
//         this.surname = surname
//         this.num1 = num1
//         this.num2 = num2
//     }

//     get fullName() {
//         return this.name + ' ' + this.surname
//     }
//     get sumNum() {
//         return this.num1 + this.num2
//     }
// }

// let user1 = new User('Nikolay', 'Bobrov', 9, 11)
// console.log(user1.name)
// console.log(user1.surname)
// console.log(user1.fullName)
// console.log(user1.sumNum)
//===============================================================
//setter

// class User {
//     url = null

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     /**
//      * @see https://regex101.com/r/yYScrb/1
//      */

//     set vkUrl(url) {
//         if (/^https?.*/gm.test(url)) {
//             this.url = url
//         }
//         else {
//             throw new Error('Passed invalid url value:' + url)
//         }
//     }
// }

// const user1 = new User('Alice', 25)
// user1.vkUrl = 'https://vk.com/test'
// user1.vkUrl = 'hello world'

//===================================================================
//Возможные ошибки с getters setters

// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     get fullName() {
//         return this.name + ' ' + this.surname;
//     }
// }

// const user1 = new User('John', 'Doe')
// user1.fullName = 'Vitaliy Bobrov'
// -------------------------------------------

// class User {
//     constructor(userName) {
//         this.name = userName;
//     }

//     set name(userName) {
//         this.name = userName
//     }
// }
// const user1 = new User('Alex')
//==================================================

//Статические свойства и методы

// function User(name) {
//     this.name = name
// }
// User.nameMaxLength = 20
// User.isNameLengthCorrect = function () {
//     if (name.length <= User.nameMaxLength) {
//         console.log('Name is correct.');
//     }
//     else {
//         console.log('Name is incorrect.')
//     }
// }
// const user1 = new User('Johnbbbnnnnmmmmmmmmjjukjuukjjjjuuuuu')
// User.isNameLengthCorrect(user1.name)
// -------------------------------------------------

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     static nameMaxLength = 20

//     static isNameLengthCorrect(name) {
//         if (name.length <= User.nameMaxLength) {
//             console.log('Name is correct.')
//         }
//         else {
//             console.log('Name is incorrect.')
//         }
//     }
// }
// const user1 = new User('Johnbbbnnnnmmmmmmmmjjukjuukjjjjuuuuu')
// User.isNameLengthCorrect(user1.name)
//--------------------------------------------------------------------

// function Comment(id, userName, text) {
//     this.id = id
//     this.userName = userName
//     this.text = text
// }

// const comm1 = new Comment(123, 'Alex', 'lorem ipsum')
// const comm2 = new Comment(124, 'Al', 'lorem ipsum2')
// const comm1 = {
//     id: 123,
//     userName: 'Alex',
//     text: 'lorem ipsum',
// }