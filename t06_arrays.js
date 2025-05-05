/*************************
Name Of Task: Arrays Part One
Name Of Person: Achlys Vincent
Date: Week Two Of Term Two 2025
Purpose: Use arrays to store several pieces of information.
*************************/

//Variables

/*************************
Main Code
*************************/
let cookieArray = ["Espresso Cookie", "Shadow Milk Cookie", "Wizard Cookie", "Pure Vanilla Cookie", "Clover Cookie"];
alert("Ever heard of Cookie Run Kingdom? Doesn't matter! In CRK there are multiple rarites and over one hundred cookies. \nToday, I have picked five cookies of different rarites for you to try and get.");
alert("Our Common cookie is" + cookieArray[2]);
alert("Our Rare cookie is" + cookieArray[4]);
alert("Our Epic cookie is" + cookieArray[0]);
alert("Our Ancient cookie is" + cookieArray[3]);
alert("Our Beast cookie is" + cookieArray[1]);
var choice = prompt("Well. Now, it's time to get your cookie. Pick a number any number!\nAnd by any number I mean these five numbers.\n 0, 1, 2, 3, 4, or, 5.");
alert("And Cookie number" + choice + "is none other than" + cookieArray[choice]);
console.log("Why are you looking here? You got your cookie. It's " + cookieArray[choice]);
/*************************
Functions
*************************/