function obtenerSaludoPorHora(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function saludar(nombre, hora, genero) {
  if (hora === undefined) {
    hora = new Date().getHours();
  }

  const saludoHora = obtenerSaludoPorHora(hora);
  let prefijo = "";

  if (genero === "M") {
    prefijo = " estimado ";
  } else if (genero === "F") {
    prefijo = " estimada ";
  } else if (nombre) {
    prefijo = " ";
  }

  if (nombre) {
    return saludoHora + prefijo + nombre;
  }
  return saludoHora;
}

export default saludar;