$(document).ready(function(){

  $(".submit").on("click",function(){
      var turtle = $("#autocomplete").val().trim();
      console.log(turtle);
  })








  $("#input1").on("click",function(){

       	var currentURL = window.location.origin;
    	window.location.replace(currentURL+"/form");
  })
})
