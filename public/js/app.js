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

      $("#input1").on("click",function(){
        console.log("number");

        $(".portfolio-container").append('<div class="portfolio-listing Ideas fashion identity other block" style="display: block;"><div class="span4 bordered"><div class="folder"><h4 class="text-center title"><a href="projects.html#proj2">Ideas</a></h4></div><div class="proj_name"><div class="clear"></div><span class="fleft author">Hugh Mongous</span><table class="icons"><tbody><tr><td class="icos_proj_sm bleft"><a class="group1" href="img/proj2.jpg" title=""><img src="img/icon_search.png" alt=""></a></td><td class="icos_proj_sm bleft"><a href="projects.html#proj2"><img src="img/icon_lock.png" alt=""></a></td></tr></tbody></table><div class="clear"></div></div><div class="folder border"><a href="projects.html#proj2"><div class="author_proj proj_2"></div></a></div><!-- <div class="folder lorem lines"><div id="project2" value="325" class="slider"></div></div> --><p class="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate egestas sem, eu cursus ligula ullamcorper non. Curabitur tristique velit eu</p><div class="folder price topbordered"><div class="span4"><strong class="green"><span></span><span class="project_value" href="#project2"></span></strong>                                    <button class= "voteBtn" type="button"><strong>Vote</strong></button><p></p></div><div class="span4 bleft"><strong>0</strong><p>Votes</p></div><div class="span4 bleft"><strong>30 Days</strong><p>to launch</p></div></div></div></div>')
      })



})

// filter on page
//liking system
//funding sytstem
