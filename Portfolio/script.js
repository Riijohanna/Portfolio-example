
function move() {
  var elem = document.getElementById("bars");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      // elem.innerHTML = width * 1 + '%';
    }
  }
}
document.getElementById("first").onscroll = function() {updateStars()};
function updateStars() {
  document.location.reload(true);
}
document.getElementById("who").onscroll = function() {update()};
function update(){
  move();
}

function backtotopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function downFunction() {
  document.body.scrollTop = 966;
  document.documentElement.scrollTop = 966;
}
//Canvas starts here:
var canvas = document.getElementById('space'); //these first two lines make it happen, you have to make variables first...
var ctx = canvas.getContext('2d');
(function($){

  function generateStar(canvas, ctx, starRadius){
			ctx.beginPath();
			ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius*Math.random(), 0, Math.PI*2, false);
      //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

      var rand = Math.random();
      if(rand <= 0.5){
				  ctx.fillStyle = "rgba(255, 255, 255, 1)";
				  ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
				  ctx.shadowBlur = 3;
			}
			else if(rand > 0.75){
				  ctx.fillStyle = "rgba(255, 254, 196, 1)";
				  ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
				  ctx.shadowBlur = 4;
			}
			else{
				  ctx.fillStyle = "rgba(192, 247, 255, 1)";
				  ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
				  ctx.shadowBlur = 7;
			}
			ctx.fill();
	}

  $(function(){

		var canvas = document.getElementById("space");
		var context = canvas.getContext("2d");

    onresize = function(){
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    onresize();

    interval = setInterval(
      function(interval){
        generateStar(canvas, context, 3);
      }
      , 24);

    setTimeout( // Stop sreating stars after 10s
      function(){ clearInterval(interval); }
      ,10000
    );

	});
})(jQuery);
