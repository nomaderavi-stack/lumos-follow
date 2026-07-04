document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnMagic");
  const input = document.getElementById("usuario");

  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  const loadingText = document.getElementById("loadingText");
  const resultList = document.getElementById("resultList");
  const closeResult = document.getElementById("closeResult");

  let running = false;

  btn.addEventListener("click", () => {

    if (running) return;

    const user = input.value.trim();

    if (!user) {
      alert("Digite um usuário");
      return;
    }

    running = true;

    resultList.innerHTML = "";
    loading.classList.remove("hidden");

    let textIndex = 0;
    const texts = [
      "Conectando ao Instagram...",
      "Analisando seguidores...",
      "Detectando não seguidores...",
      "Finalizando relatório..."
    ];

    const interval = setInterval(() => {

      loadingText.textContent = texts[textIndex];
      textIndex++;

      if (textIndex >= texts.length) {
        clearInterval(interval);

        setTimeout(() => {

          loading.classList.add("hidden");
          result.classList.remove("hidden");

          const fake = [
            "ghost_user01",
            "inactive_22",
            "bot_follow_33",
            "old_user_44"
          ];

          fake.forEach(u => {
            const div = document.createElement("div");
            div.classList.add("result-item");
            div.textContent = `🚫 @${u} não te segue de volta`;
            resultList.appendChild(div);
          });

          running = false;

        }, 600);
      }

    }, 800);

  });

  closeResult.addEventListener("click", () => {
    result.classList.add("hidden");
  });

});