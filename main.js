// $(".box11").bind("click", function(e) {
	
// 	$(".box11").toggleClass(".X");
// 	e.preventDefault(".box11");
// 	console.log("yay");
// });

//  $(function(){
//  	$(".box11").click(function(){
// 		$(".box11").css("background-color", "red").append("<h1>X</h1>").css("position", "inline");

// });
//  });

$('#box11').click(function () {
  var classes = ['X','O','n'];
  $('#box11').each(function(){
    this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  });
});

$('#box12').click(function () {
  var classes = ['X','O','n'];
  $('#box12').each(function(){
    this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  });
});

$('#box13').click(function () {
  var classes = ['X','O','n'];
  $('#box13').each(function(){
    this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  });
});