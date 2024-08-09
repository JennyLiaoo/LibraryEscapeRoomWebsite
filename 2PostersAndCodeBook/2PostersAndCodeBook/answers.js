"use strict";

//The code work enter button activates this function
function titlesubmit() {
    //The input for title
    const title = document.getElementById("title").value;
    //Checking of the input for the code work/the codebook's title. 
    if (title=="ATTACK"|| title == "Attack"|| title=="attack") {
        //Next instructions
        document.getElementById("titleoutput").innerHTML="Congratulations! That is the<br>code word. ATTACK is the<br>codebook's title. Find the book<br>with that title and click on it.";
        //Hide the input box
        document.getElementById("firstinput").style.display="none";
        //Display the link to the codebook that was previously not there
        document.getElementById("codebook").innerHTML=`<a href="Codebook.pdf"><img src="Attack.png" target="_blank" alt="codebook" style="width: 9px;"></a>`;
        //Display the next question
        document.getElementById("secondinput").innerHTML=`<label for="description">What is the description of<br>the next book that you<br>found in the code book?</label><br>
        <input type="text" id="description" name="description" value="">
        <button onclick="descriptionsubmit()">Enter</button>`;
    } else {
        window.location.href="warning.html";
    }

}
//The description enter button activates this function
function descriptionsubmit() {
    //The input for description
    const description = document.getElementById("description").value;
    //Checking of the input for the description
    if (description == "thick red book with golden design" || description == "THICK RED BOOK WITH GOLDEN DESIGN" || description == "Thick red book with golden design" || description == "Thick Red Book With Golden Design"){
        document.getElementById("descriptionoutput").innerHTML="Congratulations! Thick red<br>book with golden design is the <br> description of the book to the<br>secret door. Find the book<br>that matches the description to<br>bring you the the next challenge.";
        document.getElementById("secondinput").style.display="none";
        document.getElementById("secretdoor").innerHTML=`<a href="/3MemoryDoor/Memorization.html"><img src="Door.png" alt="door" style="width:10px;" class="door"></a>`;
    } else {
        window.location.href="warning.html";
    }
}