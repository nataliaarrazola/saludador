function obtenerSaludoPorHora(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function saludar(nombre, hora, genero, edad, idioma = "es") {
  if (hora === undefined) {
    hora = new Date().getHours();
  }

  if (idioma === "es") {
    const saludoHora = obtenerSaludoPorHora(hora);
    let prefijo = "";

    if (edad > 30) {
      if (genero === "M") {
        prefijo = " Sr. ";
      } else if (genero === "F") {
        prefijo = " Sra. ";
      } else if (nombre) {
        prefijo = " ";
      }
    } else {
      if (genero === "M") {
        prefijo = " estimado ";
      } else if (genero === "F") {
        prefijo = " estimada ";
      } else if (nombre) {
        prefijo = " ";
      }
    }

    if (nombre) {
      return saludoHora + prefijo + nombre;
    }
    return saludoHora;
  }

  return "Hola";
}

export default saludar;