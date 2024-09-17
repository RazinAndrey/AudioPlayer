// жанры
export const renderGenres = (genres) => {

    const selectElement = document.getElementById('genre-form');

    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre;
      option.className = 'option'
      selectElement.appendChild(option);
    });
}