const btn = document.querySelector(".btn-analisa");
const overlay = document.getElementById("magicOverlay");

btn.addEventListener("click", () => {
    
    // ativa tela mágica
    overlay.classList.remove("hidden");

    // simula “magia carregando”
    setTimeout(() => {
        overlay.classList.add("show");
    }, 200);

    // depois mostra resultado fake (por enquanto)
    setTimeout(() => {
        alert("Aqui virá: quem não te segue de volta 👀");
        
        // fecha magia depois
        overlay.classList.remove("show");
        overlay.classList.add("hidden");

    }, 2500);
});