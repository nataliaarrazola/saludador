import saludar from "./saludador";

const nombreInput = document.querySelector("#nombre-input");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value.trim();
  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});