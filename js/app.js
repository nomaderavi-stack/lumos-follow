const btn = document.getElementById("btnMagic");
const overlay = document.getElementById("overlay");

btn.addEventListener("click", () => {

    overlay.classList.remove("hidden");

    setTimeout(() => {
        overlay.classList.add("hidden");
        alert("Aqui virá: quem não te segue de volta 👀");
    }, 2000);

});