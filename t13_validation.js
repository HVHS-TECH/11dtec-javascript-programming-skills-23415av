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
        alert = "What you can afford:\n"
    } else if (userMoney = 4) {
        alert = "What you can afford:\n"
    } else if (userMoney = 3) {
        alert = "What you can afford:\n"
    } else if (userMoney = 1) {
        alert = "What you can afford:\nMars bar - $1"
    } else if (userMoney = 0) {
        alert = "What you can afford:\nNothing. Oh No."
    } else { alert = "That was an invalid answer. Please try again." }

    /*************************
    Functions
    *************************/
    function askUserName() {
        var temp = prompt("Name");
        return (temp);
        if (userName == Number) {
            alert = "Invalid name. Please refresh page."
        } else { alert = "Nice name." }
    }
    function askUserAge() {
        var temp2 = prompt("Age");
        return (temp2);
        userAge = Number(userAge);
        if (userAge == Number) {
            alert = "Nice age."
        } else { alert = "Invalid age. Please refresh page." }
    }
    function askUserMoney() {
        var temp3 = prompt("Money");
        return (temp3);
        userMoney = Number(userMoney);
    }}