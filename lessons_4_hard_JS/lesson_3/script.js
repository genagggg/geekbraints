
// class Person {
//     constructor(fio, age, salary, id) {
//         this.fio = fio;
//         this.age = age;
//         this.salsry = salary;
//         this.id = id;
//     }

//     getInfo() {
//         return `Сщтруднику ${this.fio} ${this.age} лет. Его оклад ${this.salsry}`;
//     }

//     getManWithMaxSalary(men) {
//         let manMax = men[0];
//         for (let i = 1; i < men.length; i++) {
//             if (manMax.salsry < men[i].salary) {
//                 manMax = men[i]
//             }
//         }
//         return manMax;
//     }
// }

// const man1 = new Person("Иванов", 30, 60000, 1)
// const man2 = new Person("Петров", 30, 60000, 1)
// const man3 = new Person("Сидоров", 30, 60000, 1)

// let office = [man1, man2, man3];
// office.forEach(man => console.log(man.getInfo()));

// const manMax = this.getManWithMaxSalary(office);
// console.log(`Сотрудник ${manMax.fio} имеет максимальный оклад`)
//===================================================================

// class Goods {
//     constructor(title, price) {
//         this.title = title;
//         this.price = price;
//     }
//     render() {
//         return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
//     }
// }

// class GoodsList {
//     constructor() {
//         this.goods = [];
//     }

//     fetchGoods() {
//         return this.goods = [
//             { title: 'Shirt', price: 150 },
//             { title: 'Socks', price: 50 },
//             { title: 'Jacket', price: 350 },
//             { title: 'Shoes', price: 250 }

//         ]
//     }
// }

// let list = new GoodsList();
// console.log(list.fetchGoods())

//========================================
//Парсинг JSON в обьект js
// let userJson = '{"name": "Иван","age": "23","isAdmin": true}';

// let user = JSON.parse(userJson);

// //console.log(user);

// user.dateCreated = '2022-08-08';
// user.address = {
//     city: 'Москва',
//     postalCode: '23422423'
// }

// let userStr = JSON.stringify(user, ['name', 'age'])
// console.log(userStr)

// //Конвертируем обратно в строку JSON

// let userJson = '{"name":"Артур", "age":32, "isAdmin": true}';
// user = JSON.parse(userJson);

// user.city = "Bryansc";
// user.birthYear = 1990;

// let userJs = JSON.stringify(user, ["name", "age"]);
// console.log(userJs)

// let a = setTimeout(function () {
//     console.log('hi everybody')
// }, 4000)

// console.log(a)

// const getAnswer = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log("setTime begining");
//         }, 3000)

//     })
// }

// getAnswer()

// const a = (b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (b) {
//                 resolve(b + 10);
//             }
//             else {
//                 reject('error');
//             }
//         }, 3000)
//     })
// }

// a(78).then(x => {
//     console.log(x)
// }
// );
//===================================
//GET запросы на сервер.

fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(data => {
        return data.json()
    }).then(x => {
        return x.Valute.USD;
    }).then(usd => {
        for (y in usd) {
            document.querySelector('.content').insertAdjacentHTML('beforebegin', y + '  ' + usd[y] + `<br>`)
        }
    })
