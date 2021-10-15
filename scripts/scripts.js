const typingh1 = document.getElementById("typing-h1");
const typingSpan = document.getElementById("typing-span");

// window.onload = setTimeout(typing, 2000);
window.onload = typing();

function typing() {
    let msg = "Hello, world!";
    for (let i = 0; i < (msg.length); i++) {
        setTimeout(function () {
            typingh1.innerHTML += msg.charAt(i);
        }, 50);
    }
    setTimeout(function () {
        var fadeOut = setInterval(function () {
            if (!typingSpan.style.opacity) {
                typingSpan.style.opacity = 1;
            }

            if (typingSpan.style.opacity > 0) {
                typingSpan.style.opacity -= 0.1;
            }

            else {
                clearInterval(fadeOut);
            }
        }, 200);
    }, 4000);
}
