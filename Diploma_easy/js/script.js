// Получаем элементы
let btnСreate = document.getElementById('popup-btn'),
	popup = document.querySelector('.popup'),
	overlay = document.querySelector('.overlay'),
	main = document.querySelector('.main'),
	custom = document.querySelector('.custom'),
	customInfo = document.querySelector('.custom-info'),
	customChar = document.querySelector('.custom-char'),
	customStyle = document.querySelector('.custom-style'),
	btnReady = document.getElementById('ready'),
	mainCards = document.querySelector('.main-cards');
	mainCardsItem = document.getElementsByClassName('main-cards-item')[1],	
	// Формы
	inputName = document.getElementById('name'),
	inputAge = document.getElementById('age'),
	inputBio = document.getElementById('bio'),
	// Классы для форм
	cardName = document.getElementsByClassName('name'),
	cardAge = document.getElementsByClassName('age'),
	cardBio = document.getElementsByClassName('bio');

// События на кнопке создать
btnСreate.addEventListener('click', function() {
	popup.style.display = 'none';
	overlay.style.display = 'none';
	main.style.display = 'none';
	custom.style.display = 'flex';
	customInfo.style.display = 'block';
	customChar.style.display = 'block';
	customStyle.style.display = 'block';
});

// Клонируем карточку и изменяем содержимое 
let newCard = mainCardsItem.cloneNode(true);
newCard.style.display = 'none';	
mainCards.appendChild(newCard);


// События на кнопке готово 
btnReady.addEventListener('click', function() {
	custom.style.display = 'none';
	main.style.display = 'block';
	newCard.style.display = 'block';
	cardName[2].textContent = inputName.value;
	cardAge[2].textContent = inputAge.value;	
	cardBio[2].textContent = inputBio.value;
	toUpperCase(cardName[2]);	
});



