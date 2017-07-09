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

// $('.game').click(function () {
//   var classes = ['X','O','n'];
//   $('.game').each(function(){
//     this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
//   });
// });

// $('.game').click(function () {
//   var classes = ['X','O','n'];
//   $('#box12').each(function(){
//     this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
//   });
// });

// $('.game').click(function () {
//   var classes = ['X','O','n'];
//   $('#box13').each(function(){
//     this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
//   });
// });

// build three classes X O Moves, click function runs through X and O 

var X = "X";
var O = "O";
var moves = 0; 

$(".gameBoard").on("click", function () {
	moves++;

	if (moves%2 === 0) {
		$(this).addClass(X);
	}

	else { $(this).addClass(O);
}


});