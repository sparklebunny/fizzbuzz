$(document).ready(function(){

	$("#myNumber").keypress(function(event) {
			if (event.which == 13) {
				executeTextbox();
			}
		})

	var executeTextbox = function () {
		var inputValue = +$("#myNumber").val();
		$("#display").html("");

		for (var i = 1; i <= inputValue; i++) {
			var result = checkNumber(i);
			$("#display").append("<p>" + result + "</p>");
		}	
	};

	$("#enterButton").click(executeTextbox); 

	$("#myNumber").text(function() {
		if($("#myNumber").val() == " "); {
			alert("Enter a number from 1 - 100");
		}
	});

	var checkNumber = function (number) {

		if (number % 15 == 0) {
			return "FizzBuzz";
		} else if (number % 5 == 0) {
			return "Buzz";
		} else if (number % 3 == 0) {
			return "Fizz";
		} else {
			return number;
		}
	}

});


