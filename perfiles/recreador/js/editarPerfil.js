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


  $(document).on('click', '.save', function(){
    var parent = $(this).parent().parent();
    var tdName = parent.children("td:nth-child(1)");
    var tdPhone = parent.children("td:nth-child(2)");
    var tdButtons = parent.children("td:nth-child(3)");
    tdName.html(tdName.children("input[type=text]").val());
    tdPhone.html(tdPhone.children("input[type=text]").val());
    tdButtons.html(
    "<button class=\"btn btn-xs btn-info edit\"><i class=\" icon-pencil-2\"></i></button>"+ " " +
    "<button class=\"add\"><i class=\"\"></i></button>");
  });

  $(document).on('click', '.edit', function(){
    var par = $(this).parent().parent(); //trAKDAKLDJ
    var tdName = par.children("td:nth-child(1)");
    var tdPhone = par.children("td:nth-child(2)");
    var tdButtons = par.children("td:nth-child(3)");

    tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
    tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
    tdButtons.html("<button class=\"btn btn-xs btn-danger save\"><i class=\" icon-floppy\"></i></button></td>");
  });


});

function confirmacion(){
    swal({
      title: "¿Desea confirmar cambios?",
      text: "Los datos serán actualizados.",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#004EE9",
      confirmButtonText: "Actualizar",
      cancelButtonText: "Cancelar",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        swal("", "Sus datos han sido actualizados.", "success");
      } else {
        swal("", "Continúe actualizando sus datos personales.", "error");
      }
    });
    }
