//
//
//
//
// -----------------------------------------------------
// QUERY SELECTIONS
var right = document.querySelector(".right");
var left = document.querySelector(".left");
var rightOver = document.querySelector(".over-right");
var leftOver = document.querySelector(".over-left");
var titleDom = document.querySelector(".title");
var arrowR = document.querySelector(".fa fa-arrow-right");
var arrowL = document.querySelector(".fa fa-arrow-left");
var sound = document.getElementById("myInitSound");
var soundHi = new Audio('./files/hi-1.wav');

// END QUERY SELECTIONS
// -----------------------------------------------------

setTimeout(function () {
    rightOver.style.display = "none";
    leftOver.style.display = "none";
    sound.play();
    setTimeout(function () {
        soundHi.play();
        rightOver.style.display = "block";
        leftOver.style.display = "block";
    }, 6000)
}, 0)

// -----------------------------------------------------
// MOUSEOVER FUNCTIONS
rightOver.addEventListener("mouseover", function () {
    left.classList.remove("active-right");
    right.classList.add("active-right");
    left.classList.remove("active-left");
    titleDom.style.transition = "1s ease";
    titleDom.style.opacity = "1";

})


leftOver.addEventListener("mouseover", function () {
    left.classList.remove("active-left");
    left.classList.add("active-left");
    right.classList.remove("active-right");
    titleDom.style.transition = "1s ease";
    titleDom.style.opacity = "1";
})


leftOver.addEventListener("mouseout", function () {
    // left.classList.remove("active-left");
    titleDom.style.transition = "1s ease";
    titleDom.style.opacity = "0";
})


rightOver.addEventListener("mouseout", function () {
    // right.classList.remove("active-right");
    titleDom.style.transition = "1s ease";
    titleDom.style.opacity = "0";
})
// END MOUSEOVER FUNCTIONS
// -----------------------------------------------------
// document.querySelector(".dice-btn").addEventListener('click', function() {
//     alert('clicked');
// })
// document.querySelector("#text").addEventListener('click', function() {
//     alert('clicked');
// })
// document.querySelector(".menu-left").addEventListener('scrolldown', function () {
//     window.scroll(1200, 500)
// })


