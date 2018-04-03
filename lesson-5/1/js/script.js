// 1 задание

// 1 пункт
let menu = document.querySelector('.menu');
let menuItem5 = document.createElement('li'); menuItem5.classList.add('menu-item');
menu.appendChild(menuItem5); menuItem5.innerHTML = 'Пятый пункт'
let menuItem = document.querySelectorAll('.menu-item');
let menuItem2 = menuItem[2]
menu.replaceChild(menuItem[1], menuItem[2]);
menu.insertBefore(menuItem2, menuItem[1]);

// 2 пункт
document.body.style.background = 'url(img/apple_true.jpg)'

//3 пункт
let column = document.querySelectorAll('.column');
let title0 = document.querySelector('.title');
let title = document.createElement('div'); 
title.classList.add('title'); 
title.innerHTML = 'Мы продаем подлинную технику Apple'
column[1].replaceChild(title, title0);

// 4 пункт
let adv = document.querySelector('.adv');
column[1].removeChild(adv);

// 5 пункт
let comment = document.querySelector('.prompt');
comment.innerHTML = prompt('Ваше отношение к технике Aplle?');




