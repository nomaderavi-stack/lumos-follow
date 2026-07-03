const btn = document.getElementById("btnMagic");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");

btn.addEventListener("click", () => {

loading.classList.remove("hidden");

setTimeout(() => {
    loading.classList.add("hidden");
    result.classList.remove("hidden");
}, 2500);

});

closeResult.addEventListener("click", () => {
result.classList.add("hidden");
});