import saludar from "./saludador";

const nombreInput = document.querySelector("#nombre-input");
const generoSelect = document.querySelector("#genero-select");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  const genero = generoSelect.value;
  const horaActual = new Date().getHours();

  div.innerHTML = "<p>" + saludar(nombre, horaActual, genero) + "</p>";
});