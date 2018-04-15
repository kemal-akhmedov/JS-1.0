$(document).ready(function() {
	$('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
		$('.overlay').fadeToggle('slow');
		$('.modal').delay(1000).slideDown('slow');
	});

	$('span').click(function() {
		$('.overlay').delay(1000).fadeToggle('slow');
		$('.modal').slideToggle('slow');			
	});

});