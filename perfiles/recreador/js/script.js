function apagar (){
	var sidebar = document.getElementById('sidebar');
	sidebar.style.display='none';
}

function encender (){
	var sidebar = document.getElementById('sidebar');
	sidebar.style.display='block';

}
function apagarPrender(){
	var sidebar = document.getElementById('sidebar');
	var boton = document.getElementById('boton');

if (caja.style.display=='block'|| caja.style.display=='' ) {
	apagar();
	boton.value="prender";
	boton.style.backgroundColor='#ffff'
}else{
 	encender();
 	boton.value="apagar";
 	boton.style.backgroundColor='#fefefe'
}
