// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lightbox effect for Photo Gallery
document.querySelectorAll('.gallery-photo').forEach(photo => {
  photo.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const img = document.createElement('img');
    img.src = photo.src;
    lightbox.appendChild(img);

    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});

