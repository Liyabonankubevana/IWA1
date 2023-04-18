// script.js

const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = document.querySelector('[data-key="10"]');
const donuts1 = document.querySelector('[data-key="13"]');
const pancakes1 = document.querySelector('[data-key="0"]');
const status1 = document.querySelector('[data-delivered="false"]');

const root2 = document.querySelector('[data-key="order2"]');
const biscuits2 = document.querySelector('[data-key="5"]');
const donuts2= document.querySelector('[data-key="0"]');
const pancakes2 = document.querySelector('[data-key="2"]');
const status2= document.querySelector('[data-delivered="false"]');

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = document.querySelector('[data-key="12"]');
const donuts3 = document.querySelector('[data-key="11"]');
const pancakes3 = document.querySelector('[data-key="15"');
const status3 = document.querySelector('[data-delivered="true"]');



biscuits1.innerHTML = root1.getAttribute('data-biscuits1');
donuts1.innerHTML = root1.getAttribute('data-donuts1');
pancakes1.innerHTML = root1.getAttribute('data-pancakes1');
status1.innerHTML = root1.getAttribute('data-status1') ? Delivered : Pending;

biscuits2.innerHTML = root2.getAttribute('data-biscuits2');
donuts2.innerHTML = root2.getAttribute('data-donuts2');
pancakes2.innerHTML = root2.getAttribute('data-pancakes2');
status2.innerHTML = root2.getAttribute('data-status2') ? Delivered : Pending;

biscuits3.innerHTML = root3.getAttribute('data-biscuits3');
donuts3.innerHTML = root3.getAttribute('data-donuts3');
pancakes3.innerHTML = root3.getAttribute('data-pancakes3');
status3.innerHTML = root3.getAttribute('data-status3') ? Delivered : Pending;