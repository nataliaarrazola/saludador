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
  if (nombre && /\d/.test(nombre)) {
    return idioma === "en" 
      ? "Error: El nombre no puede contener números." 
      : "Error: El nombre no puede contener números.";
  }

  if (hora === undefined) {
    hora = new Date().getHours();
  }

  const esVisitante = !nombre || nombre.trim() === "";
  const nombreFinal = esVisitante ? (idioma === "en" ? "visitor" : "visitante") : nombre;

  if (idioma === "en") {
    const saludoHora = obtenerSaludoPorHoraEN(hora);
    let prefijo = "";

    if (!esVisitante) {
      if (edad > 30) {
        if (genero === "M") prefijo = " Mr. ";
        else if (genero === "F") prefijo = " Mrs. ";
        else prefijo = " ";
      } else {
        if (genero === "M" || genero === "F") prefijo = " dear ";
        else prefijo = " ";
      }
    } else {
      prefijo = " ";
    }

    return saludoHora + prefijo + nombreFinal;
  }

  const saludoHora = obtenerSaludoPorHoraES(hora);
  let prefijo = "";

  if (!esVisitante) {
    if (edad > 30) {
      if (genero === "M") prefijo = " Sr. ";
      else if (genero === "F") prefijo = " Sra. ";
      else prefijo = " ";
    } else {
      if (genero === "M") prefijo = " estimado ";
      else if (genero === "F") prefijo = " estimada ";
      else prefijo = " ";
    }
  } else {
    prefijo = " ";
  }

  return saludoHora + prefijo + nombreFinal;
}

export default saludar;