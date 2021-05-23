//1. Доработать модуль корзины.
//a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы.
//b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.



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
    deleteProduct(product) {
        if (product instanceof Product && product) {
            if (this.products.find(item => item.id === product.id)) {
                this.products = this.products.filter(item => item.id !== product.id)
            }
        }
    }
    getSum() {
        let sum = 0
        this.products.forEach(item =>
            sum += item.price * item.count)
        return sum + ' ' + this.products[0].currency
    }
    reset() {
        this.products = []
    }
}

let хлеб = new Product(1, 'Хлеб', 50, 'RUB',)
let помидоры = new Product(2, 'Помидоры', 230, 'RUB',)
let мясо = new Product(3, 'Мясо', 720, 'RUB',)
let шоколад = new Product(4, 'Шоколад', 130, 'RUB',)

let cart1 = new Cart()

let cart = document.querySelector('.cart')
let products = document.querySelector('.products')
let emptyCart = document.createElement('h2')
emptyCart.textContent = 'Ваша корзина пуста.'
cart.appendChild(emptyCart)

function refreshCart(cartData) {
    let cartInfo = document.createElement('div')
    cartInfo.className = 'cartInfo'

    cartData.products.forEach(item => {
        let cartInfoItem = document.createElement('div')
        cartInfoItem.className = 'cartInfoItem'
        cartInfoItem.textContent = `${item.name} : ${item.price} ${item.currency} - ${item.count} количество`

        let deleteIcon = document.createElement('img')
        deleteIcon.className = `deleteIco delete-${item.name.toLowerCase()}`


        cartInfoItem.appendChild(deleteIcon)
        cartInfo.appendChild(cartInfoItem)
    })

    let sum = document.createElement('h2')
    sum.className = 'sum'
    sum.textContent = 'Sum : ' + cartData.getSum()

    let clearIco = document.createElement('img')



    cart.appendChild(cartInfo)
    sum.appendChild(clearIco)
    cart.appendChild(sum)
}

function cartAppend(cartData, productName) {
    cartData.products.length && cartRemove()
    cart1.addProduct(productName, 1)
    refreshCart(cartData)
    emptyCart.remove()
}

function deleteItem(cartData, productName) {
    cartRemove()
    cartData.deleteProduct(productName)

    cartData.products.length && refreshCart(cartData)

    !cartData.products.length ? cart.appendChild(emptyCart) : null
    console.log(!cartData.products.length)
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

    let btn = document.createElement('button')
    btn.className = `btn btn-${productName.name.toLowerCase()}`
    btn.textContent = 'Добавить в корзину'
    product.appendChild(btn)

    products.appendChild(product)
}

productAppend(хлеб)
productAppend(помидоры)
productAppend(мясо)
productAppend(шоколад)

cart1.products.length && cartAppend(cart1)

let breadArea = document.querySelector('.btn-хлеб')
let tomatoesArea = document.querySelector('.btn-помидоры')
let meatArea = document.querySelector('.btn-мясо')
let chocolateArea = document.querySelector('.btn-шоколад')

breadArea.onclick = function () {
    cartAppend(cart1, хлеб)

}

tomatoesArea.onclick = function () {
    cartAppend(cart1, помидоры)
}

meatArea.onclick = function () {
    cartAppend(cart1, мясо)
}

chocolateArea.onclick = function () {
    cartAppend(cart1, шоколад)
}

cart.onclick = function (event) {
    switch (event.target.className) {
        case 'clearIco': {
            cart1.reset()
            cartRemove()
            cart.appendChild(emptyCart)
            break
        }
        case 'deleteIco delete-помидоры': {
            deleteItem(cart1, помидоры)
            break
        }
        case 'deleteIco delete-хлеб': {
            deleteItem(cart1, bread)
            break
        }
        case 'deleteIco delete-мясо': {
            deleteItem(cart1, meat)
            break
        }
        case 'deleteIco delete-шоколад': {
            deleteItem(cart1, шоколад)
            break
        }
    }
}
