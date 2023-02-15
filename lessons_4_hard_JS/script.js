// let firstName = 'Иван';
// let lastName = 'Иванов';
// let year = 1990;

// function getAge(year) {
//     return new Date().getFullYear() - year;
// }

// const FIO = `${firstName} ${lastName}, рождённый в ${year} году, ему ${getAge(year)} лет \n`;

// console.log(FIO);

// //console.log(FIO.indexOf('Иван')); // Индекс символа

// //console.log(FIO.endsWith('лет')) //true последняя строка

// console.log(FIO.repeat(5)) //Повторит строку сколько надо раз

//Стрелочные функции
// const sum = function (a) {
//     return a + 10;
// }

// const sum = a => a + 10;

// alert(sum(5)); 
// //forEach
// let arr = ['PHP', 'JS', 'JAVA', 'C++'];
// // arr.forEach((item, index) => {
// //     console.log(`${index + 1} ${item}`)
// // });

// // //filter
// // let filteredArr = arr.filter(item => {
// //     return item.length > 2;
// // })

// // filteredArr.forEach(item => {
// //     console.log(item)
// // })

// let arrLength = arr.map(item => item.length);
// console.log(arrLength);

// //Отличие стрелочных функций от простых.
// const box = {
//     position: 10,
//     color: 'red',
//     demo: function () {
//         let obj = this;
//         document.querySelector('button').addEventListener('click', function (event) {
//             console.log(this);
//             console.log(`Контайнер №${obj.position} имеет цвет ${obj.color}`);
//         })
//     }
// }

// box.demo();

// const box = {
//     position: 10,
//     color: 'red',
//     demo: function () {

//         document.querySelector('button').addEventListener('click', (event) => {
//             event.target.style.color = 'red'

//             console.log(this);

//             console.log(`Контайнер №${this.position} имеет цвет ${this.color}`);
//         })
//     }
// }

// box.demo();

//Деструктуризация

// let mas = ['Иван', 20];
// // let name = mas[0];
// // let age = mas[1];
// let [name, age] = mas;

//Деструктуризация обьекта
// let obj = {
//     firstName: 'Иван',
//     lastName: 'Иванов',
//     printrofessions: ['Програмист', 'DevOps']
// }

// let { name: firstName, lastName, professions: [p1, p2] } = obj;

//Деструктуризация функции как устроен хук UseState

// let info = year => {
//     let age = getAge(year);
//     return [age, 65 - age];//возраст и сколько до пенсии)))
// }

// let [age, leftWork] = info(1990);

// 8
// function f(a, b) {
//     console.log(arguments);
// }
// f(1, 2, 3, 4, 5);

//Операторы Rest Spred

// function f(a, b, ...c) {
//     console.log(c);
// }
// f(1, 2, 3, 4, 5);
//======================

// const number = [23, 45, 59, 32, 21, 58];
// Math.max(number)//не принимает массив, колекции он принимает набор чисел!!
// Math.max(23, 45, 59, 32, 21, 58)//вот так получится
// Math.max(...number)//Заработает))) Spread

//Клонирование свойств массива
// let arr1 = ['one', 'two'];
// let arr2 = ['first', ...arr1, 'second']

// const product = [
//     {
//         id: 1,
//         title: 'ноутбук',
//         price: 2000
//     },
//     {
//         id: 2,
//         title: 'Наушники',
//         price: 3000
//     },
//     {
//         id: 3,
//         title: 'Мышка',
//         price: 4000
//     },
//     {
//         id: 4,
//         title: 'Клавиатура',
//         price: 5000
//     }

// ]

// const renderProduct = (product) => {
//     return `<div>
//     <img>
//     <h3>${product.title}</h3>
//     <p>${product.price}</p>
//     </div>`
// }

// const renderPage = list => {
//     const productList = list.map(item => renderProduct(item))
//     document.querySelector('.content-container').innerHTML = productList;
// }


// renderPage(product);

class Product {
    constructor(name) {
        this.name = name
        this.state = { date: new Date() };

    }
    prodHi() {
        return this.name + ' hi'
    }
}
let prod1 = new Product('Petya')
console.log(prod1.state.date)