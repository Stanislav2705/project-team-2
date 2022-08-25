import { mainRefs } from "./refs";
import {
    fetchFilm,
    fetchGenre
} from "./fetch-film";
import { generateContentGallery } from "./markup-list";
createGallaryHome()

export function createGallaryHome() {
    fetchFilm()
        .then(data => {
        const markup = generateContentGallery(data.results);
        mainRefs.galleryList.innerHTML = markup;
        })
        .catch(error => {
        console.log(error)
    })
}
