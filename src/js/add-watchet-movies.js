import { searchMovieById } from './fetch-film'
import { toggleModal } from './modal';

const LOCAL_WATCHED = 'watched';

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
            toggleModal();
            return;
        };
        if (localValue.some(el => el.id === movie.id)) {
            toggleModal();
            return;
        };
        localStorage.setItem(LOCAL_WATCHED, JSON.stringify(movieDataWatched));
        toggleModal();
    } catch (error) {
        console.log(error);
    };
};