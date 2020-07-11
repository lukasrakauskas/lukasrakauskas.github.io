const words = ["RWD", "HTML and CSS", "Node.js", "JavaScript", "React", "PHP", "MySQL", "MongoDB"];
const skillSpan = document.getElementById("skill");
const textCursor = document.getElementById("text-cursor");

let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  const loopTyping = function () {
    if (word.length > 0) {
      skillSpan.innerHTML += word.shift();
    } else {
      textCursor.classList.add("blink");
      setTimeout(function () {
        deletingEffect();
        textCursor.classList.remove("blink");
      }, 2000);
      return false;
    }
    timer = setTimeout(loopTyping, 150);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split("");
  const loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      skillSpan.innerHTML = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 150);
  };
  loopDeleting();
}

typingEffect();
