
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

class Goods {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        return this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 }

        ]
    }
}

let list = new GoodsList();
console.log(list.fetchGoods())