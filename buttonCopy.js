function copyText() {
    const p = document.querySelector(".messageResult")
    const text = p.innerText

    navigator.clipboard.writeText(text)
    .then(() => {
        alert("Texto copiado para a área de transferência.")
    })
    .catch((err) => {
        console.error("Erro ao copiar texto:", err);
      });
}