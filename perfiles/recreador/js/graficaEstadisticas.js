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

		var datos = {
			type: "pie",
			data : {
				datasets :[{
					data : [
						5,
						10,
						25,
						12,
						23,
					],
					backgroundColor: [
						"#F7464A",
						"#46BFBD",
						"#FDB45C",
						"#949FB1",
						"#4D5360",
					],
				}],
				labels : [
					"Babyshower",
					"15 años",
					"Viejoteca",
					"Mega Rumba",
					"Fiesta Infantil",
				]
			},
			options : {
				responsive : true,
			}
		};

		var canvas = document.getElementById('chart').getContext('2d');
		window.pie = new Chart(canvas, datos);

		setInterval(function(){
			datos.data.datasets.splice(0);
			var newData = {
				backgroundColor : [
					"#F7464A",
					"#46BFBD",
					"#FDB45C",
					"#949FB1",
					"#4D5360",
				],
				data : [getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
			};

			datos.data.datasets.push(newData);

			window.pie.update();

		}, 5000);



		function getRandom(){
			return Math.round(Math.random() * 100);
		}


	});