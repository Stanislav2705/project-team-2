import { handleAddWatchedMovies } from './add-watchet-movies';

export function createModalMarkup(id, {
    vote_average,
    vote_count,
    title,
    popularity,
    original_title,
    genres,
    poster_path,
    overview
}) {
  const genresMovies = genres.map(el => el.name).join(', ');
    const markupMovie =
        `
      <div class="film-card__picture">
        <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" width="264" class="film-card__picture_img">
      </div>
      <div class="film-card">
        <h2 class="film-card__title">${title}</h2>
        <div class="description">
          <ul class="description-left">
            <li class="description__film">
              <p class="description__parameter">Vote / Votes</p>
            </li>
            <li class="description__film">
              <p class="description__parameter">Popularity</p>
            </li>
            <li class="description__film">
              <p class="description__parameter">Original Title</p>
            </li>
            <li class="description__film">
              <p class="description__parameter">Genre</p>
            </li>
          </ul>
          <ul class="description-right">
            <li class="description__film">
              <p class="description__value"><span class="number">${vote_average.toFixed(1)}</span> / ${vote_count}</p>
            </li>
            <li class="description__film">
              <p class="description__value">${popularity.toFixed(1)}</p>
            </li>
            <li class="description__film">
              <p class="description__value">${original_title}</p>
            </li>
            <li class="description__film">
              <p class="description__value">${genresMovies}</p>
            </li>
          </ul>
        </div>
        <h3 class="film-card__about">About</h3>
        <p class="about__film">${overview}</p>

        <div class="film-card__buttons">
        
          <button type="submit" id='${id}' class="modal-btn add-watched-btn-js">add to watched</button>
          <button type="submit" id='${id}' class="modal-btn add-queue-btn-js">add to queue</button>
        </div>`;
    return markupMovie;
}