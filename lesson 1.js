//1. Дан код: Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - Инкрементировали a (теперь 2), положили в с
d = b++; alert(d);           // 1 - Положили b(1) в d(2), инкрементировали b(2)
c = (2 + ++a); alert(c);     // 5 - 2 + 3 = 5. Инкремент а(3)
d = (2 + b++); alert(d);     // 4 - 2 + 2 = 4. После, инкрементировали b(3)
alert(a);                    // 3 - Изначально a = 1. Инкрементировали 2 раза: ++a; ++a
alert(b);                    // 3 - Изначально b = 1. Инкрементировали 2 раза: b++; b++;

//------------------------------------------------------------------------------

//2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2);
alert('x = 1 + (2 *= 2) = 1 + (2 * 2), x будет равен - 5');

//------------------------------------------------------------------------------

//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
//Затем написать скрипт, который работает по следующему принципу:
//если a и b положительные, вывести их разность;
//если а и b отрицательные, вывести их произведение;
//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/

var a = parseInt(prompt('Введите число "a"'));
var b = parseInt(prompt('Введите число "b"'));
var answer;
if (a >= 0 && b >= 0) {
    answer = a - b;
    alert(`Разность данных чисел равна:  ${answer}`);
} else if (a < 0 && b < 0) {
    answer = a * b;
    alert(`Произведение данных чисел равно:  ${answer}`);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    answer = a + b;
    alert(`Сумма данных чисел равна:  ${answer}`);
}

//------------------------------------------------------------------------------

//4. Присвоить переменной а значение в промежутке [0..15]. 
//С помощью оператора switch организовать вывод чисел от a до 15.*/

var num = Number(prompt("Введите число в диапозоне от 0 до 15"));
switch (num) {
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
        break;
    default:
        console.log('Введите целое число в интервале от 0 до 15');
}

//------------------------------------------------------------------------------

//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
//Обязательно использовать оператор return.*/
'use strict';
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

var a = Math.round(Math.random() * 100);
var b = Math.round(Math.random() * 100);
console.log(`a = ${a}\t\tb = ${b}`);
console.log(`a + b = ${add(a, b)}`);
console.log(`a - b = ${sub(a, b)}`);
console.log(`a * b = ${mul(a, b)}`);
console.log(`a / b = ${div(a, b)}`);

//------------------------------------------------------------------------------

//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций 
//(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
'use strict';
var a = Number(prompt("Введите первое число "));
var b = Number(prompt("Введите второе число "));

function addition(a, b) {
    return (a + b);
}

function subtraction(a, b) {
    return (a - b);
}

function multiplication(a, b) {
    return (a * b);
}

function division(a, b) {
    return (a / b);
}

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            alert("Неизвестная операция " + oper);
            return "?";
    }
}

let oper = prompt("Введите математическую операцию ( + - * / ):")

console.log(`${a} ${oper} ${b} = `, mathOperation(a, b, oper));

