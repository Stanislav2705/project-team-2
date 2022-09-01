import { searchMovieById } from './fetch-film'
import { toggleModal } from './modal';
import { Notify } from 'notiflix';

export const LOCAL_WATCHED = 'watched';

const movieDataWatched = localStorage.getItem(LOCAL_WATCHED)
  ? JSON.parse(localStorage.getItem(LOCAL_WATCHED))
    : [];

export async function handleAddWatchedMovies({ target }) {
    try {
        const movie = await searchMovieById(target.id);
        movieDataWatched.push(movie);
    
        const localValue = JSON.parse(localStorage.getItem(LOCAL_WATCHED)); 
        if (localValue === null) {
            localStorage.setItem(LOCAL_WATCHED, JSON.stringify(movieDataWatched));
            Notify.success('Movie added to watched');
            toggleModal();
            return;
        };
        if (localValue.some(el => el.id === movie.id)) {
            Notify.failure(
            'The movie has already been added to the library'
            );
            toggleModal();
            return;
        };
        localStorage.setItem(LOCAL_WATCHED, JSON.stringify(movieDataWatched));
        Notify.success('Movie added to watched');
        toggleModal();
    } catch (error) {
        console.log(error);
    };
};