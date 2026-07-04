const btn = document.getElementById("btnMagic");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const input = document.getElementById("usuario");
const resultList = document.getElementById("resultList");

btn.addEventListener("click", () => {

  const user = input.value;

  if (!user) {
    alert("Digite um usuário");
    return;
  }

  loading.classList.remove("hidden");

  setTimeout(() => {

    loading.classList.add("hidden");
    result.classList.remove("hidden");

    resultList.innerHTML = `
      <p>🚫 @usuario1 não te segue de volta</p>
      <p>🚫 @usuario2 não te segue de volta</p>
    `;

  }, 2000);

});

closeResult.addEventListener("click", () => {
  result.classList.add("hidden");
});