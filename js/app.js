document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {

    const user = document.getElementById("user").value;

    if (!user) {
      alert("Digite um usuário");
      return;
    }

    const lista = document.getElementById("resultados");
    lista.innerHTML = "";

    const fakeData = ["amigo_fake1", "amigo_fake2", "amigo_fake3"];

    fakeData.forEach(u => {
      const div = document.createElement("div");
      div.textContent = `@${u} não te segue de volta`;
      lista.appendChild(div);
    });

    document.getElementById("modal").classList.remove("hidden");

  });

});

function fechar() {
  document.getElementById("modal").classList.add("hidden");
}