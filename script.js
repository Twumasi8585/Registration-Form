let inputEl = document.querySelector("Input");
let showEl = document.querySelector(".fa-eye");
let hideEl = document.querySelector(".fa-eye-slash");

showEl.addEventListener("click", () =>{
    inputEl.type = "text";
    hideEl.classList.remove("hide");
    showEl.classList.add("hide");
});

hideEl.addEventListener("click", () =>{
    inputEl.type = "password";
    hideEl.classList.add("hide");
    showEl.classList.remove("hide");
});

