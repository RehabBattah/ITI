/* <div class="slider"></div> */
let sliderDiv = document.createElement('div');
sliderDiv.classList.add('slider'); 
/* <img id="slider"></img> */
let sliderImage = document.createElement('img');
sliderImage.id = 'slider';
sliderDiv.appendChild(sliderImage);
document.body.appendChild(sliderDiv);

let imgs = ["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg","imgs/5.jpg","imgs/6.jpg"]
let slider = document.getElementById("slider");
let i =0;

function showImg(i) {
    slider.setAttribute("src" , imgs[i])
}
showImg(i)
//Next
function nxtImg() {
    i++
    if (i == imgs.length) i=0; //6 error 
    showImg(i)
}
//Previous
function preImg() {
    i--
    if (i == -1) i=imgs.length-1;   // 5 error     
    showImg(i)
}
// sliderShow
let show;
function sliderShow() {
    stopSlideshow()
    show = setInterval(nxtImg,1000)
}
//STOP
function stopSlideshow() {
    clearInterval(show);
}
