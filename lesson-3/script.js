var money, stName, time, price = 1000;


function start() {
	money = prompt("Введите ваш бюджет:");
	while (isNaN(money) || money == '' || money == null) {
		money = prompt("Введите ваш бюджет:");	
	}

	stName = prompt("Введите название магазина:").toUpperCase();
	time = 9;
}

start();

var mainList = {
	budget: money,
	storeName: stName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods() {
	for ( var i = 0; i < 5; i++) {
			mainList.shopGoods[i] = prompt("Какой ти товара вы хотите продать?");
		if ((typeof(mainList.shopGoods[i])) === 'string' && mainList.shopGoods[i] !== null && mainList.shopGoods[i] !== '') {
			console.log("Все верно!");
		} else {
			i--;		
			console.log("Error!")	
		}
	}	
}

chooseGoods();

function workTime() {
	if (time < 0) {
		console.log("Такого не может быть");
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
	} else if (time < 24){
		console.log("Уже слишком поздно!");
	} else {
		console.log("В сутках только 24 часа");
	}
}

workTime();

function workers() {
	for (var i = 1; i < 5; i++) {
	 	var question = prompt('Имя сотрудника №');
	 	mainList.employers[i] = question;
	}
}
workers();

function discount(price) {
	if (mainList.discount ) {
	return price = price * 0.8;
	}
}

function budgetDay(a){

	return  a/30;
}

alert(budgetDay(mainList.budget));
console.log(budgetDay(mainList.budget));
console.log(mainList);
console.log(discount(price));