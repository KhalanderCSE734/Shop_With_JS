// import './style.css'
import products from './api/products.json';
import {showProducts} from './homeProducts.js';
import {setupCounter} from './counter.js';
import {addCartFunction} from './addToCart.js';
// console.log(products);


const cros_mark = document.querySelector(".fa-xmark");
const bar = document.querySelector(".fa-bars");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

bar.addEventListener("click",()=>{
    ul.classList.add("hamburger");
    ul.style.display = "flex";
    bar.style.display = "none";
    cros_mark.style.display = "flex";
    nav.style.marginBottom = "200px";
});

cros_mark.addEventListener("click",()=>{
    ul.classList.remove("hamburger");
    ul.style.display = "none";
    bar.style.display = "block";
    nav.style.marginBottom = "unset";
});


/*for(let i=0;i<products.length;i++){
    console.log(products[i]);   We'll get each object in this
}*/



// const plus = document.querySelector(".plus");
// const minus = document.querySelector(".minus");
const parentProduct = document.querySelector(".shopping-products");



showProducts(products);
setupCounter(parentProduct);
addCartFunction(parentProduct);




