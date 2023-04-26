let input = document.querySelector("textarea");
let showSection = document.querySelector(".image");
let message = document.querySelector(".message");
let messageOut = document.querySelector(".subTitle");
let messageResults = document.querySelector(".messageResult");

function checkEmptyValue() {
  if (input.value === "") {
    alert("Digite algum texto");
  }
}

function showEncriptedMessage() {
  checkEmptyValue();
  if (/^[A-Z0-9]+$/i.test(input.value)) {
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.value)) {
      return alert(
        "Por favor, apenas letras minúsculas e sem caracteres especiais."
      );
    } else {
      return false;
    }
  } else {
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
}

function showDecriptedMessage() {
  checkEmptyValue();
  if (/^[A-Z0-9]+$/i.test(input.value)) {
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.value)) {
      return alert(
        "Por favor, apenas letras minúsculas e sem caracteres especiais."
      );
    } else {
      return false;
    }
  } else {
    let str = input.value;
    const mapObj = {
      ai: "a",
      enter: "e",
      imes: "i",
      ober: "o",
      ufat: "u",
    };
    let newString = str.replace(
      /ai|enter|imes|ober|ufat/gi,
      function (matched) {
        return mapObj[matched];
      }
    );
    return newString;
  }
}

function encripMessage() {
  messageResults.textContent = showEncriptedMessage();
}

document.querySelector(".buttonCrip").addEventListener("click", function () {
  encripMessage();
  showSection.style.display = "none";
  messageOut.style.display = "none";
  message.style.display = "none";
  messageResults.style.display = "flex";
});

function decripMessage() {
  messageResults.textContent = showDecriptedMessage();
}

document.querySelector(".buttonDescrip").addEventListener("click", function () {
  decripMessage();
  showSection.style.display = "none";
  messageOut.style.display = "none";
  message.style.display = "none";
  messageResults.style.display = "flex";
});
