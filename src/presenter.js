import saludar from "./saludador.js";

const idiomaSelect = document.querySelector("#idioma-select");
const nombreInput = document.querySelector("#nombre-input");
const generoSelect = document.querySelector("#genero-select");
const edadInput = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const idioma = idiomaSelect.value;
  const nombre = nombreInput.value.trim();
  const genero = generoSelect.value;
  const edad = Number.parseInt(edadInput.value) || 0;
  const horaActual = new Date().getHours();

  div.innerHTML = "<p>" + saludar(nombre, horaActual, genero, edad, idioma) + "</p>";
});