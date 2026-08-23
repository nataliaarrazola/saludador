function obtenerSaludoPorHora(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function saludar(nombre, hora, genero, edad) {
  if (hora === undefined) {
    hora = new Date().getHours();
  }

  const saludoHora = obtenerSaludoPorHora(hora);
  let prefijo = "";

  if (edad > 30) {
    if (genero === "M") {
      prefijo = " Senor. ";
    } else if (genero === "F") {
      prefijo = " Senora. ";
    } else if (nombre) {
      prefijo = " ";
    }
  } else {
    if (genero === "M") {
      prefijo = " Senorito ";
    } else if (genero === "F") {
      prefijo = " Senorita ";
    } else if (nombre) {
      prefijo = " ";
    }
  }

  if (nombre) {
    return saludoHora + prefijo + nombre;
  }
  return saludoHora;
}

export default saludar;