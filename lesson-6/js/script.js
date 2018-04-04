
let	open = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
	budget_value = document.getElementsByClassName('budget-value')[0],
	goods_value = document.getElementsByClassName('goods-value')[0],
	items_value = document.getElementsByClassName('items-value')[0],
	employers_value = document.getElementsByClassName('employers-value')[0],
	discount_value = document.getElementsByClassName('discount-value')[0],
	isopen_value = document.getElementsByClassName('isopen-value')[0],

	goods_item = document.querySelectorAll('.goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	buddget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelectorAll('.hire-employers-item');

var 	money,
	stName, 
	time, 
	price = 1000;

open.addEventListener('click', () => {
	money = prompt("Введите ваш бюджет:", '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Введите ваш бюджет:", '');	
	}
	budget_value.textContent = money;

	name_value.textContent = prompt("Введите название магазина:", '').toUpperCase();
});

goods_btn.addEventListener('click', () => {
	for ( var i = 0; i < goods_item.length; i++) {
				mainList.shopGoods[i] = goods_item[i]. value;
			if ((typeof(mainList.shopGoods[i])) === 'string' && mainList.shopGoods[i] !== null) {
				console.log("Все верно!");
				goods_value.textContent = mainList.shopGoods;
			} else {
				i--;		
				console.log("Error!")	
			}
		}	
});	

choose_item.addEventListener('change', () => {
	var items = choose_item.value;

	if (isNaN(items) && items !== '') {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();

		items_value.textContent = mainList.shopItems;
	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
		console.log("Такого не может быть!");
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
		mainList.open = true;
	} else if (time < 24){
		console.log("Уже слишком поздно!");
		mainList.open = false;
	} else {
		console.log("В сутках только 24 часа");
		mainList.open = false;
	};

	if(mainList.open == true) {
		isopen_value.style.background = 'green'
	} else {
		isopen_value.style.background = 'red'
	}	
});

buddget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {
	for (var i = 0; i < hire_employers_item.length; i++) {
	 	var question = hire_employers_item[i].value;
	 	mainList.employers[i] = question;

	 	employers_value.textContent += mainList.employers[i] + ', '; 
	}
});

var mainList = {
	budget: money,
	storeName: stName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	discount: function discount(price) {
		if (mainList.discount ) {
		return price = price * 0.8;
		}
	}
}



