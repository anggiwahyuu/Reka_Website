//animasi typewriting
const TypingText = document.querySelector(".title-reka");
const AutoTyping = document.querySelector(".cursor");

const textArray = ["Reka is a New Label Collaborations Platform"];
const typingDelay = 50;
const erasingDelay = 100;
const newTextDelay = 1000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
        TypingText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        AutoTyping.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}
  
function erase() {
    if (charIndex > 0) {
        if(!AutoTyping.classList.contains("typing")) AutoTyping.classList.add("typing");
        TypingText.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        AutoTyping.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}
  
document.addEventListener("DOMContentLoaded", function() { 
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

