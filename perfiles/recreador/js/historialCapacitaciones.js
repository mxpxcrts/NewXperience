	swal({
		title: 'Bienvenido ',
		html: $('<div>')
		.addClass('some-class')
		.text('Aquí encontraras todo lo referente a capacitaciones.'),
		animation: false,
		customClass: 'animated flipInX'
	})
$(document).ready(function(){

	// MOSTRANDO Y OCULTANDO MENU
	$('#button-menu').click(function(){
		if($('#button-menu').attr('class') == 'icon-th-list' ){

			$('#button-menu').removeClass('icon-th-list').addClass('icon-cancel'); // Agregamos el icono X
			$('.navegacion .menu').css({'left':'0px'}); // Mostramos el menu

		} else{

			$('#button-menu').removeClass('icon-cancel').addClass('icon-th-list'); // Agregamos el icono del Menu
			$('.navegacion .submenu').css({'left':'-320px'}); // Ocultamos los submenus
			$('.navegacion .menu').css({'left':'-320px'}); // Ocultamos el Menu

		}
	});

	// MOSTRANDO SUBMENU
	$('.navegacion .menu > .item-submenu a').click(function(){
		
		var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
		console.log(positionMenu); 

		$('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); // Mostramos El submenu correspondiente

	});

	// OCULTANDO SUBMENU
	$('.navegacion .submenu li.icon-left-open').click(function(){

		$(this).parent().css({'left':'-320px'}); // Ocultamos el submenu

	});

});