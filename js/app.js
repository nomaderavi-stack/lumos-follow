const btn = document.getElementById("btn");
const input = document.getElementById("usuario");

const loading = document.getElementById("loading");
const result = document.getElementById("result");

const loadingText = document.getElementById("loadingText");
const list = document.getElementById("list");
const close = document.getElementById("close");

btn.addEventListener("click", () => {

  const user = input.value.trim();

  if (!user) {
    alert("Digite um usuário");
    return;
  }

  list.innerHTML = "";

  loading.classList.remove("hidden");

  let steps = [
    "Conectando ao Instagram...",
    "Analisando seguidores...",
    "Detectando não seguidores...",
    "Finalizando..."
  ];

  let i = 0;

  let interval = setInterval(() => {

    loadingText.textContent = steps[i];
    i++;

    if (i >= steps.length) {
      clearInterval(interval);

      setTimeout(() => {

        loading.classList.add("hidden");
        result.classList.remove("hidden");

        const fake = [
          "ghost_01",
          "inactive_22",
          "bot_33",
          "user_fake_44"
        ];

        fake.forEach(u => {
          const div = document.createElement("div");
          div.classList.add("item");
          div.textContent = `🚫 @${u} não te segue de volta`;
          list.appendChild(div);
        });

      }, 500);
    }

  }, 700);

});

close.addEventListener("click", () => {
  result.classList.add("hidden");
});