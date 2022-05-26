const box = document.querySelector(".typing");
const text = "czesc! jak tam ?";

let wordIndex = 0;
let oldTime = 0;
let speed = 100

const typing = (newTime) => {
  if (newTime - oldTime > speed) {
    const letter = text.substr(wordIndex, 1);
    box.textContent += letter;
    wordIndex++;
    oldTime = newTime;
  }
  requestAnimationFrame(typing);
};

typing();
