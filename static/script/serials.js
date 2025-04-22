function createSerialCard(serial) {
  return `
    <div class="serial-card">
      <div class="serial-poster-container">
        <img src="${serial.poster}" alt="${serial.title}" class="serial-poster">
        <div class="rating-badge">${serial.rating}</div>
      </div>
      <div class="serial-info">
        <h3 class="serial-title">${serial.title}</h3>
        <p class="serial-meta">${serial.year} • ${serial.genres.join(', ')}</p>
        <div class="serial-actions">
          <a href="/serials/${serial.id}" class="btn-details">
            Подробнее <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const serialsGrid = document.getElementById('serials-grid');

  fetch('/api/serials')
    .then(response => response.json())
    .then(data => {
      data.forEach(serial => {
        serialsGrid.innerHTML += createSerialCard(serial);
      });
    })
    .catch(error => console.error('Error loading serials:', error));
});