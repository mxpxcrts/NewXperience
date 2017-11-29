$(document).ready(function(){


  $(document).on('click','.delete', function(){
    var row = $(this);

    swal({
      title: "¿Usted esta seguro de eliminar este Usuario?",
      text: "¡Esta apunto de eliminar un Usuario!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#004EE9",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No, eliminar",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        row.parent().parent().remove();
        swal("OK!", "El usuario a sido borrado.", "success");
      } else {
        swal("Cancelado", "Accion cancelada.", "error");
      }
    });
  });

    $(document).on('click', '.save', function(){
      var parent = $(this).parent().parent();
      var tdContrato = parent.children("td:nth-child(1)");
      var tdName = parent.children("td:nth-child(2)");
      var tdid = parent.children("td:nth-child(3)");
      var tdRol = parent.children("td:nth-child(4)");
      var tdEstado = parent.children("td:nth-child(5)");
      var tdButtons = parent.children("td:nth-child(6)");
      tdContrato.html(tdContrato.children("input[type=text]").val());
      tdName.html(tdName.children("input[type=text]").val());
      tdid.html(tdid.children("input[type=text]").val());
      tdRol.html(tdRol.children("input[type=text]").val());
      tdEstado.html(tdEstado.children("input[type=text]").val());
      tdButtons.html(
      "<button class=\"btn btn-xs btn-danger delete\"><i class=\"icon-trash-empty\"></i></button>" + " " +
      "<button class=\"btn btn-xs btn-info edit\"><i class=\" icon-pencil\"></i></button>"+ " " +
      "<button class=\"add\"><i class=\"\"></i></button>"
      );
    });

    $(document).on('click', '.edit', function(){
      var par = $(this).parent().parent(); //trAKDAKLDJ
      var tdContrato = par.children("td:nth-child(1)");
      var tdName = par.children("td:nth-child(2)");
      var tdid = par.children("td:nth-child(3)");
      var tdRol = par.children("td:nth-child(4)");
      var tdEstado = par.children("td:nth-child(5)");
      var tdButtons = par.children("td:nth-child(6)");

      tdContrato.html("<input type='text' id='txtName' value='"+tdContrato.html()+"'/>");
      tdName.html("<input type='text' id='txtPhone' value='"+tdName.html()+"'/>");
      tdid.html("<input type='text' id='txtEmail' value='"+tdid.html()+"'/>");
      tdRol.html("<input type='text' id='txtEmail' value='"+tdRol.html()+"'/>");
      tdEstado.html("<input type='text' id='txtEmail' value='"+tdEstado.html()+"'/>");
      tdButtons.html("<button class=\"btn btn-xs btn-danger save\"><i class=\" icon-floppy\"></i></button></td>");
    })
  });
