import { headerHomeRefs, mainRefs } from './refs';
import { fetchMovie, fetchGenre, searchMovieByKey } from './fetch-film';
import { createGenres } from './create-genres';
import { generateContentGallery } from './markup-list';
import { Notify } from 'notiflix';
createGallaryHome();

headerHomeRefs.searchFofrm.addEventListener('submit', searchMovies);

async function searchMovies(e) {
  e.preventDefault();
  const searchKey = headerHomeRefs.inputSearch.value.trim();
  if (searchKey === '') {
    return;
  }
  const genres = await fetchGenre();
  const movie = await searchMovieByKey(searchKey);
  if (movie.results.length === 0) {
    Notify.failure(
      'Search result not successful. Enter the correct movie name and'
    );
    return;
  }
  if (movie.results.length > 0) {
    headerHomeRefs.inputSearch.value = '';
    const res = createGenres(genres, movie);
    const markup = generateContentGallery(res);
    mainRefs.galleryList.innerHTML = markup;
  }
}

export async function createGallaryHome() {
  const genres = await fetchGenre();
  const movies = await fetchMovie();
  const res = createGenres(genres, movies);
  const markup = generateContentGallery(res);
  mainRefs.galleryList.innerHTML = markup;
}
