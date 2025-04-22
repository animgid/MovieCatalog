function createAnimeCard(anime) {
  return `
    <div class="anime-card">
      <div class="anime-poster-container">
        <img src="${anime.poster}" alt="${anime.title}" class="anime-poster">
        <div class="rating-badge">${anime.rating}</div>
      </div>
      <div class="anime-info">
        <h3 class="anime-title">${anime.title}</h3>
        <p class="anime-meta">${anime.year} • ${anime.genres.join(', ')}</p>
        <div class="anime-actions">
          <a href="/anime/${anime.id}" class="btn-details">
            Подробнее <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Заполнение сетки карточками
document.addEventListener('DOMContentLoaded', () => {
  const animesGrid = document.getElementById('animes-grid');

  // Загрузка данных с сервера
  fetch('/api/anime')
    .then(response => response.json())
    .then(data => {
      data.forEach(anime => {
        animesGrid.innerHTML += createAnimeCard(anime);
      });
    })
    .catch(error => console.error('Error loading anime:', error));
});