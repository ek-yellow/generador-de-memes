// Ejecutar solo cuando el documento termine de cargar
window.onload = function () {
  /**
   * Cambio de tema
   */

  // Obtener el boton 'Cambiar tema'
  let botonSwich = document.getElementById("swich-theme");

  // Funcion que cambia el tema
  function cambioTheme() {
    let body = document.getElementById("body");
    let claseActual = body.className;
    if (claseActual === "light-mood") {
      body.className = "dark-mood";
    } else {
      body.className = "light-mood";
    }
  }
  // Le asigno la funcion cambioTheme al click del boton
  botonSwich.onclick = function (e) {
    e.preventDefault();
    cambioTheme();
  };
};
