//1. Создать функцию, генерирующую шахматную доску.
//При этом можно использовать любые html-теги по своему желанию. 
//Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
//Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

function draw() {
    var table = document.createElement('table');
    var flag = true;

    var trr = document.createElement('tr');
    var arr = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    //генерим ячейки
    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');

        //создаем ячейку для цифр
        var tdd = document.createElement('td');
        tdd.style.width = '50px';
        tdd.style.height = '50px';
        tdd.innerHTML = 8 - i;
        tr.appendChild(tdd);

        for (var j = 0; j < 8; j++) {

            if (j == 0)
                flag = !flag;

            var td = document.createElement('td');

            td.style.width = '50px';
            td.style.height = '50px';
            if (flag) {
                td.style.background = 'black';
            } else
                td.style.background = 'white';

            tr.appendChild(td);
            flag = !flag;
        }
        table.appendChild(tr);
    }

    //генерим буквы
    for (var k = 0; k < 9; k++) {

        var td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.background = 'white';
        td.innerHTML = arr[k];

        trr.appendChild(td);

    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

draw();


//------------------------------------------------------------------------------------------------

//2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
//Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
//2.1. Пустая корзина должна выводить строку «Корзина пуста»;
//2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

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
    getInfo() {
        let str = ''
        this.products.forEach(item => str += `${item.name}: ${item.price} ${item.currency} - ${item.count} pieces \n`)
        return str
    }
    goodsList() {
        let sum = 0
        this.products.forEach(item =>
            sum += item.price * item.count)
        return sum + ' ' + this.products[0].currency
    }
}

let хлеб = new Product(2, 'Хлеб', 50, 'RUB',)
let помидоры = new Product(1, 'Помидоры', 250, 'RUB',)
let мясо = new Product(3, 'Мясо', 720, 'RUB',)
let шоколад = new Product(4, 'Шоколад', 130, 'RUB',)

let cart1 = new Cart()

cart1.addProduct(хлеб, 3)
cart1.addProduct(мясо, 2)

let cart = document.querySelector('.cart')
let products = document.querySelector('.products')

function cartAppend(cartData) {
    let cartInfo = document.createElement('div')
    cartInfo.className = 'cartInfo'
    cartInfo.textContent = cartData.getInfo()
    cart.appendChild(cartInfo)

    let sum = document.createElement('h2')
    sum.className = 'sum'
    sum.textContent = 'Sum : ' + cartData.goodsList()
    cart.appendChild(sum)
}

function cartRemove() {
    let cartInfo = document.querySelector('.cartInfo')
    let sum = document.querySelector('.sum')
    cartInfo.remove()
    sum.remove()
}

function productAppend(productName) {
    let product = document.createElement('div')
    product.className = `item ${productName.name.toLowerCase()}`

    let productTitle = document.createElement('h2')
    productTitle.textContent = productName.name
    product.appendChild(productTitle)

    let productPrice = document.createElement('b')
    productPrice.textContent = productName.price + ' ' + productName.currency
    product.appendChild(productPrice)

    products.appendChild(product)
}

productAppend(хлеб)
productAppend(помидоры)
productAppend(мясо)
productAppend(шоколад)

cartAppend(cart1)

let breadArea = document.querySelector(`.хлеб`)
let tomatoesArea = document.querySelector(`.помидоры`)
let meatArea = document.querySelector(`.мясо`)
let chocolateArea = document.querySelector(`.шоколад`)

breadArea.onclick = function () {
    cart1.addProduct(мясо, 1)
    cartRemove()
    cartAppend(cart1)
}

tomatoesArea.onclick = function () {
    cart1.addProduct(помидоры, 1)
    cartRemove()
    cartAppend(cart1)
}

breadArea.onclick = function () {
    cart1.addProduct(хлеб, 1)
    cartRemove()
    cartAppend(cart1)
}

chocolateArea.onclick = function () {
    cart1.addProduct(шоколад, 1)
    cartRemove()
    cartAppend(cart1)
}
//------------------------------------------------------------------------------------------------

//3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
//3.1. Создать массив товаров (сущность Product);
//3.2. При загрузке страницы на базе данного массива генерировать вывод из него. 
//HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.