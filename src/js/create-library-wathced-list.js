import { mainRefs } from './refs';
import { LOCAL_WATCHED } from './add-watchet-movies';
import { Notify } from 'notiflix';

export function createWachedMoviesList() {
  try {
    if (localStorage.getItem(LOCAL_WATCHED) === null) {
      Notify.failure('You have not added watched movies to your library');
      return;
    }
    const localValue = JSON.parse(localStorage.getItem(LOCAL_WATCHED));
    const markup = generateLibraryContentGallery(localValue);
    mainRefs.galleryList.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
}

function createLibraryGallary({
  poster_path,
  original_title,
  title,
  genres,
  release_date,
  id,
}) {
  const genresArray = genres.map(el => el.name);
  const genresMovies =
    genresArray.length >= 2
      ? genresArray.slice(0, 2).join(', ') + ', Інші'
      : genresArray.join(', ');
  const release = release_date
    ? release_date.slice(0, 4)
    : 'Невідомо дати релізу';
  const markup = `<li class="section-gallery__item" id="${id}">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" id="${id}" width="280" class="section-gallery__item__img">
          <h2 class="section-gallery__item__title" id="${id}">${title}</h2>
          <p class="section-gallery__item__description" id="${id}">${genresMovies} | ${release}</p>
        </li>`;
  return markup;
}

function generateLibraryContentGallery(data) {
  return data.reduce((acc, item) => acc + createLibraryGallary(item), '');
}
