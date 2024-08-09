"use strict";
//a random number from 10000000000 to 99999999999 will be chosen
let randomNumber = Math.random()*99999999999 + 10000000000;
let password = Math.floor(randomNumber);
//the max numbers of attempts allowed and the number of attempts you start with
const maxAttempts = 3;
let numberAttempts = 0;

function enter() {

    //checks to see if what you wrote in the textbox it is right or not, and then something happens depending on what you wrote in the textbox
    if(numberAttempts < maxAttempts) {
        const answer =  document.getElementById("memory");
        let finalAnswer = Number(answer.value);

        if (isNaN (finalAnswer)) {
            alert("no");
            reset();
        }
        else if (password > finalAnswer) {
            alert("incorrect");
            reset();
        }
        else if (password < finalAnswer) {
            alert("not right");
            reset();
        }
        else {
            window.location.href = "/4MemoryMaze/Memorymaze.html";
        }
    }

    //If you have exceeded the number of attempts, you will be redirected to this new page. You will have to complete it in order to get back to this page for you to try again
    else if(numberAttempts == maxAttempts) {
       window.location.href = "lockout.html";

    }

    //each time you try, your number of attempts will increase by one
    numberAttempts = numberAttempts + 1;


}
function showNum() {
    //everytime show numbers button is clicked it will reset the password to be a different number
    reset();

    //this is the given password
    alert("remember this number: " + password + ", and type it into the box");

}

function reset() {
    //resets the number/password
    password = Math.floor(Math.random()*99999999999) + 10000000000;
}