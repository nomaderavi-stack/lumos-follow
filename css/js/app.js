const botao = document.getElementById("btnAnalisar");
const resultado = document.getElementById("resultado");
const usuario = document.getElementById("usuario");

botao.addEventListener("click", () => {

    if (usuario.value.trim() === "") {
        resultado.innerHTML = "<p>⚠️ Digite um @usuário.</p>";
        return;
    }

    resultado.innerHTML = `
        <h2>🔍 Analisando perfil...</h2>
        <p>Usuário: <strong>${usuario.value}</strong></p>
        <p>Em breve o Lumos Follow mostrará quem não segue você de volta.</p>
    `;
});