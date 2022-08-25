import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'cb5d99917b11063d4e60e6f353e2f3b8';
const PAGE_SIZE = 20;
const currentPage = 1;

export async function fetchFilm() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&language=en&per_page=${PAGE_SIZE}&page=${currentPage}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

console.log(fetchFilm());
