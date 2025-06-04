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
let message = "The different chocolate bars are:"
const MINMONEY = 0;
const MAXMONEY = 10;
let userMoney;
let userMoneyIsInvalid = true;
let chocolateBars = ["Mars bar", "Moro bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"];
let chocolatePrices = [2, 2.50, 3, 6, 7]

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

    for (i = 0; i < chocolateBars.length; i++){
        message = message + "\nChocolate bar "+i+" is "+chocolateBars[i];
    }
    alert(message);

    while (userMoneyIsInvalid) {
        userMoney = prompt("Please import a valid amount of money");
        if (userMoney == null || userMoney == " " || userMoney == " " || isNaN(userMoney) || userMoney < MINMONEY || userMoney > MAXMONEY) {
            alert("Try again. Make sure to read the prompt properly.");
        } else {
            userMoneyIsInvalid = false;
        }
    }

    for (i = 0; i < chocolatePrices.length; i++){
        if(userMoney == chocolatePrices[i]) {
            alert("The most expensive chocolate bar you can afford is the "+chocolateBars[i]+" for $" +chocolatePrices[i]);
            break;
      } if(userMoney > 5) {
            alert("The most expensive chocolate bar you can afford is the Lindt block for $5");
            break;
      } if(userMoney < 1) {
            alert("You are unable to afford any chocolate bar.");
            break;
      } if(userMoney >= chocolatePrices[i]) {
            alert("The most expensive chocolate bar you can afford is the "+chocolateBars[i]+" for $" +chocolatePrices[i]);
            break;
}
}
}


/*************************
Functions
*************************/
