function createGallary({
  poster_path,
  original_title,
  title,
  genre,
  vote_average,
  release_date,
}) {
  const categories = genre.slice(0,2).join(', ') + ', Інщі'
  const markup = `<li class="section-gallery__item">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" width="280" class="section-gallery__item__img">
          <h2 class="section-gallery__item__title">${title}</h2>
          <p class="section-gallery__item__description">${categories} | ${release_date.slice(0, 4)}</p>
        </li>`;
  return markup;
}

function generateContentGallery(data) {
  return data.reduce((acc, item) => acc + createGallary(item), '');
}

export { generateContentGallery };
