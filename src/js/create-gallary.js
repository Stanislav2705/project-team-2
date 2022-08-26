import { mainRefs } from "./refs";
import {
    fetchFilm,
    fetchGenre
} from "./fetch-film";
import { generateContentGallery } from "./markup-list";
createGallaryHome()

export async function createGallaryHome() {
    const genres = await fetchGenre();
    const films = await fetchFilm();
    const genreMap = {};
    for (const genre of genres.genres) {
        genreMap[genre.id] = genre.name;
    }
    const res = films.results.map(el => {
        el.genre = el.genre_ids.map(item => genreMap[item]);
        return el
    })
    const markup = generateContentGallery(res);
    mainRefs.galleryList.innerHTML = markup;
}
