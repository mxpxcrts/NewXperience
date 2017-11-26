$(document).ready(function(){

     $(document).on('click', '.save', function(){
      var parent = $(this).parent().parent();
      var tdName = parent.children("td:nth-child(1)");
      var tdPhone = parent.children("td:nth-child(2)");
      var tdButtons = parent.children("td:nth-child(3)");
      tdName.html(tdName.children("input[type=text]").val());
      tdPhone.html(tdPhone.children("input[type=text]").val());
      tdButtons.html(
        "<button class=\"btn btn-xs btn-info edit\"><i class=\" icon-pencil\"></i></button>"+ " " +
        "<button class=\"add\"><i class=\"\"></i></button>"
      );
    });

$(document).on('click', '.edit', function(){
      var par = $(this).parent().parent(); 
      var tdName = par.children("td:nth-child(1)");
      var tdPhone = par.children("td:nth-child(2)");
      var tdButtons = par.children("td:nth-child(3)");

      tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
      tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
      tdButtons.html("<button class=\"btn btn-xs btn-danger save\"><i class=\" icon-floppy\"></i></button></td>");
    })
  });
