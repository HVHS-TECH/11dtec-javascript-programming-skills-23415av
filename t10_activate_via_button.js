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

/*************************
Main Code
*************************/
function start() {
    userName = askUserName();
    userAge = askUserAge();
    userMoney = askUserMoney();
    if (userMoney < 4) {
        console.log("Sorry " + userName + ", that is not enough for a $4 chocolate bar\nSimply get more money and go buy one for me. I'm sure " + userAge + " is a good age to work at");
    }
    else if (userMoney > 4) {
        console.log("Lookie lookie " + userName + "! You have more than enough for a $4 chocolate bar. You should buy one and give it to me\nIn fact. Do it now please. All " + userAge + " year olds should");
    }
    else if (userMoney == 4) {
        console.log(+ userName + ". You have JUST enough money for a $4 chocolate bar. If you choose to buy one, you should share with me\nNot should. Do. Please. At " + userAge + " you should be always doing this");
    }else{console.log("WTF?")}
}

/*************************
Functions
*************************/
function askUserName() {
    var temp = prompt("Name");
    return (temp);
}
function askUserAge() {
    var temp2 = prompt("Age");
    return (temp2);
    userAge = Number(userAge);
}
function askUserMoney() {
    var temp3 = prompt("Money");
    return (temp3);
    userMoney = Number(userMoney);
}