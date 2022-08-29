import axios from 'axios';
import { generateContentGallery } from '../js/markup-list';
import { fetchMovie, fetchGenre, searchMovieByKey } from '../js/fetch-film';
let PAGE_SIZE = 20;
let currentPage = 1;

export async function main() {
  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }

  function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = page;
    return liEl;
  }

  displayPagination(generateContentGallery, PAGE_SIZE);
}
