$(".projectPhotoHome > .slides1:gt(0)").hide();
setInterval(function () {
    $('.projectPhotoHome > .slides1:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.projectPhotoHome');
}, 6000);

$(".projectPhotoHome > .slides2:gt(0)").hide();
setInterval(function () {
    $('.projectPhotoHome > .slides2:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.projectPhotoHome');
}, 6000);

$(".projectPhotoHome > .slides3:gt(0)").hide();
setInterval(function () {
    $('.projectPhotoHome > .slides3:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.projectPhotoHome');
}, 6000);

$(".projectPhotoHome > .slides4:gt(0)").hide();
setInterval(function () {
    $('.projectPhotoHome > .slides4:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.projectPhotoHome');
}, 6000);

$(".projectPhotoHome > .slides5:gt(0)").hide();
setInterval(function () {
    $('.projectPhotoHome > .slides5:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.projectPhotoHome');
}, 6000);

$(".projectPhotoHome > .slides6:gt(0)").hide();
setInterval(function () {
    $('.projectPhotoHome > .slides6:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.projectPhotoHome');
}, 6000);

$(".projectPhotoHome > .slides7:gt(0)").hide();
setInterval(function () {
    $('.projectPhotoHome > .slides7:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('.projectPhotoHome');
}, 6000);



var aboutButton = document.getElementById("aboutButton");
var aboutButtonExpanded = document.getElementById("aboutButtonExpanded");
var aboutDescription = document.getElementById("aboutDescription");

aboutButton.onclick = function() {
    aboutDescription.innerHTML = "<div id='aboutDescription'>Sydney is a graphic designer based in New York City who focuses her work on the intersection between branding, design, and technology.</span></div>";
    aboutButton.innerHTML = "<div id='aboutButton'><span id='aboutchange'><span id='links'><span id='sansText'>READ MORE</span></span></span></div>";
    aboutButton.style.display = "none";
    aboutButtonExpanded.style.display = "contents";
    // $("#<%=buttonID.ClientID%>").click(function () {
    //     $('html,body').animate({
    //         scrollTop: $(".second").offset().top
    //     },
    //         'slow');
    // });
}


aboutButtonExpanded.onclick = function() {
    aboutDescription.innerHTML = "<div id='aboutDescription'>Sydney is a graphic designer based in New York City who focuses her work on the intersection between branding, design, and technology. <div id='aboutSubDescription'>A recent Communication Design graduate from from Parsons School of Design New York City, Sydney previously worked as a design intern at And Partners. Sydney's multidisciplinary background in psychology, fine arts, web development, and graphic design allows her to find creative solutions to probelms with a unique perspective.</div><div id='aboutSubDescription'>Before pursuing a career in design, she worked in negotiating sports media rights and distribution at IMG. Sydney received her Bachelor of Arts, Magna Cum Laude, at the University of Pennsylvania and is currently living in New York City.</div><div id='aboutSubDescription'>Proficient in: Adobe Creative Suite, HTML, CSS, JavaScript, Figma, Github, Microsoft Office</div></span></div>";
    aboutButton.innerHTML = "<div id='aboutButton'><span id='aboutchange'><span id='links'><span id='sansText'>READ LESS</span></span></span></div>";
    aboutButton.style.display = "contents";
    aboutButtonExpanded.style.display = "none";
    // $("#<%=buttonID.ClientID%>").click(function () {
    //     $('html,body').animate({
    //         scrollTop: $(".second").offset().top
    //     },
    //         'slow');
    // });
  
}


// HOMEPAGE SLIDESHOW
var index = 0;
var slides1 = document.getElementsByClassName("slides1"); 
var nextArrow1 = document.getElementById("next1");
var previousArrow1 = document.getElementById("previous1");

var slides2 = document.getElementsByClassName("slides2"); 
var nextArrow2 = document.getElementById("next2");
var previousArrow2 = document.getElementById("previous2");

var slides3 = document.getElementsByClassName("slides3"); 
var nextArrow3 = document.getElementById("next3");
var previousArrow3 = document.getElementById("previous3");

var slides4 = document.getElementsByClassName("slides4"); 
var nextArrow4 = document.getElementById("next4");
var previousArrow4 = document.getElementById("previous4");

var slides5 = document.getElementsByClassName("slides5"); 
var nextArrow5 = document.getElementById("next5");
var previousArrow5 = document.getElementById("previous5");

var slides6 = document.getElementsByClassName("slides6"); 
var nextArrow6 = document.getElementById("next6");
var previousArrow6 = document.getElementById("previous6");

var slides7 = document.getElementsByClassName("slides7"); 
var nextArrow7 = document.getElementById("next7");
var previousArrow7 = document.getElementById("previous7");

showSlides1(index); 
showSlides2(index); 
showSlides3(index); 
showSlides4(index); 
showSlides5(index); 
showSlides6(index); 
showSlides7(index); 

function showSlides1(x) {
	if (x > slides1.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides1.length-1; 
	}
	for (i=0; i < slides1.length; i++) {
		slides1[i].style.display = "none"; 
	}
	
	slides1[index].style.display = "block";
}
nextArrow1.onclick = function() {
	index += 1; 
	showSlides1(index); 
} 
previousArrow1.onclick = function() {
	index -= 1; 
	showSlides1(index); 
} 

function showSlides2(x) {
	if (x > slides2.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides2.length-1; 
	}
	for (i=0; i < slides2.length; i++) {
		slides2[i].style.display = "none"; 
	}
	
	slides2[index].style.display = "block";
}
nextArrow2.onclick = function() {
	index += 1; 
	showSlides2(index); 
} 
previousArrow2.onclick = function() {
	index -= 1; 
	showSlides2(index); 
} 

function showSlides3(x) {
	if (x > slides3.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides3.length-1; 
	}
	for (i=0; i < slides3.length; i++) {
		slides3[i].style.display = "none"; 
	}
	
	slides3[index].style.display = "block";
}
nextArrow3.onclick = function() {
	index += 1; 
	showSlides3(index); 
} 
previousArrow3.onclick = function() {
	index -= 1; 
	showSlides3(index); 
} 

function showSlides4(x) {
	if (x > slides4.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides4.length-1; 
	}
	for (i=0; i < slides4.length; i++) {
		slides4[i].style.display = "none"; 
	}
	
	slides4[index].style.display = "block";
}
nextArrow4.onclick = function() {
	index += 1; 
	showSlides4(index); 
} 
previousArrow4.onclick = function() {
	index -= 1; 
	showSlides4(index); 
} 

function showSlides5(x) {
	if (x > slides5.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides5.length-1; 
	}
	for (i=0; i < slides5.length; i++) {
		slides5[i].style.display = "none"; 
	}
	
	slides5[index].style.display = "block";
}
nextArrow5.onclick = function() {
	index += 1; 
	showSlides5(index); 
} 
previousArrow5.onclick = function() {
	index -= 1; 
	showSlides5(index); 
} 

function showSlides6(x) {
	if (x > slides6.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides6.length-1; 
	}
	for (i=0; i < slides6.length; i++) {
		slides6[i].style.display = "none"; 
	}
	
	slides6[index].style.display = "block";
}
nextArrow6.onclick = function() {
	index += 1; 
	showSlides6(index); 
} 
previousArrow6.onclick = function() {
	index -= 1; 
	showSlides6(index); 
} 

function showSlides7(x) {
	if (x > slides7.length-1) {
		index = 0; 
	}
	if (x < 0) {
		index = slides7.length-1; 
	}
	for (i=0; i < slides7.length; i++) {
		slides7[i].style.display = "none"; 
	}
	
	slides7[index].style.display = "block";
}
nextArrow7.onclick = function() {
	index += 1; 
	showSlides7(index); 
} 
previousArrow7.onclick = function() {
	index -= 1; 
	showSlides7(index); 
} 


