document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnMagic");
  const loading = document.getElementById("loading");
  const result = document.getElementById("result");
  const closeResult = document.getElementById("closeResult");
  const input = document.getElementById("usuario");
  const resultList = document.getElementById("resultList");
  const loadingText = document.getElementById("loadingText");

  btn.addEventListener("click", () => {

    const user = input.value.trim();

    if (!user) {
      alert("Digite um usuário primeiro 👀");
      return;
    }

    // reset UI
    resultList.innerHTML = "";

    loading.classList.remove("hidden");

    let dots = 0;
    const scan = setInterval(() => {
      dots = (dots + 1) % 4;
      loadingText.textContent = "Escaneando seguidores" + ".".repeat(dots);
    }, 400);

    setTimeout(() => {

      clearInterval(scan);

      loading.classList.add("hidden");
      result.classList.remove("hidden");

      // “IA FAKE” consistente
      const fakeUsers = [
        `${user}_fake1`,
        `${user}_ghost2`,
        `${user}_inactive3`
      ];

      fakeUsers.forEach(u => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        div.textContent = `🚫 @${u} não te segue de volta`;
        resultList.appendChild(div);
      });

    }, 2500);

  });

  closeResult.addEventListener("click", () => {
    result.classList.add("hidden");
  });

});