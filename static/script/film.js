function createFilmCard(film) {
  return `
    <div class="film-card">
      <div class="film-poster-container">
        <img src="${film.poster}" alt="${film.title}" class="film-poster">
        <div class="rating-badge">${film.rating}</div>
      </div>
      <div class="film-info">
        <h3 class="film-title">${film.title}</h3>
        <p class="film-meta">${film.year} • ${film.genres.join(', ')}</p>
        <div class="film-actions">
          <a href="/films/${film.id}" class="btn-details">
            Подробнее <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Заполнение сетки карточками
document.addEventListener('DOMContentLoaded', () => {
  const filmsGrid = document.getElementById('film-grid');

  // Загрузка данных с сервера
  fetch('/api/films')
    .then(response => response.json())
    .then(data => {
      data.forEach(film => {
        filmsGrid.innerHTML += createFilmCard(film);
      });
    })
    .catch(error => console.error('Error loading film:', error));
});

