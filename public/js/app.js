$(document).ready(function(){
  v1 = 80;
  v2 = 300;

      $("#vote1").html("<strong>" + v1 + "</strong><p>Votes</p>");
      $("#vote2").html("<strong>" + v2 + "</strong><p>Votes</p>");

  $(".submit").on("click",function(){
      var turtle = $("#autocomplete").val().trim();
      console.log(turtle);
  })



  $("#input1").on("click",function(){

       	var currentURL = window.location.origin;
    	window.open(currentURL+"/form");
  })

  $(".voteBtn").on("click",function(){
    v1++;
    $("#vote1").html("<strong>" + v1 + "</strong><p>Votes</p>");
  })

  $(".voteBtn2").on("click",function(){
    v2++;
    $("#vote2").html("<strong>" + v2 + "</strong><p>Votes</p>");
  })

})

// filter on page
//liking system
//funding sytstem
