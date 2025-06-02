/*************************
Name Of Task: Validation
Name Of Person: Achlys Vincent
Date: Term Two 2025
Purpose: Only allow valid input from the user. 
*************************/


//Variables
let userName;
const MINAGE = 0;
const MAXAGE = 130;
let userAge;
let userAgeIsInvalid = true;
let userMoney;

/*************************
Main Code
*************************/
function start() {
    
    if (!isNaN(userName) || userName == null || userName == " " || userName == " ") {
        userName = ("Nice try buckaroo, but that is an invalid prompt. Numbers are not aloud. Try again.");
    }

    userMoney = askUserMoney();
    if (userMoney == null || userMoney == " " || userMoney == " " || isNaN(userMoney)) {
        userMoney = ("Nope. Numbers only, or it isn't valid.");
    }
    if (userMoney = 5) {
        alert = "What you, a " +userAge + " year old named " +userName+ ", can afford:\nLindt Block - $5"
    } else if (userMoney = 4) {
        alert = "What you, a " +userAge + " year old named " +userName+ ", can afford:\nDairy Milk Block - $4"
    } else if (userMoney = 3) {
        alert = "What you, a " +userAge + " year old named " +userName+ ", can afford:\nKing Size Crunchy - $3"
    } else if (userMoney = 2) {
        alert = "What you, a " +userAge + " year old named " +userName+ ", can afford:\nMoro bar - $2"
    } else if (userMoney = 1) {
        alert = "What you, a " +userAge + " year old named " +userName+ ", can afford:\nMars bar - $1"
    } else if (userMoney = 0) {
        alert = "What you, a " +userAge + " year old named " +userName+ ", can afford:\nNothing. Oh No."
    } else if (userMoney > 5) {
        alert = "What you, a " +userAge + " year old named " +userName+ ", can afford:\nLindt Block - $5"
    }

    /*************************
    Functions
    *************************/



while (userAgeIsInvalid) {
    userAge = prompt ("Please import a valid age")
    if (userAge == null || userAge == " " || userAge == " " || isNaN(userAge)) {
        alert = ("Nope. Numbers only, or it isn't valid. It also has to be between " +MINAGE+ " and " +MAXAGE+ ", or I don't believe you.");
    } else {
        userAgeIsInvalid = false;
    }
}