var money = prompt("Введите ваш бюджет");
var stName = prompt("Введите название магазина");
var time = 9;
var mainList = {
	budget: money,
	storeName: stName,
	shopGoods: [],
	employers: {},
	open: false
};



// for ( var i = 0; i < 5; i++) {
// 	mainList.shopGoods[i] = prompt("Какой ти товара вы хотите продать?");
// 	if ((typeof(mainList.shopGoods[i])) === 'string' && mainList.shopGoods[i] !== null && mainList.shopGoods[i] !== '') {
// 		console.log("Все верно!");
// 	} else {
// 		i--;
// 		console.log("error!");
// 	}
// }

// if (time < 0) {
// 	console.log("Такого не может быть");
// } else if (time > 8 && time < 20) {
// 	console.log("Время работать!");
// } else if (time < 24){
// 	console.log("Уже слишком поздно!");
// } else {
// 	console.log("В сутках только 24 часа");
// }

// Второй способ  
var i = 0;
while (i < 5) {
	mainList.shopGoods[i] = prompt("Какой ти товара вы хотите продать?");
	if ((typeof(mainList.shopGoods[i])) === 'string' && mainList.shopGoods[i] !== null && mainList.shopGoods[i] !== '') {
		i++;
		console.log("Все верно!");
	} else {
		console.log("error!");
	}
}

// Третий способ
// var i = 0
// do {
// 	mainList.shopGoods[i] = prompt("Какой ти товара вы хотите продать?");
// 	if ((typeof(mainList.shopGoods[i])) === 'string' && mainList.shopGoods[i] !== null && mainList.shopGoods[i] !== '') {
		// i++;
		// console.log("Все верно!");
// 	} else {
// 		console.log("error!");
// 	}
// } while (i < 5);


alert(money / 30);
console.log(mainList);