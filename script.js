const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

let hrPositon = (hr*360/12)+(min*(360/60)/12);
let minPositon = (min*360/60)+(sec*(360/60)/60);
let secPositon = sec*360/60;

function runTheClock(){

    hrPositon = hrPositon+(30/3600);
    minPositon = minPositon+(1/60)*6;
    secPositon = secPositon+(360/60);

    HOURHAND.style.transform = "rotate(" + hrPositon + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPositon + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPositon + "deg)";

}

var interval = setInterval(runTheClock, 1000);
