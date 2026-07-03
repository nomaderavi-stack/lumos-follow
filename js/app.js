const btn = document.getElementById("btnMagic");
const overlay = document.getElementById("magicOverlay");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const statusText = document.getElementById("statusText");

btn.addEventListener("click", () => {

    overlay.classList.remove("hidden");

    // sequência da magia
    setTimeout(() => {
        statusText.innerText = "Analisando seguidores...";
    }, 1200);

    setTimeout(() => {
        statusText.innerText = "Detectando não seguidores...";
    }, 2500);

    setTimeout(() => {
        overlay.classList.add("hidden");
        result.classList.remove("hidden");
    }, 4000);

});

closeResult.addEventListener("click", () => {
    result.classList.add("hidden");
});