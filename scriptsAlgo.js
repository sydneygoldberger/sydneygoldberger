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
var image11 = document.getElementById("image11");
var image12 = document.getElementById("image12");
var image13 = document.getElementById("image13");
var image14 = document.getElementById("image14");
var image15 = document.getElementById("image15");
var image16 = document.getElementById("image16");
var image17 = document.getElementById("image17");
var image18 = document.getElementById("image18");



var modalImg = document.getElementById("img01");
var captionText = document.getElementById("captionModal");

image01.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "70vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "0vw";
    modalImg.src = this.src;
}

image02.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "40vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "20vw";
    modalImg.src = this.src;
}

image03.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "40vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "20vw";
    modalImg.src = this.src;
}

image04.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "50vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "10vw";
    modalImg.src = this.src;
}

image05.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "50vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "10vw";
    modalImg.src = this.src;
}

image06.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "50vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "10vw";
    modalImg.src = this.src;
}

image07.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "50vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "10vw";
    modalImg.src = this.src;
}

image08.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "70vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "0vw";
    modalImg.src = this.src;
}

image09.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.src = this.src;
    modalImg.style.width = "50vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "15vw";
    modalImg.src = this.src;
}

image10.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "70vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "0vw";
    modalImg.src = this.src;
}

image11.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "50vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "15vw";
    modalImg.src = this.src;
}

image12.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.src = this.src;
    modalImg.style.height = "fit-content";
    modalImg.style.width = "50vw";
    modalImg.style.left = "10vw";
}

image13.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.src = this.src;
    modalImg.style.height = "fit-content";
    modalImg.style.width = "65vw";
    modalImg.style.left = "2vw";
}

image14.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "50vw";
    modalImg.style.position = "relative";
    modalImg.style.left = "12vw";
    modalImg.style.height = "fit-content";
    modalImg.src = this.src;
}

image15.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "50vw";
    modalImg.style.position = "relative";
    modalImg.style.height = "fit-content";
    modalImg.style.left = "12vw";
    modalImg.src = this.src;
}

image16.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "60vw";
    modalImg.style.position = "relative";
    modalImg.style.height = "fit-content";
    modalImg.style.left = "6vw";
    modalImg.src = this.src;
}

image17.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "60vw";
    modalImg.style.height = "fit-content";
    modalImg.style.position = "relative";
    modalImg.style.left = "6vw";
    modalImg.src = this.src;
}
image18.onclick = function(){
    modal.style.display = "inline-block";
    modalImg.style.width = "75vw";
    modalImg.style.position = "relative";
    modalImg.style.height = "fit-content";
    modalImg.style.backgroundColor = "white";
    modalImg.style.left = "-2vw";
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
        
        image11.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }

        image12.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image13.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image14.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image15.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image16.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
        image17.onclick = function(){   
            modalImg.style.display = "none";
        modal.style.display = "none"
        }
        
        image18.onclick = function(){
            modalImg.style.display = "none";
            modal.style.display = "none"
        }
        
    } 
  }
  
  var x = window.matchMedia("(max-width: 764px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  



