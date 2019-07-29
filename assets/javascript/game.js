$(document).ready(function() {

	var rand = [];

	for (var r = 21; r < 121; r++) {
		rand.push(r);
	}

		var crystals = [];

	for (var cr = 1; cr < 13; cr++) {

		crystals.push(cr);
	};
	

	
	var randNumber; // number to match
	var crystalNumbers = []; // for array of random crystal values

	var cr1 = Math.floor(Math.random() * (121 - 21) + 21);
	var cr2 = Math.floor(Math.random() * (121 - 21) + 21);
	var cr3 = Math.floor(Math.random() * (121 - 21) + 21);
	var cr4 = Math.floor(Math.random() * (121 - 21) + 21);
	console.log (cr1);
	console.log (cr2);
	console.log (cr3);
	console.log (cr4);
	$("#button-1").attr("crystalvalue",cr1);
	$("#button-2").attr("crystalvalue",cr2);
	$("#button-3").attr("crystalvalue",cr3);
	$("#button-4").attr("crystalvalue",cr4)

  var totalScore = 0; // user's score

	var wins = 0;
	var losses = 0;

	// ******* FUNCTIONS *******

	// Random number picker
	function pickRandomNumber(arr) {

		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x;
		$("#randomNumber").html(randNumber);

		console.log("random number: " + randNumber);

	} 

	// pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}
    // check which numbers have been picked
		console.log("crystal numbers: " + crystalNumbers);

	} // END of pickRandomCrystals function

	function crystalValues(arr) {

		// change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		cr1 = arr[0];
		cr2 = arr[1];
		cr3 = arr[2];
		cr4 = arr[3];
	} // END of crystalValues function

	function gameReset(x) {

		crystalNumbers = []; // clears crystal number values

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} // END of gameReset function

	// *** GAME SETTINGS AT START ***

	pickRandomNumber(rand); // random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		// crystal button functions

		$("#button-1").on("click", function() {

			totalScore += cr1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += cr2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += cr3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += cr4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU DID IT !! CONGRATS, YOU WIN!!")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("SORRY...YOU LOSE!")}, 200);
		}
	});

}); 
