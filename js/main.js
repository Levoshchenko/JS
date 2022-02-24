
'use strict';

const btnBasket = document.getElementById('basket-btn');
const goodsListSection = document.getElementById('goods-list-section');

//Создаем класс для товара.
class GoodsItem {
    constructor (name, sum, cal) {
        this.name = name;
        this.sum = sum;
        this.cal = cal;
    }
    render () {
        return `<div class="goods-list__product-box">
        <span class="goods-list__product-box__name">${this.name}</span>
        <div class="goods-list__product-box__sum">${this.sum}</div>
        <div class="goods-list__product-box__cal">${this.cal} <div/>
        <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
        </div>`
    }
}
//Компоненты бургера
const products = [
    { name: 'big', sum: 100, cal: 40},
    { name: 'small', sum: 50, cal: 20},
    { name: 'cheese', sum: 10, cal: 20},
    { name: 'salad', sum: 20, cal: 5},
    { name: 'potato', sum: 15, cal: 10},
];
//Класс объекта. Объект
class Hamburger {
    constructor(element) {
        this.name = element;
        this.sum = 0;
        this.cal = 0;
    }
    sumProducts() {
        this.sum = products[this.name].sum;
    }
    calProducts() {
        this.cal = products[this.name].cal;
    }
}
// //Функция  подсчета суммы всех ингредиентов
// const totalSum = () => {
//     let arr = arrBurgerProducts;
//     let sum = 0;
//     arr.forEach (el => sum += el.sum);
//     console.log(sum);
//     return sum;
// };
// //Функция  подсчета калорий  всех ингредиентов
// const totalCal = () => {
//     let arr = arrBurgerProducts;
//     console.log(arrBurgerProducts);
//     let cal = 0;
//     arr.forEach (el => cal += el.cal);
//     console.log(cal);
//     return cal;
// };
//Размер бургера
const checkedSize = (i) => {
    if (i == 0) {
        sumSize.innerText = products[i].sum + ' рублей';
        calSize.innerText = products[i].cal + ' калорий';
    }
    else if (i == 1) {
        sumSize.innerText = products[i].sum + ' рублей';
        calSize.innerText = products[i].cal + ' калорий';
    }
};
//Начинка бургера
const stuffing = (i) => {
    if (i == 0) {
        sumCheese.innerText = 10 + ' рублей';
        calCheese.innerText = 20 + ' калорий';
    }
    else if (i == 1) {
        sumSalad.innerText = 20 + ' рублей';
        calSalad.innerText = 5 + ' калорий';
    }
    else if (i == 2) {
        sumPotato.innerText = 15 + ' рублей';
        calPotato.innerText = 10 + ' калорий';
    }
};
//Функция генерирует массив с чекбоксами от 0-4 (0 большой бургер, 1 маленький, 2 выбран сыр, 3 - салат, 4 - картошка)
const checked = () => {
    arrBurgerProducts = [];
    const radio = document.getElementsByClassName('checked');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            arrBurgerProducts.push(i)
            console.log('Выбран ' + i + ' элемент');
        }
    }
    console.log(arrBurgerProducts);
    return arrBurgerProducts;
};
// const m = new Hamburger(2);
// m.sumProducts();
// m.calProducts();
// console.log(m);
document.getElementById('btn_input').addEventListener('click', checked);
window.addEventListener('click', function (evt) {
    console.log(evt);
})


    // Метод вывод списка товаров.
    // render () {
    //     let listHtml = '';
    //     let goodsList = document.getElementById('goods-list__product-box');

    //     this.goods.forEach (good => {
    //         const goodItem = new GoodsItem (good.name, good.sum, good.cal);
    //         listHtml += goodItem.render();
    //     });
    //     goodsList.innerHTML = listHtml;
    // }

}

//Создаем класс корзина
class Cart {
    constructor () {
        this.goods = [];
    }
    //метод добавления товара в корзину
    addCartItem(cartItem) {
        this.goods.push(cartItem);
    }

    //Метод для вывода итоговой суммы корзины
    totalCartSum() {
        let totalSum = document.getElementById('goods-list__total');
        let sum = 0;
        this.goods.forEach (good => {
            sum += good.sum
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }

    render() {
        let listHtml = '';
        let goodsList = document.getElementById('goods-list__product-box');

        this.goods.forEach (good => {
            const goodItem = new GoodsItem (good.name, good.sum, good.cal);
            listHtml += goodItem.render();
        });
        goodsList.innerHTML = listHtml;
    }
}

var renderCart = () => {
    const list =  new GoodsList ();
    const cart = new Cart();

    list.fetchGoods();
    cart.addCartItem(list.goods[0]);
    cart.addCartItem(list.goods[1]);
    cart.addCartItem(list.goods[2]);
    cart.render();

    cart.totalCartPrice();
    goodsListSection.style.display = 'block';
};

btnBasket.addEventListener('click', renderCart);
window.addEventListener('click', function (evt) {console.log(evt)});


