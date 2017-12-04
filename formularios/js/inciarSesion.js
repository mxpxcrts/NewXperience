$(document).ready(function(){
	$('.toggle').click(function() {
		$('.formulariosInicio').animate({
			height:"toogle",
			'padding-top':'toggle',
			'padding-bottom':'toggle',
			opacity:'toggle'
		},"slow");
	});

	$('#form1').formValidation({
		framework: 'bootstrap',
		icon: {
			valid: 'icon-ok',
			invalid: 'icon-cancel',
			validating: 'icon-refresh'
		},
		row: {
			valid: 'field-success',
			invalid: 'field-error'
		},
		fields: {
			username: {
				validators: {
					notEmpty: {
						message: 'El nombre de usuario es requerido '
					},
					stringLength: {
						min: 4,
						max: 30,
						message: 'Su nombre de usuario debe ser de 4-30 caracteres'
					},
					regexp: {
						regexp: /^[a-zA-Z]+$/,
						message: 'No puede contener caracteres numericos'
					}
				}
			},
			password: {
				validators: {
					notEmpty: {
						message: 'La contraseña es requerida'
					}
				}
			},
		}
	});

	$('button[type="submit"]').on('click', function() {
		var usuario = $('#username').val();
		var contraseña = $('#password').val();

		if (usuario== "recreador" && contraseña=="1234") {

			$('#form1').attr('action', "../perfiles/recreador/indexRecreador.html");

		}  else if (usuario== "administrador" && contraseña=="9876"){
			$('#form1').attr('action', "../perfiles/admin/indexAdministrador.html");

		} else if (usuario== "cliente" && contraseña=="5678"){
			$('#form1').attr('action', "../perfiles/cliente/index.html");

		} 	else if (usuario== "recreador" && contraseña!="1234"
			|| usuario== "cliente" && contraseña!="5678"
			|| usuario== "administrador" && contraseña!="9876"){
			swal('Contraseña incorrecta', 'Porfavor verificar','info');

		} else if (usuario != "recreador" && contraseña =="1234"
			|| usuario!= "cliente" && contraseña=="5678" 
			|| usuario!= "administrador" && contraseña=="9876" ) {
			swal('Nombre de usuario incorrecto', 'Porfavor verificar','info');
		} else {
			swal('Usuario incorrecto', 'Porfavor verificar','info');
		} 

		/* Act on the event */
	});
});

