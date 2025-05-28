/*************************
Name Of Task: While loops
Name Of Person: Achlys Vincent
Date: Week Four Of Term Two 2025
Purpose: Use a while loop to repeat a section of code while a condition is met. 
*************************/
console.log("Beginning work");

//Variables
var loopChoice = prompt("Would you like this loop to play again?\nY for Yes\nN for No");

/*************************
Main Code
*************************/
while (loopChoice == "Y") {
    console.log("Loop repeating...");
    loopChoice = prompt("Look in the console log.\nWould you like this loop to play again?\nY for Yes\nN for No");
}

alert("Loop ended! Prepare for the second loop.")

var text = "Would you like this loop to play again?";
if (confirm(text) == true) {
 text = "Loop repeating...";
} else {
 text = "Loop ended!";
}



/*************************
Functions
*************************/