document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.cv-item');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  
  const img = document.createElement('img');
  lightbox.appendChild(img);
  
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;';
  closeButton.classList.add('lightbox-close');
  lightbox.appendChild(closeButton);
  
  document.body.appendChild(lightbox);

  images.forEach(image => {
    image.addEventListener('click', () => {
      const imageUrl = image.querySelector('img').getAttribute('data-image');
      console.log("URL de la imagen:", imageUrl); // Depuración
      if (imageUrl) {
        img.src = imageUrl;
        lightbox.style.display = 'flex';
      } else {
        console.error("No se encontró el atributo 'data-image' en la imagen seleccionada.");
      }
    });
  });

  closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
