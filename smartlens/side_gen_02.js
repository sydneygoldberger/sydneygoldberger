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

// create a canvas and attach paper to it
function setup() {
  const paper_canvas = document.createElement("canvas");
  paper_canvas.setAttribute("width", "800");
  paper_canvas.setAttribute("height", "6000");
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

const TYPE_STYLE = {
  fontFamily: "Roboto", // must be loaded from html/css before use
  fontWeight: 100,
  fontSize: 0.5 * INCH,
  fillColor: "white",
};

// creates the common element for each side (the double border)
function generateSide(size) {
  const g = new paper.Group({ name: "side" });

  const back_r = new paper.Rectangle(0, 0, size.width, size.height);
  const r = new paper.Path.Rectangle(back_r);
  r.fillColor = "black";
  g.addChild(r);
 

  return g;
}

// creates the front. starts with generateSide() then adds text
function generateFront(size) {
  const g = generateSide(size);
  return g;
}

// creates the back. starts with generateSide() then adds text
function generateBack(size) {
  const g = generateSide(size);
  return g;
}

// function onInput() {
//   showItem(paper.project.activeLayer);
// }

function changeNumbers(){

  var thirtycontacts = document.getElementById('30Contacts');
  var sixtycontacts = document.getElementById('60Contacts');
  var ninetycontacts = document.getElementById('90Contacts');
  var onetwentycontacts = document.getElementById('120Contacts');
  var oneeightycontacts = document.getElementById('180Contacts');

  var width = document.getElementById("width").value * INCH;
  var height = document.getElementById("height").value * INCH;
  var depth = document.getElementById("depth").value * INCH;

  thirtycontacts.onclick = function() {
    console.log('30');
    const space = 0.5 * INCH;

    paper.project.activeLayer.removeChildren();

    width = 7.5 *INCH;
    height = 6 *INCH; 
    depth = 2 *INCH;

    const front = generateFront(new paper.Size(width, height));
    front.bounds.top = 0;
  
    const back = generateBack(new paper.Size(width, height));
    back.bounds.top = (height + space) * 1;
  
    const left = generateSide(new paper.Size(depth, height));
    left.name = "left";
    left.bounds.top = (height + space) * 2;
  
    const right = generateSide(new paper.Size(depth, height));
    right.name = "right";
    right.bounds.top = (height + space) * 3;
  
    const top = generateSide(new paper.Size(width, depth));
    top.name = "top";
    top.bounds.top = (height + space) * 4;
  
    const bottom = generateSide(new paper.Size(width, depth));
    bottom.name = "bottom";
    bottom.bounds.top = (height + space) * 4 + depth + space;

    document.getElementById("width").innerHTML ="<span id='width'>Width = 7.5</span>"
    document.getElementById("height").innerHTML ="<span id='height'>Height = 6</span>"
    document.getElementById("depth").innerHTML ="<span id='depth'>Depth = 2</span>"

    document.getElementById("30Contacts").style.backgroundColor="black";
    document.getElementById("30Contacts").style.color="white";
    document.getElementById("60Contacts").style.backgroundColor="white";
    document.getElementById("60Contacts").style.color="black";
    document.getElementById("90Contacts").style.backgroundColor="white";
    document.getElementById("90Contacts").style.color="black";
    document.getElementById("120Contacts").style.backgroundColor="white";
    document.getElementById("120Contacts").style.color="black";
    document.getElementById("180Contacts").style.backgroundColor="white";
    document.getElementById("180Contacts").style.color="black";
  }

  sixtycontacts.onclick = function() {
    console.log('60');
    const space = 0.5 * INCH;

    paper.project.activeLayer.removeChildren();

    width = 9 *INCH;
    height = 6 *INCH; 
    depth = 3 *INCH;

    const front = generateFront(new paper.Size(width, height));
    front.bounds.top = 0;
  
    const back = generateBack(new paper.Size(width, height));
    back.bounds.top = (height + space) * 1;
  
    const left = generateSide(new paper.Size(depth, height));
    left.name = "left";
    left.bounds.top = (height + space) * 2;
  
    const right = generateSide(new paper.Size(depth, height));
    right.name = "right";
    right.bounds.top = (height + space) * 3;
  
    const top = generateSide(new paper.Size(width, depth));
    top.name = "top";
    top.bounds.top = (height + space) * 4;
  
    const bottom = generateSide(new paper.Size(width, depth));
    bottom.name = "bottom";
    bottom.bounds.top = (height + space) * 4 + depth + space;

    document.getElementById("width").innerHTML ="<span id='width'>Width = 9</span>"
    document.getElementById("height").innerHTML ="<span id='height'>Height = 6</span>"
    document.getElementById("depth").innerHTML ="<span id='depth'>Depth = 3</span>"
  
    document.getElementById("30Contacts").style.backgroundColor="white";
    document.getElementById("30Contacts").style.color="black";
    document.getElementById("60Contacts").style.backgroundColor="black";
    document.getElementById("60Contacts").style.color="white";
    document.getElementById("90Contacts").style.backgroundColor="white";
    document.getElementById("90Contacts").style.color="black";
    document.getElementById("120Contacts").style.backgroundColor="white";
    document.getElementById("120Contacts").style.color="black";
    document.getElementById("180Contacts").style.backgroundColor="white";
    document.getElementById("180Contacts").style.color="black";
  }

  ninetycontacts.onclick = function() {
    console.log('90');
    const space = 0.5 * INCH;

    paper.project.activeLayer.removeChildren();

    width = 6 *INCH;
    height = 7.5 *INCH; 
    depth = 3 *INCH;

    const front = generateFront(new paper.Size(width, height));
    front.bounds.top = 0;
  
    const back = generateBack(new paper.Size(width, height));
    back.bounds.top = (height + space) * 1;
  
    const left = generateSide(new paper.Size(depth, height));
    left.name = "left";
    left.bounds.top = (height + space) * 2;
  
    const right = generateSide(new paper.Size(depth, height));
    right.name = "right";
    right.bounds.top = (height + space) * 3;
  
    const top = generateSide(new paper.Size(width, depth));
    top.name = "top";
    top.bounds.top = (height + space) * 4;
  
    const bottom = generateSide(new paper.Size(width, depth));
    bottom.name = "bottom";
    bottom.bounds.top = (height + space) * 4 + depth + space;

    document.getElementById("width").innerHTML ="<span id='width'>Width = 6</span>"
    document.getElementById("height").innerHTML ="<span id='height'>Height = 7.5</span>"
    document.getElementById("depth").innerHTML ="<span id='depth'>Depth = 3</span>"

    document.getElementById("30Contacts").style.backgroundColor="white";
    document.getElementById("30Contacts").style.color="black";
    document.getElementById("60Contacts").style.backgroundColor="white";
    document.getElementById("60Contacts").style.color="black";
    document.getElementById("90Contacts").style.backgroundColor="black";
    document.getElementById("90Contacts").style.color="white";
    document.getElementById("120Contacts").style.backgroundColor="white";
    document.getElementById("120Contacts").style.color="black";
    document.getElementById("180Contacts").style.backgroundColor="white";
    document.getElementById("180Contacts").style.color="black";
  }

  onetwentycontacts.onclick = function() {
    console.log('120');
    const space = 0.5 * INCH;

    paper.project.activeLayer.removeChildren();

    width = 6 *INCH;
    height = 18 *INCH; 
    depth = 3 *INCH;

    const front = generateFront(new paper.Size(width, height));
    front.bounds.top = 0;
  
    const back = generateBack(new paper.Size(width, height));
    back.bounds.top = (height + space) * 1;
  
    const left = generateSide(new paper.Size(depth, height));
    left.name = "left";
    left.bounds.top = (height + space) * 2;
  
    const right = generateSide(new paper.Size(depth, height));
    right.name = "right";
    right.bounds.top = (height + space) * 3;
  
    const top = generateSide(new paper.Size(width, depth));
    top.name = "top";
    top.bounds.top = (height + space) * 4;
  
    const bottom = generateSide(new paper.Size(width, depth));
    bottom.name = "bottom";
    bottom.bounds.top = (height + space) * 4 + depth + space;

    document.getElementById("width").innerHTML ="<span id='width'>Width = 6</span>"
    document.getElementById("height").innerHTML ="<span id='height'>Height = 18</span>"
    document.getElementById("depth").innerHTML ="<span id='depth'>Depth = 3</span>"

    document.getElementById("30Contacts").style.backgroundColor="white";
    document.getElementById("30Contacts").style.color="black";
    document.getElementById("60Contacts").style.backgroundColor="white";
    document.getElementById("60Contacts").style.color="black";
    document.getElementById("90Contacts").style.backgroundColor="white";
    document.getElementById("90Contacts").style.color="black";
    document.getElementById("120Contacts").style.backgroundColor="black";
    document.getElementById("120Contacts").style.color="white";
    document.getElementById("180Contacts").style.backgroundColor="white";
    document.getElementById("180Contacts").style.color="black";
  }

  oneeightycontacts.onclick = function() {
    console.log('180');
    const space = 0.5 * INCH;

    paper.project.activeLayer.removeChildren();

    width = 7.5 *INCH;
    height = 12 *INCH; 
    depth = 5 *INCH;

    const front = generateFront(new paper.Size(width, height));
    front.bounds.top = 0;
  
    const back = generateBack(new paper.Size(width, height));
    back.bounds.top = (height + space) * 1;
  
    const left = generateSide(new paper.Size(depth, height));
    left.name = "left";
    left.bounds.top = (height + space) * 2;
  
    const right = generateSide(new paper.Size(depth, height));
    right.name = "right";
    right.bounds.top = (height + space) * 3;
  
    const top = generateSide(new paper.Size(width, depth));
    top.name = "top";
    top.bounds.top = (height + space) * 4;
  
    const bottom = generateSide(new paper.Size(width, depth));
    bottom.name = "bottom";
    bottom.bounds.top = (height + space) * 4 + depth + space;
    document.getElementById("width").innerHTML ="<span id='width'>Width = 7.5</span>"
    document.getElementById("height").innerHTML ="<span id='height'>Height = 12</span>"
    document.getElementById("depth").innerHTML ="<span id='depth'>Depth = 5</span>"

    document.getElementById("30Contacts").style.backgroundColor="white";
    document.getElementById("30Contacts").style.color="black";
    document.getElementById("60Contacts").style.backgroundColor="white";
    document.getElementById("60Contacts").style.color="black";
    document.getElementById("90Contacts").style.backgroundColor="white";
    document.getElementById("90Contacts").style.color="black";
    document.getElementById("120Contacts").style.backgroundColor="white";
    document.getElementById("120Contacts").style.color="black";
    document.getElementById("180Contacts").style.backgroundColor="black";
    document.getElementById("180Contacts").style.color="white";
  }
}

function negativePositiveSelect(){
  var leftnegative = document.getElementById('leftnegative');
  var leftpositive = document.getElementById('leftpositive');
  var rightnegative = document.getElementById('rightnegative');
  var rightpositive = document.getElementById('rightpositive');

  leftnegative.onclick = function() {
    leftnegative.style.backgroundColor="black";
    leftnegative.style.color="white";
    leftpositive.style.backgroundColor="white";
    leftpositive.style.color="black";
  }
  leftpositive.onclick = function() {
    leftnegative.style.backgroundColor="white";
    leftnegative.style.color="black";
    leftpositive.style.backgroundColor="black";
    leftpositive.style.color="white";
  }
  rightnegative.onclick = function() {
    rightnegative.style.backgroundColor="black";
    rightnegative.style.color="white";
    rightpositive.style.backgroundColor="white";
    rightpositive.style.color="black";
  }
  rightpositive.onclick = function() {
    rightnegative.style.backgroundColor="white";
    rightnegative.style.color="black";
    rightpositive.style.backgroundColor="black";
    rightpositive.style.color="white";
  }
}

function main() {
  console.log("main");
  setup();

  // document.getElementById("width").addEventListener("input", onInput);
  // document.getElementById("height").addEventListener("input", onInput);
  // document.getElementById("depth").addEventListener("input", onInput);

  document.getElementById("download").addEventListener("click", () => {
    downloadSVG("box.svg");
  });

  // onInput();
  changeNumbers();
  negativePositiveSelect();
}


window.addEventListener("load", main);
