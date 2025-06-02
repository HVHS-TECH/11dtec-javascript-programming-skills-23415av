/*************************
Name Of Task: Validation
Name Of Person: Achlys Vincent
Date: Term Two 2025
Purpose: Only allow valid input from the user. 
*************************/


//Variables
let userName;
let userNameIsInvalid = true;
const MINAGE = 0;
const MAXAGE = 130;
let userAge;
let userAgeIsInvalid = true;
let userMoney;
let userMoneyIsInvalid = true;

/*************************
Main Code
*************************/
function start() {
    while (userNameIsInvalid) {
        userName = prompt("Please import a valid name");
        if (!isNaN(userName) || userName == null || userName == " " || userName == " ") {
            alert = ("Nope. That isn't a name. Those aren't letters.");
        } else {
            userNameIsInvalid = false;
        }
    }
    while (userAgeIsInvalid) {
        userAge = prompt("Please import a valid age");
        if (userAge == null || userAge == " " || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE) {
            alert = ("Nope. Numbers only, or it isn't valid. It also has to be between " + MINAGE + " and " + MAXAGE + ", or I don't believe you.");
        } else {
            userAgeIsInvalid = false;
        }
    }
    while (userMoneyIsInvalid) {
        userMoney = prompt("Please import a valid amount of money");
        if (userMoney == null || userMoney == " " || userMoney == " " || isNaN(userMoney)) {
            alert = ("Nope. Numbers only, or it isn't valid.");
        } else {
            userMoneyIsInvalid = false;
        }
    }

    if (userMoney = 5) {
        alert = "What you, a " + userAge + " year old named " + userName + ", can afford:\nLindt Block - $5"
    } else if (userMoney = 4) {
        alert = "What you, a " + userAge + " year old named " + userName + ", can afford:\nDairy Milk Block - $4"
    } else if (userMoney = 3) {
        alert = "What you, a " + userAge + " year old named " + userName + ", can afford:\nKing Size Crunchy - $3"
    } else if (userMoney = 2) {
        alert = "What you, a " + userAge + " year old named " + userName + ", can afford:\nMoro bar - $2"
    } else if (userMoney = 1) {
        alert = "What you, a " + userAge + " year old named " + userName + ", can afford:\nMars bar - $1"
    } else if (userMoney = 0) {
        alert = "What you, a " + userAge + " year old named " + userName + ", can afford:\nNothing. Oh No."
    } else if (userMoney > 5) {
        alert = "What you, a " + userAge + " year old named " + userName + ", can afford:\nLindt Block - $5"
    }
}

/*************************
Functions
*************************/




