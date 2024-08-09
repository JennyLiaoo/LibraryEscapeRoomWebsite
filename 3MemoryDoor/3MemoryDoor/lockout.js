    alert('You have tried too many times in the last challenge. You must complete this to go back and try again')

    //every second the clock goes by 1 second
    var intervals = setInterval(clock, 1000);
    var password = 43;

    function clock() {
      var d = new Date();
      //the local time string gets the time and puts it on the page
      document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    }
    var timeleft = 20;
    var timer = setInterval(function(){
        //clear the interval set 
            if(timeleft < 0){
                clearInterval(timer);
            }

            //makes the progress bar move a certain amount every 4000 milliseconds/ 4 seconds
            document.getElementById("progressBar").value = 20 - timeleft;
            timeleft -= 1;
         //the progress bar moves once every four seconds except the first time   
    }, 4000);

    function enter(){
        const answer = document.getElementById("length");
        let finalAnswer = Number(answer.value);

        //check if the password is correct or not
        if (password = finalAnswer){
            alert("correct! You may go back and try again now")
            window.location.href = "Memorization.html";
        }
        else{
            alert("incorrect");
        }
    }

    function distract(){
        //if they fall for the trap, once the text is tapped, it is revealed that that had nothing to do with the puzzle
        document.getElementById("distraction").innerHTML = "well, this is actually nothing, it's just to take up your time";
    }