document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const user = document.getElementById("username").value;

    if (!user) {
      alert("Digite um usuário");
      return;
    }

    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    const fake = ["user1", "user2", "user3"];

    fake.forEach(u => {
      const div = document.createElement("div");
      div.textContent = "@" + u + " não te segue de volta";
      lista.appendChild(div);
    });

    document.getElementById("modal").classList.remove("hidden");
  });

});

function fechar() {
  document.getElementById("modal").classList.add("hidden");
}