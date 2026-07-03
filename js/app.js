const btn = document.getElementById("btnMagic");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const input = document.getElementById("usuario");

// lista fake estilo "scanner de IA"
const fakeUsers = [
  "@usuario1",
  "@usuario2",
  "@usuario3",
  "@usuario4",
  "@usuario5",
  "@usuario6",
  "@usuario7"
];

// animação de texto "digitando"
function typeText(element, text, speed = 50) {
  element.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    element.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, speed);
}

// gera resultados aleatórios
function generateResults() {
  const shuffled = fakeUsers.sort(() => 0.5 - Math.random());
  const count = Math.floor(Math.random() * 4) + 2; // 2 a 5 resultados
  return shuffled.slice(0, count);
}

btn.addEventListener("click", () => {
  const user = input.value || "@usuario";

  // abre loading
  loading.classList.remove("hidden");

  const loadingText = loading.querySelector("p");
  typeText(loadingText, "Analisando seguidores com IA... 🔮");

  setTimeout(() => {
    loading.classList.add("hidden");

    const users = generateResults();

    // monta HTML dos resultados
    const box = result.querySelector(".box");

    box.innerHTML = `
      <h1>Resultado Lumos</h1>
      ${users
        .map(
          (u) =>
            `<p>🚫 ${u} não te segue de volta</p>`
        )
        .join("")}
      <button id="closeResult">Fechar</button>
    `;

    // reativa botão fechar (porque recriamos o HTML)
    document
      .getElementById("closeResult")
      .addEventListener("click", () => {
        result.classList.add("hidden");
      });

    result.classList.remove("hidden");

  }, 2500);
});

// fechar modal (fallback inicial)
closeResult.addEventListener("click", () => {
  result.classList.add("hidden");
});