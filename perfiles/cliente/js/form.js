function validarFormulario(){
 
		var txtNombres = document.getElementById('nombres').value;
		var txtApellidos = document.getElementById('apellidos').value;
		var txtTelefono = document.getElementById('telefono').value;
		var txtCelular = document.getElementById('telefono').value;
		var txtEmail = document.getElementById('email').value;
		var cmbDocumentoTipo = document.getElementById('documentoTipo').selectedIndex;
		var txtDocumentoNum = document.getElementById('documentoNum').value;
		var txtPass = document.getElementById('pass').value;
		var txtPassConfirm = document.getElementById('passConfirm').value;
		
		//Test campo obligatorio
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

		//Test correo
		else if(!(/\S+@\S+\.\S+/.test(txtEmail))){
			alert('ERROR: Debe escribir un correo válido');
			return false;
		}
 
		else if(txtDocumentoNum == null || txtDocumentoNum.length == 0 || isNaN(txtDocumentoNum)){
			alert('ERROR: Debe ingresar el número de documento');
			return false;
		}	

		else if(txtPass == null || txtPass.length == 0 || /^\s+$/.test(txtPass)){
			alert('ERROR: El campo contraseña no debe estar vacío');
			return false;
		}

		else if(txtNombres.length>20){
			alert('ERROR: La contraseña está muy larga, recuerde que el número de caracteres es de 20 como máximo');
			return false;
		}

		else if(txtPassConfirm == null || txtPassConfirm.length == 0 || /^\s+$/.test(txtPassConfirm)){
			alert('ERROR: El campo contraseña no debe estar vacío');
			return false;
		}

		else if(txtNombres.length>20){
			alert('ERROR: La contraseña está muy larga, recuerde que el número de caracteres es de 20 como máximo');
			return false;
		}
	}