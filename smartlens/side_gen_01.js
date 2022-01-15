// require https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.11/paper-full.min.js

/* globals paper*/
/* exported downloadSVG*/

/*
         ┌───────┐
         │       │
         │ front │
      gf │       │  gf
  ┌──────┼───────┼──────┐
  │      │       │      │
 f│left  │bottom │right │f
  │      │       │      │
  └──────┼───────┼──────┘
      gf │       │  gf
         │back   │
         │       │
         ├───────┤
         │       │
         │top    │
         │       │
         └───────┘
             f
*/

const INCH = 72;
const TAB_WIDTH = 0.5 * INCH;
// create a canvas and attach paper to it
function setup() {
  const paper_canvas = document.createElement("canvas");
  paper_canvas.setAttribute("width", "800");
  paper_canvas.setAttribute("height", "800");
  document.body.append(paper_canvas);
  paper.setup(paper_canvas);
}

// downloads the paper drawing as svg
// adapted from https://compform.net/vectors/
function downloadSVG(fileName) {
  // use default name if not provided
  fileName = fileName || "output.svg";

  // create a data url of the file
  var svgData = paper.project.exportSVG({ bounds: "content", asString: true });
  var url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

  // create an off-document link to the data, and "click" it
  var link = document.createElement("a");
  link.download = fileName;
  link.href = url;
  link.click();
}

// center view on `target` item, and zoom to fit
function showItem(target = paper.project.activeLayer) {
  paper.project.view.center = target.bounds.center;
  paper.paper.view.zoom = 1;
  paper.project.view.zoom = Math.min(
    paper.project.view.bounds.height / target.bounds.height,
    paper.project.view.bounds.width / target.bounds.width
  );
}


function makeBoxPattern(width, height, depth) {
  // front
  const front_r = new paper.Rectangle(height, 0, width, height);
  const front = new paper.Path.Rectangle(front_r);
  front.name = "front";
  // front.fillColor = "#c2311d";
  front.strokeColor = "black";
  front.strokeWidth = 0.5;

  // bottom
  const bottom_r = new paper.Rectangle(height, height, width, depth);
  const bottom = new paper.Path.Rectangle(bottom_r);
  bottom.name = "bottom";
  bottom.fillColor = "white";
  front.strokeColor = "black";
  front.strokeWidth = 0.5;

  // back
  const back_r = new paper.Rectangle(height, height + depth, width, height);
  const back = new paper.Path.Rectangle(back_r);
  back.name = "back";
  back.fillColor = "white";
  back.strokeColor = "black";
  back.strokeWidth = 0.5;

  // top
  const top_r = new paper.Rectangle(
    height,
    height + depth + height,
    width,
    depth
  );
  const top = new paper.Path.Rectangle(top_r);
  top.name = "top";
  top.fillColor = "white";
  top.strokeColor = "black";
  top.strokeWidth = 0.5

  // left
  const left_r = new paper.Rectangle(0, height, height, depth);
  const left = new paper.Path.Rectangle(left_r);
  left.name = "left";
  left.fillColor = "white";
  left.strokeColor = "black";
  left.strokeWidth = 0.5;

  // right
  const right_r = new paper.Rectangle(height + width, height, height, depth);
  const right = new paper.Path.Rectangle(right_r);
  right.name = "right";
  right.fillColor = "white";
  right.strokeColor = "black";
  right.strokeWidth = 0.5;

  // top_tab_1
  const top_tab_1 = makeTab(
    new paper.Rectangle(
      height,
      height + depth + height + depth,
      width,
      TAB_WIDTH
    )
  );
  top_tab_1.rotation = 180;
  top_tab_1.name = "top_tab_1";  
  top_tab_1.strokeColor = "black";
  top_tab_1.strokeWidth = 0.5;
  top_tab_1.fillColor = "white";

  // left_tab_1
  const left_tab_1 = makeTab(
    new paper.Rectangle(0, height - TAB_WIDTH, height, TAB_WIDTH)
  );
  left_tab_1.name = "left_tab_1";
  left_tab_1.strokeColor = "black";
  left_tab_1.strokeWidth = 0.5;
  left_tab_1.fillColor = "white";

  // left_tab_2
  const left_tab_2 = makeTab(
    new paper.Rectangle(0, height + depth, height, TAB_WIDTH)
  );
  left_tab_2.rotation = 180;
  left_tab_2.name = "left_tab_2";
  left_tab_2.strokeColor = "black";
  left_tab_2.strokeWidth = 0.5;
  left_tab_2.fillColor = "white";

  // left_tab_3
  const left_tab_3 = makeTab(new paper.Rectangle(0, 0, depth, TAB_WIDTH));
  left_tab_3.rotation = -90;
  left_tab_3.position = new paper.Point(-TAB_WIDTH * 0.5, height + depth * 0.5);
  left_tab_3.name = "left_tab_3";
  left_tab_3.strokeColor = "black";
  left_tab_3.strokeWidth = 0.5;
  left_tab_3.fillColor = "white";

  // right_tab_1
  const right_tab_1 = makeTab(
    new paper.Rectangle(height + width, height - TAB_WIDTH, height, TAB_WIDTH)
  );
  right_tab_1.name = "right_tab_1";
  right_tab_1.strokeColor = "black";
  right_tab_1.strokeWidth = 0.5;
  right_tab_1.fillColor = "white";

  // right_tab_2
  const right_tab_2 = makeTab(
    new paper.Rectangle(height + width, height + depth, height, TAB_WIDTH)
  );
  right_tab_2.rotation = 180;
  right_tab_2.name = "right_tab_2";
  right_tab_2.strokeColor = "black";
  right_tab_2.strokeWidth = 0.5;
  right_tab_2.fillColor = "white";

  // right_tab_3
  const right_tab_3 = makeTab(new paper.Rectangle(0, 0, depth, TAB_WIDTH));
  right_tab_3.rotation = 90;
  right_tab_3.position = new paper.Point(
    height + width + height + TAB_WIDTH * 0.5,
    height + depth * 0.5
  );
  right_tab_3.name = "right_tab_3";
  right_tab_3.strokeColor = "black";
  right_tab_3.strokeWidth = 0.5;
  right_tab_3.fillColor = "white";

  // group + style
  const box = new paper.Group({
    name: "box",
    children: [
      front,
      bottom,
      back,
      top,
      left,
      right,
      top_tab_1,
      left_tab_1,
      left_tab_2,
      left_tab_3,
      right_tab_1,
      right_tab_2,
      right_tab_3,
    ],
  });

  return box;
}

function makeTab(bounds) {
      const tab = new paper.Path.Rectangle(bounds);
      tab.segments[1].point.x += bounds.height;
      tab.segments[2].point.x -= bounds.height;
      tab.fillColor = "black";
      return tab;
}

const TYPE_STYLE = {
  fontFamily: "urbane", // must be loaded from html/css before use
  fontWeight: 500,
  fillColor: "black",
  fontSize: 22 + 'px',
  justification: 'left'
};
 
function generateSide(size) {
      const g = new paper.Group({ name: "side" });          
      return g;
  }

function generateLeft(size) {
    const g = generateSide(size);

    const left_r = new paper.Rectangle(0, 6*INCH, 6*INCH, depth);
    const left = new paper.Path.Rectangle(left_r);
    g.addChild(left);

    const text = new paper.PointText(
    new paper.Point(.5*INCH, size.height/1.357));
    text.style = TYPE_STYLE;
    text.justification = 'left';
    var n = mynumberInput.value;
    text.fillColor = "";
    text.content = n + " DAY SUPPLY";
    g.addChild(text);

 
    const text2 = new paper.PointText(
      new paper.Point(.5*INCH, size.height/1.74));
      text.justification = 'left';
      text2.style = TYPE_STYLE;
      var n = mynumberInput.value;
      text2.fillColor = "";
      text2.content = "1-DAY";
      g.addChild(text2);
        
    const text3 = new paper.PointText(
      new paper.Point(.5*INCH, size.height/2.446));
      text.justification = 'left';
      text3.style = TYPE_STYLE;
      var n = mynumberInput.value;
      text3.fillColor = "";
      text3.content = "UV BLOCKING";
      g.addChild(text3);


    // text2.position.x = left.bounds.left.x;
    // text3.position.x = left.bounds.left.x;


    var blackT3 = document.getElementById("blackT3");
    var whiteT3 = document.getElementById("whiteT3");

    blackT3.onclick = function() {
      g.fillColor = "black"
      console.log('black');
      left.opacity = "0"
    }
    whiteT3.onclick = function() {
      g.fillColor = "white"
      console.log('white');
      left.opacity = "0"
    }
    return g;
   
}
    
function generateRight(size) {
  const g = generateSide(size);
  var lp = document.getElementById("lefteyePower").value;
  var lbc =  document.getElementById("lefteyeBC").value;
  var rp =  document.getElementById("righteyePower").value;
  var rbc =  document.getElementById("righteyeBC").value;

  const right_r = new paper.Rectangle(0, 6*INCH, 6*INCH, depth);
  const right = new paper.Path.Rectangle(right_r);
  g.addChild(right);

  const text = new paper.PointText(
  new paper.Point(5.5*INCH, size.height/2.446));
  text.style = TYPE_STYLE;
  text.justification = 'right';
  var n = mynumberInput.value;
  text.fillColor = "";
  text.content = "2025-07-01";
  g.addChild(text);
  
  const text2 = new paper.PointText(
    new paper.Point(.5*INCH, size.height/1.357));
    text2.justification = 'left';
    text2.style = TYPE_STYLE;
    var n = mynumberInput.value;
    text2.fillColor = "";
    text2.content = "BC " + lbc;
    g.addChild(text2);
      
  const text3 = new paper.PointText(
    new paper.Point(.5*INCH, size.height/1.74));
    text3.justification = 'left';
    text3.style = TYPE_STYLE;
    var n = mynumberInput.value;
    text3.fillColor = "";
    text3.content = "D " + lp;
    g.addChild(text3);

    const text4 = new paper.PointText(
      new paper.Point(.5*INCH, size.height/2.446));
      text4.justification = 'left';
      text4.style = TYPE_STYLE;
      var n = mynumberInput.value;
      text4.fillColor = "";
      text4.content = "Left:";
      g.addChild(text4);

        
  const text5 = new paper.PointText(
    new paper.Point(2.15*INCH, size.height/1.357));
    text5.justification = 'left';
    text5.style = TYPE_STYLE;
    var n = mynumberInput.value;
    text5.fillColor = "";
    text5.content = "BC " + rbc;
    g.addChild(text5);
      
  const text6 = new paper.PointText(
    new paper.Point(2.15*INCH, size.height/1.74));
    text6.justification = 'left';
    text6.style = TYPE_STYLE;
    var n = mynumberInput.value;
    text6.fillColor = "";
    text6.content = "D " + rp;
    g.addChild(text6);

    const text7 = new paper.PointText(
      new paper.Point(2.15*INCH, size.height/2.446));
      text7.justification = 'left';
      text7.style = TYPE_STYLE;
      var n = mynumberInput.value;
      text7.fillColor = "";
      text7.content = "Right:";
      g.addChild(text7);


  var blackT4 = document.getElementById("blackT4");
  var whiteT4 = document.getElementById("whiteT4");
  blackT4.onclick = function() {
      g.fillColor = "black"
      console.log('black');
      right.opacity = "0"
    }
    whiteT4.onclick = function() {
      g.fillColor = "white"
      console.log('white');
      right.opacity = "0"
    }
    return g;

}

function generateTop(size) {
  const g = generateSide(size);
  let logo2 = document.getElementById("svg2");
  let mainText = paper.project.importSVG(logo2);
  var n = mynumberInput.value;

  const top_r = new paper.Rectangle(0, 3*INCH, 3*INCH, depth);
  const top = new paper.Path.Rectangle(top_r);
  g.addChild(top);

  var a = n/4
  mainText.bounds = new paper.Rectangle(.08 * INCH, size.height/2.19, 1.4659*INCH, 0.1891*INCH);
  mainText.visible = true;
  mainText.rotation = 180;  
  mainText.opacity = "0";  
  mainText.fillColor = "black";

  // thingA.bounds.point = thingB.bounds.point;
  // // This one sets the x position of thingA to the x position of the center point of thingB.
  // thingA.position.x = thingB.bounds.center.x

  for (var i = 0; i < a; i++) {
    var mainTextCopy = mainText.clone();
    mainTextCopy.position.x += i * mainTextCopy.bounds.width;
    mainTextCopy.opacity = "1";
  // g.addChild(mainText);
    g.addChild(mainTextCopy);
  }

  var blackT2 = document.getElementById("blackT2");
  blackT2.onclick = function() {
    g.fillColor = "black"
    top.opacity = "0"
    console.log('black');
  }
  var whiteT2 = document.getElementById("whiteT2");
  whiteT2.onclick = function() {
    g.fillColor = "white"
    top.opacity = "0"
    console.log('white');
  }

  return g;   

}

function generateBottom(size) {
    const g = generateSide(size);
    
    const bottom_r = new paper.Rectangle(height, height, width, depth);
    const bottom = new paper.Path.Rectangle(bottom_r);
    g.addChild(bottom);

    var n = mynumberInput.value;
    var logo3 = document.getElementById("svg3");
    var barCode = paper.project.importSVG(logo3);
    barCode.visible = true;
    barCode.fillColor = "black";
    barCode.bounds = new paper.Rectangle(size.width- 5.4 * INCH, size.height/19, 7.2104*INCH, 1.4106*INCH);
    barCode.scale(0.39);

    g.addChild(barCode);
  
    // thingA.bounds.point = thingB.bounds.point;
    // // This one sets the x position of thingA to the x position of the center point of thingB.
    // thingA.position.x = thingB.bounds.center.x

    // barCode.bounds = new paper.Rectangle(height, height, width, depth);
    // barCode.scale(0.5);
    // console.log(barCode.bounds.width);
    // console.log(barCode.bounds.topRight);
    // console.log(barCode.bounds.topLeft);
    // console.log(barCode.bounds.bottomRight);
    // console.log(barCode.bounds.bottomLeft);

    function textColorBlack(){
      var blackT = document.getElementById("blackT");
      blackT.onclick = function() {
        barCode.fillColor = "black"
        console.log('black');
      }
    }

    function textColorWhite(){
      var whiteT = document.getElementById("whiteT");
      whiteT.onclick = function() {
        barCode.fillColor = "white"
        console.log('white');
      }
    }
  

    textColorWhite();
    textColorBlack();

    return g;   

}

// creates the front. starts with generateSide() then adds text
function generateFront(size) {
    var mynumberInput = document.getElementById("mynumberInput");
    var n = mynumberInput.value
    var blackF = document.getElementById('blackF');
    var babyblueF = document.getElementById('babyblueF');
    var lightgreenF = document.getElementById('lightgreenF');
    var greenF = document.getElementById('greenF');
    var pinkF = document.getElementById('pinkF');
    var purpleF = document.getElementById('purpleF');
    var yellowF = document.getElementById('yellowF');
    var orangeF = document.getElementById('orangeF');
    var lightpinkF = document.getElementById('lightpinkF');

    blackF.onclick = function() {
      copy.fillColor = "black";
      h.fillColor = "black";
      blackF.style.backgroundColor="black";
      blackF.style.pointerEvents = "auto";
      blackF.style.opacity = "1";
      blackB.style.backgroundColor = "white";
      blackB.style.pointerEvents = "none";
      blackB.style.opacity = "0";
      babyblueF.style.backgroundColor="white";
      babyblueF.style.pointerEvents="none";
      babyblueF.style.opacity="0";
      babyblueB.style.opacity = "0";
      babyblueB.style.pointerEvents = "auto";
      babyblueB.style.opacity = "1";
      lightgreenF.style.backgroundColor="white";
      lightgreenF.style.pointerEvents="none";
      lightgreenF.style.opacity = "0";
      lightgreenB.style.pointerEvents = "auto";
      lightgreenB.style.opacity = "1";
      greenF.style.backgroundColor="white";
      greenF.style.pointerEvents="none";
      greenF.style.opacity = "0";
      greenB.style.pointerEvents = "auto";
      greenB.style.opacity = "1";
      pinkF.style.backgroundColor="white";
      pinkF.style.pointerEvents="none";
      pinkF.style.opacity = "0";
      pinkB.style.pointerEvents = "auto";
      pinkB.style.opacity = "1";
      // navyF.style.backgroundColor="white";
      // navyF.style.pointerEvents="none";
      // navyF.style.opacity = "0";
      // navyB.style.pointerEvents = "grabbing";
      // navyB.style.opacity = "1";
      aquaF.style.backgroundColor="white";
      aquaF.style.pointerEvents="none";
      aquaF.style.opacity = "0";
      aquaB.style.pointerEvents = "auto";
      aquaB.style.opacity = "1";
      purpleF.style.backgroundColor="white";
      purpleF.style.pointerEvents="none";
      purpleF.style.opacity = "0";
      purpleB.style.pointerEvents = "auto";
      purpleB.style.opacity = "1";
      yellowF.style.backgroundColor="white";
      yellowF.style.pointerEvents="none";
      yellowF.style.opacity = "0";
      yellowB.style.pointerEvents = "auto";
      yellowB.style.opacity = "1";
      orangeF.style.backgroundColor="white";
      orangeF.style.pointerEvents="none";
      orangeF.style.opacity = "0";
      orangeB.style.pointerEvents = "auto";
      orangeB.style.opacity = "1";
      // redF.style.backgroundColor="white";
      // redF.style.pointerEvents="none";
      // redF.style.opacity = "0";
      // redB.style.pointerEvents = "grabbing";
      // redB.style.opacity = "1";
      lightpinkF.style.backgroundColor="white";
      lightpinkF.style.pointerEvents="none";
      lightpinkF.style.opacity = "0";
      lightpinkB.style.pointerEvents = "auto";
      lightpinkB.style.opacity = "1";
    }
    babyblueF.onclick = function() {
      copy.fillColor = "#5a85f4";
      h.fillColor = "#5a85f4";
      babyblueF.style.backgroundColor="#5a85f4";
      babyblueF.style.pointerEvents = "auto";
      babyblueF.style.opacity = "1";    
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";    
      blackF.style.backgroundColor="white";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    lightgreenF.onclick = function() {
      copy.fillColor = "#a9ea9f";
      h.fillColor = "#a9ea9f";
      lightgreenF.style.backgroundColor="#a9ea9f";
      lightgreenF.style.pointerEvents = "auto";
      lightgreenF.style.opacity = "1";   
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    greenF.onclick = function() {
      copy.fillColor = "#2eb843";
      h.fillColor = "#2eb843";
      greenF.style.backgroundColor="#2eb843";
      greenF.style.pointerEvents = "auto";
      greenF.style.opacity = "1";   
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    pinkF.onclick = function() {
      copy.fillColor = "#ca3890";
      h.fillColor = "#ca3890";
      pinkF.style.backgroundColor="#ca3890";
      pinkF.style.pointerEvents = "auto";
      pinkF.style.opacity = "1";   
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    aquaF.onclick = function() {
      copy.fillColor = "#5ed8e9";
      h.fillColor = "#5ed8e9";
      aquaF.style.backgroundColor="#5ed8e9";
      aquaF.style.pointerEvents = "auto";
      aquaF.style.opacity = "1";   
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    purpleF.onclick = function() {
      copy.fillColor = "#9491fa";
      h.fillColor = "#9491fa";
      purpleF.style.backgroundColor="#9491fa";
      purpleF.style.pointerEvents = "auto";
      purpleF.style.opacity = "1";   
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    yellowF.onclick = function() {
      copy.fillColor = "#ffd80a";
      h.fillColor = "#ffd80a";
      yellowF.style.backgroundColor="#ffd80a";
      yellowF.style.pointerEvents = "auto";
      yellowF.style.opacity = "1";   
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    orangeF.onclick = function() {
      copy.fillColor = "#e98a3c";
      h.fillColor = "#e98a3c";
      orangeF.style.backgroundColor="#e98a3c";
      orangeF.style.pointerEvents = "auto";
      orangeF.style.opacity = "1";   
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
      lightpinkF.style.backgroundColor="white";
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
    }
    lightpinkF.onclick = function() {
      copy.fillColor = "#edc1dc";
      h.fillColor = "#edc1dc";
      lightpinkF.style.backgroundColor="#edc1dc";
      lightpinkF.style.pointerEvents = "auto";
      lightpinkF.style.opacity = "1";   
      lightpinkB.style.pointerEvents = "none";
      lightpinkB.style.opacity = "0";
      blackF.style.pointerEvents = "none";
      blackF.style.opacity = "0";    
      blackB.style.pointerEvents = "auto";
      blackB.style.opacity = "1";
      babyblueF.style.backgroundColor="white";
      babyblueB.style.pointerEvents = "none";
      babyblueB.style.opacity = "0";
      lightgreenF.style.backgroundColor="white";
      lightgreenB.style.pointerEvents = "none";
      lightgreenB.style.opacity = "0";
      greenF.style.backgroundColor="white";
      greenB.style.pointerEvents = "none";
      greenB.style.opacity = "0";
      pinkF.style.backgroundColor="white";
      pinkB.style.pointerEvents = "none";
      pinkB.style.opacity = "0";
      // navyF.style.backgroundColor="white";
      // navyB.style.pointerEvents = "none";
      // navyB.style.opacity = "0";
      aquaF.style.backgroundColor="white";
      aquaB.style.pointerEvents = "none";
      aquaB.style.opacity = "0";
      purpleF.style.backgroundColor="white";
      purpleB.style.pointerEvents = "none";
      purpleB.style.opacity = "0";
      yellowF.style.backgroundColor="white";
      yellowB.style.pointerEvents = "none";
      yellowB.style.opacity = "0";
      orangeF.style.backgroundColor="white";
      orangeB.style.pointerEvents = "none";
      orangeB.style.opacity = "0";
      // redF.style.backgroundColor="white";
      // redB.style.pointerEvents = "none";
      // redB.style.opacity = "0";
    }
    
    const h = generateSide(size);
    let logo = document.getElementById("svg");
    let oneset = paper.project.importSVG(logo);
    oneset.visible = true;
    var a = n/4;
    oneset.bounds = new paper.Rectangle(0, 0, size.width/a, size.height);
    oneset.opacity = "0";
    oneset.fillColor = "black";
    var i;

    for (var i = 0; i < a; i++) {
      var copy = oneset.clone();
      copy.visible = true;
      copy.position.x += i * copy.bounds.width;
      copy.opacity = "1";
      h.addChild(copy);
    }
    return h;   
  }

// creates the back. starts with generateSide() then adds text
function generateBack(size) {     

      const g = generateSide(size);
      let logo3 = document.getElementById("svg4");
      let backLogo = paper.project.importSVG(logo3);
      var n = mynumberInput.value;

      const back_r = new paper.Rectangle(6*INCH, 3*INCH + 2*INCH, size.width, 6*INCH);
      const back = new paper.Path.Rectangle(back_r);   

      g.addChild(back);
      g.addChild(backLogo);
    
      var a = size.width/9.5; // width of the box divided by the width of the logo
      var b = a/2;
      var w = size.width;
      console.log(n);
      var scale = n*.375/10;
      console.log(scale);

      backLogo.bounds = new paper.Rectangle(b*INCH, size.height/.82, 9.5*INCH, 1.2255*INCH);
      backLogo.scale(scale);
      backLogo.visible = true;
      backLogo.rotation = 180;  
      backLogo.fillColor = "black";

      var blackT5 = document.getElementById("blackT5");
      blackT5.onclick = function() {
        g.fillColor = "black"
        back.opacity = "0"
        console.log('black');
      }
      var whiteT5 = document.getElementById("whiteT5");
      whiteT5.onclick = function() {
        g.fillColor = "white"
        back.opacity = "0"
        console.log('white');
      }

      return g;

  }

function changeNumbers(){
  var submitquantity = document.getElementById('submitquantity');
  var mynumberInput = document.getElementById("mynumberInput");
  var blackB = document.getElementById('blackB');
  var babyblueB = document.getElementById('babyblueB');
  var lightgreenB = document.getElementById('lightgreenB');
  var greenB = document.getElementById('greenB');
  var pinkB = document.getElementById('pinkB');
  var aquaB = document.getElementById('aquaB');
  var purpleB = document.getElementById('purpleB');
  var yellowB = document.getElementById('yellowB');
  var orangeB = document.getElementById('orangeB');
  // var redB = document.getElementById('redB');
  var lightpinkB = document.getElementById('lightpinkB');

  submitquantity.onclick = function() {
    paper.project.activeLayer.removeChildren()
    // resetColors();
    function makeBoxPattern(width, height, depth) {
    // FRONT
        const front_r = new paper.Rectangle(height, 0, width, height);
        const front = new paper.Path.Rectangle(front_r);
        front.name = "front";
        front.fillColor = "white";
        front.strokeColor = "black";
        front.strokeWidth = 0.5;

    //BACKGROUND
        blackB.onclick = function() {
              front.fillColor = "black";
              back.fillColor = "black";
              left.fillColor = "black";
              right.fillColor = "black";
              bottom.fillColor = "black";
              top.fillColor = "black";
              top_tab_1.fillColor = "black";
              left_tab_1.fillColor = "black";
              left_tab_2.fillColor = "black";
              left_tab_3.fillColor = "black";
              right_tab_1.fillColor = "black";
              right_tab_2.fillColor = "black";
              right_tab_3.fillColor = "black";
              top_tab_1.strokeColor = "white";
              left_tab_1.strokeColor = "white";
              left_tab_2.strokeColor = "white";
              left_tab_3.strokeColor = "white";
              right_tab_1.strokeColor = "white";
              right_tab_2.strokeColor = "white";
              right_tab_3.strokeColor = "white";
              blackB.style.backgroundColor="black";
              blackB.style.pointerEvents = "auto";
              blackB.style.opacity = "1";
              blackF.style.pointerEvents = "none";
              blackF.style.opacity = "0";
              babyblueB.style.backgroundColor="white";
              babyblueB.style.pointerEvents = "none";
              babyblueB.style.opacity = "0";
              babyblueF.style.pointerEvents = "auto";
              babyblueF.style.opacity = "1";
              lightgreenB.style.backgroundColor="white";
              lightgreenB.style.pointerEvents = "none";
              lightgreenB.style.opacity = "0";
              lightgreenF.style.pointerEvents = "auto";
              lightgreenF.style.opacity = "1";
              greenB.style.backgroundColor="white";
              greenB.style.pointerEvents = "none";
              greenB.style.opacity = "0";
              greenF.style.pointerEvents = "auto";
              greenF.style.opacity = "1";
              pinkB.style.backgroundColor="white";
              pinkB.style.pointerEvents = "none";
              pinkB.style.opacity = "0";
              pinkF.style.pointerEvents = "auto";
              pinkF.style.opacity = "1";
              // navyB.style.backgroundColor="white";
              // navyB.style.pointerEvents = "none";
              // navyB.style.opacity = "0";
              // navyF.style.pointerEvents = "grabbing";
              // navyF.style.opacity = "1";
              aquaB.style.backgroundColor="white";
              aquaB.style.pointerEvents = "none";
              aquaB.style.opacity = "0";
              aquaF.style.pointerEvents = "auto";
              aquaF.style.opacity = "1";
              purpleB.style.backgroundColor="white";
              purpleB.style.pointerEvents = "none";
              purpleB.style.opacity = "0";
              purpleF.style.pointerEvents = "auto";
              purpleF.style.opacity = "1";
              yellowB.style.backgroundColor="white";
              yellowB.style.pointerEvents = "none";
              yellowB.style.opacity = "0";
              yellowF.style.pointerEvents = "auto";
              yellowF.style.opacity = "1";
              orangeB.style.backgroundColor="white";
              orangeB.style.pointerEvents = "none";
              orangeB.style.opacity = "0";
              orangeF.style.pointerEvents = "auto";
              orangeF.style.opacity = "1";
              // redB.style.backgroundColor="white";
              // redB.style.pointerEvents = "none";
              // redB.style.opacity = "0";
              // redF.style.pointerEvents = "grabbing";
              // redF.style.opacity = "1";
              lightpinkB.style.backgroundColor="white";
              lightpinkB.style.pointerEvents = "none";
              lightpinkB.style.opacity = "0";
              lightpinkF.style.pointerEvents = "auto";
              lightpinkF.style.opacity = "1";
        }
        babyblueB.onclick = function() {
              front.fillColor = "#5a85f4";
              back.fillColor = "#5a85f4";
              left.fillColor = "#5a85f4";
              right.fillColor = "#5a85f4";
              bottom.fillColor = "#5a85f4";
              top.fillColor = "#5a85f4";
              top_tab_1.fillColor = "#5a85f4";
              left_tab_1.fillColor = "#5a85f4";
              left_tab_2.fillColor = "#5a85f4";
              left_tab_3.fillColor = "#5a85f4";
              right_tab_1.fillColor = "#5a85f4";
              right_tab_2.fillColor = "#5a85f4";
              right_tab_3.fillColor = "#5a85f4";
              babyblueB.style.backgroundColor="#5a85f4";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.backgroundColor="black";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        lightgreenB.onclick = function() {
              front.fillColor = "#a9ea9f";
              back.fillColor = "#a9ea9f";
              left.fillColor = "#a9ea9f";
              right.fillColor = "#a9ea9f";
              bottom.fillColor = "#a9ea9f";
              top.fillColor = "#a9ea9f";
              top_tab_1.fillColor = "#a9ea9f";
              left_tab_1.fillColor = "#a9ea9f";
              left_tab_2.fillColor = "#a9ea9f";
              left_tab_3.fillColor = "#a9ea9f";
              right_tab_1.fillColor = "#a9ea9f";
              right_tab_2.fillColor = "#a9ea9f";
              right_tab_3.fillColor = "#a9ea9f";
              lightgreenB.style.backgroundColor="#a9ea9f";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "nne";
              greenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        greenB.onclick = function() {
              front.fillColor = "#2eb843";
              back.fillColor = "#2eb843";
              left.fillColor = "#2eb843";
              right.fillColor = "#2eb843";
              bottom.fillColor = "#2eb843";
              top.fillColor = "#2eb843";
              top_tab_1.fillColor = "#2eb843";
              left_tab_1.fillColor = "#2eb843";
              left_tab_2.fillColor = "#2eb843";
              left_tab_3.fillColor = "#2eb843";
              right_tab_1.fillColor = "#2eb843";
              right_tab_2.fillColor = "#2eb843";
              right_tab_3.fillColor = "#2eb843";
              greenB.style.backgroundColor="#2eb843";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        pinkB.onclick = function() {
              front.fillColor = "#ca3890";
              back.fillColor = "#ca3890";
              left.fillColor = "#ca3890";
              right.fillColor = "#ca3890";
              bottom.fillColor = "#ca3890";
              top.fillColor = "#ca3890";
              top_tab_1.fillColor = "#ca3890";
              left_tab_1.fillColor = "#ca3890";
              left_tab_2.fillColor = "#ca3890";
              left_tab_3.fillColor = "#ca3890";
              right_tab_1.fillColor = "#ca3890";
              right_tab_2.fillColor = "#ca3890";
              right_tab_3.fillColor = "#ca3890";
              pinkB.style.backgroundColor="#ca3890";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        aquaB.onclick = function() {
              front.fillColor = "#5ed8e9";
              back.fillColor = "#5ed8e9";
              left.fillColor = "#5ed8e9";
              right.fillColor = "#5ed8e9";
              bottom.fillColor = "#5ed8e9";
              top.fillColor = "#5ed8e9";
              top_tab_1.fillColor = "#5ed8e9";
              left_tab_1.fillColor = "#5ed8e9";
              left_tab_2.fillColor = "#5ed8e9";
              left_tab_3.fillColor = "#5ed8e9";
              right_tab_1.fillColor = "#5ed8e9";
              right_tab_2.fillColor = "#5ed8e9";
              right_tab_3.fillColor = "#5ed8e9";
              aquaB.style.backgroundColor="#5ed8e9";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        purpleB.onclick = function() {
              front.fillColor = "#9491fa";
              back.fillColor = "#9491fa";
              left.fillColor = "#9491fa";
              right.fillColor = "#9491fa";
              bottom.fillColor = "#9491fa";
              top.fillColor = "#9491fa";
              top_tab_1.fillColor = "#9491fa";
              left_tab_1.fillColor = "#9491fa";
              left_tab_2.fillColor = "#9491fa";
              left_tab_3.fillColor = "#9491fa";
              right_tab_1.fillColor = "#9491fa";
              right_tab_2.fillColor = "#9491fa";
              right_tab_3.fillColor = "#9491fa";
              purpleB.style.backgroundColor="#9491fa";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        yellowB.onclick = function() {
              front.fillColor = "#ffd80a";
              back.fillColor = "#ffd80a";
              left.fillColor = "#ffd80a";
              right.fillColor = "#ffd80a";
              bottom.fillColor = "#ffd80a";
              top.fillColor = "#ffd80a";
              top_tab_1.fillColor = "#ffd80a";
              left_tab_1.fillColor = "#ffd80a";
              left_tab_2.fillColor = "#ffd80a";
              left_tab_3.fillColor = "#ffd80a";
              right_tab_1.fillColor = "#ffd80a";
              right_tab_2.fillColor = "#ffd80a";
              right_tab_3.fillColor = "#ffd80a";
              yellowB.style.backgroundColor="#ffd80a";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        orangeB.onclick = function() {
              front.fillColor = "#e98a3c";
              back.fillColor = "#e98a3c";
              left.fillColor = "#e98a3c";
              right.fillColor = "#e98a3c";
              bottom.fillColor = "#e98a3c";
              top.fillColor = "#e98a3c";
              top_tab_1.fillColor = "#e98a3c";
              left_tab_1.fillColor = "#e98a3c";
              left_tab_2.fillColor = "#e98a3c";
              left_tab_3.fillColor = "#e98a3c";
              right_tab_1.fillColor = "#e98a3c";
              right_tab_2.fillColor = "#e98a3c";
              right_tab_3.fillColor = "#e98a3c";
              orangeB.style.backgroundColor="#e98a3c";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
              lightpinkB.style.backgroundColor="white";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
        }
        lightpinkB.onclick = function() {
              front.fillColor = "#edc1dc";
              back.fillColor = "#edc1dc";
              left.fillColor = "#edc1dc";
              right.fillColor = "#edc1dc";
              bottom.fillColor = "#edc1dc";
              top.fillColor = "#edc1dc";
              top_tab_1.fillColor = "#edc1dc";
              left_tab_1.fillColor = "#edc1dc";
              left_tab_2.fillColor = "#edc1dc";
              left_tab_3.fillColor = "#edc1dc";
              right_tab_1.fillColor = "#edc1dc";
              right_tab_2.fillColor = "#edc1dc";
              right_tab_3.fillColor = "#edc1dc";
              lightpinkB.style.backgroundColor="#edc1dc";
              lightpinkF.style.pointerEvents = "none";
              lightpinkF.style.opacity = "0";
              blackB.style.backgroundColor="white";
              blackB.style.pointerEvents = "none";
              blackB.style.opacity = "0";
              blackF.style.pointerEvents = "auto";
              blackF.style.opacity = "1";
              babyblueB.style.backgroundColor="white";
              babyblueF.style.pointerEvents = "none";
              babyblueF.style.opacity = "0";
              lightgreenB.style.backgroundColor="white";
              lightgreenF.style.pointerEvents = "none";
              lightgreenF.style.opacity = "0";
              greenB.style.backgroundColor="white";
              greenF.style.pointerEvents = "none";
              greenF.style.opacity = "0";
              pinkB.style.backgroundColor="white";
              pinkF.style.pointerEvents = "none";
              pinkF.style.opacity = "0";
              // navyB.style.backgroundColor="white";
              // navyF.style.pointerEvents = "none";
              // navyF.style.opacity = "0";
              aquaB.style.backgroundColor="white";
              aquaF.style.pointerEvents = "none";
              aquaF.style.opacity = "0";
              purpleB.style.backgroundColor="white";
              purpleF.style.pointerEvents = "none";
              purpleF.style.opacity = "0";
              yellowB.style.backgroundColor="white";
              yellowF.style.pointerEvents = "none";
              yellowF.style.opacity = "0";
              orangeB.style.backgroundColor="white";
              orangeF.style.pointerEvents = "none";
              orangeF.style.opacity = "0";
              // redB.style.backgroundColor="white";
              // redF.style.pointerEvents = "none";
              // redF.style.opacity = "0";
        }
            
      // bottom
      const bottom_r = new paper.Rectangle(height, height, width, depth);
      const bottom = new paper.Path.Rectangle(bottom_r);
      bottom.name = "bottom";
      bottom.fillColor = "white";
      bottom.strokeColor = "black";
      bottom.strokeWidth = 0.5;

      // back
      const back_r = new paper.Rectangle(height, height + depth, width, height);
      const back = new paper.Path.Rectangle(back_r);
      back.name = "back";
      back.fillColor = "white";
      back.strokeColor = "black";
      back.strokeWidth = 0.5;
    
      // top
      const top_r = new paper.Rectangle(
        height,
        height + depth + height,
        width,
        depth
      );
      const top = new paper.Path.Rectangle(top_r);
      top.name = "top";
      top.fillColor = "white";
      top.strokeColor = "black";
      top.strokeWidth = 0.5
      

      // left
      const left_r = new paper.Rectangle(0, height, height, depth);
      const left = new paper.Path.Rectangle(left_r);
      left.name = "left";
      left.fillColor = "white";
      left.strokeColor = "black";
      left.strokeWidth = 0.5;

      // right
      const right_r = new paper.Rectangle(height + width, height, height, depth);
      const right = new paper.Path.Rectangle(right_r);
      right.name = "right";
      right.fillColor = "white";
      right.strokeColor = "black";
      right.strokeWidth = 0.5;

      // top_tab_1
      const top_tab_1 = makeTab(
        new paper.Rectangle(
          height,
          height + depth + height + depth,
          width,
          TAB_WIDTH
        )
      );
      top_tab_1.rotation = 180;
      top_tab_1.name = "top_tab_1";  
      top_tab_1.strokeColor = "black";
      top_tab_1.strokeWidth = 0.5;
      top_tab_1.fillColor = "white";

      // left_tab_1
      const left_tab_1 = makeTab(
        new paper.Rectangle(0, height - TAB_WIDTH, height, TAB_WIDTH)
      );
      left_tab_1.name = "left_tab_1";
      left_tab_1.strokeColor = "black";
      left_tab_1.strokeWidth = 0.5;
      left_tab_1.fillColor = "white";
      
      // left_tab_2
      const left_tab_2 = makeTab(
        new paper.Rectangle(0, height + depth, height, TAB_WIDTH)
      );
      left_tab_2.rotation = 180;
      left_tab_2.name = "left_tab_2";
      left_tab_2.strokeColor = "black";
      left_tab_2.strokeWidth = 0.5;
      left_tab_2.fillColor = "white";

      // left_tab_3
      const left_tab_3 = makeTab(new paper.Rectangle(0, 0, depth, TAB_WIDTH));
      left_tab_3.rotation = -90;
      left_tab_3.position = new paper.Point(-TAB_WIDTH * 0.5, height + depth * 0.5);
      left_tab_3.name = "left_tab_3";
      left_tab_3.strokeColor = "black";
      left_tab_3.strokeWidth = 0.5;
      left_tab_3.fillColor = "white";

      // right_tab_1
      const right_tab_1 = makeTab(
        new paper.Rectangle(height + width, height - TAB_WIDTH, height, TAB_WIDTH)
      );
      right_tab_1.name = "right_tab_1";
      right_tab_1.strokeColor = "black";
      right_tab_1.strokeWidth = 0.5;
      right_tab_1.fillColor = "white";
      // right_tab_2
      const right_tab_2 = makeTab(
        new paper.Rectangle(height + width, height + depth, height, TAB_WIDTH)
      );
      right_tab_2.rotation = 180;
      right_tab_2.name = "right_tab_2";
      right_tab_2.strokeColor = "black";
      right_tab_2.strokeWidth = 0.5;
      right_tab_2.fillColor = "white";

      // right_tab_3
      const right_tab_3 = makeTab(new paper.Rectangle(0, 0, depth, TAB_WIDTH));
      right_tab_3.rotation = 90;
      right_tab_3.position = new paper.Point(
        height + width + height + TAB_WIDTH * 0.5,
        height + depth * 0.5
      );
      right_tab_3.name = "right_tab_3";
      right_tab_3.strokeColor = "black";
      right_tab_3.strokeWidth = 0.5;
      right_tab_3.fillColor = "white";

      // group + style
      const box = new paper.Group({
        name: "box",
        children: [
          front,
          bottom,
          back,
          top,
          left,
          right,
          top_tab_1,
          left_tab_1,
          left_tab_2,
          left_tab_3,
          right_tab_1,
          right_tab_2,
          right_tab_3,
        ],
      });

  
      return box;
    }

    var mynumberInput = document.getElementById("mynumberInput");
    var n = mynumberInput.value;
    console.log(n);
    var w = 1.5 * n/4;
    console.log(w)
    const pattern = makeBoxPattern(w * INCH, 6 * INCH, 2 * INCH);
    showItem(pattern);
  
    const front = generateFront(pattern.children.front.bounds.size);
    front.bounds.point = pattern.children.front.bounds.point;
  
    const back = generateBack(pattern.children.back.bounds.size);
    back.bounds.point = pattern.children.back.bounds.point;
    back.rotation = 180;
  
    const left = generateLeft(pattern.children.left.bounds.size);
    left.name = "left";
    left.bounds.point = pattern.children.left.bounds.point;
    
    const right = generateRight(pattern.children.right.bounds.size);
    right.name = "right";
    right.bounds.point = pattern.children.right.bounds.point;

    const top = generateTop(pattern.children.top.bounds.size);
    top.name = "top";
    top.bounds.point = pattern.children.top.bounds.point;
  
    const bottom = generateBottom(pattern.children.bottom.bounds.size);
    bottom.name = "bottom";
    bottom.bounds.point = pattern.children.bottom.bounds.point;

    document.getElementById("width").innerHTML ="<span id='width'>Width =&nbsp;"+w+"&nbsp;in</span>"
    document.getElementById("height").innerHTML ="<span id='height'>Height = 6&nbsp;in</span>"
    document.getElementById("depth").innerHTML ="<span id='depth'>Depth = 2&nbsp;in</span>"

  }

}

function resetColors(){
  var resetColors = document.getElementById('resetColors');
  resetColors.onclick = function() {
        var mynumberInput = document.getElementById("mynumberInput");
        var blackB = document.getElementById('blackB');
        var babyblueB = document.getElementById('babyblueB');
        var lightgreenB = document.getElementById('lightgreenB');
        var greenB = document.getElementById('greenB');
        var pinkB = document.getElementById('pinkB');
        var aquaB = document.getElementById('aquaB');
        var purpleB = document.getElementById('purpleB');
        var yellowB = document.getElementById('yellowB');
        var orangeB = document.getElementById('orangeB');
        // var redB = document.getElementById('redB');
        var lightpinkB = document.getElementById('lightpinkB');
          blackB.style.backgroundColor = 'black';
          blackB.style.pointerEvents = "auto";
          blackB.style.opacity = "1";
          blackF.style.backgroundColor = 'black';
          blackF.style.pointerEvents = "auto";
          blackF.style.opacity = "1";
          babyblueB.style.backgroundColor = '#5a85f4';
          babyblueB.style.pointerEvents = "auto";
          babyblueB.style.opacity = "1";
          babyblueF.style.backgroundColor = '#5a85f4';
          babyblueF.style.pointerEvents = "auto";
          babyblueF.style.opacity = "1";
          lightgreenF.style.backgroundColor = '#a9ea9f';
          lightgreenF.style.pointerEvents = "auto";
          lightgreenF.style.opacity = "1";
          lightgreenB.style.backgroundColor = '#a9ea9f';
          lightgreenB.style.pointerEvents = "auto";
          lightgreenB.style.opacity = "1";
          greenB.style.backgroundColor = '#2eb843';
          greenF.style.backgroundColor = '#2eb843';
          greenF.style.pointerEvents = "auto";
          greenF.style.opacity = "1";
          greenB.style.pointerEvents = "auto";
          greenB.style.opacity = "1";
          pinkB.style.backgroundColor = '#ca3890';
          pinkF.style.backgroundColor = '#ca3890';
          pinkB.style.pointerEvents = "auto";
          pinkB.style.opacity = "1";
          pinkF.style.pointerEvents = "auto";
          pinkF.style.opacity = "1";
          aquaB.style.backgroundColor = '#5ed8e9';
          aquaF.style.backgroundColor = '#5ed8e9';
          aquaB.style.pointerEvents = "auto";
          aquaB.style.opacity = "1";
          aquaF.style.pointerEvents = "auto";
          aquaF.style.opacity = "1";
          purpleB.style.backgroundColor = '#9491fa';
          purpleF.style.backgroundColor = '#9491fa';
          purpleB.style.pointerEvents = "auto";
          purpleB.style.opacity = "1";
          purpleF.style.pointerEvents = "auto";
          purpleF.style.opacity = "1";
          yellowB.style.backgroundColor = '#ffd80a';
          yellowF.style.backgroundColor = '#ffd80a';
          yellowF.style.pointerEvents = "auto";
          yellowF.style.opacity = "1";
          yellowB.style.pointerEvents = "auto";
          yellowB.style.opacity = "1";
          orangeB.style.backgroundColor = '#e98a3c';
          orangeF.style.backgroundColor = '#e98a3c';
          orangeF.style.pointerEvents = "auto";
          orangeF.style.opacity = "1";
          orangeB.style.pointerEvents = "auto";
          orangeB.style.opacity = "1";
          lightpinkB.style.backgroundColor = '#edc1dc';
          lightpinkF.style.backgroundColor = '#edc1dc';
          lightpinkF.style.pointerEvents = "auto";
          lightpinkF.style.opacity = "1";
          lightpinkB.style.pointerEvents = "auto";
          lightpinkB.style.opacity = "1";
  }
}

function main() {
  setup();
  document.getElementById("download").addEventListener("click", () => {
    downloadSVG("box.svg");
  });

  var mynumberInput = document.getElementById("mynumberInput");
  var n = mynumberInput.value
  var w = 1.5 * n/4;
  console.log(w)
  const pattern = makeBoxPattern(w * INCH, 6 * INCH, 2 * INCH);
  showItem(pattern);

  const front = generateFront(pattern.children.front.bounds.size);
  front.bounds.point = pattern.children.front.bounds.point;


  const back = generateBack(pattern.children.back.bounds.size);
  back.bounds.point = pattern.children.back.bounds.point;
  back.rotation = 180;

  const left = generateSide(pattern.children.left.bounds.size);
  left.name = "left";
  left.bounds.point = pattern.children.left.bounds.point;

  const right = generateSide(pattern.children.right.bounds.size);
  right.name = "right";
  right.bounds.point = pattern.children.right.bounds.point;

  const top = generateSide(pattern.children.top.bounds.size);
  top.name = "top";
  top.bounds.point = pattern.children.top.bounds.point;

  const bottom = generateSide(pattern.children.bottom.bounds.size);
  bottom.name = "bottom";
  bottom.bounds.point = pattern.children.bottom.bounds.point;

  changeNumbers();
  resetColors();
}

window.addEventListener("load", main);
