"use strict";
function enter() {
    //gets the element from html
    const password = document.getElementById("password")
    const correctAnswer = "poster";
    let enterPassword = password.value;

    //determines if the password is right or not
    if(correctAnswer == enterPassword) {
        window.location.href = "/2PostersAndCodeBook/postersnote.html";
    }
    else{
        alert('Sorry, the password you entered is incorrect.');
    }

}