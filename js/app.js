const btnMagic = document.getElementById("btnMagic");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const input = document.getElementById("usuario");

// 🚀 CLIQUE NO BOTÃO
btnMagic.addEventListener("click", () => {

    const user = input.value.trim();

    if (user === "") {
        alert("Digite um usuário primeiro ✨");
        return;
    }

    // 🔮 mostra loading mágico
    loading.classList.remove("hidden");

    // simula IA analisando
    setTimeout(() => {

        loading.classList.add("hidden");

        // mostra resultado
        result.classList.remove("hidden");

    }, 2500);

});


// ❌ FECHAR RESULTADO
closeResult.addEventListener("click", () => {
    result.classList.add("hidden");
});