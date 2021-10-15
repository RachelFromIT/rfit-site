
const typingh1 = document.getElementById("typing-h1");
const typingSpan = document.getElementById("typing-span");
const main = document.getElementById("main");

window.onload = fadeIn(typingSpan);
    
function typeEffect(){
    let msg = "Hello, world!";
    var i = 0;
    var typing = setInterval(function () {
        if (i < msg.length) {
            typingh1.innerHTML += msg.charAt(i);
            i++;
        }
        else {
            clearInterval(typing);
            setTimeout(fadeOut(typingSpan), 4000);
        }
    }
        , 150);
}

function fadeIn(element) {
    var o = 0;
    var fade = setInterval(function(){

        if (o < 1){
            o += 0.1;
            element.style.opacity = o;
        }

        else {
            clearInterval(fade);
            if (element === typingSpan){
            setTimeout(typeEffect, 1500);
            }
        }
    },150);
} 

function fadeOut(element) {
    var fade = setInterval(function(){
        if (!element.style.opacity){
            element.style.opacity = 1;
        }

        if (element.style.opacity > 0){
            element.style.opacity -= 0.1;
        }

        else {
            clearInterval(fade);
            element.style.display = 'none';
            main.classList.remove("hidden");
            fadeIn(main);
        }
    },150);
} 
