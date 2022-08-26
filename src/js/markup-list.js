function createGallary({
  poster_path,
  original_title,
  title,
  genre_ids,
  vote_average,
  release_date,
}) {
  const genre = Object.keys(genre_ids).join(',');
  const markup = `<li class="section-gallery__item">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" width="280" class="section-gallery__item__img">
          <h2 class="section-gallery__item__title">${title}</h2>
          <p class="section-gallery__item__description">Drama, Action | ${release_date} <span class="number">${vote_average}</span></p>
        </li>`;
  return markup;
}

function generateContentGallery(data) {
  return data.reduce((acc, item) => acc + createGallary(item), '');
}

export { generateContentGallery };
