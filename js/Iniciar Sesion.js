
// function ingresar(){ 
//     var usuario = $('#usuario').val(); 
//     var password = $('#password').val();


//     console.log(usuario);
//     console.log(password);


//     if (usuario == "admin" && password == "1234") {     

//         $('#formLogin').attr('action', '../perfiles/admin/indexAdministrador.html');

//     }else if(usuario == "cliente" && password == "5678"){
//         $('#formLogin').attr('action', '../perfiles/cliente/Cliente.html');

//     }else if(usuario == "recreador" && password == "0000"){
//         $('#formLogin').attr('action', '../perfiles/recreador/indexRecreador.html');

//     }
//     else{
//         alert('Error: verifique que su correo y contraseña sea correcta');

//     }
// }


function validation() {

    var username = 'admin'; 
    var password = '1234';

    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    if ((username == userName) && (password == passWord)) {
        swal("Good job!", "You clicked the button!", "success");
    }
    else {
        swal("Aww", "You bastard", "error");
    }
}