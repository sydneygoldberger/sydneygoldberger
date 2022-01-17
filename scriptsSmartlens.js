var aboutButton = document.getElementById("aboutButton");
var aboutButtonExpanded = document.getElementById("aboutButtonExpanded");
var aboutDescription = document.getElementById("aboutDescription");

aboutButton.onclick = function() {
    aboutDescription.innerHTML = "<div id='aboutDescription'>Sydney is a graphic designer based in New York City who focuses her work on the intersection between branding, design, and technology. <div id='aboutSubDescription'>A recent Communication Design graduate from from Parsons School of Design New York City, Sydney previously worked as a design intern at And Partners. Sydney's multidisciplinary background in psychology, fine arts, web development, and graphic design allows her to find creative solutions to probelms with a unique perspective.</div><div id='aboutSubDescription'>Before pursuing a career in design, she worked in negotiating sports media rights and distribution at IMG. Sydney received her Bachelor of Arts, Magna Cum Laude, at the University of Pennsylvania and is currently living in New York City.</div><div id='aboutSubDescription'>Proficient in: Adobe Creative Suite, HTML, CSS, JavaScript, Figma, Github, Microsoft Office</div></span></div>";
    aboutButton.style.display = "none";
    aboutButtonExpanded.style.display = "contents";
    $("#<%=buttonID.ClientID%>").click(function () {
        $('html,body').animate({
            scrollTop: $(".second").offset().top
        },
            'slow');
    });
};


aboutButtonExpanded.onclick = function() {
    aboutDescription.innerHTML = "<div id='aboutDescription'>Sydney is a graphic designer based in New York City who focuses her work on the intersection between branding, design, and technology.</span></div>";
    aboutButton.innerHTML = "<div id='aboutButton'><span id='aboutchange'><span id='links'><span id='sansText'>READ MORE</span></span></span></div>";
    aboutButton.style.display = "contents";
    aboutButtonExpanded.style.display = "none";
    $("#<%=buttonID.ClientID%>").click(function () {
        $('html,body').animate({
            scrollTop: $(".second").offset().top
        },
            'slow');
    });
}


var modal = document.getElementById("myModal");
var image01 = document.getElementById("image01");
var image02 = document.getElementById("image02");
var image03 = document.getElementById("image03");
var image04 = document.getElementById("image04");
var image05 = document.getElementById("image05");
var image06 = document.getElementById("image06");
var image07 = document.getElementById("image07");
var image08 = document.getElementById("image08");
var image09 = document.getElementById("image09");
var image10 = document.getElementById("image10");



var modalImg = document.getElementById("img01");
var captionText = document.getElementById("captionModal");

image01.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.height = "fit-content";
    modalImg.style.width = "70vw";
    modalImg.style.position = "relative";
    modalImg.style.left = "0vw";
    modalImg.src = this.src;
}

image02.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.height = "fit-content";
    modalImg.style.width = "70vw";
    modalImg.style.position = "relative";
    modalImg.style.left = "0vw";
    modalImg.src = this.src;
}

image03.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.height = "fit-content";
    modalImg.style.width = "70vw";
    modalImg.style.position = "relative";
    modalImg.style.left = "0vw";
    modalImg.src = this.src;
}

image04.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.height = "fit-content";
    modalImg.style.width = "60vw";
    modalImg.style.position = "relative";
    modalImg.style.left = "5vw";
    modalImg.src = this.src;
}

image05.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.height = "fit-content";
    modalImg.style.width = "65vw";
    modalImg.style.position = "relative";
    modalImg.style.left = "3vw";
    modalImg.src = this.src;
}

image06.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "40vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "15vw";
    modalImg.src = this.src;
}

image07.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "65vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "2vw";
    modalImg.src = this.src;
}

image08.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "65vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "3vw";
    modalImg.src = this.src;
}

image09.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "65vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "3vw";
    modalImg.src = this.src;
}

image10.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "65vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "3vw";
    modalImg.src = this.src;
}


var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.onclick = function() { 
  modal.style.display = "none";
}



function myFunction(x) {
    if (x.matches) { // If media query matches        
        image01.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        image02.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        image03.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image04.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image05.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image06.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image07.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image08.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image09.onclick = function(){   
            modalImg.style.display = "none";
        modal.style.display = "none"
        }
        
        image10.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }  
    } 
  }
  
  var x = window.matchMedia("(max-width: 764px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  

