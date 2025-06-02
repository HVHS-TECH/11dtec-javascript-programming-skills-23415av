/*************************
Name Of Task: Arrays 
Name Of Person: Achlys Vincent
Date: Term Two 2025
Purpose: Use arrays to sort a list of items and access the different values. 
*************************/


//Variables
let userName;
let userNameIsInvalid = true;
const MINAGE = 0;
const MAXAGE = 130;
let userAge;
let userAgeIsInvalid = true;
const MINMONEY = 0;
const MAXMONEY = 10;
let userMoney;
let userMoneyIsInvalid = true;
let chocolateBars = ["Mars bar", "Moro bar", "King  Size Crunchy", "Dairy Milk Block", "Lindt Block"];
let chocolatePrices = ["$2", "$3.50", "$3", "$6", "$7"]

/*************************
Main Code
*************************/
function start() {
    while (userNameIsInvalid) {
        userName = prompt("Please import a valid name");
        if (!isNaN(userName) || userName == null || userName == " " || userName == " ") {
            alert("Nope. That isn't a name. Those aren't letters.");
        } else {
            userNameIsInvalid = false;
        }
    }
    while (userAgeIsInvalid) {
        userAge = prompt("Please import a valid age");
        if (userAge == null || userAge == " " || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE) {
            alert("Nope. Numbers only, or it isn't valid. It also has to be between " + MINAGE + " and " + MAXAGE + ", or I don't believe you.");
        } else {
            userAgeIsInvalid = false;
        }
    }
    for (i = 0; i < chocolateBars.length; i++){
        alert("Chocolate bar " +i+ " is " +chocolateBars[i]);
    }
    while (userMoneyIsInvalid) {
        userMoney = prompt("Please import a valid amount of money");
        if (userMoney == null || userMoney == " " || userMoney == " " || isNaN(userMoney) || userMoney < MINMONEY || userMoney > MAXMONEY) {
            alert("Try again. Make sure to read the prompt properly.");
        } else {
            userMoneyIsInvalid = false;
        }
    }

    if (userMoney == 5) {
        console.log("What you, a " + userAge + " year old named " + userName + ", can afford:\nLindt Block - $5");
    }if (userMoney == 4) {
        console.log("What you, a " + userAge + " year old named " + userName + ", can afford:\nDairy Milk Block - $4");
    }if (userMoney == 3) {
        console.log("What you, a " + userAge + " year old named " + userName + ", can afford:\nKing Size Crunchy - $3");
    }if (userMoney == 2) {
        console.log("What you, a " + userAge + " year old named " + userName + ", can afford:\nMoro bar - $2");
    }if (userMoney == 1) {
        console.log("What you, a " + userAge + " year old named " + userName + ", can afford:\nMars bar - $1");
    }if (userMoney == 0) {
        console.log("What you, a " + userAge + " year old named " + userName + ", can afford:\nNothing. Oh No.");
    }if (userMoney > 5) {
        console.log("What you, a " + userAge + " year old named " + userName + ", can afford:\nLindt Block - $5 with some left over money!");
    }
}

/*************************
Functions
*************************/
