function copyText() {
  const textarea = document.querySelector(".messageResult");
  const text = textarea.value;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Texto copiado para a área de transferência.");
    })
    .catch((err) => {
      console.error("Erro ao copiar texto:", err);
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
  const buttonCopy = document.querySelector(".buttonCopy");
});
