/*************************
Name Of Task: Functions
Name Of Person: Achlys Vincent
Date: Week Two Of Term Two 2025
Purpose: Define and call functions. 
*************************/
console.log("I am so tired as of writing this code because I rearranged my entire room yesterday.");
console.log("Update: More tired");

//Variables
function askUserName() {
    userName = prompt("Go on");
    alert("Yes. Hi " + userName);
}
function askUserAge() {
    userAge = prompt("And the age was?");
    userAge = Number(userAge);
    alert("Only " + userAge + "?");
}
function askUserMoney() {
    userMoney = prompt("How much money you have?");
    userMoney = Number(userMoney);
    alert("Oh wow. " + userMoney + "Dollars.");
}

/*************************
Main Code
*************************/
alert("Welcome again. No I don't remeber your name. Yes I'm going to ask again");
askUserName ()
askUserAge ()
askUserMoney ()
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