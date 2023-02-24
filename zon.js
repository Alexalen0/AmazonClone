let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var x = 5;
var y = 5;
var z = 5;

document.getElementById("next2").addEventListener("click", function inc(){
    x+=1;
});
document.getElementById("next3").addEventListener("click", function inc(){
    y+=1;
});
document.getElementById("next4").addEventListener("click", function inc(){
    z+=1;
});

function next(){
    if(x>14){
        breakme;
    }
    else
    document.getElementById("next2").href="#s1-"+x;    
}

var a = x

document.getElementById("prev2").addEventListener("click", function dec(){
    a-=1;
});

function prev(){
    if(a<1){
        breakme
    }
    else
    document.getElementById("prev2").href="#s1-"+a;
 
}
// -----------------------------------------------------------------------
function next2(){
  if(y>14){
      breakme;
  }
  else
  document.getElementById("next3").href="#s2-"+y;    
}

var b = y

document.getElementById("prev3").addEventListener("click", function dec(){
  b-=1;
});

function prev2(){
  if(b<1){
      breakme
  }
  else
  document.getElementById("prev3").href="#s2-"+b;

}
// -----------------------------------------------------------------------

function next3(){
  if(z>14){
      breakme;
  }
  else
  document.getElementById("next4").href="#s3-"+z;    
}

var c = z

document.getElementById("prev4").addEventListener("click", function dec(){
  c-=1;
});

function prev3(){
  if(c<1){
      breakme
  }
  else
  document.getElementById("prev4").href="#s3-"+c;

}