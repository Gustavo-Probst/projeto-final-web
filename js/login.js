const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

const validarInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

const salvarSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem("jogador", input.value);
  window.location = "pages/jogoMemoria.html";
};

input.addEventListener("input", validarInput);
form.addEventListener("submit", salvarSubmit);
