function validar(){
  var nombres, apellidos, telefono, celular, documentoTipo, documentoNum, email, pass, passConfirm, expresion;
  nombres = document.getElementById("nombres").value;
  apellidos = document.getElementById("apellidos").value;
  telefono = document.getElementById("telefono").value;
  celular = document.getElementById("celular").value;
  documentoTipo = document.getElementById("documentoTipo").value;
  documentoNum = document.getElementById("documentoNum").value;
  email = document.getElementById("email").value;
  pass = document.getElementById("pass").value;
  passConfirm = document.getElementById("passConfirm").value;

  if (nombres === "" || apellidos === "" || documentoTipo === "" || documentoNum === "" || email === "" || pass === "" || passConfirm ==== "") {
    alert("Este campo no puede estar vacío");
    return false;
  }
}