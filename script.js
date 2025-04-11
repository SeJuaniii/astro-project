// script.js
console.log("¡Bienvenido a Astro Project, el universo te espera!");
function irASeccion(id) {
    const seccion = document.getElementById(id);
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  }
// Selecciona el botón por su ID
const toggleButton = document.getElementById("toggleBackground");
// Agrega un event listener al botón
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    // Alterna la clase 'light-mode' en el <body>
    document.body.classList.toggle("light-mode");
    console.log("Modo de fondo cambiado");
  });
} else {
  console.error("No se encontró el botón con ID 'toggleBackground'");
}  