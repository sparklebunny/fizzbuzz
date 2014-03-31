$(document).ready(function(){


$("#enterButton").click(function(button) {

	var inputValue = $("#myNumber").val();

	$("#display").html("");

	for (var i = 1; i <= inputValue; i++) {

		if ((i % 5 == 0) && (i % 3 == 0)) {
			$("#display").append("<p>FizzBuzz</p>");
		} else if (i % 5 == 0) {
			$("#display").append("<p>Buzz</p>");
		} else if (i % 3 == 0) {
			$("#display").append("<p>Fizz</p>");
		} else {
			$("#display").append("<p>" + i + "</p>");
		}

	}
});

});

// replace console.log to append output to div




