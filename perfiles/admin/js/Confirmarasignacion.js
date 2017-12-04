$(document).ready(function(){

   $(document).on('click','.confirmar', function(){
    var row = $(this);

    swal({
      title: "¿Confirmar asignación?",
      text: "Los eventos seran asignados.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#004EE9",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        swal("", "El evento a sido asignados.", "success");
      } else {
        swal("", ".", "error");
      }
    });
  });
});
