import axios from 'axios';
import { generateContentGallery } from '../js/markup-list';
import { fetchMovie, fetchGenre, searchMovieByKey } from '../js/fetch-film';
// let PAGE_SIZE = 20;
// let currentPage = 1;
// let pageCount = 20;
// let start = 1;
// let end = 5;
// const paginat = document.querySelector('#pagination-container');
// const container = document.querySelector('#data-container');

const ulTag = document.querySelector('.pagination__list');
// const liactive = document.querySelector('.active');
// const leftBtn = document.querySelector('.left');
// const rightBtn = document.querySelector('.right');
// let allPage = 15;
// let page = 2;

export function elem(allPage, page) {
  let liTag = '';
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;

  // let beforePages = page - 1;
  // let afterPages = page + 1;
  // let liActive;

  // function add() {
  //   leftBtn.addEventListener('click', elem(allPage, beforePages));
  // }
  // console.log(add());

  if (page > 1) {
    liTag += `<li class="pagination__item icon-btn left button">
        	<svg class="icon-arrow-left" width="25" height="25">
            <use href="./images/symbol-defs.svg#icon-arrow-left"></use>
          </svg>
        </li>`;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (page === pageLength) {
      activeLi = 'active';
    } else {
      activeLi = '';
    }
    liTag += `<li class="pagination__item ${activeLi} numb">${pageLength}</li>`;
  }

  if (page < allPage) {
    liTag += `<li class="pagination__item icon-btn right button">
          <svg class="icon-arrow-right" width="25" height="25">
            <use href="./images/symbol-defs.svg#icon-arrow-right"></use>
          </svg>
        </li>`;
  }

  ulTag.innerHTML = liTag;

  // for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
  //   if (pageLength > allPage) {
  //     continue;
  //   }
  //   if (pageLength === 0) {
  //     pageLength = pageLength + 1;
  //   }
  //   if (page === pageLength) {
  //     liActive = 'active';
  //   } else {
  //     liActive = '';
  //   }
  //   li += `<li class="pagination__item numb ${liActive}">${pageLength}</li>`;

  //   // onclick="elem(allPage,${pageLength}
  // }

  // if (page < allPage) {
  //   // onclick="elem(allPage,${
  //   //   page + 1
  //   // })"

  //   li += `<li class="pagination__item icon-btn right button">
  //         &#10097;
  //       </li>`;
  // }

  // ul.innerHTML = li;
}

elem(20, 5);
