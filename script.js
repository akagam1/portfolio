let i = 0;
let txt = 'Lorem ipsum typing effect!'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

window.onload = function() {
    for (let j=0; j<txt.length; j++) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        j++;
        setTimeout(typeWriter, speed);
    }
}
