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
    	window.location.replace(currentURL+"/form");
  })

  $(".voteBtn").on("click",function(){
    v1++;
    $("#vote1").html("<strong>" + v1 + "</strong><p>Votes</p>");
  })

  $(".voteBtn2").on("click",function(){
    v2++;
    $("#vote2").html("<strong>" + v2 + "</strong><p>Votes</p>");
  })

//im1 & im2 vote adding immitation functions
    function im1(){
      v1++;
      $("#vote1").html("<strong>" + v1 + "</strong><p>Votes</p>");
    }
    function im2(){
      v2++;
      $("#vote2").html("<strong>" + v2 + "</strong><p>Votes</p>");
    }
      setInterval(im1,6000)
      setInterval(im2,8000)




})

// filter on page
//liking system
//funding sytstem
