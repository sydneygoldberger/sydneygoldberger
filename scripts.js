function myFunction() {
    let video = document.getElementById("videoSquare").autoplay;
    document.getElementById("videoSquare").innerHTML = x;
  }

  let header = document.getElementById("header");
  let topContainer = document.getElementById("topContainer");
  let subContainer = document.getElementById("subContainer");
  let aboutMe = document.getElementById("aboutMe");
  let bottomContainer = document.getElementById("bottomContainer");
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  let box3 = document.getElementById("box3");
  let box4 = document.getElementById("box4");
  let box5 = document.getElementById("box5");
  let circle = document.getElementById("circle");
  let grid = document.getElementById("grid");


  topContainer.onmousemove = function(e){

    let follow = document.createElement('div');
    follow.innerHTML = "<img src='./images/smallest-grey-newglasses.png'></img>"
    follow.classList.add('follow');
    follow.style.top = e.clientY + 'px';
    follow.style.left = e.clientX + 'px';
    follow.style.opacity = 70 + "%";
    


    // colors = ['blue', '#green', 'red', '#yellow', 'magenta'];
    // randomColor = colors[Math.floor(Math.random() * colors.length)];
    size = [.2, .5, .8, 1, 1.2, 1.4, 1.6];
    randomSize = size[Math.floor(Math.random() * size.length)];
    let deg = [0, 50, 100, 150, 200, 250, 300, 350];
    randomDeg = deg[Math.floor(Math.random() * deg.length)];
    follow.style.transform = "scale("+randomSize+")" + "rotate("+randomDeg+"deg)";

    follow.style.position = "absolute";
    follow.style.zIndex = -1;
    aboutMe.style.zIndex = 2;
    
    grid.appendChild(follow); 

    setTimeout(function(){
    follow.style.opacity = 0;
    }, 1500);
    
    setTimeout(function(){
    grid.removeChild(follow);
    }, 2000);
  
  } 
  