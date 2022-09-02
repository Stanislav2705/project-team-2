import { headerHomeRefs, mainRefs, headerLibraryRefs } from './refs';
import { fetchMovie, fetchGenre, searchMovieByKey } from './fetch-film';
import { createGenres } from './create-genres';
import { createWachedMoviesList } from './create-library-wathced-list';
import { generateContentGallery } from './markup-list';
import { Notify } from 'notiflix';

if (mainRefs.galleryList.id === 'home') {
  createGallaryHome();
  headerHomeRefs.searchFofrm.addEventListener('submit', searchMovies);
}
if (mainRefs.galleryList.id === 'library') {
  createWachedMoviesList();
  headerLibraryRefs.watchedBtn.addEventListener('click', onClickBtnWached);
  // headerLibraryRefs.queueBtn.addEventListener('click', onClickBtnWached);
}

async function searchMovies(e) {
  e.preventDefault();
  console.log(isCard);
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

function onClickBtnWached() {
  createWachedMoviesList();
  headerLibraryRefs.watchedBtn.setAttribute('disabled', 'disabled');
}
