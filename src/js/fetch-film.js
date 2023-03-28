import axios from 'axios';
import { currentPage, PAGE_SIZE } from './pagination';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'cb5d99917b11063d4e60e6f353e2f3b8';
// export const PAGE_SIZE = 20;
// export let currentPage = 1;

export async function fetchMovie() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&language=uk&per_page=${PAGE_SIZE}&page=${currentPage}`
    );
    currentPage += 1;
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
console.log(fetchMovie());

export async function searchMovieByKey(searchKey) {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${KEY}&language=uk&query=${searchKey}`
    );
    return response.data;
  } catch (error) {
    console.log(searchKey);
    console.log(error);
  }
}

export async function fetchGenre() {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${KEY}&language=uk`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovieById(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${KEY}&language=uk`
  );
  return response.data;
}
