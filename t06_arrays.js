/*************************
Name Of Task: Arrays Part One
Name Of Person: Achlys Vincent
Date: Week Two Of Term Two 2025
Purpose: Use arrays to store several pieces of information.
*************************/

//Variables
var cookie = ["Espresso Cookie\nWell done! You managed to get my second favourite cookie! \nHe's also the strongest cookie I have on my team.", "Shadow Milk Cookie\nOh Shadow Milk Cookie. Most of my friends think he's my favourite, but they're wrong, he ranks fourth.\nHe is my second strongest though, so I guess he wins.", "Wizard Cookie\nOh. The common. He isn't even my favourite common.\nIt's Angel Cookie.", "Pure Vanilla Cookie\nI WILL NOT FALTER!!!!\nThe ancient and my number three favourite cookie.\nI like the memes.", "Clover Cookie\nYAYAYYAY!!!!\nDespite only being a rare, Clover Cookie is forever my favourite cookie.\nI maxed him out as best I could, and one day he will become Over Powered."];
var extraCookie = ["Espresso Cookie", "Shadow Milk Cookie", "Wizard Cookie", "Pure Vanilla Cookie", "Clover Cookie"];
/*************************
Main Code
*************************/
alert("Ever heard of Cookie Run Kingdom? Doesn't matter! In CRK there are multiple rarites and over one hundred cookies. \nToday, I have picked five cookies of different rarites for you to try and get.");
alert("Our Common cookie is", cookie[2]);
alert("Our Rare cookie is", cookie[4]);
alert("Our Epic cookie is", cookie[0]);
alert("Our Ancient cookie is", cookie[3]);
alert("Our Beast cookie is", cookie[1]);
var choice = prompt("Well. Now, it's time to get your cookie. Pick a number any number!\nAnd by any number I mean these five numbers.\n 0, 1, 2, 3, 4, or, 5.");
alert("And Cookie number",choice,"is none other than",cookie[choice]);
console.log("Why are you looking here? You got your cookie. It's",extraCookie[choice]);
/*************************
Functions
*************************/