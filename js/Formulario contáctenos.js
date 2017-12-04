function validarFormulario(){

	var txtNombres = document.getElementById('nombres').value;
	var txtApellidos = document.getElementById('apellidos').value;
	var txtTelefono = document.getElementById('telefono').value;
	var txtCelular = document.getElementById('telefono').value;
	var txtEmail = document.getElementById('email').value;

	if(txtNombres == null || txtNombres.length == 0 || /^\s+$/.test(txtNombres)){
		alert('ERROR: El campo nombre no debe estar vacío');
		return false;
	}

	else if(txtNombres.length>25){
		alert('ERROR: El nombre está muy largo');
		return false;
	}

	else if(txtApellidos == null || txtApellidos.length == 0 || /^\s+$/.test(txtApellidos)){
		alert('ERROR: El campo de apellidos no debe estar vacío');
		return false;
	}

	else if(txtNombres.length>25){
		alert('ERROR: El apellido está muy largo');
		return false;
	}

	else if(!(/\S+@\S+\.\S+/.test(txtEmail))){
		alert('ERROR: Debe escribir un correo válido');
		return false;
	}