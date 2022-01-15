let curve1 = document.getElementById("Layer_1");
let curve2 = document.getElementById("Layer_2");
let curve3 = document.getElementById("Layer_3");
let curve4 = document.getElementById("Layer_4");
let curve5 = document.getElementById("Layer_5");
let curve6 = document.getElementById("Layer_6");

let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");
let circle5 = document.getElementById("circle5");
let circle6 = document.getElementById("circle6");


let ColorCurve1A = document.getElementById("ColorCurve1A");
let ColorCurve1B = document.getElementById("ColorCurve1B");
let ColorCurve2A = document.getElementById("ColorCurve2A");
let ColorCurve2B = document.getElementById("ColorCurve2B");
let ColorCurve3A = document.getElementById("ColorCurve3A");
let ColorCurve3B = document.getElementById("ColorCurve3B");
let ColorCurve4A = document.getElementById("ColorCurve4A");
let ColorCurve4B = document.getElementById("ColorCurve4B");
let ColorCurve5A = document.getElementById("ColorCurve5A");
let ColorCurve5B = document.getElementById("ColorCurve5B");
let ColorCurve6A = document.getElementById("ColorCurve6A");
let ColorCurve6B = document.getElementById("ColorCurve6B");


let sliderCirlces = document.getElementById("slider-circles");
let sliderCurves = document.getElementById("slider-curves");

let centerCircle = document.getElementById("centerCirlce");


sliderCirlces.oninput = function(){
    circle1.setAttribute("r", sliderCirlces.value);
    circle2.setAttribute("r", sliderCirlces.value);
    circle3.setAttribute("r", sliderCirlces.value);
    circle4.setAttribute("r", sliderCirlces.value);
    circle5.setAttribute("r", sliderCirlces.value);
    circle6.setAttribute("r", sliderCirlces.value);
}

sliderCurves.oninput = function(){
    console.log(sliderCurves.value +"px");
    curve1.setAttribute("stroke-width", sliderCurves.value + "px");
    curve2.setAttribute("stroke-width", sliderCurves.value + "px");
    curve3.setAttribute("stroke-width", sliderCurves.value + "px");
    curve4.setAttribute("stroke-width", sliderCurves.value + "px");
    curve5.setAttribute("stroke-width", sliderCurves.value + "px");
    curve6.setAttribute("stroke-width", sliderCurves.value + "px");
    console.log(sliderCurves.value)
}



let pinkPalette = ["#C26EA6", "#F0D1E6", "#ED87CB", "#BAA2B2", "#BA6A9F", "#6B335C"];
let orangePalette = ["#7D4920", "#FDBE8E", "#FC9342", "#7D5E46", "#C97534", "#FF940C"];
let yellowPalette = ["#FFD746", "#F2FA92", "#DEBB3C", "#FFC95C", "#F7E791", "#FCE907"];
let redPalette = ["#801619", "#FF787C", "#FF2B33", "#803C3E", "#CC2328", "#8F284E"];
let greyPalette = ["#B2B4B8", "#D2D6E1", "#C1C3C7", "#383D4D", "#8F9194", "#525254"];
let greenPalette = ["#589643", "#C5F2B6", "#8DF06C", "#5B7054", "#6FBD55", "#27421E"];
let bluePalette = ["#274263", "#A0C0E8", "#5996E3", "#455263", "#4575B0", "#212254"];
let purplePalette = ["#7C5CD0", "#B6A5DF", "#825FD9", "#494259", "#6349A6", "#453B85"];
let fullPalette= [pinkPalette, orangePalette, yellowPalette, redPalette, greyPalette, greenPalette, bluePalette, purplePalette];
let sliderColors = document.getElementById("color-curves");
let buttonPalette = document.getElementById("palette-button");


let randomPink1 = pinkPalette[Math.floor(Math.random() * pinkPalette.length)];
let randomPink2 = pinkPalette[Math.floor(Math.random() * pinkPalette.length)];
let randomPink3 = pinkPalette[Math.floor(Math.random() * pinkPalette.length)];
let randomPink4 = pinkPalette[Math.floor(Math.random() * pinkPalette.length)];
let randomPink5 = pinkPalette[Math.floor(Math.random() * pinkPalette.length)];
let randomPink6 = pinkPalette[Math.floor(Math.random() * pinkPalette.length)];
let randomOrange1 = orangePalette[Math.floor(Math.random() * orangePalette.length)];
let randomOrange2 = orangePalette[Math.floor(Math.random() * orangePalette.length)];
let randomOrange3 = orangePalette[Math.floor(Math.random() * orangePalette.length)];
let randomOrange4 = orangePalette[Math.floor(Math.random() * orangePalette.length)];
let randomOrange5 = orangePalette[Math.floor(Math.random() * orangePalette.length)];
let randomOrange6 = orangePalette[Math.floor(Math.random() * orangePalette.length)];
let randomYellow1 = yellowPalette[Math.floor(Math.random() * yellowPalette.length)];
let randomYellow2 = yellowPalette[Math.floor(Math.random() * yellowPalette.length)];
let randomYellow3 = yellowPalette[Math.floor(Math.random() * yellowPalette.length)];
let randomYellow4 = yellowPalette[Math.floor(Math.random() * yellowPalette.length)];
let randomYellow5 = yellowPalette[Math.floor(Math.random() * yellowPalette.length)];
let randomYellow6 = yellowPalette[Math.floor(Math.random() * yellowPalette.length)];
let randomRed1 = redPalette[Math.floor(Math.random() * redPalette.length)];
let randomRed2 = redPalette[Math.floor(Math.random() * redPalette.length)];
let randomRed3 = redPalette[Math.floor(Math.random() * redPalette.length)];
let randomRed4 = redPalette[Math.floor(Math.random() * redPalette.length)];
let randomRed5 = redPalette[Math.floor(Math.random() * redPalette.length)];
let randomRed6 = redPalette[Math.floor(Math.random() * redPalette.length)];
let randomGrey1 = greyPalette[Math.floor(Math.random() * greyPalette.length)];
let randomGrey2 = greyPalette[Math.floor(Math.random() * greyPalette.length)];
let randomGrey3 = greyPalette[Math.floor(Math.random() * greyPalette.length)];
let randomGrey4 = greyPalette[Math.floor(Math.random() * greyPalette.length)];
let randomGrey5 = greyPalette[Math.floor(Math.random() * greyPalette.length)];
let randomGrey6 = greyPalette[Math.floor(Math.random() * greyPalette.length)];
let randomGreen1 = greenPalette[Math.floor(Math.random() * greenPalette.length)];
let randomGreen2 = greenPalette[Math.floor(Math.random() * greenPalette.length)];
let randomGreen3 = greenPalette[Math.floor(Math.random() * greenPalette.length)];
let randomGreen4 = greenPalette[Math.floor(Math.random() * greenPalette.length)];
let randomGreen5 = greenPalette[Math.floor(Math.random() * greenPalette.length)];
let randomGreen6 = greenPalette[Math.floor(Math.random() * greenPalette.length)];
let randomBlue1 = bluePalette[Math.floor(Math.random() * bluePalette.length)];
let randomBlue2 = bluePalette[Math.floor(Math.random() * bluePalette.length)];
let randomBlue3 = bluePalette[Math.floor(Math.random() * bluePalette.length)];
let randomBlue4 = bluePalette[Math.floor(Math.random() * bluePalette.length)];
let randomBlue5 = bluePalette[Math.floor(Math.random() * bluePalette.length)];
let randomBlue6 = bluePalette[Math.floor(Math.random() * bluePalette.length)];
let randomPurple1 = purplePalette[Math.floor(Math.random() * purplePalette.length)];
let randomPurple2 = purplePalette[Math.floor(Math.random() * purplePalette.length)];
let randomPurple3 = purplePalette[Math.floor(Math.random() * purplePalette.length)];
let randomPurple4 = purplePalette[Math.floor(Math.random() * purplePalette.length)];
let randomPurple5 = purplePalette[Math.floor(Math.random() * purplePalette.length)];
let randomPurple6 = purplePalette[Math.floor(Math.random() * purplePalette.length)];

circle1.style.fill = "#231f20";
circle1.style.stroke = "#231f20";
circle2.style.fill = "#231f20";
circle2.style.stroke = "#231f20";
circle3.style.fill = "#231f20";
circle3.style.stroke = "#231f20";
circle4.style.fill = "#231f20";
circle4.style.stroke = "#231f20";
circle5.style.fill = "#231f20";
circle5.style.stroke = "#231f20";
circle6.style.fill = "#231f20";
circle6.style.stroke = "#231f20";


sliderColors.oninput = function(){
    console.log(sliderColors.value);
    console.log(fullPalette[sliderColors.value]);
    ColorCurve1A.style.stroke = (fullPalette[sliderColors.value][0]);
    ColorCurve1B.style.stroke = (fullPalette[sliderColors.value][0]);
    circle1.style.stroke = (fullPalette[sliderColors.value][0]);
    circle1.style.fill = (fullPalette[sliderColors.value][0]);
    ColorCurve2A.style.stroke = (fullPalette[sliderColors.value][1]);
    ColorCurve2B.style.stroke = (fullPalette[sliderColors.value][1]);
    circle2.style.stroke = (fullPalette[sliderColors.value][1]);
    circle2.style.fill = (fullPalette[sliderColors.value][1]);
    ColorCurve3A.style.stroke = (fullPalette[sliderColors.value][2]);
    ColorCurve3B.style.stroke = (fullPalette[sliderColors.value][2]);
    circle3.style.stroke = (fullPalette[sliderColors.value][2]);
    circle3.style.fill = (fullPalette[sliderColors.value][2]);
    ColorCurve4A.style.stroke = (fullPalette[sliderColors.value][3]);
    ColorCurve4B.style.stroke = (fullPalette[sliderColors.value][3]);
    circle4.style.stroke = (fullPalette[sliderColors.value][3]);
    circle4.style.fill = (fullPalette[sliderColors.value][3]);
    ColorCurve5A.style.stroke = (fullPalette[sliderColors.value][4]);
    ColorCurve5B.style.stroke = (fullPalette[sliderColors.value][4]);
    circle5.style.stroke = (fullPalette[sliderColors.value][4]);
    circle5.style.fill = (fullPalette[sliderColors.value][4]);
    ColorCurve6A.style.stroke = (fullPalette[sliderColors.value][5]);
    ColorCurve6B.style.stroke = (fullPalette[sliderColors.value][5]);
    circle6.style.stroke = (fullPalette[sliderColors.value][5]);
    circle6.style.fill = (fullPalette[sliderColors.value][5]);
}

let sliderColorShuffleRed = document.getElementById("color-shuffle-red");
sliderColorShuffleRed.oninput = function(){
        if (sliderColorShuffleRed.value == 0){
            ColorCurve1A.style.stroke = randomRed1;
            ColorCurve1B.style.stroke = randomRed1;
            circle1.style.stroke = randomRed1;
            circle1.style.fill = randomRed1;
            ColorCurve2A.style.stroke = randomRed2;
            ColorCurve2B.style.stroke = randomRed2;
            circle2.style.stroke = randomRed2;
            circle2.style.fill = randomRed2;
            ColorCurve3A.style.stroke = randomRed3;
            ColorCurve3B.style.stroke = randomRed3;
            circle3.style.stroke = randomRed3;
            circle3.style.fill = randomRed3;
            ColorCurve4A.style.stroke = randomRed4;
            ColorCurve4B.style.stroke = randomRed4;
            circle4.style.stroke = randomRed4;
            circle4.style.fill = randomRed4;
            ColorCurve5A.style.stroke = randomRed5;
            ColorCurve5B.style.stroke = randomRed5;
            circle5.style.stroke = randomRed5;
            circle5.style.fill = randomRed5;
            ColorCurve6A.style.stroke = randomRed6;
            ColorCurve6B.style.stroke = randomRed6;
            circle6.style.stroke = randomRed6;
            circle6.style.fill = randomRed6;
        }
        if (sliderColorShuffleRed.value == 1){
            ColorCurve1A.style.stroke = randomRed5;
            ColorCurve1B.style.stroke = randomRed5;
            circle1.style.stroke = randomRed5;
            circle1.style.fill = randomRed5;
            ColorCurve2A.style.stroke = randomRed3;
            ColorCurve2B.style.stroke = randomRed3;
            circle2.style.stroke = randomRed3;
            circle2.style.fill = randomRed3;
            ColorCurve3A.style.stroke = randomRed2;
            ColorCurve3B.style.stroke = randomRed2;
            circle3.style.stroke = randomRed2;
            circle3.style.fill = randomRed2;
            ColorCurve4A.style.stroke = randomRed4;
            ColorCurve4B.style.stroke = randomRed4;
            circle4.style.stroke = randomRed4;
            circle4.style.fill = randomRed4;
            ColorCurve5A.style.stroke = randomRed6;
            ColorCurve5B.style.stroke = randomRed6;
            circle5.style.stroke = randomRed6;
            circle5.style.fill = randomRed6;
            ColorCurve6A.style.stroke = randomRed1;
            ColorCurve6B.style.stroke = randomRed1;
            circle6.style.stroke = randomRed1;
            circle6.style.fill = randomRed1;
        }
        if (sliderColorShuffleRed.value == 2){
            ColorCurve1A.style.stroke = randomRed3;
            ColorCurve1B.style.stroke = randomRed3;
            circle1.style.stroke = randomRed3;
            circle1.style.fill = randomRed3;
            ColorCurve2A.style.stroke = randomRed1;
            ColorCurve2B.style.stroke = randomRed1;
            circle2.style.stroke = randomRed1;
            circle2.style.fill = randomRed1;
            ColorCurve3A.style.stroke = randomRed5;
            ColorCurve3B.style.stroke = randomRed5;
            circle3.style.stroke = randomRed5;
            circle3.style.fill = randomRed5;
            ColorCurve4A.style.stroke = randomRed6;
            ColorCurve4B.style.stroke = randomRed6;
            circle4.style.stroke = randomRed6;
            circle4.style.fill = randomRed6;
            ColorCurve5A.style.stroke = randomRed4;
            ColorCurve5B.style.stroke = randomRed4;
            circle5.style.stroke = randomRed4;
            circle5.style.fill = randomRed4;
            ColorCurve6A.style.stroke = randomRed2;
            ColorCurve6B.style.stroke = randomRed2;
            circle6.style.stroke = randomRed2;
            circle6.style.fill = randomRed2;
        }
        if (sliderColorShuffleRed.value == 3){
            ColorCurve1A.style.stroke = randomRed4;
            ColorCurve1B.style.stroke = randomRed4;
            circle1.style.stroke = randomRed4;
            circle1.style.fill = randomRed4;
            ColorCurve2A.style.stroke = randomRed5;
            ColorCurve2B.style.stroke = randomRed5;
            circle2.style.stroke = randomRed5;
            circle2.style.fill = randomRed5;
            ColorCurve3A.style.stroke = randomRed2;
            ColorCurve3B.style.stroke = randomRed2;
            circle3.style.stroke = randomRed2;
            circle3.style.fill = randomRed2;
            ColorCurve4A.style.stroke = randomRed6;
            ColorCurve4B.style.stroke = randomRed6;
            circle4.style.stroke = randomRed6;
            circle4.style.fill = randomRed6;
            ColorCurve5A.style.stroke = randomRed1;
            ColorCurve5B.style.stroke = randomRed1;
            circle5.style.stroke = randomRed1;
            circle5.style.fill = randomRed1;
            ColorCurve6A.style.stroke = randomRed3;
            ColorCurve6B.style.stroke = randomRed3;
            circle6.style.stroke = randomRed3;
            circle6.style.fill = randomRed3;
        }
        if (sliderColorShuffleRed.value == 4){
            ColorCurve1A.style.stroke = randomRed2;
            ColorCurve1B.style.stroke = randomRed2;
            circle1.style.stroke = randomRed2;
            circle1.style.fill = randomRed2;
            ColorCurve2A.style.stroke = randomRed6;
            ColorCurve2B.style.stroke = randomRed6;
            circle2.style.stroke = randomRed6;
            circle2.style.fill = randomRed6;
            ColorCurve3A.style.stroke = randomRed5;
            ColorCurve3B.style.stroke = randomRed5;
            circle3.style.stroke = randomRed5;
            circle3.style.fill = randomRed5;
            ColorCurve4A.style.stroke = randomRed1;
            ColorCurve4B.style.stroke = randomRed1;
            circle4.style.stroke = randomRed1;
            circle4.style.fill = randomRed1;
            ColorCurve5A.style.stroke = randomRed3;
            ColorCurve5B.style.stroke = randomRed3;
            circle5.style.stroke = randomRed3;
            circle5.style.fill = randomRed3;
            ColorCurve6A.style.stroke = randomRed4;
            ColorCurve6B.style.stroke = randomRed4;
            circle6.style.stroke = randomRed4;
            circle6.style.fill = randomRed4;
        }
        if (sliderColorShuffleRed.value == 5){
            ColorCurve1A.style.stroke = randomRed5;
            ColorCurve1B.style.stroke = randomRed5;
            circle1.style.stroke = randomRed5;
            circle1.style.fill = randomRed5;
            ColorCurve2A.style.stroke = randomRed4;
            ColorCurve2B.style.stroke = randomRed4;
            circle2.style.stroke = randomRed4;
            circle2.style.fill = randomRed4;
            ColorCurve3A.style.stroke = randomRed6;
            ColorCurve3B.style.stroke = randomRed6;
            circle3.style.stroke = randomRed6;
            circle3.style.fill = randomRed6;
            ColorCurve4A.style.stroke = randomRed3;
            ColorCurve4B.style.stroke = randomRed3;
            circle4.style.stroke = randomRed3;
            circle4.style.fill = randomRed3;
            ColorCurve5A.style.stroke = randomRed1;
            ColorCurve5B.style.stroke = randomRed1;
            circle5.style.stroke = randomRed1;
            circle5.style.fill = randomRed1;
            ColorCurve6A.style.stroke = randomRed2;
            ColorCurve6B.style.stroke = randomRed2;
            circle6.style.stroke = randomRed2;
            circle6.style.fill = randomRed2;
        }
    }

let sliderColorShufflePink = document.getElementById("color-shuffle-pink");
sliderColorShufflePink.oninput = function(){
        if (sliderColorShufflePink.value == 0){
                ColorCurve1A.style.stroke = randomPink1;
                ColorCurve1B.style.stroke = randomPink1;
                circle1.style.stroke = randomPink1;
                circle1.style.fill = randomPink1;
                ColorCurve2A.style.stroke = randomPink2;
                ColorCurve2B.style.stroke = randomPink2;
                circle2.style.stroke = randomPink2;
                circle2.style.fill = randomPink2;
                ColorCurve3A.style.stroke = randomPink3;
                ColorCurve3B.style.stroke = randomPink3;
                circle3.style.stroke = randomPink3;
                circle3.style.fill = randomPink3;
                ColorCurve4A.style.stroke = randomPink4;
                ColorCurve4B.style.stroke = randomPink4;
                circle4.style.stroke = randomPink4;
                circle4.style.fill = randomPink4;
                ColorCurve5A.style.stroke = randomPink5;
                ColorCurve5B.style.stroke = randomPink5;
                circle5.style.stroke = randomPink5;
                circle5.style.fill = randomPink5;
                ColorCurve6A.style.stroke = randomPink6;
                ColorCurve6B.style.stroke = randomPink6;
                circle6.style.stroke = randomPink6;
                circle6.style.fill = randomPink6;
            }
        if (sliderColorShufflePink.value == 1){
                ColorCurve1A.style.stroke = randomPink5;
                ColorCurve1B.style.stroke = randomPink5;
                circle1.style.stroke = randomPink5;
                circle1.style.fill = randomPink5;
                ColorCurve2A.style.stroke = randomPink3;
                ColorCurve2B.style.stroke = randomPink3;
                circle2.style.stroke = randomPink3;
                circle2.style.fill = randomPink3;
                ColorCurve3A.style.stroke = randomPink2;
                ColorCurve3B.style.stroke = randomPink2;
                circle3.style.stroke = randomPink2;
                circle3.style.fill = randomPink2;
                ColorCurve4A.style.stroke = randomPink4;
                ColorCurve4B.style.stroke = randomPink4;
                circle4.style.stroke = randomPink4;
                circle4.style.fill = randomPink4;
                ColorCurve5A.style.stroke = randomPink6;
                ColorCurve5B.style.stroke = randomPink6;
                circle5.style.stroke = randomPink6;
                circle5.style.fill = randomPink6;
                ColorCurve6A.style.stroke = randomPink1;
                ColorCurve6B.style.stroke = randomPink1;
                circle6.style.stroke = randomPink1;
                circle6.style.fill = randomPink1;
            }
        if (sliderColorShufflePink.value == 2){
                ColorCurve1A.style.stroke = randomPink3;
                ColorCurve1B.style.stroke = randomPink3;
                circle1.style.stroke = randomPink3;
                circle1.style.fill = randomPink3;
                ColorCurve2A.style.stroke = randomPink1;
                ColorCurve2B.style.stroke = randomPink1;
                circle2.style.stroke = randomPink1;
                circle2.style.fill = randomPink1;
                ColorCurve3A.style.stroke = randomPink5;
                ColorCurve3B.style.stroke = randomPink5;
                circle3.style.stroke = randomPink5;
                circle3.style.fill = randomPink5;
                ColorCurve4A.style.stroke = randomPink6;
                ColorCurve4B.style.stroke = randomPink6;
                circle4.style.stroke = randomPink6;
                circle4.style.fill = randomPink6;
                ColorCurve5A.style.stroke = randomPink4;
                ColorCurve5B.style.stroke = randomPink4;
                circle5.style.stroke = randomPink4;
                circle5.style.fill = randomPink4;
                ColorCurve6A.style.stroke = randomPink2;
                ColorCurve6B.style.stroke = randomPink2;
                circle6.style.stroke = randomPink2;
                circle6.style.fill = randomPink2;
            }
        if (sliderColorShufflePink.value == 3){
                ColorCurve1A.style.stroke = randomPink4;
                ColorCurve1B.style.stroke = randomPink4;
                circle1.style.stroke = randomPink4;
                circle1.style.fill = randomPink4;
                ColorCurve2A.style.stroke = randomPink5;
                ColorCurve2B.style.stroke = randomPink5;
                circle2.style.stroke = randomPink5;
                circle2.style.fill = randomPink5;
                ColorCurve3A.style.stroke = randomPink2;
                ColorCurve3B.style.stroke = randomPink2;
                circle3.style.stroke = randomPink2;
                circle3.style.fill = randomPink2;
                ColorCurve4A.style.stroke = randomPink6;
                ColorCurve4B.style.stroke = randomPink6;
                circle4.style.stroke = randomPink6;
                circle4.style.fill = randomPink6;
                ColorCurve5A.style.stroke = randomPink1;
                ColorCurve5B.style.stroke = randomPink1;
                circle5.style.stroke = randomPink1;
                circle5.style.fill = randomPink1;
                ColorCurve6A.style.stroke = randomPink3;
                ColorCurve6B.style.stroke = randomPink3;
                circle6.style.stroke = randomPink3;
                circle6.style.fill = randomPink3;
            }
        if (sliderColorShufflePink.value == 4){
                ColorCurve1A.style.stroke = randomPink2;
                ColorCurve1B.style.stroke = randomPink2;
                circle1.style.stroke = randomPink2;
                circle1.style.fill = randomPink2;
                ColorCurve2A.style.stroke = randomPink6;
                ColorCurve2B.style.stroke = randomPink6;
                circle2.style.stroke = randomPink6;
                circle2.style.fill = randomPink6;
                ColorCurve3A.style.stroke = randomPink5;
                ColorCurve3B.style.stroke = randomPink5;
                circle3.style.stroke = randomPink5;
                circle3.style.fill = randomPink5;
                ColorCurve4A.style.stroke = randomPink1;
                ColorCurve4B.style.stroke = randomPink1;
                circle4.style.stroke = randomPink1;
                circle4.style.fill = randomPink1;
                ColorCurve5A.style.stroke = randomPink3;
                ColorCurve5B.style.stroke = randomPink3;
                circle5.style.stroke = randomPink3;
                circle5.style.fill = randomPink3;
                ColorCurve6A.style.stroke = randomPink4;
                ColorCurve6B.style.stroke = randomPink4;
                circle6.style.stroke = randomPink4;
                circle6.style.fill = randomPink4;
            }
        if (sliderColorShufflePink.value == 5){
                ColorCurve1A.style.stroke = randomPink5;
                ColorCurve1B.style.stroke = randomPink5;
                circle1.style.stroke = randomPink5;
                circle1.style.fill = randomPink5;
                ColorCurve2A.style.stroke = randomPink6;
                ColorCurve2B.style.stroke = randomPink6;
                circle2.style.stroke = randomPink6;
                circle2.style.fill = randomPink6;
                ColorCurve3A.style.stroke = randomPink4;
                ColorCurve3B.style.stroke = randomPink4;
                circle3.style.stroke = randomPink4;
                circle3.style.fill = randomPink4;
                ColorCurve4A.style.stroke = randomPink3;
                ColorCurve4B.style.stroke = randomPink3;
                circle4.style.stroke = randomPink3;
                circle4.style.fill = randomPink3;
                ColorCurve5A.style.stroke = randomPink2;
                ColorCurve5B.style.stroke = randomPink2;
                circle5.style.stroke = randomPink2;
                circle5.style.fill = randomPink2;
                ColorCurve6A.style.stroke = randomPink1;
                ColorCurve6B.style.stroke = randomPink1;
                circle6.style.stroke = randomPink1;
                circle6.style.fill = randomPink1;
            }
    }

let sliderColorShuffleOrange = document.getElementById("color-shuffle-orange");
sliderColorShuffleOrange.oninput = function(){
        if (sliderColorShuffleOrange.value == 0){
            ColorCurve1A.style.stroke = randomOrange1;
            ColorCurve1B.style.stroke = randomOrange1;
            circle1.style.stroke = randomOrange1;
            circle1.style.fill = randomOrange1;
            ColorCurve2A.style.stroke = randomOrange2;
            ColorCurve2B.style.stroke = randomOrange2;
            circle2.style.stroke = randomOrange2;
            circle2.style.fill = randomOrange2;
            ColorCurve3A.style.stroke = randomOrange3;
            ColorCurve3B.style.stroke = randomOrange3;
            circle3.style.stroke = randomOrange3;
            circle3.style.fill = randomOrange3;
            ColorCurve4A.style.stroke = randomOrange4;
            ColorCurve4B.style.stroke = randomOrange4;
            circle4.style.stroke = randomOrange4;
            circle4.style.fill = randomOrange4;
            ColorCurve5A.style.stroke = randomOrange5;
            ColorCurve5B.style.stroke = randomOrange5;
            circle5.style.stroke = randomOrange5;
            circle5.style.fill = randomOrange5;
            ColorCurve6A.style.stroke = randomOrange6;
            ColorCurve6B.style.stroke = randomOrange6;
            circle6.style.stroke = randomOrange6;
            circle6.style.fill = randomOrange6;
        }
        if (sliderColorShuffleOrange.value == 1){
                ColorCurve1A.style.stroke = randomOrange5;
                ColorCurve1B.style.stroke = randomOrange5;
                circle1.style.stroke = randomOrange5;
                circle1.style.fill = randomOrange5;
                ColorCurve2A.style.stroke = randomOrange3;
                ColorCurve2B.style.stroke = randomOrange3;
                circle2.style.stroke = randomOrange3;
                circle2.style.fill = randomOrange3;
                ColorCurve3A.style.stroke = randomOrange2;
                ColorCurve3B.style.stroke = randomOrange2;
                circle3.style.stroke = randomOrange2;
                circle3.style.fill = randomOrange2;
                ColorCurve4A.style.stroke = randomOrange4;
                ColorCurve4B.style.stroke = randomOrange4;
                circle4.style.stroke = randomOrange4;
                circle4.style.fill = randomOrange4;
                ColorCurve5A.style.stroke = randomOrange6;
                ColorCurve5B.style.stroke = randomOrange6;
                circle5.style.stroke = randomOrange6;
                circle5.style.fill = randomOrange6;
                ColorCurve6A.style.stroke = randomOrange1;
                ColorCurve6B.style.stroke = randomOrange1;
                circle6.style.stroke = randomOrange1;
                circle6.style.fill = randomOrange1;
            }
        if (sliderColorShuffleOrange.value == 2){
                ColorCurve1A.style.stroke = randomOrange3;
                ColorCurve1B.style.stroke = randomOrange3;
                circle1.style.stroke = randomOrange3;
                circle1.style.fill = randomOrange3;
                ColorCurve2A.style.stroke = randomOrange1;
                ColorCurve2B.style.stroke = randomOrange1;
                circle2.style.stroke = randomOrange1;
                circle2.style.fill = randomOrange1;
                ColorCurve3A.style.stroke = randomOrange5;
                ColorCurve3B.style.stroke = randomOrange5;
                circle3.style.stroke = randomOrange5;
                circle3.style.fill = randomOrange5;
                ColorCurve4A.style.stroke = randomOrange6;
                ColorCurve4B.style.stroke = randomOrange6;
                circle4.style.stroke = randomOrange6;
                circle4.style.fill = randomOrange6;
                ColorCurve5A.style.stroke = randomOrange4;
                ColorCurve5B.style.stroke = randomOrange4;
                circle5.style.stroke = randomOrange4;
                circle5.style.fill = randomOrange4;
                ColorCurve6A.style.stroke = randomOrange2;
                ColorCurve6B.style.stroke = randomOrange2;
                circle6.style.stroke = randomOrange2;
                circle6.style.fill = randomOrange2;
            }
        if (sliderColorShuffleOrange.value == 3){
                ColorCurve1A.style.stroke = randomOrange4;
                ColorCurve1B.style.stroke = randomOrange4;
                circle1.style.stroke = randomOrange4;
                circle1.style.fill = randomOrange4;
                ColorCurve2A.style.stroke = randomOrange5;
                ColorCurve2B.style.stroke = randomOrange5;
                circle2.style.stroke = randomOrange5;
                circle2.style.fill = randomOrange5;
                ColorCurve3A.style.stroke = randomOrange2;
                ColorCurve3B.style.stroke = randomOrange2;
                circle3.style.stroke = randomOrange2;
                circle3.style.fill = randomOrange2;
                ColorCurve4A.style.stroke = randomOrange6;
                ColorCurve4B.style.stroke = randomOrange6;
                circle4.style.stroke = randomOrange6;
                circle4.style.fill = randomOrange6;
                ColorCurve5A.style.stroke = randomOrange1;
                ColorCurve5B.style.stroke = randomOrange1;
                circle5.style.stroke = randomOrange1;
                circle5.style.fill = randomOrange1;
                ColorCurve6A.style.stroke = randomOrange3;
                ColorCurve6B.style.stroke = randomOrange3;
                circle6.style.stroke = randomOrange3;
                circle6.style.fill = randomOrange3;
            }
        if (sliderColorShuffleOrange.value == 4){
                ColorCurve1A.style.stroke = randomOrange2;
                ColorCurve1B.style.stroke = randomOrange2;
                circle1.style.stroke = randomOrange2;
                circle1.style.fill = randomOrange2;
                ColorCurve2A.style.stroke = randomOrange6;
                ColorCurve2B.style.stroke = randomOrange6;
                circle2.style.stroke = randomOrange6;
                circle2.style.fill = randomOrange6;
                ColorCurve3A.style.stroke = randomOrange5;
                ColorCurve3B.style.stroke = randomOrange5;
                circle3.style.stroke = randomOrange5;
                circle3.style.fill = randomOrange5;
                ColorCurve4A.style.stroke = randomOrange1;
                ColorCurve4B.style.stroke = randomOrange1;
                circle4.style.stroke = randomOrange1;
                circle4.style.fill = randomOrange1;
                ColorCurve5A.style.stroke = randomOrange3;
                ColorCurve5B.style.stroke = randomOrange3;
                circle5.style.stroke = randomOrange3;
                circle5.style.fill = randomOrange3;
                ColorCurve6A.style.stroke = randomOrange4;
                ColorCurve6B.style.stroke = randomOrange4;
                circle6.style.stroke = randomOrange4;
                circle6.style.fill = randomOrange4;
            }
        if (sliderColorShuffleOrange.value == 5){
                ColorCurve1A.style.stroke = randomOrange5;
                ColorCurve1B.style.stroke = randomOrange5;
                circle1.style.stroke = randomOrange5;
                circle1.style.fill = randomOrange5;
                ColorCurve2A.style.stroke = randomOrange6;
                ColorCurve2B.style.stroke = randomOrange6;
                circle2.style.stroke = randomOrange6;
                circle2.style.fill = randomOrange6;
                ColorCurve3A.style.stroke = randomOrange4;
                ColorCurve3B.style.stroke = randomOrange4;
                circle3.style.stroke = randomOrange4;
                circle3.style.fill = randomOrange4;
                ColorCurve4A.style.stroke = randomOrange3;
                ColorCurve4B.style.stroke = randomOrange3;
                circle4.style.stroke = randomOrange3;
                circle4.style.fill = randomOrange3;
                ColorCurve5A.style.stroke = randomOrange2;
                ColorCurve5B.style.stroke = randomOrange2;
                circle5.style.stroke = randomOrange2;
                circle5.style.fill = randomOrange2;
                ColorCurve6A.style.stroke = randomOrange1;
                ColorCurve6B.style.stroke = randomOrange1;
                circle6.style.stroke = randomOrange1;
                circle6.style.fill = randomOrange1;
            }
        }
    
let sliderColorShuffleYellow = document.getElementById("color-shuffle-yellow");
sliderColorShuffleYellow.oninput = function(){
        if (sliderColorShuffleYellow.value == 0){
            ColorCurve1A.style.stroke = randomYellow1;
            ColorCurve1B.style.stroke = randomYellow1;
            circle1.style.stroke = randomYellow1;
            circle1.style.fill = randomYellow1;
            ColorCurve2A.style.stroke = randomYellow2;
            ColorCurve2B.style.stroke = randomYellow2;
            circle2.style.stroke = randomYellow2;
            circle2.style.fill = randomYellow2;
            ColorCurve3A.style.stroke = randomYellow3;
            ColorCurve3B.style.stroke = randomYellow3;
            circle3.style.stroke = randomYellow3;
            circle3.style.fill = randomYellow3;
            ColorCurve4A.style.stroke = randomYellow4;
            ColorCurve4B.style.stroke = randomYellow4;
            circle4.style.stroke = randomYellow4;
            circle4.style.fill = randomYellow4;
            ColorCurve5A.style.stroke = randomYellow5;
            ColorCurve5B.style.stroke = randomYellow5;
            circle5.style.stroke = randomYellow5;
            circle5.style.fill = randomYellow5;
            ColorCurve6A.style.stroke = randomYellow6;
            ColorCurve6B.style.stroke = randomYellow6;
            circle6.style.stroke = randomYellow6;
            circle6.style.fill = randomYellow6;
        }
        if (sliderColorShuffleYellow.value == 1){
                ColorCurve1A.style.stroke = randomYellow5;
                ColorCurve1B.style.stroke = randomYellow5;
                circle1.style.stroke = randomYellow5;
                circle1.style.fill = randomYellow5;
                ColorCurve2A.style.stroke = randomYellow3;
                ColorCurve2B.style.stroke = randomYellow3;
                circle2.style.stroke = randomYellow3;
                circle2.style.fill = randomYellow3;
                ColorCurve3A.style.stroke = randomYellow2;
                ColorCurve3B.style.stroke = randomYellow2;
                circle3.style.stroke = randomYellow2;
                circle3.style.fill = randomYellow2;
                ColorCurve4A.style.stroke = randomYellow4;
                ColorCurve4B.style.stroke = randomYellow4;
                circle4.style.stroke = randomYellow4;
                circle4.style.fill = randomYellow4;
                ColorCurve5A.style.stroke = randomYellow6;
                ColorCurve5B.style.stroke = randomYellow6;
                circle5.style.stroke = randomYellow6;
                circle5.style.fill = randomYellow6;
                ColorCurve6A.style.stroke = randomYellow1;
                ColorCurve6B.style.stroke = randomYellow1;
                circle6.style.stroke = randomYellow1;
                circle6.style.fill = randomYellow1;
            }
        if (sliderColorShuffleYellow.value == 2){
                ColorCurve1A.style.stroke = randomYellow3;
                ColorCurve1B.style.stroke = randomYellow3;
                circle1.style.stroke = randomYellow3;
                circle1.style.fill = randomYellow3;
                ColorCurve2A.style.stroke = randomYellow1;
                ColorCurve2B.style.stroke = randomYellow1;
                circle2.style.stroke = randomYellow1;
                circle2.style.fill = randomYellow1;
                ColorCurve3A.style.stroke = randomYellow5;
                ColorCurve3B.style.stroke = randomYellow5;
                circle3.style.stroke = randomYellow5;
                circle3.style.fill = randomYellow5;
                ColorCurve4A.style.stroke = randomYellow6;
                ColorCurve4B.style.stroke = randomYellow6;
                circle4.style.stroke = randomYellow6;
                circle4.style.fill = randomYellow6;
                ColorCurve5A.style.stroke = randomYellow4;
                ColorCurve5B.style.stroke = randomYellow4;
                circle5.style.stroke = randomYellow4;
                circle5.style.fill = randomYellow4;
                ColorCurve6A.style.stroke = randomYellow2;
                ColorCurve6B.style.stroke = randomYellow2;
                circle6.style.stroke = randomYellow2;
                circle6.style.fill = randomYellow2;
            }
        if (sliderColorShuffleYellow.value == 3){
                ColorCurve1A.style.stroke = randomYellow4;
                ColorCurve1B.style.stroke = randomYellow4;
                circle1.style.stroke = randomYellow4;
                circle1.style.fill = randomYellow4;
                ColorCurve2A.style.stroke = randomYellow5;
                ColorCurve2B.style.stroke = randomYellow5;
                circle2.style.stroke = randomYellow5;
                circle2.style.fill = randomYellow5;
                ColorCurve3A.style.stroke = randomYellow2;
                ColorCurve3B.style.stroke = randomYellow2;
                circle3.style.stroke = randomYellow2;
                circle3.style.fill = randomYellow2;
                ColorCurve4A.style.stroke = randomYellow6;
                ColorCurve4B.style.stroke = randomYellow6;
                circle4.style.stroke = randomYellow6;
                circle4.style.fill = randomYellow6;
                ColorCurve5A.style.stroke = randomYellow1;
                ColorCurve5B.style.stroke = randomYellow1;
                circle5.style.stroke = randomYellow1;
                circle5.style.fill = randomYellow1;
                ColorCurve6A.style.stroke = randomYellow3;
                ColorCurve6B.style.stroke = randomYellow3;
                circle6.style.stroke = randomYellow3;
                circle6.style.fill = randomYellow3;
            }
        if (sliderColorShuffleYellow.value == 4){
                ColorCurve1A.style.stroke = randomYellow2;
                ColorCurve1B.style.stroke = randomYellow2;
                circle1.style.stroke = randomYellow2;
                circle1.style.fill = randomYellow2;
                ColorCurve2A.style.stroke = randomYellow6;
                ColorCurve2B.style.stroke = randomYellow6;
                circle2.style.stroke = randomYellow6;
                circle2.style.fill = randomYellow6;
                ColorCurve3A.style.stroke = randomYellow5;
                ColorCurve3B.style.stroke = randomYellow5;
                circle3.style.stroke = randomYellow5;
                circle3.style.fill = randomYellow5;
                ColorCurve4A.style.stroke = randomYellow1;
                ColorCurve4B.style.stroke = randomYellow1;
                circle4.style.stroke = randomYellow1;
                circle4.style.fill = randomYellow1;
                ColorCurve5A.style.stroke = randomYellow3;
                ColorCurve5B.style.stroke = randomYellow3;
                circle5.style.stroke = randomYellow3;
                circle5.style.fill = randomYellow3;
                ColorCurve6A.style.stroke = randomYellow4;
                ColorCurve6B.style.stroke = randomYellow4;
                circle6.style.stroke = randomYellow4;
                circle6.style.fill = randomYellow4;
            }
        if (sliderColorShuffleYellow.value == 5){
                ColorCurve1A.style.stroke = randomYellow5;
                ColorCurve1B.style.stroke = randomYellow5;
                circle1.style.stroke = randomYellow5;
                circle1.style.fill = randomYellow5;
                ColorCurve2A.style.stroke = randomYellow6;
                ColorCurve2B.style.stroke = randomYellow6;
                circle2.style.stroke = randomYellow6;
                circle2.style.fill = randomYellow6;
                ColorCurve3A.style.stroke = randomYellow4;
                ColorCurve3B.style.stroke = randomYellow4;
                circle3.style.stroke = randomYellow4;
                circle3.style.fill = randomYellow4;
                ColorCurve4A.style.stroke = randomYellow3;
                ColorCurve4B.style.stroke = randomYellow3;
                circle4.style.stroke = randomYellow3;
                circle4.style.fill = randomYellow3;
                ColorCurve5A.style.stroke = randomYellow2;
                ColorCurve5B.style.stroke = randomYellow2;
                circle5.style.stroke = randomYellow2;
                circle5.style.fill = randomYellow2;
                ColorCurve6A.style.stroke = randomYellow1;
                ColorCurve6B.style.stroke = randomYellow1;
                circle6.style.stroke = randomYellow1;
                circle6.style.fill = randomYellow1;
            }
    }

let sliderColorShuffleGrey = document.getElementById("color-shuffle-grey");
sliderColorShuffleGrey.oninput = function(){
        if (sliderColorShuffleGrey.value == 0){
            ColorCurve1A.style.stroke = randomGrey1;
            ColorCurve1B.style.stroke = randomGrey1;
            circle1.style.stroke = randomGrey1;
            circle1.style.fill = randomGrey1;
            ColorCurve2A.style.stroke = randomGrey2;
            ColorCurve2B.style.stroke = randomGrey2;
            circle2.style.stroke = randomGrey2;
            circle2.style.fill = randomGrey2;
            ColorCurve3A.style.stroke = randomGrey3;
            ColorCurve3B.style.stroke = randomGrey3;
            circle3.style.stroke = randomGrey3;
            circle3.style.fill = randomGrey3;
            ColorCurve4A.style.stroke = randomGrey4;
            ColorCurve4B.style.stroke = randomGrey4;
            circle4.style.stroke = randomGrey4;
            circle4.style.fill = randomGrey4;
            ColorCurve5A.style.stroke = randomGrey5;
            ColorCurve5B.style.stroke = randomGrey5;
            circle5.style.stroke = randomGrey5;
            circle5.style.fill = randomGrey5;
            ColorCurve6A.style.stroke = randomGrey6;
            ColorCurve6B.style.stroke = randomGrey6;
            circle6.style.stroke = randomGrey6;
            circle6.style.fill = randomGrey6;
        }
        if (sliderColorShuffleGrey.value == 1){
            ColorCurve1A.style.stroke = randomGrey5;
            ColorCurve1B.style.stroke = randomGrey5;
            circle1.style.stroke = randomGrey5;
            circle1.style.fill = randomGrey5;
            ColorCurve2A.style.stroke = randomGrey3;
            ColorCurve2B.style.stroke = randomGrey3;
            circle2.style.stroke = randomGrey3;
            circle2.style.fill = randomGrey3;
            ColorCurve3A.style.stroke = randomGrey2;
            ColorCurve3B.style.stroke = randomGrey2;
            circle3.style.stroke = randomGrey2;
            circle3.style.fill = randomGrey2;
            ColorCurve4A.style.stroke = randomGrey4;
            ColorCurve4B.style.stroke = randomGrey4;
            circle4.style.stroke = randomGrey4;
            circle4.style.fill = randomGrey4;
            ColorCurve5A.style.stroke = randomGrey6;
            ColorCurve5B.style.stroke = randomGrey6;
            circle5.style.stroke = randomGrey6;
            circle5.style.fill = randomGrey6;
            ColorCurve6A.style.stroke = randomGrey1;
            ColorCurve6B.style.stroke = randomGrey1;
            circle6.style.stroke = randomGrey1;
            circle6.style.fill = randomGrey1;
        }
        if (sliderColorShuffleGrey.value == 2){
            ColorCurve1A.style.stroke = randomGrey3;
            ColorCurve1B.style.stroke = randomGrey3;
            circle1.style.stroke = randomGrey3;
            circle1.style.fill = randomGrey3;
            ColorCurve2A.style.stroke = randomGrey1;
            ColorCurve2B.style.stroke = randomGrey1;
            circle2.style.stroke = randomGrey1;
            circle2.style.fill = randomGrey1;
            ColorCurve3A.style.stroke = randomGrey5;
            ColorCurve3B.style.stroke = randomGrey5;
            circle3.style.stroke = randomGrey5;
            circle3.style.fill = randomGrey5;
            ColorCurve4A.style.stroke = randomGrey6;
            ColorCurve4B.style.stroke = randomGrey6;
            circle4.style.stroke = randomGrey6;
            circle4.style.fill = randomGrey6;
            ColorCurve5A.style.stroke = randomGrey4;
            ColorCurve5B.style.stroke = randomGrey4;
            circle5.style.stroke = randomGrey4;
            circle5.style.fill = randomGrey4;
            ColorCurve6A.style.stroke = randomGrey2;
            ColorCurve6B.style.stroke = randomGrey2;
            circle6.style.stroke = randomGrey2;
            circle6.style.fill = randomGrey2;
        }
        if (sliderColorShuffleGrey.value == 3){
            ColorCurve1A.style.stroke = randomGrey4;
            ColorCurve1B.style.stroke = randomGrey4;
            circle1.style.stroke = randomGrey4;
            circle1.style.fill = randomGrey4;
            ColorCurve2A.style.stroke = randomGrey5;
            ColorCurve2B.style.stroke = randomGrey5;
            circle2.style.stroke = randomGrey5;
            circle2.style.fill = randomGrey5;
            ColorCurve3A.style.stroke = randomGrey2;
            ColorCurve3B.style.stroke = randomGrey2;
            circle3.style.stroke = randomGrey2;
            circle3.style.fill = randomGrey2;
            ColorCurve4A.style.stroke = randomGrey6;
            ColorCurve4B.style.stroke = randomGrey6;
            circle4.style.stroke = randomGrey6;
            circle4.style.fill = randomGrey6;
            ColorCurve5A.style.stroke = randomGrey1;
            ColorCurve5B.style.stroke = randomGrey1;
            circle5.style.stroke = randomGrey1;
            circle5.style.fill = randomGrey1;
            ColorCurve6A.style.stroke = randomGrey3;
            ColorCurve6B.style.stroke = randomGrey3;
            circle6.style.stroke = randomGrey3;
            circle6.style.fill = randomGrey3;
        }
        if (sliderColorShuffleGrey.value == 4){
            ColorCurve1A.style.stroke = randomGrey2;
            ColorCurve1B.style.stroke = randomGrey2;
            circle1.style.stroke = randomGrey2;
            circle1.style.fill = randomGrey2;
            ColorCurve2A.style.stroke = randomGrey6;
            ColorCurve2B.style.stroke = randomGrey6;
            circle2.style.stroke = randomGrey6;
            circle2.style.fill = randomGrey6;
            ColorCurve3A.style.stroke = randomGrey5;
            ColorCurve3B.style.stroke = randomGrey5;
            circle3.style.stroke = randomGrey5;
            circle3.style.fill = randomGrey5;
            ColorCurve4A.style.stroke = randomGrey1;
            ColorCurve4B.style.stroke = randomGrey1;
            circle4.style.stroke = randomGrey1;
            circle4.style.fill = randomGrey1;
            ColorCurve5A.style.stroke = randomGrey3;
            ColorCurve5B.style.stroke = randomGrey3;
            circle5.style.stroke = randomGrey3;
            circle5.style.fill = randomGrey3;
            ColorCurve6A.style.stroke = randomGrey4;
            ColorCurve6B.style.stroke = randomGrey4;
            circle6.style.stroke = randomGrey4;
            circle6.style.fill = randomGrey4;
        }
        if (sliderColorShuffleGrey.value == 5){
            ColorCurve1A.style.stroke = randomGrey5;
            ColorCurve1B.style.stroke = randomGrey5;
            circle1.style.stroke = randomGrey5;
            circle1.style.fill = randomGrey5;
            ColorCurve2A.style.stroke = randomGrey6;
            ColorCurve2B.style.stroke = randomGrey6;
            circle2.style.stroke = randomGrey6;
            circle2.style.fill = randomGrey6;
            ColorCurve3A.style.stroke = randomGrey4;
            ColorCurve3B.style.stroke = randomGrey4;
            circle3.style.stroke = randomGrey4;
            circle3.style.fill = randomGrey4;
            ColorCurve4A.style.stroke = randomGrey3;
            ColorCurve4B.style.stroke = randomGrey3;
            circle4.style.stroke = randomGrey3;
            circle4.style.fill = randomGrey3;
            ColorCurve5A.style.stroke = randomGrey2;
            ColorCurve5B.style.stroke = randomGrey2;
            circle5.style.stroke = randomGrey2;
            circle5.style.fill = randomGrey2;
            ColorCurve6A.style.stroke = randomGrey1;
            ColorCurve6B.style.stroke = randomGrey1;
            circle6.style.stroke = randomGrey1;
            circle6.style.fill = randomGrey1;
        }
    }

let sliderColorShuffleGreen = document.getElementById("color-shuffle-green");
sliderColorShuffleGreen.oninput = function(){
        if (sliderColorShuffleGreen.value == 0){
            ColorCurve1A.style.stroke = randomGreen1;
            ColorCurve1B.style.stroke = randomGreen1;
            circle1.style.stroke = randomGreen1;
            circle1.style.fill = randomGreen1;
            ColorCurve2A.style.stroke = randomGreen2;
            ColorCurve2B.style.stroke = randomGreen2;
            circle2.style.stroke = randomGreen2;
            circle2.style.fill = randomGreen2;
            ColorCurve3A.style.stroke = randomGreen3;
            ColorCurve3B.style.stroke = randomGreen3;
            circle3.style.stroke = randomGreen3;
            circle3.style.fill = randomGreen3;
            ColorCurve4A.style.stroke = randomGreen4;
            ColorCurve4B.style.stroke = randomGreen4;
            circle4.style.stroke = randomGreen4;
            circle4.style.fill = randomGreen4;
            ColorCurve5A.style.stroke = randomGreen5;
            ColorCurve5B.style.stroke = randomGreen5;
            circle5.style.stroke = randomGreen5;
            circle5.style.fill = randomGreen5;
            ColorCurve6A.style.stroke = randomGreen6;
            ColorCurve6B.style.stroke = randomGreen6;
            circle6.style.stroke = randomGreen6;
            circle6.style.fill = randomGreen6;
        }
        if (sliderColorShuffleGreen.value == 1){
            ColorCurve1A.style.stroke = randomGreen5;
            ColorCurve1B.style.stroke = randomGreen5;
            circle1.style.stroke = randomGreen5;
            circle1.style.fill = randomGreen5;
            ColorCurve2A.style.stroke = randomGreen3;
            ColorCurve2B.style.stroke = randomGreen3;
            circle2.style.stroke = randomGreen3;
            circle2.style.fill = randomGreen3;
            ColorCurve3A.style.stroke = randomGreen2;
            ColorCurve3B.style.stroke = randomGreen2;
            circle3.style.stroke = randomGreen2;
            circle3.style.fill = randomGreen2;
            ColorCurve4A.style.stroke = randomGreen4;
            ColorCurve4B.style.stroke = randomGreen4;
            circle4.style.stroke = randomGreen4;
            circle4.style.fill = randomGreen4;
            ColorCurve5A.style.stroke = randomGreen6;
            ColorCurve5B.style.stroke = randomGreen6;
            circle5.style.stroke = randomGreen6;
            circle5.style.fill = randomGreen6;
            ColorCurve6A.style.stroke = randomGreen1;
            ColorCurve6B.style.stroke = randomGreen1;
            circle6.style.stroke = randomGreen1;
            circle6.style.fill = randomGreen1;
        }
        if (sliderColorShuffleGreen.value == 2){
            ColorCurve1A.style.stroke = randomGreen3;
            ColorCurve1B.style.stroke = randomGreen3;
            circle1.style.stroke = randomGreen3;
            circle1.style.fill = randomGreen3;
            ColorCurve2A.style.stroke = randomGreen1;
            ColorCurve2B.style.stroke = randomGreen1;
            circle2.style.stroke = randomGreen1;
            circle2.style.fill = randomGreen1;
            ColorCurve3A.style.stroke = randomGreen5;
            ColorCurve3B.style.stroke = randomGreen5;
            circle3.style.stroke = randomGreen5;
            circle3.style.fill = randomGreen5;
            ColorCurve4A.style.stroke = randomGreen6;
            ColorCurve4B.style.stroke = randomGreen6;
            circle4.style.stroke = randomGreen6;
            circle4.style.fill = randomGreen6;
            ColorCurve5A.style.stroke = randomGreen4;
            ColorCurve5B.style.stroke = randomGreen4;
            circle5.style.stroke = randomGreen4;
            circle5.style.fill = randomGreen4;
            ColorCurve6A.style.stroke = randomGreen2;
            ColorCurve6B.style.stroke = randomGreen2;
            circle6.style.stroke = randomGreen2;
            circle6.style.fill = randomGreen2;
        }
        if (sliderColorShuffleGreen.value == 3){
            ColorCurve1A.style.stroke = randomGreen4;
            ColorCurve1B.style.stroke = randomGreen4;
            circle1.style.stroke = randomGreen4;
            circle1.style.fill = randomGreen4;
            ColorCurve2A.style.stroke = randomGreen5;
            ColorCurve2B.style.stroke = randomGreen5;
            circle2.style.stroke = randomGreen5;
            circle2.style.fill = randomGreen5;
            ColorCurve3A.style.stroke = randomGreen2;
            ColorCurve3B.style.stroke = randomGreen2;
            circle3.style.stroke = randomGreen2;
            circle3.style.fill = randomGreen2;
            ColorCurve4A.style.stroke = randomGreen6;
            ColorCurve4B.style.stroke = randomGreen6;
            circle4.style.stroke = randomGreen6;
            circle4.style.fill = randomGreen6;
            ColorCurve5A.style.stroke = randomGreen1;
            ColorCurve5B.style.stroke = randomGreen1;
            circle5.style.stroke = randomGreen1;
            circle5.style.fill = randomGreen1;
            ColorCurve6A.style.stroke = randomGreen3;
            ColorCurve6B.style.stroke = randomGreen3;
            circle6.style.stroke = randomGreen3;
            circle6.style.fill = randomGreen3;
        }
        if (sliderColorShuffleGreen.value == 4){
            ColorCurve1A.style.stroke = randomGreen2;
            ColorCurve1B.style.stroke = randomGreen2;
            circle1.style.stroke = randomGreen2;
            circle1.style.fill = randomGreen2;
            ColorCurve2A.style.stroke = randomGreen6;
            ColorCurve2B.style.stroke = randomGreen6;
            circle2.style.stroke = randomGreen6;
            circle2.style.fill = randomGreen6;
            ColorCurve3A.style.stroke = randomGreen5;
            ColorCurve3B.style.stroke = randomGreen5;
            circle3.style.stroke = randomGreen5;
            circle3.style.fill = randomGreen5;
            ColorCurve4A.style.stroke = randomGreen1;
            ColorCurve4B.style.stroke = randomGreen1;
            circle4.style.stroke = randomGreen1;
            circle4.style.fill = randomGreen1;
            ColorCurve5A.style.stroke = randomGreen3;
            ColorCurve5B.style.stroke = randomGreen3;
            circle5.style.stroke = randomGreen3;
            circle5.style.fill = randomGreen3;
            ColorCurve6A.style.stroke = randomGreen4;
            ColorCurve6B.style.stroke = randomGreen4;
            circle6.style.stroke = randomGreen4;
            circle6.style.fill = randomGreen4;
        }
        if (sliderColorShuffleGreen.value == 5){
            ColorCurve1A.style.stroke = randomGreen5;
            ColorCurve1B.style.stroke = randomGreen5;
            circle1.style.stroke = randomGreen5;
            circle1.style.fill = randomGreen5;
            ColorCurve2A.style.stroke = randomGreen6;
            ColorCurve2B.style.stroke = randomGreen6;
            circle2.style.stroke = randomGreen6;
            circle2.style.fill = randomGreen6;
            ColorCurve3A.style.stroke = randomGreen4;
            ColorCurve3B.style.stroke = randomGreen4;
            circle3.style.stroke = randomGreen4;
            circle3.style.fill = randomGreen4;
            ColorCurve4A.style.stroke = randomGreen3;
            ColorCurve4B.style.stroke = randomGreen3;
            circle4.style.stroke = randomGreen3;
            circle4.style.fill = randomGreen3;
            ColorCurve5A.style.stroke = randomGreen2;
            ColorCurve5B.style.stroke = randomGreen2;
            circle5.style.stroke = randomGreen2;
            circle5.style.fill = randomGreen2;
            ColorCurve6A.style.stroke = randomGreen1;
            ColorCurve6B.style.stroke = randomGreen1;
            circle6.style.stroke = randomGreen1;
            circle6.style.fill = randomGreen1;
        }
    }

let sliderColorShuffleBlue = document.getElementById("color-shuffle-blue");
sliderColorShuffleBlue.oninput = function(){
    if (sliderColorShuffleBlue.value == 0){
        ColorCurve1A.style.stroke = randomBlue1;
        ColorCurve1B.style.stroke = randomBlue1;
        circle1.style.stroke = randomBlue1;
        circle1.style.fill = randomBlue1;
        ColorCurve2A.style.stroke = randomBlue2;
        ColorCurve2B.style.stroke = randomBlue2;
        circle2.style.stroke = randomBlue2;
        circle2.style.fill = randomBlue2;
        ColorCurve3A.style.stroke = randomBlue3;
        ColorCurve3B.style.stroke = randomBlue3;
        circle3.style.stroke = randomBlue3;
        circle3.style.fill = randomBlue3;
        ColorCurve4A.style.stroke = randomBlue4;
        ColorCurve4B.style.stroke = randomBlue4;
        circle4.style.stroke = randomBlue4;
        circle4.style.fill = randomBlue4;
        ColorCurve5A.style.stroke = randomBlue5;
        ColorCurve5B.style.stroke = randomBlue5;
        circle5.style.stroke = randomBlue5;
        circle5.style.fill = randomBlue5;
        ColorCurve6A.style.stroke = randomBlue6;
        ColorCurve6B.style.stroke = randomBlue6;
        circle6.style.stroke = randomBlue6;
        circle6.style.fill = randomBlue6;
    }
    if (sliderColorShuffleBlue.value == 1){
        ColorCurve1A.style.stroke = randomBlue5;
        ColorCurve1B.style.stroke = randomBlue5;
        circle1.style.stroke = randomBlue5;
        circle1.style.fill = randomBlue5;
        ColorCurve2A.style.stroke = randomBlue3;
        ColorCurve2B.style.stroke = randomBlue3;
        circle2.style.stroke = randomBlue3;
        circle2.style.fill = randomBlue3;
        ColorCurve3A.style.stroke = randomBlue2;
        ColorCurve3B.style.stroke = randomBlue2;
        circle3.style.stroke = randomBlue2;
        circle3.style.fill = randomBlue2;
        ColorCurve4A.style.stroke = randomBlue4;
        ColorCurve4B.style.stroke = randomBlue4;
        circle4.style.stroke = randomBlue4;
        circle4.style.fill = randomBlue4;
        ColorCurve5A.style.stroke = randomBlue6;
        ColorCurve5B.style.stroke = randomBlue6;
        circle5.style.stroke = randomBlue6;
        circle5.style.fill = randomBlue6;
        ColorCurve6A.style.stroke = randomBlue1;
        ColorCurve6B.style.stroke = randomBlue1;
        circle6.style.stroke = randomBlue1;
        circle6.style.fill = randomBlue1;
    }
    if (sliderColorShuffleBlue.value == 2){
        ColorCurve1A.style.stroke = randomBlue3;
        ColorCurve1B.style.stroke = randomBlue3;
        circle1.style.stroke = randomBlue3;
        circle1.style.fill = randomBlue3;
        ColorCurve2A.style.stroke = randomBlue1;
        ColorCurve2B.style.stroke = randomBlue1;
        circle2.style.stroke = randomBlue1;
        circle2.style.fill = randomBlue1;
        ColorCurve3A.style.stroke = randomBlue5;
        ColorCurve3B.style.stroke = randomBlue5;
        circle3.style.stroke = randomBlue5;
        circle3.style.fill = randomBlue5;
        ColorCurve4A.style.stroke = randomBlue6;
        ColorCurve4B.style.stroke = randomBlue6;
        circle4.style.stroke = randomBlue6;
        circle4.style.fill = randomBlue6;
        ColorCurve5A.style.stroke = randomBlue4;
        ColorCurve5B.style.stroke = randomBlue4;
        circle5.style.stroke = randomBlue4;
        circle5.style.fill = randomBlue4;
        ColorCurve6A.style.stroke = randomBlue2;
        ColorCurve6B.style.stroke = randomBlue2;
        circle6.style.stroke = randomBlue2;
        circle6.style.fill = randomBlue2;
    }
    if (sliderColorShuffleBlue.value == 3){
        ColorCurve1A.style.stroke = randomBlue4;
        ColorCurve1B.style.stroke = randomBlue4;
        circle1.style.stroke = randomBlue4;
        circle1.style.fill = randomBlue4;
        ColorCurve2A.style.stroke = randomBlue5;
        ColorCurve2B.style.stroke = randomBlue5;
        circle2.style.stroke = randomBlue5;
        circle2.style.fill = randomBlue5;
        ColorCurve3A.style.stroke = randomBlue2;
        ColorCurve3B.style.stroke = randomBlue2;
        circle3.style.stroke = randomBlue2;
        circle3.style.fill = randomBlue2;
        ColorCurve4A.style.stroke = randomBlue6;
        ColorCurve4B.style.stroke = randomBlue6;
        circle4.style.stroke = randomBlue6;
        circle4.style.fill = randomBlue6;
        ColorCurve5A.style.stroke = randomBlue1;
        ColorCurve5B.style.stroke = randomBlue1;
        circle5.style.stroke = randomBlue1;
        circle5.style.fill = randomBlue1;
        ColorCurve6A.style.stroke = randomBlue3;
        ColorCurve6B.style.stroke = randomBlue3;
        circle6.style.stroke = randomBlue3;
        circle6.style.fill = randomBlue3;
    }
    if (sliderColorShuffleBlue.value == 4){
        ColorCurve1A.style.stroke = randomBlue2;
        ColorCurve1B.style.stroke = randomBlue2;
        circle1.style.stroke = randomBlue2;
        circle1.style.fill = randomBlue2;
        ColorCurve2A.style.stroke = randomBlue6;
        ColorCurve2B.style.stroke = randomBlue6;
        circle2.style.stroke = randomBlue6;
        circle2.style.fill = randomBlue6;
        ColorCurve3A.style.stroke = randomBlue5;
        ColorCurve3B.style.stroke = randomBlue5;
        circle3.style.stroke = randomBlue5;
        circle3.style.fill = randomBlue5;
        ColorCurve4A.style.stroke = randomBlue1;
        ColorCurve4B.style.stroke = randomBlue1;
        circle4.style.stroke = randomBlue1;
        circle4.style.fill = randomBlue1;
        ColorCurve5A.style.stroke = randomBlue3;
        ColorCurve5B.style.stroke = randomBlue3;
        circle5.style.stroke = randomBlue3;
        circle5.style.fill = randomBlue3;
        ColorCurve6A.style.stroke = randomBlue4;
        ColorCurve6B.style.stroke = randomBlue4;
        circle6.style.stroke = randomBlue4;
        circle6.style.fill = randomBlue4;
    }
    if (sliderColorShuffleBlue.value == 5){
        ColorCurve1A.style.stroke = randomBlue5;
        ColorCurve1B.style.stroke = randomBlue5;
        circle1.style.stroke = randomBlue5;
        circle1.style.fill = randomBlue5;
        ColorCurve2A.style.stroke = randomBlue6;
        ColorCurve2B.style.stroke = randomBlue6;
        circle2.style.stroke = randomBlue6;
        circle2.style.fill = randomBlue6;
        ColorCurve3A.style.stroke = randomBlue4;
        ColorCurve3B.style.stroke = randomBlue4;
        circle3.style.stroke = randomBlue4;
        circle3.style.fill = randomBlue4;
        ColorCurve4A.style.stroke = randomBlue3;
        ColorCurve4B.style.stroke = randomBlue3;
        circle4.style.stroke = randomBlue3;
        circle4.style.fill = randomBlue3;
        ColorCurve5A.style.stroke = randomBlue2;
        ColorCurve5B.style.stroke = randomBlue2;
        circle5.style.stroke = randomBlue2;
        circle5.style.fill = randomBlue2;
        ColorCurve6A.style.stroke = randomBlue1;
        ColorCurve6B.style.stroke = randomBlue1;
        circle6.style.stroke = randomBlue1;
        circle6.style.fill = randomBlue1;
    }
}

let sliderColorShufflePurple = document.getElementById("color-shuffle-purple");
sliderColorShufflePurple.oninput = function(){
    if (sliderColorShufflePurple.value == 0){
        ColorCurve1A.style.stroke = randomPurple1;
        ColorCurve1B.style.stroke = randomPurple1;
        circle1.style.stroke = randomPurple1;
        circle1.style.fill = randomPurple2;
        ColorCurve2A.style.stroke = randomPurple2;
        ColorCurve2B.style.stroke = randomPurple2;
        circle2.style.stroke = randomPurple2;
        circle2.style.fill = randomPurple2;
        ColorCurve3A.style.stroke = randomPurple3;
        ColorCurve3B.style.stroke = randomPurple3;
        circle3.style.stroke = randomPurple3;
        circle3.style.fill = randomPurple3;
        ColorCurve4A.style.stroke = randomPurple4;
        ColorCurve4B.style.stroke = randomPurple4;
        circle4.style.stroke = randomPurple4;
        circle4.style.fill = randomPurple4;
        ColorCurve5A.style.stroke = randomPurple5;
        ColorCurve5B.style.stroke = randomPurple5;
        circle5.style.stroke = randomPurple5;
        circle5.style.fill = randomPurple5;
        ColorCurve6A.style.stroke = randomPurple6;
        ColorCurve6B.style.stroke = randomPurple6;
        circle6.style.stroke = randomPurple6;
        circle6.style.fill = randomPurple6;
    }
    if (sliderColorShufflePurple.value == 1){
        ColorCurve1A.style.stroke = randomPurple5;
        ColorCurve1B.style.stroke = randomPurple5;
        circle1.style.stroke = randomPurple5;
        circle1.style.fill = randomPurple5;
        ColorCurve2A.style.stroke = randomPurple3;
        ColorCurve2B.style.stroke = randomPurple3;
        circle2.style.stroke = randomPurple3;
        circle2.style.fill = randomPurple3;
        ColorCurve3A.style.stroke = randomPurple2;
        ColorCurve3B.style.stroke = randomPurple2;
        circle3.style.stroke = randomPurple2;
        circle3.style.fill = randomPurple2;
        ColorCurve4A.style.stroke = randomPurple4;
        ColorCurve4B.style.stroke = randomPurple4;
        circle4.style.stroke = randomPurple4;
        circle4.style.fill = randomPurple4;
        ColorCurve5A.style.stroke = randomPurple6;
        ColorCurve5B.style.stroke = randomPurple6;
        circle5.style.stroke = randomPurple6;
        circle5.style.fill = randomPurple6;
        ColorCurve6A.style.stroke = randomPurple1;
        ColorCurve6B.style.stroke = randomPurple1;
        circle6.style.stroke = randomPurple1;
        circle6.style.fill = randomPurple1;
    }
    if (sliderColorShufflePurple.value == 2){
        ColorCurve1A.style.stroke = randomPurple3;
        ColorCurve1B.style.stroke = randomPurple3;
        circle1.style.stroke = randomPurple3;
        circle1.style.fill = randomPurple3;
        ColorCurve2A.style.stroke = randomPurple1;
        ColorCurve2B.style.stroke = randomPurple1;
        circle2.style.stroke = randomPurple1;
        circle2.style.fill = randomPurple1;
        ColorCurve3A.style.stroke = randomPurple5;
        ColorCurve3B.style.stroke = randomPurple5;
        circle3.style.stroke = randomPurple5;
        circle3.style.fill = randomPurple5;
        ColorCurve4A.style.stroke = randomPurple6;
        ColorCurve4B.style.stroke = randomPurple6;
        circle4.style.stroke = randomPurple6;
        circle4.style.fill = randomPurple6;
        ColorCurve5A.style.stroke = randomPurple4;
        ColorCurve5B.style.stroke = randomPurple4;
        circle5.style.stroke = randomPurple4;
        circle5.style.fill = randomPurple4;
        ColorCurve6A.style.stroke = randomPurple2;
        ColorCurve6B.style.stroke = randomPurple2;
        circle6.style.stroke = randomPurple2;
        circle6.style.fill = randomPurple2;
    }
    if (sliderColorShufflePurple.value == 3){
        ColorCurve1A.style.stroke = randomPurple4;
        ColorCurve1B.style.stroke = randomPurple4;
        circle1.style.stroke = randomPurple4;
        circle1.style.fill = randomPurple4;
        ColorCurve2A.style.stroke = randomPurple5;
        ColorCurve2B.style.stroke = randomPurple5;
        circle2.style.stroke = randomPurple5;
        circle2.style.fill = randomPurple5;
        ColorCurve3A.style.stroke = randomPurple2;
        ColorCurve3B.style.stroke = randomPurple2;
        circle3.style.stroke = randomPurple2;
        circle3.style.fill = randomPurple2;
        ColorCurve4A.style.stroke = randomPurple6;
        ColorCurve4B.style.stroke = randomPurple6;
        circle4.style.stroke = randomPurple6;
        circle4.style.fill = randomPurple6;
        ColorCurve5A.style.stroke = randomPurple1;
        ColorCurve5B.style.stroke = randomPurple1;
        circle5.style.stroke = randomPurple1;
        circle5.style.fill = randomPurple1;
        ColorCurve6A.style.stroke = randomPurple3;
        ColorCurve6B.style.stroke = randomPurple3;
        circle6.style.stroke = randomPurple3;
        circle6.style.fill = randomPurple3;
    }
    if (sliderColorShufflePurple.value == 4){
        ColorCurve1A.style.stroke = randomPurple2;
        ColorCurve1B.style.stroke = randomPurple2;
        circle1.style.stroke = randomPurple2;
        circle1.style.fill = randomPurple2;
        ColorCurve2A.style.stroke = randomPurple6;
        ColorCurve2B.style.stroke = randomPurple6;
        circle2.style.stroke = randomPurple6;
        circle2.style.fill = randomPurple6;
        ColorCurve3A.style.stroke = randomPurple5;
        ColorCurve3B.style.stroke = randomPurple5;
        circle3.style.stroke = randomPurple5;
        circle3.style.fill = randomPurple5;
        ColorCurve4A.style.stroke = randomPurple1;
        ColorCurve4B.style.stroke = randomPurple1;
        circle4.style.stroke = randomPurple1;
        circle4.style.fill = randomPurple1;
        ColorCurve5A.style.stroke = randomPurple3;
        ColorCurve5B.style.stroke = randomPurple3;
        circle5.style.stroke = randomPurple3;
        circle5.style.fill = randomPurple3;
        ColorCurve6A.style.stroke = randomPurple4;
        ColorCurve6B.style.stroke = randomPurple4;
        circle6.style.stroke = randomPurple4;
        circle6.style.fill = randomPurple4;
    }
    if (sliderColorShufflePurple.value == 5){
        ColorCurve1A.style.stroke = randomPurple5;
        ColorCurve1B.style.stroke = randomPurple5;
        circle1.style.stroke = randomPurple5;
        circle1.style.fill = randomPurple5;
        ColorCurve2A.style.stroke = randomPurple6;
        ColorCurve2B.style.stroke = randomPurple6;
        circle2.style.stroke = randomPurple6;
        circle2.style.fill = randomPurple6;
        ColorCurve3A.style.stroke = randomPurple4;
        ColorCurve3B.style.stroke = randomPurple4;
        circle3.style.stroke = randomPurple4;
        circle3.style.fill = randomPurple4;
        ColorCurve4A.style.stroke = randomPurple3;
        ColorCurve4B.style.stroke = randomPurple3;
        circle4.style.stroke = randomPurple3;
        circle4.style.fill = randomPurple3;
        ColorCurve5A.style.stroke = randomPurple2;
        ColorCurve5B.style.stroke = randomPurple2;
        circle5.style.stroke = randomPurple2;
        circle5.style.fill = randomPurple2;
        ColorCurve6A.style.stroke = randomPurple1;
        ColorCurve6B.style.stroke = randomPurple1;
        circle6.style.stroke = randomPurple1;
        circle6.style.fill = randomPurple1;
    }
}

let randomize = document.getElementById("buttonrandom");
function randomizeColors(){
    // let randomizeColors = [randomPink1, randomPink2, randomPink3, randomPink4, randomPink5, randomPink6, randomOrange1, randomOrange2, randomOrange3, randomOrange4, randomOrange5, randomOrange6, randomYellow1, randomYellow2, randomYellow3, randomYellow4, randomYellow5, randomYellow6, randomRed1, randomRed2, randomRed3, randomRed4, randomRed5, randomRed6, randomGrey1, randomGrey2, randomGrey3, randomGrey4, randomGrey5, randomGrey6, randomGreen1,randomGreen2, randomGreen3, randomGreen4, randomGreen5, randomGreen6, randomBlue1, randomBlue2, randomBlue3, randomBlue4, randomBlue5, randomBlue6, randomPurple1, randomPurple2, randomPurple3, randomPurple4, randomPurple5, randomPurple6];

    let fullPalette= [pinkPalette, orangePalette, yellowPalette, redPalette, greyPalette, greenPalette, bluePalette, purplePalette];
    let randomPalette = fullPalette[Math.floor(Math.random() * fullPalette.length)];

    ColorCurve1A.style.stroke = randomPalette[0];
    ColorCurve1B.style.stroke = randomPalette[0];
    circle1.style.fill = randomPalette[0];
    circle1.style.stroke = randomPalette[0];
    ColorCurve2A.style.stroke = randomPalette[1];
    ColorCurve2B.style.stroke = randomPalette[1];
    circle2.style.fill = randomPalette[1];
    circle2.style.stroke = randomPalette[1];
    ColorCurve3A.style.stroke = randomPalette[2];
    ColorCurve3B.style.stroke = randomPalette[2];
    circle3.style.fill = randomPalette[2];
    circle3.style.stroke = randomPalette[2];
    ColorCurve4A.style.stroke = randomPalette[3];
    ColorCurve4B.style.stroke = randomPalette[3];
    circle4.style.fill = randomPalette[3];
    circle4.style.stroke = randomPalette[3];
    ColorCurve5A.style.stroke = randomPalette[4];
    ColorCurve5B.style.stroke = randomPalette[4];
    circle5.style.fill = randomPalette[4];
    circle5.style.stroke = randomPalette[4];
    ColorCurve6A.style.stroke = randomPalette[5];
    ColorCurve6B.style.stroke = randomPalette[5];
    circle6.style.fill = randomPalette[5];
    circle6.style.stroke = randomPalette[5];

    let strokeWidths = [.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 9.5, 10, 10.5];
    let randomStrokeWidth = strokeWidths[Math.floor(Math.random() * strokeWidths.length)];
    curve1.setAttribute("stroke-width", randomStrokeWidth + "px");
    curve2.setAttribute("stroke-width", randomStrokeWidth + "px");
    curve3.setAttribute("stroke-width", randomStrokeWidth + "px");
    curve4.setAttribute("stroke-width", randomStrokeWidth + "px");
    curve5.setAttribute("stroke-width", randomStrokeWidth + "px");
    curve6.setAttribute("stroke-width", randomStrokeWidth + "px");


    let circleRadius = [.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];
    let randomCircleRadius = circleRadius[Math.floor(Math.random() * circleRadius.length)];
    circle1.setAttribute("r", randomCircleRadius);
    circle2.setAttribute("r", randomCircleRadius);
    circle3.setAttribute("r", randomCircleRadius);
    circle4.setAttribute("r", randomCircleRadius);
    circle5.setAttribute("r", randomCircleRadius);
    circle6.setAttribute("r", randomCircleRadius);

    let clicks 

    for (let i=0; i<1000; i++){
        // do something
    }
    
}


