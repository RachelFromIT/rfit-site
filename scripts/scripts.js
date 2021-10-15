
const typingh1 = document.getElementById("typing-h1");
const typingSpan = document.getElementById("typing-span");

window.onload = setTimeout(function () {
    let msg = "Hello, world!";
    var i = 0;
    var typing = setInterval(function () {
        if (i < msg.length) {
            typingh1.innerHTML += msg.charAt(i);
            i++;
        }
        else {
            clearInterval(typing);
            setTimeout(fadeOut, 4000);
        }
    }
        , 150);
}, 3000);

function fadeOut() {
    var fade = setInterval(function(){
        if (!typingSpan.style.opacity){
            typingSpan.style.opacity = 1;
        }

        if (typingSpan.style.opacity > 0){
            typingSpan.style.opacity -= 0.1;
        }

        else {
            clearInterval(fade);
            typingSpan.style.display = 'none';
        }
    },150);
} 
