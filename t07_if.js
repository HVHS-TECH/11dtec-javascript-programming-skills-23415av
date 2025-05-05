/*************************
Name Of Task: Conditional Statements
Name Of Person: Achlys Vincent
Date: Week Two Of Term Two 2025
Purpose: Use arrays to store several pieces of information.
*************************/

//Variables
let cookieArraynormal = ["Espresso Cookie", "Shadow Milk Cookie", "Wizard Cookie", "Pure Vanilla Cookie", "Clover Cookie"];
let cookieArray = ["Espresso Cookie\nMy Second Favourite", "Shadow Milk Cookie\nMy Fourth Favourite", "Wizard Cookie\nMy Nothing Favourite. He isn't even my favourite common.\nAngel Cookie takes that title", "Pure Vanilla Cookie\nMy Third Favourite", "Clover Cookie\nMy Forever Favourite\nI love Clover Cookie so much, I do not care if he is a rare, I love him anyway"];
/*************************
Main Code
*************************/
alert("Ever heard of Cookie Run Kingdom? Doesn't matter! In CRK there are multiple rarites and over one hundred cookies. \nToday, I have picked five cookies of different rarites for you to try and get.");
alert("Our Common cookie is " + cookieArraynormal[2]);
alert("Our Rare cookie is " + cookieArraynormal[4]);
alert("Our Epic cookie is " + cookieArraynormal[0]);
alert("Our Ancient cookie is " + cookieArraynormal[3]);
alert("Our Beast cookie is " + cookieArraynormal[1]);
var choice = prompt("Well. Now, it's time to get your cookie. Pick a number any number!\nAnd by any number I mean these five numbers.\n 0, 1, 2, 3, or 4.");
alert("And Cookie number " + choice + " is none other than " + cookieArray[choice]);
console.log("Why are you looking here? You got your cookie.\nIt's " + cookieArraynormal[choice]);
/*************************
Functions
*************************/