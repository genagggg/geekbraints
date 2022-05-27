/* Задача.
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа
*/

'use strict'

/**
 * Функция возвращает верный падеж для слова "рубль", в зависимости
 * от переданного числа.
 * @param {number} num количество рублей в виде числа.
 * @returns {string} слово "рубль" в правильном падеже.
 */
function getCase(num) {
    let beforeLastDigit = getDigitBeforeLastDigit(num);
    if (beforeLastDigit == 1) {
        return 'рублей';
    }
    num = String(num);
    let lastNumber = Number(num.charAt(num.length - 1));
    switch (lastNumber) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return 'рублей';
        case 1:
            return 'рубль';
        case 2:
        case 3:
        case 4:
            return 'рубля';
    }
}

/**
 * Функция возвращает предпоследнюю цифру числа, если она есть, иначе null.
 * @param {number} num 
 * @returns{(number|null)} 
 */
function getDigitBeforeLastDigit(num) {
    num = String(num);
    let digit = num.charAt(num.length - 2);
    if (digit !== '') {
        return Number(digit)
    }

}

let money = parseInt(prompt('Сколько денег вы хотите положить на счёт ?'));

alert(`Ваша сумма ${money} ${getCase(money)} успешно зачислена.`);