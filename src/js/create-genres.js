export function createGenres(genres, movies) {
    const genreMap = {};
    for (const genre of genres.genres) {
        genreMap[genre.id] = genre.name;
    }
    const res = movies.results.map(el => {
        el.genre = el.genre_ids.map(item => genreMap[item]);
        return el
    });
    return res;
}