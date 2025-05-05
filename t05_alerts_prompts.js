/*************************
Name Of Task: Alerts and Prompts
Name Of Person: Achlys Vincent
Date: Week One Of Term Two 2025
Purpose: Use alerts to display messages. Use prompts to ask users for information Understand the difference between adding strings vs numbers Convert strings to numbers.
*************************/

//Variables
alert("Welcome [Unknown_User] to my first Javascript program!");
var userName = prompt("What is your name?");
var userAge = prompt("Nice to meet you " + userName +"\nWhy don't you tell me how old you are.");
userAge = Number(userAge);
var currentYear = prompt("You're " +userAge+"? Nice age! \nI bet I can guess when you were born though. Just type in the current year.");
currentYear = Number(currentYear);
var ageUp = prompt("Wanna know how old you'll be in however many years you want? \nType in the amount of years then.");
ageUp = Number(ageUp);
var ageDown = prompt("Okay, but how about the opposite?");
ageDown = Number(ageDown);
var pocketMoney = prompt("Just one more thing I need from you " +userName+ "\nHow much money do you currently have?");
pocketMoney = Number(pocketMoney);
var divide = 2
var answer;

/*************************
Main Code
*************************/
console.log("Hi",userName,
"\nAs of",currentYear,"you are",userAge,"years old",);
answer = currentYear - userAge;
console.log("You were born in" ,answer);
answer = userAge + ageUp;
console.log("In",ageUp,"years you will be" ,answer, "years old");
answer = userAge - ageDown;
console.log("And" ,ageDown, "years ago you were" ,answer, "years old",
"\nYou have" ,pocketMoney, "dollars",);

answer = pocketMoney / divide;
console.log("Half of your money is" ,answer);

/*************************
Functions
*************************/