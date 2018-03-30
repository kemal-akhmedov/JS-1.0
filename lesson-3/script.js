var money, stName, time;


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
	open: false
}

var employers = {
	first: [],
	second: [],
	third: [],
	fourth: []
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

function budgetDay(a){

	return  a/30
}

alert(budgetDay(mainList.budget));
console.log(budgetDay(mainList.budget));
console.log(mainList);