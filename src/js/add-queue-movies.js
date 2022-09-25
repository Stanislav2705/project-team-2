import { searchMovieById } from './fetch-film';
import { toggleModal } from './modal';
import { Notify } from 'notiflix';

export const LOCAL_QUEUE = 'queue';

const movieDataQueue = localStorage.getItem(LOCAL_QUEUE)
  ? JSON.parse(localStorage.getItem(LOCAL_QUEUE))
  : [];

export async function handleAddQueueMovies({ target }) {
  try {
    const movie = await searchMovieById(target.id);
    movieDataQueue.push(movie);

    const localValue = JSON.parse(localStorage.getItem(LOCAL_QUEUE));
    if (localValue === null) {
      localStorage.setItem(LOCAL_QUEUE, JSON.stringify(movieDataQueue));
      Notify.success('Movie added to queue');
      toggleModal();
      return;
    }
    if (localValue.some(el => el.id === movie.id)) {
      Notify.failure('The movie has already been added to the library');
      toggleModal();
      return;
    }
    localStorage.setItem(LOCAL_QUEUE, JSON.stringify(movieDataQueue));
    Notify.success('Movie added to queue');
    toggleModal();
  } catch (error) {
    console.log(error);
  }
}


