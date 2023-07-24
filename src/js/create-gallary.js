import { headerHomeRefs, mainRefs, headerLibraryRefs } from './refs';
import {
  fetchMovie,
  fetchGenre,
  searchMovieByKey,
  paginationList,
} from './fetch-film';
import { createGenres } from './create-genres';
import { createWachedMoviesList } from './create-library-wathced-list';
import { createQueueMoviesList } from './create-library-queue-list';
import { generateContentGallery } from './markup-list';
import { Notify } from 'notiflix';

if (mainRefs.galleryList.id === 'home') {
  // createGallaryHome();
  headerHomeRefs.searchFofrm.addEventListener('submit', searchMovies);
  window.addEventListener('load', paginationList);
}

if (headerLibraryRefs.libraryList.id === 'home') {
  createWachedMoviesList();
  headerLibraryRefs.watchedBtn.addEventListener('click', onClickBtnWached);
  headerLibraryRefs.queueBtn.addEventListener('click', onClickBtnQueue);
}

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

function onClickBtnWached() {
  createWachedMoviesList();
  headerLibraryRefs.queueBtn.classList.remove('btn-active');
  headerLibraryRefs.watchedBtn.classList.add('btn-active');
  // headerLibraryRefs.watchedBtn.setAttribute('disabled', 'disabled');
}

function onClickBtnQueue() {
  createQueueMoviesList();
  headerLibraryRefs.watchedBtn.classList.remove('btn-active');
  headerLibraryRefs.queueBtn.classList.add('btn-active');
}
