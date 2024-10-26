document
  .getElementById("pet-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    const petName = document.getElementById("pet-name").value;
    const petType = document.getElementById("pet-type").value;
    const petAge = document.getElementById("pet-age").value;

    // Mensaje de confirmación
    document.getElementById(
      "message"
    ).innerText = `¡Mascota ${petName} registrada exitosamente!`;

    // Limpiar el formulario
    this.reset();
  });
