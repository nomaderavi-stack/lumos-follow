const btn = document.getElementById("btnMagic");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const usuarioInput = document.getElementById("usuario");

const loadingText = [
  "Iniciando scanner de IA...",
  "Analisando seguidores...",
  "Detectando padrões de engajamento...",
  "Comparando follow graph...",
  "Identificando não seguidores...",
  "Finalizando relatório..."
];

btn.addEventListener("click", () => {
  const user = usuarioInput.value || "@usuario";

  loading.classList.remove("hidden");
  result.classList.add("hidden");

  let i = 0;
  let progress = 0;

  const interval = setInterval(() => {
    document.querySelector("#loading p").textContent = loadingText[i];
    i = (i + 1) % loadingText.length;

    progress += Math.floor(Math.random() * 18);

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      setTimeout(() => {
        loading.classList.add("hidden");

        // gera lista fake dinâmica
        const users = [
          `${user}_ghost1`,
          `${user}_inactive2`,
          `${user}_bot3`,
          `${user}_oldfollow4`
        ];

        result.querySelector(".box").innerHTML = `
          <h1>Resultado Lumos AI</h1>
          ${users.map(u => `<p>🚫 ${u} não te segue de volta</p>`).join("")}
          <button id="closeResult">Fechar</button>
        `;

        document.getElementById("closeResult").addEventListener("click", () => {
          result.classList.add("hidden");
        });

        result.classList.remove("hidden");
      }, 800);
    }
  }, 600);
});