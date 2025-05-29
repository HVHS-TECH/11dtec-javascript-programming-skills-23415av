/*************************
Name Of Task: Validation
Name Of Person: Achlys Vincent
Date: Term Two 2025
Purpose: Only allow valid input from the user. 
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
    if (userMoney = 5) {
        alert = "What you can afford:\nLindt Block - $5"
    } else if (userMoney = 4) {
        alert = "What you can afford:\nDairy Milk Block - $4"
    } else if (userMoney = 3) {
        alert = "What you can afford:\nKing Size Crunchy - $3"
    } else if (userMoney = 2) {
        alert = "What you can afford:\nMoro bar - $2"
    } else if (userMoney = 1) {
        alert = "What you can afford:\nMars bar - $1"
    } else if (userMoney = 0) {
        alert = "What you can afford:\nNothing. Oh No."
    } else if (userMoney > 5) {
        alert = "What you can afford:\nLindt Block - $5"
    } else { alert = "That was an invalid answer. Please try again." }

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
}