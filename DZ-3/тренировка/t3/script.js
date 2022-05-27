// pop

// 'use strict'

// let arr = ['hello', 'world', '!'];
// /*Метод pop() удаляет последний элемент из массива и возвращает его значение.*/

// let last = arr.pop();

// console.log(last);//'!'
// console.log(arr);//['hello', 'world']
//===============================================================

//push
// 'use strict'

// let arr = [2, 9];
// /* Метод push() добавляет один или более элементов в конец массива и возвращает новую длинну массива.*/

// let newLength = arr.push(14);
// console.log(newLength);//3
// console.log(arr);//[2,9,14]
//===============================================================

//shift

// 'use strict'

// let images = ['1.jpg', '2.jpg', '3.jpg'];
// /*Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длинну массива.*/

// let firstElem = images.shift();
// console.log(firstElem);// '1.jpg'
// console.log(images); //['2.jpg', '3.jpg']
//==============================================================

//unshift

// 'use strict'

// let usersId = [123155, 879588, 3230000];
// /*Метод unshift() добавляет один и более элементов в начало массива и возвращает новую длинну массива. */

// let newArrLengs = usersId.unshift(111111);

// console.log(newArrLengs);// 4
// console.log(usersId);//[111111,123155, 879588, 3230000]

//=============================================================

//filter()

// 'use strict'

// /* Метод filter() создаёт новый массив со всеми элементами,
// прошедшими проверку, задаваемую в передаваемой функции.*/

// let clients = ['Василий', 'Семён', 'Екатерина', 'Владимир', 'Валентина'];

// let vLetterClients = clients.filter(function (client) {
//     return client.charAt(0) == 'В';
// });

// console.log(vLetterClients);

// let names = ['Олег', 'Оксана', 'Виктор', 'Антон'];
// let getOname = names.filter(function (name) {
//     return name.charAt(0) == 'О';
// })

// console.log(getOname);
//================================================================================

//find()

// 'use strict'

// /* Метод find() возвращает значение первого найденного
//  в массиве элемента, которое удовлетворяет условию
//   переданному в callback функции. В противном случае возвращается undefined*/

// let prices = [53, 107, 81, 45, 35];
// let lessThan50 = prices.find(function (element) {
//     return element < 50;
// })

// console.log(lessThan50);//45
//================================================================================

// //includes()

// 'use strict'

// /*Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false/.0 */

// let usersId = [329, 235235, 95027, 400];
// let isOnline = usersId.includes(400);

// console.log(isOnline);//true
//================================================================================
//Наидите максимальное число в массиве, используя метод forEach

// 'use strict'

// let numbers = [3, 700, 304, 29, 1073, 142, 6, 7, 9, 45];
// let maxNumber = numbers[0];

// numbers.forEach(function (number) {
//     if (number > maxNumber) {
//         maxNumber = number;
//     }
// })

// console.log(maxNumber);
//=================================================================================
//map числа увеличенные на 10

'use strict'

// const nums = [4, 1093, 38, 8, 75];

// const numsPlus10 = nums.map(function (num) {
//     return num + 10;
// })

// console.log(numsPlus10);
// console.log(numsPlus10[0])

// let nums = [12, 13, 15, 17, 19];

// let resolveNum = nums.map(function (num) {
//     return num * 19;
// })

// console.log(resolveNum);

// let nums = [10, 13, 21, 45, 8];
// const modify = [];
// nums.forEach(function (num) {
//     modify.push(num + 10);
// })

// console.log(modify);

// let nums = [1, 5, 4, 5, 6, 7, 8, 6];
// let modyNum = nums.map(function (num) {
//     return num * 3;
// })

// console.log(modyNum);

// ==================================================================================

//map appeal

// const users = [
//     {
//         surname: 'Campbell',
//         gender: 'male',
//     },
//     {
//         surname: 'Blythe',
//         gender: 'famale',
//     },
//     {
//         surname: 'Morton',
//         gender: 'male',
//     },
//     {
//         surname: 'Adler',
//         gender: 'female',
//     },
//     {
//         surname: 'Cruz',
//         gender: 'male',
//     },
// ];

// let userdata1 = {
//     name: 'alex',
//     age: 20,
// }

// let result = Object.assign({}, userdata1, { age: 30 }, { id: 12312, restered: true });

// console.log(result);

// const userWithAppeal = users.map(function (user) {
//     if (user.gender === 'male') {
//         return Object.assign({}, user, { appeal: 'Mr' });
//     }
//     return Object.assign({}, user, { appeal: 'Mrs' });
// })

// console.log(users);
// console.log(userWithAppeal);
//=========================================================================================
// slice
/*С помощью slice скопируйте месяцы с апреля по октябрь включительно.*/
// let months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June', 'July', 'August', 'September', 'October', 'November', 'December'
// ];

// let newMonths = months.slice(3, 10);

// console.log(newMonths);
//=============================================================================
//Работа методов массива вместе
//Сделай каждое слово в str1 с заглавной буквы
// const str1 = 'lorem impsum dolor sit amet consectetur';
// const arrayOfWords = str1.split(' ');
// let result = arrayOfWords.map(function (word) {
//     let letters = word.split('');
//     letters[0] = letters[0].toLocaleUpperCase();
//     return letters.join('');
// })
// result = result.join(' ');
// console.log(result);
//==============================================================================
//Пересечения

// const arr1 = ['jane', 'alex', 'ivan', 'john', 'sam', 'joel', 'max'];
// const arr2 = ['evgeniy', 'alex', 'peth', 'john', 'vasiliy', 'joel', 'semen'];

// const intersection = arr1.filter(function (name) {
//     return arr2.includes(name);
// })
// console.log(intersection);
//==============================================================================
//Как работает метод sort()

// let values = ['D', 'B', 'A', 'C'];
// values.sort();
// console.log(values);

// let values = ['one', 'left', 'right', 'orenge'];
// values.sort(function (word1, word2) {
//     if (word1.length > word2) {
//         return -1;
//     }
//     if (word2.length > word1.length) {
//         return 1;
//     }
//     return 0;
// })

// console.log(values);
//===============================================================================

// //как работает метод filter()

// let users = [
//     {
//         id: 1,
//         registered: true,
//         name: 'Alex',
//     },
//     {
//         id: 2,
//         registered: false,
//         name: 'Bob',
//     },
//     {
//         id: 3,
//         registered: true,
//         name: 'Anna',
//     },
//     {
//         id: 4,
//         registered: false,
//         name: 'Alice',
//     },

// ]

// let registered = users.filter(function (user) {
//     return user.registered && user.name[0] === 'A';
// });

// console.log(registered);

//===============================================================================

//doWhile

// let i = 0;
// do {
//     console.log('Счётчик равен: ' + i)
//     i++;
// } while (i < -1)
//==============================================================================

//Передача по ссылке
// //Присваивание либо копирование по значению.
// let user1 = 'alex'
// let user2 = user1
// user1 = 'join'
// console.log(user1, user2)

//Копирование или присваивание по ссылке

// let cars = ['mercedes', 'toyota', 'bmw']
// let autos = cars
// autos[0] = 'honda'

//Передача в функцию по значению

// let name = 'alex'
// function changeName(value) {
//     value = 'john'
// }
// changeName(name)
// console.log(name)

// let story = ['жили', 'у', 'бабуси', 'два', 'весёлых', 'гуся']
// function changeQuantity(arr) {
//     arr[3] = 'три'
// }
// changeQuantity(story)
// console.log(story)
//==================================================

//Смотрим прототип обьекта

// const myArr = [9, 3, 4]

// console.log(myArr.__proto__)

// console.log(Object.getPrototypeOf(myArr))

// const date = new Date()

// console.log(date.__proto__)
// console.log(date.getFullYear())
// console.log(date.getTime())
//========================================================

//forin

// const user = {
//     id: 3,
//     age: 25,
//     name: 'John',
// }

// for (let property in user) {
//     console.log(property, ':', user[property])

// }
//=======================================================

//перечислимые и не перечислимые свойства

// let arr = ['hello', 'world']
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// console.log(arr.length)
// console.log(arr.propertyIsEnumerable('length'))
//========================================================

//Посмотреть собственные свойства обьекта

//Посмотреть все свойства обьекта и его прототипов!

// let array = [13, 1235, 15, 123, 51];

//===========================================================
//Цикл forOf

// let values = ['Один', 'Два', 'Три']

// for (let value of values) {
//     console.log(value)
// }

//Игра быки и коровы.

// function getRandomNumberAsArray() {
//     let generated = String(Math.random() * 100000000000000000)
//     let result = []
//     for (let value of generated) {
//         if (!result.includes(value)) {
//             result.push(value)
//         }
//         if (result.length == 4) {
//             return result
//         }
//     }
// }

// function startGame() {
//     let riddle = getRandomNumberAsArray()
//     while (true) {
//         let answer = prompt('Угадайте 4-х значное число').split('')
//         let result = getBullsAndCowCount(riddle, answer)
//         console.log(`Ваш ответ: ${answer}, быков: ${result.bullsCount}, коров: ${result.cowsCount} \n`)
//         if (riddle.toString() === answer.toString()) {
//             console.log('Вы победили')
//             break
//         }
//     }
//     console.log('Загадка' + riddle)
// }

// function getBullsAndCowCount(riddle, answer) {
//     let bullsCount = getBullsCount(riddle, answer)
//     let cowsCount = getCowsCount(riddle, answer)
//     return {
//         'bullsCount': bullsCount,
//         'cowsCount': cowsCount - bullsCount,
//     }
// }

// function getBullsCount(riddle, answer) {
//     let count = 0
//     for (let i = 0; i < riddle.length; i++) {
//         if (riddle[i] == answer[i]) {
//             count++
//         }
//     }
//     return count
// }

// function getCowsCount(riddle, answer) {
//     let count = 0
//     for (let i = 0; i < riddle.length; i++) {
//         if (riddle[i] == answer[i]) {
//             count++
//         }
//     }
//     return count
// }
// startGame()

//Остаток от деления

// console.log(5 % 2)



