//1. Написать функцию, преобразующую число в объект.
//Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
//в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
//Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
//Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

/*function Num(src) {
    var keys = 'единицы десятки сотни'.split(' ');
    var src = (src + '') || '0';
    var num = src.split('');
    for (var i = keys.length, ln = num.length; i--;) {
        this[keys[i]] = (+num[ln - 1 - i]) || 0;
    };
};
console.log(new Num(255));
console.log(new Num(785));
console.log(new Num(638));*/

//------------------------------------------------------------------------------------------------------------

//2.Продолжить работу с интернет-магазином:
//2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//2.2. Реализуйте такие объекты.
//2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

class Product {
    constructor(id, name, price, currency) {
        this.id = id
        this.name = name
        this.price = price
        this.currency = currency
    }
}

class Cart {
    constructor() {
        this.products = []
    }
    addProduct(product, count) {
        if (product instanceof Product && product && count > 0) {
            let tmp = { ...product }
            tmp.count = count
            if (this.products.find(item => item.id === product.id)) {
                this.products.find(item => item.id === product.id).count += count
            }
            else {
                this.products.push(tmp)
            }
        }
    }
    getSum() {
        let sum = 0
        this.products.forEach(item =>
            sum += item.price * item.count)
        return sum
    }
}

let помидоры = new Product(1, 'Помидоры', 250, 'RUB',)
let хлеб = new Product(2, 'Хлеб', 50, 'RUB',)
let мясо = new Product(3, 'Мясо', 720, 'RUB',)
let шоколад = new Product(4, 'Шоколад', 130, 'RUB',)

let cart1 = new Cart()

cart1.addProduct(шоколад, 3)
cart1.addProduct(мясо, 1)

console.log(cart1.getSum())
