let input = document.querySelector("textarea");
let showSection = document.querySelector(".image");
let message = document.querySelector(".message");
let messageOut = document.querySelector(".subTitle");

function showEncriptedMessage() {
  let str = input.value;
  const mapObj = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  let newString = str.replace(/a|e|i|o|u/gi, function (matched) {
    return mapObj[matched];
  });
  return newString;
}

function showDecriptedMessage() {
  let str = input.value;
  const mapObj = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  let newString = str.replace(/ai|enter|imes|ober|ufat/gi, function (matched) {
    return mapObj[matched];
  });
  return newString;
}

function encripMessage() {
  message.textContent = showEncriptedMessage();
}
document.querySelector(".buttonCrip").addEventListener("click", encripMessage);

function decripMessage() {
  message.textContent = showDecriptedMessage()
}

document.querySelector(".buttonDescrip").addEventListener("click", decripMessage)


document.querySelector(".buttonCrip").addEventListener("click", function () {
  showSection.style.display = "none";
  messageOut.style.display = "none";
});
