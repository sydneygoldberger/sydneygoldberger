// Reference: https://processing.org/tutorials/text

var submit = document.getElementById("submit");
var subQuestionBox = document.getElementById("subQuestionBox");
var wfh = document.getElementById("wfh");
var questionsIntro = document.getElementById("questionsIntro");
var questionChange1 = document.getElementById("questionChange1");
var questionChange2 = document.getElementById("questionChange2");
var createSticker = document.getElementById("createSticker");
var rightSide = document.getElementById("rightSide");
var leftSide = document.getElementById("leftSide");
var numberInput = document.getElementById("numberInput");
var saveImageBtn = document.getElementById("saveSticker");
var step3 = document.getElementById("step3");

function submitQuestionOption() {
  subQuestionBox.style.visibility = "visible";
  step3.style.visibility = "visible";
  if (wfh.value == "noCommute"){
    questionChange1.style.visibility = "visible";
    numberInput.style.visibility = "visible";
    createSticker.style.visibility = "visible";
    questionsIntro.innerHTML = '<span id="questionPart1"><span id="step2">STEP 2:</span><br><br>Before working from home,</span>';
    questionChange1.innerHTML = '<span id="questionPart2" style="border: 1px black solid; padding: 5px; margin-left: 5px;">I commuted to work for</span>';
    questionChange2.innerHTML = '<span id="questionPart3">hours each day.</span>';
}
  if (wfh.value == "moreSleep"){
    questionChange1.style.visibility = "visible";
    numberInput.style.visibility = "visible";
    createSticker.style.visibility = "visible";
      questionsIntro.innerHTML = '<span id="questionPart1"><span id="step2">STEP 2:</span><br><br>Working from home</span>';
      questionChange1.innerHTML = '<span id="questionPart2" style="border: 1px black solid; padding: 5px;  margin-left: 5px;">allows me to sleep</span>';
      questionChange2.innerHTML = '<span id="questionPart3">more hours per night.</span>';
  }
  if (wfh.value == "lessMoney"){
    questionChange1.style.visibility = "visible";
    numberInput.style.visibility = "visible";
    createSticker.style.visibility = "visible";
      questionsIntro.innerHTML = '<span id="questionPart1"><span id="step2">STEP 2:</span><br><br>Before working from home,</span>';
      questionChange1.innerHTML = '<span id="questionPart2" style="border: 1px black solid; padding: 5px; margin-left: 5px;">I used to spend</span>';
      questionChange2.innerHTML = '<span id="questionPart3">dollars every day.</span>';
  }
  if (wfh.value == "noDressCode"){
    questionChange1.style.visibility = "visible";
    numberInput.style.visibility = "visible";
    createSticker.style.visibility = "visible";
      questionsIntro.innerHTML = '<span id="questionPart1"><span id="step2">STEP 2:</span><br><br>Since I started working from home,</span>';
      questionChange1.innerHTML = '<span id="questionPart2" style="border: none; margin-left: 5px;">I now have</span>';
      questionChange2.innerHTML = '<span id="questionPart3" style="border: 1px solid black; padding: 5px;">more sweatpants.</span>';

  }
  if (wfh.value == "portableOffice"){
    questionChange1.style.visibility = "visible";
    numberInput.style.visibility = "visible";
    createSticker.style.visibility = "visible";
      questionsIntro.innerHTML = '<span id="questionPart1"><span id="step2">STEP 2:</span><br><br>Since I started working from home</span>';
      questionChange1.innerHTML = '<span id="questionPart2" style="border: 1px black solid; padding: 5px;  margin-left: 5px;">I have worked in</span>';
      questionChange2.innerHTML = '<span id="questionPart3">different locations.</span>';
  }
  if (wfh.value == "flexHours"){
    questionChange1.style.visibility = "visible";
    numberInput.style.visibility = "visible";
    createSticker.style.visibility = "visible";
      questionsIntro.innerHTML = '<span id="questionPart1"><span id="step2">STEP 2:</span><br><br>Since I started working from home</span><br><br>';
      questionChange1.innerHTML = '<span id="questionPart2" style="border: 1px black solid; padding: 5px; padding-top: 3px; padding-bottom: 3px; position: relative; top: -5px;">I am no longer am chained to my desk for</span>';
      questionChange2.innerHTML = '<span id="questionPart3">hours per day.</span>';
  }
}

var rightSideWidth = rightSide.offsetWidth;
var rightSideHeight = rightSide.offsetHeight;
var leftsideWidth = leftSide.offsetWidth;
var leftsideHeight = leftSide.offsetHeight;


console.log(rightSideWidth);

function drawsticker(rightSide) {
  var r = rightSideWidth/1.6;
  var sweatpants;
  var calendar;
  var pillow;
  var proximity;
  var suitcase; 
  var wallet;
  var arclength; 

  rightSide.preload = function(){
    sweatpants = rightSide.loadImage('images/pants.png');
    calendar = rightSide.loadImage('images/calendar.png');
    pillow = rightSide.loadImage('images/pillow.png');
    proximity = rightSide.loadImage('images/proximity.png');
    suitcase = rightSide.loadImage('images/suitcase.png');
    wallet = rightSide.loadImage('images/wallet.png');
    wfhText = rightSide.loadImage('images/wfh-text.png');
    font = rightSide.loadFont('Rubik-Regular.otf');
  }

  rightSide.setup = function () {
      rightSide.createCanvas(rightSideWidth,rightSideHeight);
      rightSide.textAlign(rightSide.CENTER);
      rightSide.smooth();
  }

  rightSide.draw = function () {
    createSticker.onclick = function(){ 
      saveImageBtn.style.visibility = "visible";
      if (wfh.value == "noDressCode"){
          rightSide.clear();
          rightSide.noStroke();
          rightSide.fill("white");
          rightSide.ellipse(rightSideWidth/2, rightSideHeight/2, r);
          var dividend = rightSideWidth/660;
          var imageWidth = 163.3987;
          var imageHeight = 228.4788;
          var wfhWidth = 154.04;
          var wfhHeight = 12.961;        
          rightSide.image(sweatpants, rightSideWidth/2 - imageWidth*dividend/2, rightSideHeight/2 - imageHeight*dividend/2, imageWidth*dividend, imageHeight*dividend);
          var y = rightSideWidth/4.4;
          rightSide.image(wfhText, rightSideWidth/2 - wfhWidth*dividend/2, rightSideHeight/2 + y,  wfhWidth*dividend, wfhHeight*dividend);              
          rightSide.drawNoDressCode();
      }
      if (wfh.value == "lessMoney"){
        rightSide.clear();
        rightSide.noStroke();
        rightSide.fill("white");
        rightSide.ellipse(rightSideWidth/2, rightSideHeight/2, r);
        var dividend = rightSideWidth/660;
        var imageWidth = 236.0163;
        var imageHeight = 222.7747;
        var wfhWidth = 154.04;
        var wfhHeight = 12.961;   
        rightSide.image(wallet, rightSideWidth/2 - imageWidth*dividend/2, rightSideHeight/2 - imageHeight*dividend/2, imageWidth*dividend, imageHeight*dividend);
        var y = rightSideWidth/4.4;
        rightSide.image(wfhText, rightSideWidth/2 - wfhWidth*dividend/2, rightSideHeight/2 + y,  wfhWidth*dividend, wfhHeight*dividend);
        rightSide.drawLessMoney();
      }
      if (wfh.value == "moreSleep"){
        rightSide.clear();
        rightSide.noStroke();
        rightSide.fill("white");
        rightSide.ellipse(rightSideWidth/2, rightSideHeight/2, r);
        var dividend = rightSideWidth/660;
        var imageWidth = 267.2871;
        var imageHeight = 219.7505;
        var wfhWidth = 154.04;
        var wfhHeight = 12.961;   
        rightSide.image(pillow, rightSideWidth/2 - imageWidth*dividend/2, rightSideHeight/2 - imageHeight*dividend/2, imageWidth*dividend, imageHeight*dividend);
        var y = rightSideWidth/4.4;
        rightSide.image(wfhText, rightSideWidth/2 - wfhWidth*dividend/2, rightSideHeight/2 + y,  wfhWidth*dividend, wfhHeight*dividend);
        rightSide.drawMoreSleep();
      }
      if (wfh.value == "noCommute"){
        rightSide.clear();
        rightSide.noStroke();
        rightSide.fill("white");
        rightSide.ellipse(rightSideWidth/2, rightSideHeight/2, r);
        var dividend = rightSideWidth/660;
        var imageWidth = 156.1798;
        var imageHeight = 225.6816;
        var wfhWidth = 154.04;
        var wfhHeight = 12.961;   
        rightSide.image(proximity, rightSideWidth/2 - imageWidth*dividend/2, rightSideHeight/2 - imageHeight*dividend/2, imageWidth*dividend, imageHeight*dividend);
        var y = rightSideWidth/4.4;
        rightSide.image(wfhText, rightSideWidth/2 - wfhWidth*dividend/2, rightSideHeight/2 + y,  wfhWidth*dividend, wfhHeight*dividend);
        rightSide.drawTextCommute();
      }
      if (wfh.value == "portableOffice"){
        rightSide.clear();
        rightSide.noStroke();
        rightSide.fill("white");
        rightSide.ellipse(rightSideWidth/2, rightSideHeight/2, r);
        var dividend = rightSideWidth/660;
        var imageWidth = 287.9387;
        var imageHeight = 223.4052;
        var wfhWidth = 154.04;
        var wfhHeight = 12.961;   
        rightSide.image(suitcase, rightSideWidth/2 - imageWidth*dividend/2, rightSideHeight/2 - imageHeight*dividend/2, imageWidth*dividend, imageHeight*dividend);
        var y = rightSideWidth/4.4;
        rightSide.image(wfhText, rightSideWidth/2 - wfhWidth*dividend/2, rightSideHeight/2 + y,  wfhWidth*dividend, wfhHeight*dividend);
        rightSide.drawPortableOffice();
      }
      if (wfh.value == "flexHours"){
        rightSide.clear();
        rightSide.noStroke();
        rightSide.fill("white");
        rightSide.ellipse(rightSideWidth/2, rightSideHeight/2, r);
        var dividend = rightSideWidth/660;
        var imageWidth = 200.2583;
        var imageHeight = 233.9645;
        var wfhWidth = 154.04;
        var wfhHeight = 12.961;   
        rightSide.image(calendar, rightSideWidth/2 - imageWidth*dividend/2, rightSideHeight/2 - imageHeight*dividend/2, imageWidth*dividend, imageHeight*dividend);
        var y = rightSideWidth/4.4;
        rightSide.image(wfhText, rightSideWidth/2 - wfhWidth*dividend/2, rightSideHeight/2 + y,  wfhWidth*dividend, wfhHeight*dividend);
        rightSide.drawFlexHours();
      }
    }
    saveImageBtn.onclick = function(){
      rightSide.save("wfhsticker.png");
    }
  }

  rightSide.drawTextCommute = function(){
    message = "+"+numberInput.value + " PROXIMITY";
    console.log(numberInput.value);
    var r = rightSideWidth/2.1;
    rightSide.translate(rightSideWidth / 2, rightSideHeight / 2);
    rightSide.noFill();
    rightSide.noStroke();
    rightSide.textSize(rightSideWidth/20);
    rightSide.ellipse(0, 0, r, r);
    arclength = r;
    for (i = 0; i < message.length; i++){
      currentChar = message.charAt(i);
      w = rightSide.textWidth(currentChar);
      arclength += w/1.2;
      theta = rightSide.PI/1.04 + arclength / r;
      rightSide.push();
      rightSide.translate(r/2*rightSide.cos(theta), r/2*rightSide.sin(theta));
      rightSide.rotate(theta+rightSide.PI/2);
      rightSide.fill(0);
      rightSide.text(currentChar,0,0);
      rightSide.pop();
      arclength += w/1;
    }
  }

  rightSide.drawNoDressCode = function(){
    message = "+"+numberInput.value + " COMFORT";
    console.log(numberInput.value);
    var r = rightSideWidth/2.1;
    rightSide.translate(rightSideWidth / 2, rightSideHeight / 2);
    rightSide.noFill();
    rightSide.noStroke();
    rightSide.textSize(rightSideWidth/20);
    rightSide.ellipse(0, 0, r, r);
    arclength = r;
    for (i = 0; i < message.length; i++){
      currentChar = message.charAt(i);
      w = rightSide.textWidth(currentChar);
      arclength += w/1.2;
      theta = rightSide.PI/1.035 + arclength / r;
      rightSide.push();
      rightSide.translate(r/2*rightSide.cos(theta), r/2*rightSide.sin(theta));
      rightSide.rotate(theta+rightSide.PI/2);
      rightSide.fill(0);
      rightSide.text(currentChar,0,0);
      rightSide.pop();
      arclength += w/1;
    }
  }

  rightSide.drawLessMoney = function(){
    message = "+"+numberInput.value + " FUNDS";
    console.log(numberInput.value);
    var r = rightSideWidth/2.1;
    rightSide.translate(rightSideWidth / 2, rightSideHeight / 2);
    rightSide.noFill();
    rightSide.noStroke();
    rightSide.textSize(rightSideWidth/20);
    rightSide.ellipse(0, 0, r, r);
    arclength = r;
    for (i = 0; i < message.length; i++){
      currentChar = message.charAt(i);
      w = rightSide.textWidth(currentChar);
      arclength += w/1.2;
      theta = rightSide.PI/.99 + arclength / r;
      rightSide.push();
      rightSide.translate(r/2*rightSide.cos(theta), r/2*rightSide.sin(theta));
      rightSide.rotate(theta+rightSide.PI/2);
      rightSide.fill(0);
      rightSide.text(currentChar,0,0);
      rightSide.pop();
      arclength += w/1;
    }
  }

  rightSide.drawMoreSleep = function(){
    message = "+"+numberInput.value + " DREAMS";
    console.log(numberInput.value);
    var r = rightSideWidth/2.1;
    rightSide.translate(rightSideWidth / 2, rightSideHeight / 2);
    rightSide.noFill();
    rightSide.noStroke();
    rightSide.textSize(rightSideWidth/20);
    rightSide.ellipse(0, 0, r, r);
    arclength = r;
    for (i = 0; i < message.length; i++){
      currentChar = message.charAt(i);
      w = rightSide.textWidth(currentChar);
      arclength += w/1.2;
      theta = rightSide.PI/1.01 + arclength / r;
      rightSide.push();
      rightSide.translate(r/2*rightSide.cos(theta), r/2*rightSide.sin(theta));
      rightSide.rotate(theta+rightSide.PI/2);
      rightSide.fill(0);
      rightSide.text(currentChar,0,0);
      rightSide.pop();
      arclength += w/1;
    }
  }

  rightSide.drawPortableOffice = function(){
    message = "+"+numberInput.value + " ADVENTURES";
    console.log(numberInput.value);
    var r = rightSideWidth/2.1;
    rightSide.translate(rightSideWidth / 2, rightSideHeight / 2);
    rightSide.noFill();
    rightSide.noStroke();
    rightSide.textSize(rightSideWidth/20);
    rightSide.ellipse(0, 0, r, r);
    arclength = r;
    for (i = 0; i < message.length; i++){
      currentChar = message.charAt(i);
      w = rightSide.textWidth(currentChar);
      arclength += w/1.2;
      theta = rightSide.PI/1.095 + arclength / r;
      rightSide.push();
      rightSide.translate(r/2*rightSide.cos(theta), r/2*rightSide.sin(theta));
      rightSide.rotate(theta+rightSide.PI/2);
      rightSide.fill(0);
      rightSide.text(currentChar,0,0);
      rightSide.pop();
      arclength += w/1;
    }
  }

  rightSide.drawFlexHours = function(){
    message = "+"+numberInput.value + " FREE TIME";
    console.log(numberInput.value);
    var r = rightSideWidth/2.1;
    rightSide.translate(rightSideWidth / 2, rightSideHeight / 2);
    rightSide.noFill();
    rightSide.noStroke();
    rightSide.textSize(rightSideWidth/20);
    rightSide.ellipse(0, 0, r, r);
    arclength = r;
    for (i = 0; i < message.length; i++){
      currentChar = message.charAt(i);
      w = rightSide.textWidth(currentChar);
      arclength += w/1.2;
      theta = rightSide.PI/1.045 + arclength / r;
      rightSide.push();
      rightSide.translate(r/2*rightSide.cos(theta), r/2*rightSide.sin(theta));
      rightSide.rotate(theta+rightSide.PI/2);
      rightSide.fill(0);
      rightSide.text(currentChar,0,0);
      rightSide.pop();
      arclength += w/1;
    }
  }
}





new p5(drawsticker, rightSide);


