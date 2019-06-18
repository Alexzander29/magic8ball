$(document).ready(function(){
	var magic8Ball = {};
	magic8Ball.listOfAnswers = ["Yes", "No", "Maybe", "Not today", "Indubitably", "Definitely", "Ask again later"];
	$("#answer").hide();
	magic8Ball.askQuestion = function(question) {
    $("#8ball").effect("shake");
		$("#answer").fadeIn(4000);
		var randomNumber = Math.random();
		var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberForListOfAnswers);
		var answer = this.listOfAnswers[randomIndex];
		$("#answer").text(answer);
		console.log(question);
		console.log(answer);
};
	var onClick = function () {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		setTimeout(
			function() {
				var question = prompt("Ask a yes/no question");
		magic8Ball.askQuestion(question);
	}, 500);
	};
	$("#questionButton").click(onClick);
});