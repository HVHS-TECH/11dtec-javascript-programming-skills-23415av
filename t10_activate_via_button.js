/*************************
Name Of Task: Activate VIA  button
Name Of Person: Achlys Vincent
Date: Week Two Of Term Two 2025
Purpose: Get a html button to work.
*************************/


//Variables
let userName;
let userAge;
let userMoney;
function askUserName() {
    userName = prompt("Name");
}
function askUserAge() {
    userAge = prompt("Age");
    userAge = Number(userAge);
}
function askUserMoney() {
    userMoney = prompt("Money");
    userMoney = Number(userMoney);
}
/*************************
Main Code
*************************/
function start () {
userName = askUserName ();
userAge = askUserAge ();
userMoney = askUserMoney ();
}

if (userMoney < 4){
    console.log("That is not enough for a $4 chocolate bar\nSimply get more money and go buy one for me");
}
else if (userMoney > 4){
    console.log("Lookie lookie! You have more than enough for a $4 chocolate bar. You should buy one and give it to me\nInfact. Do it now please");
}
else if (userMoney == 4){
    console.log("You have JUST enough money for a $4 chocolate bar. If you choose to buy one, you should share with me\nNot should. Do. Please.");
}
/*************************
Functions
*************************/