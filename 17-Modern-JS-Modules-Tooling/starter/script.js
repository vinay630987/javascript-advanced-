// Importing Module
import { addToCart, totalPrice as price, tq } from './shoppingCart';
addToCart(bread, 3);
console.log(price, tq);

console.log('Importing Module');
// console.log(shippingCart);

// import * as ShippingCart from './shoppingCart.js';

// ShippingCart.addToCart('bread', 50);
// console.log(ShippingCart.tp, ShippingCart.tq);
import add, { cart } from './shoppingCart.js';
add('coke', 2);
add('breads', 6);
add('pizza', 9);
console.log(cart);
/*
import { books } from './shoppingCart.js';
console.log(books[0]);

// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

//console.log('throhting');

const getLatPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLatPost();
console.log(lastPost);

// not very clean
//lastPost.then(last => console.log(last));

const lastOne = await getLatPost();
console.log(lastOne);
*/
// the module pattern

const shippingCart2 = (function () {
  const cart = [];
  const shippingCart = 12;
  const totalPrice = 345;
  const totalQuantity = 443;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} orderd from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    shippingCart,
  };
})();

shippingCart2.addToCart('apples', 45);
shippingCart2.addToCart('bananas', 23);
console.log(shippingCart2);
console.log(shippingCart2.totalQuantity);
console.log(shippingCart2.shippingCart);

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting},${this.name}`);
  }
}

const jonas = new Person('jonas');

console.log(jonas ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
