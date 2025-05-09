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
userAge = Number(userAge);
userMoney = askUserMoney ();
userMoney = Number(userMoney);
}
if (userMoney < 4){
    console.log("Sorry " + userName + ", that is not enough for a $4 chocolate bar\nSimply get more money and go buy one for me. I'm sure " + userAge + " is a good age to work at");
}
else if (userMoney > 4){
    console.log("Lookie lookie " + userName + "! You have more than enough for a $4 chocolate bar. You should buy one and give it to me\nInfact. Do it now please. All " + userAge + " year olds should");
}
else if (userMoney == 4){
    console.log(+ userName + ". You have JUST enough money for a $4 chocolate bar. If you choose to buy one, you should share with me\nNot should. Do. Please. At " + userAge + " you should be always doing this");
}
/*************************
Functions
*************************/