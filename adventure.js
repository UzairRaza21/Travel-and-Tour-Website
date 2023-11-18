// Image Slider of About page

let currentSlide = 0;
function move(a){
currentSlide = currentSlide + a;
slideshow(currentSlide)
}
move(currentSlide)

function slideshow(num){
let slide = document.getElementsByClassName("about-slide");

if ( num == slide.length){
    currentSlide = 0;
    num = 0;
}
if(num < 0){
    currentSlide = slide.length-1;
    num = slide.length-1;
}
// this FOR LOOP is used to describe that all the slides display none
for (let y of slide){
    y.style.display = "none";
};
slide[num].style.display = "block"

}

// End of Image Slider of About Page

// Nav Bar

// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByTagName("nav").style.top = "0";
//   } else {
//     document.getElementsByTagName("nav").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// function scrolldown(){
//     window.scrollBy(1800,1800);
//     alert("ok")
// }

// scrolldown()