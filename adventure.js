

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