$(document).ready(function(){

  $(".submit").on("click",function(){
      var turtle = $("#autocomplete").val().trim();
      console.log(turtle);
  })


  $("tag").on("click",function(){
  	counter ++
  	$("whatever").html("<img src='' ><span>"+ counter + "<span>")
  })

})

// filter on page 
//liking system
//funding sytstem
