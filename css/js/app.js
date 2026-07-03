const botao = document.getElementById("btnAnalisar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
    resultado.innerHTML = `
        <h2>✅ Sistema funcionando!</h2>
        <p>O Lumos Follow está conectado ao JavaScript.</p>
    `;
});
