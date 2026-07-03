const btnMagic = document.getElementById("btnMagic");
const magic = document.getElementById("magic");
const magicText = document.getElementById("magicText");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const input = document.getElementById("usuario");

btnMagic.addEventListener("click", () => {

    const user = input.value.trim();

    if (!user) {
        alert("Digite um usuário ✨");
        return;
    }

    // 🔮 ativa magia
    magic.classList.remove("hidden");

    setTimeout(() => {
        magicText.innerText = "Analisando seguidores...";
    }, 1000);

    setTimeout(() => {
        magicText.innerText = "Detectando não seguidores...";
    }, 2000);

    setTimeout(() => {
        magic.classList.add("hidden");
        result.classList.remove("hidden");
    }, 3000);

});

closeResult.addEventListener("click", () => {
    result.classList.add("hidden");
});