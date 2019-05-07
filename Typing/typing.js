const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["fun", "hard", "rewarding", "a pain in the ass"];
const delay = 200;
const removeDelay = 100;
const newDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typedText.textContent = typedText.textContent + textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, delay);
    }
    else {
        cursor.classList.remove("typing");
        setTimeout(erase, newDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, removeDelay);
    }
    else {
        cursor.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, delay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newDelay + 250);
});