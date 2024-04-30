var lastScroll = 80;
var nav = document.getElementById("nav");
var logo = document.getElementById("logo");
var ul = document.getElementById("ul");
var home = document.getElementById("home");
var homeBtn = document.getElementById("home-btn");

var iot = document.getElementById("iot");
var iotBtn = document.getElementById("iot-btn");
var avr = document.getElementById("avr");
var avrBtn = document.getElementById("avr-btn");
var ml = document.getElementById("ml");
var mlBtn = document.getElementById("ml-btn");
function removeActiveClass() {
    home.classList.remove('active');
    iot.classList.remove('active');
    avr.classList.remove('active');
    ml.classList.remove('active');
    
    // Remove background color from all navigation buttons
    homeBtn.style.borderBottom = "";
    iotBtn.style.borderBottom = "";
    avrBtn.style.borderBottom = "";
    mlBtn.style.borderBottom = "";
}
homeBtn.addEventListener('click',(e)=>{
    removeActiveClass()
    home.classList.add('active')
    homeBtn.style.borderBottom = "2px solid #080808";
})
iotBtn.addEventListener('click',()=>{
    removeActiveClass()
    iot.classList.add('active')
    iotBtn.style.borderBottom = "2px solid #080808";

})
avrBtn.addEventListener('click',()=>{
    removeActiveClass()
    avr.classList.add('active')
    avrBtn.style.borderBottom = "2px solid #080808";

})
mlBtn.addEventListener('click',()=>{
    removeActiveClass()
    ml.classList.add('active')
    mlBtn.style.borderBottom = "2px solid #080808";

})
var lastScroll = 80;

document.addEventListener('scroll', (e) => {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScroll) {
        // Scrolling down
        // Change logo source and text color
        logo.src = "../images/logo.png";
        // ul.style.color = "black";
        // Add 'scroll' class to the 'nav' element
        nav.classList.add("scroll");
    } else {
        // Scrolling up
        // Change navigation bar background color, logo source, and text color
        // nav.style.backgroundColor = "#101820";
        logo.src = "../images/ELECTRON EDGE WHITEw.png";
        // ul.style.color = "aliceblue";
        // Remove 'scroll' class from the 'nav' element
        nav.classList.remove("scroll");
    }

    // Update last scroll position
    // lastScroll = currentScrollTop <= 0 ? 0 : currentScrollTop;
});
