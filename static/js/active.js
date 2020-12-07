

let list;
let intervalID;
let count = 0;




function textrun()
{
    let usertext = document.getElementById("usertext").value;
    list = usertext.split(" ");

    let intervaltext = document.getElementById("interval-text");

    textlength = list.length;
    countcheck = textlength - 1;
    speedget = document.getElementById("Speed").value;
    speedget = Number(speedget);
    speed = (60/speedget) * 1000;

    

    intervalID = setInterval(function (){

        if (count >= textlength)
        {
            intervaltext.innerHTML = "<h1>" + "[Text Complete]" + "</h1>";
        }
        else{
            intervaltext.innerHTML = "<h1>" + list[count] + "</h1>";
        }
        count += 1;
    }, speed);
    
}


function textpause ()
{
    clearInterval(intervalID);
}

function textreset () {
    count = 0;
}