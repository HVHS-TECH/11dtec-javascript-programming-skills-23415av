/*************************
Name Of Task: Conditional Statements
Name Of Person: Achlys Vincent
Date: Week Two Of Term Two 2025
Purpose: Use conditional statements to make decisions. 
*************************/

//Variables
alert("[Unknown_User]. We meet again.");
var userName = prompt("I seem to have forgotten your name. Care to type it in to remind me?");
var userAge = prompt("Well. I have no way of verifying if this is true or not " + userName +"\nSo. I've actually forgotten everything. Age pretty please.");
userAge = Number(userAge);
var currentYear = prompt("Did the change? No idea. I just hope you really are " +userAge+"?\nI'm guessing what year you were born in again!!!. Current year please.");
currentYear = Number(currentYear);
var pocketMoney = prompt("Ohh " +userName+ "\nHow much money do you have again?");
pocketMoney = Number(pocketMoney);
var answer;
/*************************
Main Code
*************************/
console.log("Hello again ",userName,
"\nAs of right now, which is ",currentYear," you are ",userAge," years old",);
answer = currentYear - userAge;
console.log("You were, without a doubt born in " ,answer);
console.log("You have" ,pocketMoney, "dollars",);
if (pocketMoney < 4){
    console.log("That is not enough for a $4 chocolate bar");
}
else if (pocketMoney > 4){
    console.log("Lookie lookie! You have more than enough for a $4 chocolate bar. You should buy one and give it to me");
}
else (pocketMoney == 4){
    console.log("You have JUST enough money for a $4 chocolate bar. If you choose to buy one, uou should share with me");
}
/*************************
Functions
*************************/