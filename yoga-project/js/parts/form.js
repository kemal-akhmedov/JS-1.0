function form() {
	let message = new Object();
	message.success = "Спасибо! скоро мы с вами свяжемся";
	message.loading = "Загрузка...";
	message.failure = "Что-то пошло не так";

	let 	form = document.getElementsByClassName('main-form')[0],
		form2 = document.getElementById('form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		form.addEventListener('submit', showModal);
		form2.addEventListener('submit', showModal);

		function showModal(event) {
			event.preventDefault();
			this.appendChild(statusMessage);

			// Ajax
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php')

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			let formData = new FormData(this);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//Добавлять контент на страницу 
					}
					else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			for(let i = 0; i < input.length; i++) {
				input[i].value = '';
				//очищаем поля ввода
			}
		};
}


module.exports = form;
