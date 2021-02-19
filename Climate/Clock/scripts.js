let batteryFill = document.getElementById("batteryFill");
let endingDate = new Date("Jan 2, 2028 5:37:25").getTime();
let startingDate = new Date("Jan 1, 1801 0:00:00").getTime();
let monthSelect = document.getElementById("monthSelect");
let dateSelect = document.getElementById("dateSelect");
let yearSelect = document.getElementById("yearSelect");
let hourSelect = document.getElementById("hourSelect");
let minuteSelect = document.getElementById("minuteSelect");
let secondSelect = document.getElementById("secondSelect");
let calculateButton = document.getElementById("submitBtn");
let resetButton = document.getElementById("resetBtn");
let buttons = document.getElementsByClassName("buttons");

console.log("endingDate");
console.log("startingDate");

batteryFill.style.width = 100 + "%";
batteryFill.style.borderBottomLeftRadius = 20 + "px";
batteryFill.style.borderTopLeftRadius = 20 + "px";
batteryFill.style.borderBottomRightRadius = 20 + "px";
batteryFill.style.borderTopRightRadius = 20 + "px";


let myInterval = setInterval(interval, 1000);
function interval() {
    let now = new Date().getTime();
    // console.log(now);
    let fillDifference = endingDate - startingDate;
    let currentYearDifference = endingDate - now;
    // console.log(currentYearDifference);
    // console.log(fillDifference);
    let fillSize = interpolate(now, endingDate, startingDate, 0, 100);
    batteryFill.style.width = fillSize + "%";
    // console.log(fillSize);
    document.getElementById("percentage").innerHTML = fillSize + "%";


 //red - less than or equal to 20%//
 if (fillSize <=20){
    batteryFill.style.backgroundColor = "#FF0000";
    batteryFill.style.borderBottomRightRadius = 0 + "px";
    batteryFill.style.borderTopRightRadius = 0 + "px";;
}

//green - greater than 30%//
if (fillSize > 30){
    batteryFill.style.backgroundColor = "green";
    batteryFill.style.borderBottomRightRadius = 0 + "px";
    batteryFill.style.borderTopRightRadius = 0 + "px";;
}

//yellow - less than or equal to 30% and greater than 20%//
if (fillSize <= 30 && fillSize > 20){
    batteryFill.style.backgroundColor = "#FFCF1C";
    batteryFill.style.borderBottomRightRadius = 0 + "px";
    batteryFill.style.borderTopRightRadius = 0 + "px";;
}

//border radius//
if (batteryFill.style.width == 100){
    batteryFill.style.borderBottomRightRadius = 20 + "px";
    batteryFill.style.borderTopRightRadius = 20 + "px";
    batteryFill.style.borderBottomLeftRadius = 20 + "px";
    batteryFill.style.borderTopLeftRadius = 20 + "px";
} 
};

let count =1;

resetButton.onclick = function() {
    // console.log("hello");
    setInterval(function() {
        let now = new Date().getTime();
        // console.log(now);
        let fillDifference = endingDate - startingDate;
        let currentYearDifference = endingDate - now;
        // console.log(currentYearDifference);
        // console.log(fillDifference);
        let fillSize = interpolate(now, endingDate, startingDate, 0, 100);
        batteryFill.style.width = fillSize + "%";
        // console.log(fillSize);
        document.getElementById("percentage").innerHTML = fillSize + "%";
    
    
     //red - less than or equal to 20%//
     if (fillSize <=20){
        batteryFill.style.backgroundColor = "#FF0000";
    }
    
    //green - greater than 30%//
    if (fillSize > 30){
        batteryFill.style.backgroundColor = "green";
    }
    
    //yellow - less than or equal to 30% and greater than 20%//
    if (fillSize <= 30 && fillSize > 20){
        batteryFill.style.backgroundColor = "#FFCF1C";
    }
    
    //border radius//
    if (batteryFill.style.width == 100){
        batteryFill.style.borderBottomRightRadius = 20 + "px";
        batteryFill.style.borderTopRightRadius = 20 + "px";
    } 
    
    }, 1000);
    monthSelect.value = "Month";
    yearSelect.value = "Year";
    hourSelect.value = "Hour";
    minuteSelect.value = "Minute";
    dateSelect.value = "Date";
    secondSelect.value = "Second";
}

calculateButton.onclick = function(){
    clearInterval(myInterval);
    let inputStartingDate = (monthSelect.value + " " + dateSelect.value + ", " + yearSelect.value + " " + hourSelect.value + ":" + minuteSelect.value+ ":" + secondSelect.value);
    let userStartingDate = new Date(inputStartingDate).getTime();
    let fillSizeUserInput = interpolate(userStartingDate, endingDate, startingDate, 0, 100);
     batteryFill.style.borderRadius = 20 + "px";
    batteryFill.style.width = fillSizeUserInput + "%";
    document.getElementById("percentage").innerHTML = fillSizeUserInput + "%";
    // console.log(fillSizeUserInput);
    if (fillSizeUserInput <=20){
        batteryFill.style.backgroundColor = "#FF0000";
        batteryFill.style.borderTopLeftRadius = 20 + "px";
        batteryFill.style.borderBottomLeftRadius = 20 + "px";;
        batteryFill.style.borderBottomRightRadius = 0 + "px";
        batteryFill.style.borderTopRightRadius = 0 + "px";;
    }
    //green - greater than 30%//
    if (fillSizeUserInput > 30){
        batteryFill.style.backgroundColor = "green";
        batteryFill.style.borderTopLeftRadius = 20 + "px";
        batteryFill.style.borderBottomLeftRadius = 20 + "px";;
        batteryFill.style.borderBottomRightRadius = 0 + "px";
        batteryFill.style.borderTopRightRadius = 0 + "px";;
    }
    //yellow - less than or equal to 30% and greater than 20%//
    if (fillSizeUserInput <= 30 && fillSizeUserInput > 20){
        batteryFill.style.backgroundColor = "#FFCF1C";
        batteryFill.style.borderTopLeftRadius = 20 + "px";
        batteryFill.style.borderBottomLeftRadius = 20 + "px";;
        batteryFill.style.borderBottomRightRadius = 0 + "px";
        batteryFill.style.borderTopRightRadius = 0 + "px";;
    }
    //border radius//
    if (fillSizeUserInput == 100){
        batteryFill.style.borderTopLeftRadius = 20 + "px";
        batteryFill.style.borderBottomLeftRadius = 20 + "px";;
        batteryFill.style.borderBottomRightRadius = 20 + "px";
        batteryFill.style.borderTopRightRadius = 20 + "px";;    }
  }

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }  

let infoButton = document.getElementById("info");
let infoPopUp = document.getElementById("infoPopUp");
let closeButton = document.getElementsByClassName("bi-x-circle-fill");
let extraInfo = document.getElementById("extraInfo");
let xOut = document.getElementById("xout");
let plugIn = document.getElementById("plugin")

infoButton.onclick = function(){
    console.log("syd");
    closeButton.display = "contents";
    infoPopUp.style.backgroundColor = "white";
    infoButton.style.opacity = "0";
    xOut.style.opacity = "1";
    plugIn.style.opacity = "0"
}

xOut.onclick = function(){
    xOut.style.opacity = "0";
    infoButton.style.opacity = "1";
    infoPopUp.style.backgroundColor = "black";
    plugIn.style.opacity = "1";
}




//DO NOT TOUCH
function interpolate(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
 }
