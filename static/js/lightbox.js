document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos todas las imágenes que queremos que abran en pantalla grande
  const images = document.querySelectorAll('.cv-item');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  
  // Creamos la imagen en pantalla grande
  const img = document.createElement('img');
  lightbox.appendChild(img);
  
  // Botón de cerrar
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;'; // Icono de cerrar
  closeButton.classList.add('lightbox-close');
  lightbox.appendChild(closeButton);
  
  document.body.appendChild(lightbox);
  
  images.forEach(image => {
    image.addEventListener('click', () => {
      img.src = image.getAttribute('data-image'); // Asignamos la imagen al lightbox
      lightbox.style.display = 'flex'; // Mostramos el lightbox
    });
  });

  // Cerrar el lightbox al hacer clic en el botón de cerrar o en el fondo
  closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) { // Solo cerramos si se hace clic fuera de la imagen
      lightbox.style.display = 'none';
    }
  });
});
