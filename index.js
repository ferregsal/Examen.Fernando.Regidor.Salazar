document.addEventListener('DOMContentLoaded', function () {
  const ratingButtons = document.querySelectorAll('.rating-button');
  let selectedRating = null;

  ratingButtons.forEach((button) => {
    button.addEventListener('click', function () {
      ratingButtons.forEach((button) => button.classList.remove('active'));
      this.classList.add('active');
      selectedRating = this.getAttribute('value-rating');
      if (selectedRating) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = 'hsl(25, 97%, 53%)';
      }
    });
  });

  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', function () {
    if (selectedRating) {
      // Oculta el formulario de comentarios
      document.getElementById('card-body').style.display = 'none';
      // Mostrar la pantalla de confirmación
      document.getElementById('confirmation').style.display = 'block';
      // Actualizar la calificación seleccionada
      document.getElementById('selected-rating').textContent = selectedRating;
    } else {
      alert('Por favor, selecciona una valoración antes de enviar.');
    }
  });
});
