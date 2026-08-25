function obtenerSaludoPorHoraES(hora) {
  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

function obtenerSaludoPorHoraEN(hora) {
  if (hora >= 6 && hora < 12) {
    return "Good morning";
  } else if (hora >= 12 && hora < 20) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function saludar(nombre, hora, genero, edad, idioma = "es") {
  if (hora === undefined) {
    hora = new Date().getHours();
  }

  if (idioma === "en") {
    const saludoHora = obtenerSaludoPorHoraEN(hora);
    let prefijo = "";

    if (edad > 30) {
      if (genero === "M") {
        prefijo = " Mr. ";
      } else if (genero === "F") {
        prefijo = " Mrs. ";
      } else if (nombre) {
        prefijo = " ";
      }
    } else {
      if (genero === "M" || genero === "F") {
        prefijo = " dear ";
      } else if (nombre) {
        prefijo = " ";
      }
    }
    if (nombre) {
      return saludoHora + prefijo + nombre;
    }
    return saludoHora;
  }

  const saludoHora = obtenerSaludoPorHoraES(hora);
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

export default saludar;