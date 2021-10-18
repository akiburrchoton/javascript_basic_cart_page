// * Capture First Book DOM 
const itemOne = document.querySelector('#cart-item1');
const quantityOne = document.querySelector('#quantity-box-1');
const incrementBtnOne = document.querySelector('#increment1');
const decrementBtnOne = document.querySelector('#decrement1');
const rmvBtnOne = document.querySelector('#rmv-btn1');
const bookPriceOne = document.querySelector('#price1');
const alertOne = document.querySelector('#alert-message1');
const closeBtnOne = document.querySelector('#close1');
const undoBtnOne = document.querySelector('#alert-link1');

// * Capture Second Book DOM 
const itemTwo = document.querySelector('#cart-item2');
const quantityTwo = document.querySelector('#quantity-box-2');
const incrementBtnTwo = document.querySelector('#increment2');
const decrementBtnTwo = document.querySelector('#decrement2');
const rmvBtnTwo = document.querySelector('#rmv-btn2');
const bookPriceTwo = document.querySelector('#price2');
const alertTwo = document.querySelector('#alert-message2');
const closeBtnTwo = document.querySelector('#close2');
const undoBtnTwo = document.querySelector('#alert-link2');

// * Other DOM elements
const cartTotal = document.querySelector('#cart-total');
const subTotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');
const payableTotal = document.querySelector('#payable');
const country = document.querySelector('.custom-select');
const shipping = document.querySelector('#shipping');
const shippingCost = 50;

var storePriceOne = 0;
var storePriceTwo = 0;

// if (country[0].value == 1){
//     console.log('BD');
//     country.option.setAttribute('selected', true);
//     // const shippingCost = 50;
//     // shipping.innerText = shippingCost;
// }else if(country[0].value == 2){
//     country.option.setAttribute('selected', true);
//     console.log('AUS');
//     // const shippingCost = 500;
//     // shipping.innerText = shippingCost;
// }


// ? All functions for Book One

// ! Remove Event for Book One
rmvBtnOne.addEventListener('click', function () {
    storeOne = Number(bookPriceOne.innerText);
    // * Subtract the price of the Books
    const subtotalAfterRmv = Number(subTotal.innerText) - Number(bookPriceOne.innerText);
    const totalAfterRmv = Number(total.innerText) - Number(bookPriceOne.innerText);
    subTotal.innerText = subtotalAfterRmv;
    total.innerText = totalAfterRmv;
    payableTotal.innerText = totalAfterRmv;
    cartTotal.innerText = totalAfterRmv;

    itemOne.style.display = 'none';
    alertOne.style.display = 'block';

    // ! Remove the alert after 5 seconds
    setTimeout(() => {
        alertOne.style.display = 'none';
    }, 50000);    
});

// ! Remove ALert Message for Book One
closeBtnOne.addEventListener('click', function () {
    alertOne.style.display = 'none';
    itemOne.remove();
});

// * Undo Event for Book One When Undo Button One is Clicked
undoBtnOne.addEventListener('click', function () {
    bookPriceOne.innerText = storeOne;
    const subtotalAfterUndo = Number(subTotal.innerText) + Number(bookPriceOne.innerText);
    const totalAfterUndo = Number(total.innerText) + Number(bookPriceOne.innerText);

    subTotal.innerText = subtotalAfterUndo;
    total.innerText = totalAfterUndo;
    payableTotal.innerText = totalAfterUndo;
    cartTotal.innerText = totalAfterUndo;

    itemOne.style.display = 'block';
    alertOne.style.display = 'none';
});


// * Function of Increment Button One
incrementBtnOne.addEventListener('click', function () {
    quantityOne.value++;
    const bookOnePrice = 200;

    let price = bookOnePrice * quantityOne.value
    bookPriceOne.innerText = price;

    calculation();
});

// * Function of Decrement Button One 
decrementBtnOne.addEventListener('click', function () {
    if (quantityOne.value > 1) {
        quantityOne.value--;
    }
    const bookOnePrice = 200;

    let price = bookOnePrice * quantityOne.value
    bookPriceOne.innerText = price;

    calculation();
});

// ? All functions for Book Two

// ! Remove Event for Book Two
rmvBtnTwo.addEventListener('click', function () {
    storeTwo = Number(bookPriceTwo.innerText);
    itemTwo.style.display = 'none';
    alertTwo.style.display = 'block';
    // * Subtract the price of the Books
    const subtotalAfterRmv = Number(subTotal.innerText) - Number(bookPriceTwo.innerText);
    const totalAfterRmv = Number(total.innerText) - Number(bookPriceTwo.innerText);
    subTotal.innerText = subtotalAfterRmv;
    total.innerText = totalAfterRmv;
    payableTotal.innerText = totalAfterRmv;
    cartTotal.innerText = totalAfterRmv;

    

    // ! Remove the alert after 5 seconds
    setTimeout(() => {
        alertTwo.style.display = 'none';
    }, 50000); 
});

// ! Remove ALert Message for Book Two
closeBtnTwo.addEventListener('click', function () {
    alertTwo.style.display = 'none';
    itemTwo.remove();
});

// * Undo Event for Book One When Undo Button Two is Clicked
undoBtnTwo.addEventListener('click', function () { 
    bookPriceTwo.innerText = storeTwo;  
    const subtotalAfterUndo = Number(subTotal.innerText) + Number(bookPriceTwo.innerText);
    const totalAfterUndo = Number(total.innerText) + Number(bookPriceTwo.innerText);

    subTotal.innerText = subtotalAfterUndo;
    total.innerText = totalAfterUndo;
    payableTotal.innerText = totalAfterUndo;
    cartTotal.innerText = totalAfterUndo;

    itemTwo.style.display = 'block';
    alertTwo.style.display = 'none';
});


// * Function of Increment Button Two
incrementBtnTwo.addEventListener('click', function () {
    quantityTwo.value++;
    const bookTwoPrice = 500;

    let price = bookTwoPrice * quantityTwo.value
    bookPriceTwo.innerText = price;

    calculation();
});

// * Function of Decrement Button One 
decrementBtnTwo.addEventListener('click', function () {

    if (quantityTwo.value > 1) {
        quantityTwo.value--;
    }
    const bookTwoPrice = 500;

    let price = bookTwoPrice * quantityTwo.value
    bookPriceTwo.innerText = price;

    calculation();
});



// * Calculate the Subtotal and Display in Subtotal
function calculation() {

    if(itemOne.style.display == 'none'){
        bookPriceOne.innerText = 0;
    }
    if(itemTwo.style.display == 'none'){
        bookPriceTwo.innerText = 0;
    }
    const subTotalPrice = Number(bookPriceOne.innerText) + Number(bookPriceTwo.innerText);
    const totalPrice = subTotalPrice + shippingCost; 

    subTotal.innerText = subTotalPrice;
    total.innerText = totalPrice;
    payableTotal.innerText = totalPrice;
    cartTotal.innerText = totalPrice;
}