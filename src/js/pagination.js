import axios from 'axios';
import { generateContentGallery } from '../js/markup-list';
import { fetchMovie, fetchGenre, searchMovieByKey } from '../js/fetch-film';
let PAGE_SIZE = 20;
let currentPage = 1;
let pageCount = 20;
let start = 1;
let end = 5;
const paginat = document.querySelector('#pagination-container');
const container = document.querySelector('#data-container');

// const getRange = (start, end) => {
//   return fetchMovie(end - start + 1)
//     .fill(1, 5)
//     .map((v, i) => i + start);
// };
// console.log(getRange());
// const pagination = (currentPage, pageCount) => {
//   let delta = 2;
//   if (pageCount <= 7) {
//     // delta === 7: [1 2 3 4 5 6 7]
//     delta = 7;
//   } else {
//     // delta === 2: [1 ... 4 5 6 ... 10]
//     // delta === 4: [1 2 3 4 5 ... 10]
//     delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
//   }

//   const range = {
//     start: Math.round(currentPage - delta / 2),
//     end: Math.round(currentPage + delta / 2),
//   };

//   if (range.start - 1 === 1 || range.end + 1 === pageCount) {
//     range.start += 1;
//     range.end += 1;
//   }

//   let pages =
//     currentPage > delta
//       ? getRange(
//           Math.min(range.start, pageCount - delta),
//           Math.min(range.end, pageCount)
//         )
//       : getRange(1, Math.min(pageCount, delta + 1));

//   const withDots = (value, pair) =>
//     pages.length + 1 !== pageCount ? pair : [value];

//   if (pages[0] !== 1) {
//     pages = withDots(1, [1, '...']).concat(pages);
//   }

//   if (pages[pages.length - 1] < pageCount) {
//     pages = pages.concat(withDots(pageCount, ['...', pageCount]));
//   }

//   return pages;
// };

// console.log(pagination());

// export { pagination };
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
const liactive = document.querySelector('.active');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
let allPage = 15;
let page = 2;

function elem(allPage, page) {
  let li = '';

  let beforePages = page - 1;
  let afterPages = page + 1;
  let liActive;

  // function add() {
  //   leftBtn.addEventListener('click', elem(allPage, beforePages));
  // }
  // console.log(add());

  if (page > 1) {
    // onclick="elem(allPage,${
    //   page - 1
    // })"

    li += `<li class="pagination__item icon-btn left button">
        	&#10096;
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
    li += `<li class="pagination__item numb ${liActive}">${pageLength}</li>`;

    // onclick="elem(allPage,${pageLength}
  }

  if (page < allPage) {
    // onclick="elem(allPage,${
    //   page + 1
    // })"

    li += `<li class="pagination__item icon-btn right button">
          &#10097;
        </li>`;
  }

  ul.innerHTML = li;
}

export { elem };
