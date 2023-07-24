<<<<<<< Updated upstream
function createGallary({
  poster_path,
  original_title,
  title,
  genre,
  release_date,
  id,
}) {
=======
import { mainRefs } from './refs';

function createGallary(
  { poster_path, original_title, title, genre, release_date, id },
  listItemClass
) {
>>>>>>> Stashed changes
  const categories =
    genre.length >= 2
      ? genre.slice(0, 2).join(', ') + ', Інші'
      : genre.join(', ');
  const release = release_date
    ? release_date.slice(0, 4)
    : 'Невідомо дати релізу';
  const markup = `<li class="${listItemClass}" id="${id}">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" id="${id}" width="280" class="section-gallery__item__img">
          <h2 class="section-gallery__item__title" id="${id}">${title}</h2>
          <p class="section-gallery__item__description" id="${id}">${categories} | ${release}</p>
        </li>`;
  return markup;
}

function generateContentGallery(data) {
  // return data.reduce((acc, item) => acc + createGallary(item), '');
  // Проверяем, находится ли пользователь на странице "Home" или "My Library"
  const isHome = mainRefs.galleryList.id === 'home';

  return data.reduce((acc, item) => {
    // Добавляем или удаляем класс "paginated-list" в зависимости от текущей страницы
    const listItemClass = isHome
      ? 'section-gallery__item paginated-list'
      : 'section-gallery__item';
    return acc + createGallary(item, listItemClass);
  }, '');
}

export { generateContentGallery };
