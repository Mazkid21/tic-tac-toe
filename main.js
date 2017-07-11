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
var winCombos = [[1,2,3],[4,5,6],[7,8,9],
[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

 var game = $(".gameBoard").one("click", function () {
	moves++;

	if (moves%2 === 0 && $('td').hasClass("gameBoard")) {
		$(this).addClass(X);
	}

	else { $(this).addClass(O);

}
// for each winning combo then alert ("o wins!")
// do another for "x"
 
	if ( $("#box1").hasClass("O") && $("#box2").hasClass("O") &&  $("#box3").hasClass("O") || 
		$("#box4").hasClass("O") && $("#box5").hasClass("O") &&  $("#box6").hasClass("O") || 
		$("#box7").hasClass("O") && $("#box8").hasClass("O") &&  $("#box9").hasClass("O") ||
		$("#box1").hasClass("O") && $("#box4").hasClass("O") &&  $("#box7").hasClass("O") ||
		$("#box2").hasClass("O") && $("#box5").hasClass("O") &&  $("#box8").hasClass("O") ||
		$("#box3").hasClass("O") && $("#box6").hasClass("O") &&  $("#box9").hasClass("O") ||
		$("#box1").hasClass("O") && $("#box5").hasClass("O") &&  $("#box9").hasClass("O") ||
		$("#box3").hasClass("O") && $("#box5").hasClass("O") &&  $("#box7").hasClass("O")) 
	{
 		return alert("Black Wins!!");
	 }

	 if ( $("#box1").hasClass("X") && $("#box2").hasClass("X") &&  $("#box3").hasClass("X") || 
		 $("#box4").hasClass("X") && $("#box5").hasClass("X") &&  $("#box6").hasClass("X") || 
		 $("#box7").hasClass("X") && $("#box8").hasClass("X") &&  $("#box9").hasClass("X") ||
		 $("#box1").hasClass("X") && $("#box4").hasClass("X") &&  $("#box7").hasClass("X") ||
		 $("#box2").hasClass("X") && $("#box5").hasClass("X") &&  $("#box8").hasClass("X") ||
		 $("#box3").hasClass("X") && $("#box6").hasClass("X") &&  $("#box9").hasClass("X") ||
		 $("#box1").hasClass("X") && $("#box5").hasClass("X") &&  $("#box9").hasClass("X") ||
		 $("#box3").hasClass("X") && $("#box5").hasClass("X") &&  $("#box7").hasClass("X")) 
	{
	
 	return alert("White Wins!!");
	 }

	 if (moves === 9)
	 {
	 	return alert("It's a Draw!!");
	 }


// $(function(){
// 	if ( $("#box3").hasClass("gameBoard", "o") && $("#box4").hasClass("gameBoard", "o") &&  $("#box5").hasClass("gameBoard", "o")) {
// 		console.log("Yay2!!!");
// 	}

// });


});


$(".reset").on("click", function () {
	
	location.reload();
	// $(".gameBoard").removeClass("X O");



});

