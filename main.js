let input = document.querySelector("textarea");
let showSection = document.querySelector(".image");
let message = document.querySelector(".message");
let messageOut = document.querySelector(".subTitle");

function showEncriptedMessage() {
  let phrase = "";
  let inputLowerCase = input.value.toLowerCase();
  for (let i = 0; i < inputLowerCase.length; i++) {
    if (
      inputLowerCase[i] === "a" ||
      inputLowerCase[i] === "á" ||
      inputLowerCase[i] === "à" ||
      inputLowerCase[i] === "â" ||
      inputLowerCase[i] === "ã"
    ) {
      phrase += "ai";
    }
    if (
      input.value[i] === "e" ||
      input.value[i] === "é" ||
      input.value[i] === "ê"
    ) {
      phrase += "enter";
    }
    if (
      input.value[i] === "i" ||
      input.value[i] === "í" ||
      input.value[i] === "ì" ||
      input.value[i] === "î"
    ) {
      phrase += "imes";
    }
    if (
      input.value[i] === "o" ||
      input.value[i] === "ò" ||
      input.value[i] === "ó" ||
      input.value[i] === "õ" ||
      input.value[i] === "ô"
    ) {
      phrase += "ober";
    }
    if (
      input.value[i] === "u" ||
      input.value[i] === "ú" ||
      input.value[i] === "ù" ||
      input.value[i] === "û"
    ) {
      phrase += "ufat";
    } else {
      phrase += inputLowerCase[i];
    }
  }
  return phrase;
}

function updateMessage() {
  message.textContent = showEncriptedMessage();
}

document.querySelector(".buttonCrip").addEventListener("click", updateMessage);

document.querySelector(".buttonCrip").addEventListener("click", updateMessage);
document.querySelector(".buttonCrip").addEventListener("click", function () {
  showSection.style.display= "none";
});
document.querySelector(".buttonCrip").addEventListener("click", function () {
    messageOut.style.display= "none";
  });
