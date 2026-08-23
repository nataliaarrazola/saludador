function obtenerSaludoPorHora(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function saludar(nombre, hora) {
  if (hora === undefined) {
    hora = new Date().getHours();
  }

  const saludoHora = obtenerSaludoPorHora(hora);

  if (nombre) {
    return saludoHora + " " + nombre;
  }
  return saludoHora;
}

export default saludar;