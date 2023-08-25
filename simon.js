
 var buttoncolor=["red","blue","green","yellow"];
  var gamepattern=[];
  var userclickedpattern=[];
  var level=0;
  
 $(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userclickedpattern.push(userChosenColour);
  animatepress(userChosenColour);
  playsound(userChosenColour);
  checkans(userclickedpattern.length-1);
 }
   );

  function checkans(currentlevel){
    if(gamepattern[currentlevel]===userclickedpattern[currentlevel]){
      console.log("success bhai raj");
      if(userclickedpattern.length===gamepattern.length)
      { setTimeout(function(){
        nextstep();
      },1000);
      }

    }
    else{
      playsound("wrong");
      $("body").addClass("gameover");
      setTimeout(function(){
        $("body").removeClass("gameover");
      },200);
    }
   
    
  }
function nextstep(){
     level++;
     userclickedpattern = [];
     $("#level-title").text("Level" + " "+ level);
    var randomnum=Math.floor(Math.random()*4);
    var randomcolor=buttoncolor[randomnum];
   
    gamepattern.push(randomcolor);
   
   var randomchooosecolor= "#"+randomcolor;

   $(randomchooosecolor).fadeOut().fadeIn(); 
    playsound(randomcolor);
   
}

function playsound(name){
  var audio = new Audio("sounds/" +name+ ".mp3");
  if(name==="wrong"){
    $("h1").text("game over, please press any key to restart");
    startover();
  }
  audio.play();
}


function animatepress(currentcolor){
  $("#"+currentcolor).addClass("pressed");
  
  setTimeout(function() {
    $("#"+currentcolor).removeClass("pressed");
}, 100);
}

$(document).keypress(function(){
 nextstep();
});

function startover(){
  level=0;
}














