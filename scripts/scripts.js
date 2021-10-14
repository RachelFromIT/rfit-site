const landing = document.getElementById("landing");

window.onload = function(){
    setTimeout(function(){
        var i = 0;
        var msg = '\'Hello, world!\''
            function typing(){
                if (i < msg.length){
                landing.innerHTML += msg.charAt(i);
                i++;
                setTimeout(typing, 50);
            }
        }
    }, 1000);
}