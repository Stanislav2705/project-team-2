import axios from 'axios';
import { generateContentGallery } from '../js/markup-list';
import { fetchMovie, fetchGenre, searchMovieByKey } from '../js/fetch-film';
let PAGE_SIZE = 20;
let currentPage = 1;

// export async function main() {
//   function displayPagination(arrData, rowPerPage) {
//     const paginationEl = document.querySelector('.pagination');
//     const pagesCount = Math.ceil(arrData.length / rowPerPage);
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('pagination__list');

//     for (let i = 0; i < pagesCount; i++) {
//       const liEl = displayPaginationBtn(i + 1);
//       ulEl.appendChild(liEl);
//     }
//     paginationEl.appendChild(ulEl);
//   }

//   function displayPaginationBtn(page) {
//     const liEl = document.createElement('li');
//     liEl.classList.add('pagination__item');
//     liEl.innerText = page;
//     return liEl;
//   }

//   displayPagination(generateContentGallery, PAGE_SIZE);
// }

const ul = document.querySelector('.pagination__list');
let allPage = 15;

export function elem(allPage, page) {
  let li = '';

  let beforePages = page - 1;
  let afterPages = page + 1;
  let liActive;

  if (page > 1) {
    li += `<li class="pagination__item icon-btn button" onclick="elem(allPage,${
      page - 1
    })">
          <svg class="icon-arrow-left" width="25" height="25">
            <use href="./images/symbol-defs.svg#icon-arrow-left"></use>
          </svg>
        </li>`;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > allPage) {
      continue;
    }
    if (pageLength === 0) {
      pageLength = pageLength + 1;
    }
    if (page === pageLength) {
      liActive = 'active';
    } else {
      liActive = '';
    }
    li += `<li class="pagination__item numb active" onclick="elem(allPage,${pageLength})>${pageLength}</li>`;
  }

  if (page < allPage) {
    li += `<li class="pagination__item icon-btn button" onclick="elem(allPage,${
      page + 1
    })>
          <svg class="icon-arrow-right" width="25" height="25">
            <use href="./images/symbol-defs.svg#icon-arrow-right"></use>
          </svg>
        </li>`;
  }

  ul.innerHTML = li;
}

elem(allPage, 2);
