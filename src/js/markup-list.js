function createGallary({
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) {
  const markup = `<li class="section-gallery__item">
          <img src="${poster_path}" alt="${original_title}" width="280" class="section-gallery__item__img">
          <h2 class="section-gallery__item__title">${title}</h2>
          <p class="section-gallery__item__description">Drama, Action | ${release_date} <span class="number">${vote_average}</span></p>
        </li>`;
  return markup;
}

function generateContentGallery(data) {
  return data.reduce((acc, item) => acc + createGallary(item), '');
}

export { generateContentGallery };
