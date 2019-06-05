$(document).ready(function(){

    $("button").click(function(){
        $("imageGallery").toggle();
      });

    $("input[type=submit]").click(function(e) {
        var name = $("#name").val();
        var email = $("#email").val();
        if (name == '' || email == '') {
        e.preventDefault();
        alert("Please Fill Required Fields");
        }
    });
  });


//form action prevent default
/*$( "a" ).click(function( event ) {
    event.preventDefault();
    $( "<div>" )
      .append( "default " + event.type + " prevented" )
      .appendTo( "#log" );
  });
  */