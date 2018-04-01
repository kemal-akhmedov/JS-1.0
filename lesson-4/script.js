var money, stName, time, price = 1000;


function start() {
	money = prompt("Введите ваш бюджет:", '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Введите ваш бюджет:", '');	
	}

	stName = prompt("Введите название магазина:", '').toUpperCase();
	time = 9;
}

// start();
var mainList = {
	budget: money,
	storeName: stName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for ( var i = 0; i < 5; i++) {
				mainList.shopGoods[i] = prompt("Какой ти товара вы хотите продать?", '');
			if ((typeof(mainList.shopGoods[i])) === 'string' && mainList.shopGoods[i] !== null && mainList.shopGoods[i] !== '') {
				console.log("Все верно!");
			} else {
				i--;		
				console.log("Error!")	
			}
		}	
	},
	workTime: function workTime() {
		if (time < 0) {
			console.log("Такого не может быть");
		} else if (time > 8 && time < 20) {
			console.log("Время работать!");
			mainList.open = true;
		} else if (time < 24){
			console.log("Уже слишком поздно!");
		} else {
			console.log("В сутках только 24 часа");
		}
	},
	workers: function workers() {
		for (var i = 1; i < 5; i++) {
		 	var question = prompt('Имя сотрудника №');
		 	mainList.employers[i] = question;
		}
	},
	discount: function discount(price) {
		if (mainList.discount ) {
		return price = price * 0.8;
		}
	},
	budgetDay: function budgetDay(a){
		return  a/30;
	},
	chooseGoodsItems: function chooseGoodsItems() {
		var items = prompt("Перечислите через запятую товары", "");
		while(typeof(items) !== 'string' ||  items == null || items == '') {
			items = prompt("Перечислите через запятую товары", "");
		} 
			mainList.shopItems = items.split(',');
			mainList.shopItems.push(prompt("Подождите, еще ", ""));
			mainList.shopItems.sort();
	}
}



mainList.chooseGoodsItems();

function assortmentProduct() {
	console.log("У нас вы можете купить: ");
	mainList.shopItems.forEach(function(item, i, arr) {
		console.log((i+1) + ": " + item)
	})
}
assortmentProduct();

function assortmentShop() {
	console.log("Наш магазин включает в себя: ")
	for(var key in mainList) {
		console.log(key);
	}
}
assortmentShop();

console.log(mainList);
