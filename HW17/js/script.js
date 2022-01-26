/* 

ДЗ 17. Секундомер

На странице после загрузки идет отсчет секунд

* сделать старт секундомера по клику на кнопку

*/


let timerInterval;
let timer = 0;
const minute = document.querySelector('#minute');
const sec = document.querySelector('#sec');
const ms = document.querySelector('#ms');