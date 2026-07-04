document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btnMagic");
  const input = document.getElementById("usuario");

  const loading = document.getElementById("loading");
  const result = document.getElementById("result");

  const loadingText = document.getElementById("loadingText");
  const progress = document.getElementById("progress");

  const resultList = document.getElementById("resultList");
  const closeResult = document.getElementById("closeResult");

  btn.addEventListener("click", () => {

    const user = input.value.trim();

    if (!user) {
      alert("Digite um usuário 👀");
      return;
    }

    resultList.innerHTML = "";

    loading.classList.remove("hidden");

    let percent = 0;

    const scan = setInterval(() => {

      percent += 5;

      loadingText.textContent = "IA analisando seguidores...";
      progress.textContent = percent + "%";

      if (percent >= 100) {
        clearInterval(scan);

        setTimeout(() => {
          loading.classList.add("hidden");
          showResults(user);
        }, 400);
      }

    }, 120);

  });

  function showResults(user) {

    result.classList.remove("hidden");

    const fakeData = [
      "ghost_mode_01",
      "inactive_user_22",
      "silent_follower_77",
      "unknown_profile_09",
      "bot_like_account_12",
      "old_follower_44"
    ];

    let i = 0;

    const interval = setInterval(() => {

      if (i >= fakeData.length) {
        clearInterval(interval);
        return;
      }

      const div = document.createElement("div");
      div.classList.add("result-item");

      div.textContent = `🚫 @${user}_${fakeData[i]} não te segue de volta`;

      resultList.appendChild(div);

      i++;

    }, 350);
  }

  closeResult.addEventListener("click", () => {
    result.classList.add("hidden");
  });

});