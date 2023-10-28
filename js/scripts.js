/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// setiap elemen ref-product 
// tambahkan parentElement dengan class .card dan .card-body
document.addEventListener('DOMContentLoaded', function () {

    const refProduct = document.querySelectorAll('a.ref-product');
    refProduct.forEach((e) => {
        e.parentElement.classList.add('card', 'card-body');
    });

    console.log('DOM fully loaded and parsed')
    console.log(refProduct)
    
});