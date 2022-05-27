// Неявное приведение и слабая типизация
// ---------------------------------------

// console.log(10 + 'hello')

// console.log('10' + 'hello')

// console.log(3 + '8')

// console.log('10' / '5')

// --------------------------

// let a = 2
// let b = 6
// let sum = a + b
// alert('Сумма равна:' + sum)

// let a = '2'
// let b = '6'
// let sum = a * b
// alert('Сумма равна: ' + sum)
// ===============================================================

// 2. Приоритеты операторов

// console.log(2 + 2 * 8)
// ====================================================================

// 3. Оператор группировки

// console.log((2 + 2) * 8)
// ========================================================================

// 4. Ассоциативность операторов

// =====================================================================
// 5. Константы

// let myVar = 8
// myVar = 6
// alert(myVar)

// const myVar = 8
// myVar = 6
// alert(myVar)

// const numbers = [10, 8, 22]
// numbers[0] = 5
// alert(numbers)

// ===========================================================================

// 6. Динамическая типизация

// let myVar = 8
// myVar = 'hi'
// alert(myVar)

// ==============================================================================

// 7. Базовый ввод и вывод

// let name = prompt('Введите ваше имя')
// alert(name)

// ============================================================================

// 8. Литерал не литерал

// let num = prompt('введите число')
// let result = num * 10
// alert(result)

// 9. Совмещённые операторы

// let value = 25
// value += 10
// console.log(value)

// let value2 = 4
// value2 *= 2
// console.log(value2)

// let value3 = 'Hello'
// value3 += 'World'
// console.log(value3)
// =========================================================================
// 10. Шаблонные литералы

// let name = 'John Doe'
// let age = 25
// console.log('My name is ' + name + ' I\'am ' + age + '.')
// console.log(`Myname is ${name} I'am ${age}`)
// ======================================================================
// 11. Строгий режим

// a = 'hello'
// alert(a)

// 'use strict'
// a = 'hello'
// alert(a)
// ========================================================================
// 12. null и undefined
// let message = null

// message = 'hello world'

// let a
// console.log(a) //undefined

// let n = null
// let u
// console.log(`В переменной n значение ${n}`)
// console.log(`В переменной u значение ${u}`)
// =============================================================================

// 13. Оператор typeof

// console.log(typeof 54)//number
// console.log(typeof 'string')//string
// console.log(typeof false)//bolean

// let b
// console.log(typeof b)//undefined
// console.log(typeof null)//object
// console.log(typeof function () { })//function
// ============================================================================

// 14.Debugger
// const a = 1
// const b = 3
// const c = a + b
// debugger
// =============================================================================

// 15. Польза от переменных

// let phone = 899
// let phonesSold = 410
// let tv = 1028
// let tvSold = 100
// let tablet = 450
// let tabletsSold = 900

// let income = (phone * phonesSold) + (tv * tvSold) + (tablet * tabletsSold)
// alert('Магазин заработал: ' + income)
// ==============================================================================

// 16. Копируем из переменной в другую переменную 
// let sum = 3 + 2

// let sum2 = sum

// alert(sum2)
// ==============================================================================
// 17. Унарный плюс
// let num1 = prompt('Введите первое число')
// let num2 = prompt('Введите второе число')
// alert(num1 + num2)

// let num1 = +prompt('Введите первое число')
// let num2 = +prompt('Введите второе число')
// alert(num1 + num2)

// let num1 = +'7'
// let num2 = +'9'
// console.log(num1 + num2)
// ===================================================================================
// 18. NaN 
// let number1 = 2
// let number2 = 'hello'
// let result = number1 * number2
// console.log(result)

// 19. Положительная и отрицательная бесконечность 
// let pos = 4 / 0
// console.log(pos)
// let neg = 4 / -0
// console.log(neg)

// 20. Унарный минус 
// let value = 6
// value = -value
// console.log(value)
// let num = -prompt('Введите число')
// console.log(num)

// 21. Типизация 


