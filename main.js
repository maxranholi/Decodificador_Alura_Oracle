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
  if (/^[a-z0-9]+$/g.test(input.value)) {
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.value)) {
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
    } else {
      return false;
    }
  } else {
    return alert(
      "Por favor, somente letras minúsculas e sem caracteres especiais."
    );
  }
}

function showDecriptedMessage() {
  checkEmptyValue();
  if (/^[a-z0-9]+$/g.test(input.value)) {
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(input.value)) {
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
    } else {
      return false;
    }
  } else {
    return alert(
      "Por favor, somente letras minúsculas e sem caracteres especiais."
    );
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
