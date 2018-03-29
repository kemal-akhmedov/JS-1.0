var money = prompt("Введите ваш бюджет");
var stName = prompt("Введите название магазина");

var mainList = {
	budget: money,
	storeName: stName,
	shopGoods: [],
	employers: {},
	open: false
};

mainList.shopGoods[0] = prompt("Какой тип товара вы хотите выбрать?");
mainList.shopGoods[1] = prompt("Какой тип товара вы хотите выбрать?");
mainList.shopGoods[2] = prompt("Какой тип товара вы хотите выбрать?");

alert(money / 30);
console.log(mainList);