

let list; //initializes list so that it can be accessed in function
let intervalID; // sets intervalID as a global variable so that it can be accessed in functions
let count = 0; // for indexing the list




function textrun() //link your start button to this
{
    let usertext = document.getElementById("usertext").value; //use this to get the text the user entered
    list = usertext.split(" ");

    let intervaltext = document.getElementById("interval-text"); //replace this with the ID of the area you want the speedreading to happen

    textlength = list.length; //gets the length of the list
    countcheck = textlength - 1;
    speedget = document.getElementById("Speed").value; //tt
    speedget = Number(speedget); //tt
    speed = (60/speedget) * 1000; //tt

    

    intervalID = setInterval(function (){

        if (count >= textlength)
        {
            intervaltext.innerHTML = "<h1>" + "[Text Complete]" + "</h1>";
        }
        else{
            intervaltext.innerHTML = "<h1>" + list[count] + "</h1>";
        }
        count += 1;
    }, speed); //tt added speed variable instead of number
    
}


function textpause () //link your pause button to this
{
    clearInterval(intervalID);
}

function textreset () {
    count = 0;
}