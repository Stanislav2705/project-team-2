// import axios from 'axios';
// import { generateContentGallery } from '../js/markup-list';
// import { fetchMovie } from './fetch-film';
// import { fetchMovie, fetchGenre, searchMovieByKey } from '../js/fetch-film';
// import { PAGE_SIZE,currentPage } from '../js/fetch-film';

// const paginationNumbers = document.getElementById('pagination-numbers');
// const paginatedList = document.getElementById('home');
// const listItems = paginatedList.querySelectorAll('paginated-list');
// const nextButton = document.getElementById('next-button');
// const prevButton = document.getElementById('prev-button');

// export let PAGE_SIZE = 20;
// const pageCount = PAGE_SIZE / 4;
// export let currentPage = 2;

// const disableButton = button => {
//   button.classList.add('disabled');
//   button.setAttribute('disabled', true);
// };

// const enableButton = button => {
//   button.classList.remove('disabled');
//   button.removeAttribute('disabled');
// };

// const handlePageButtonsStatus = () => {
//   if (currentPage === 1) {
//     disableButton(prevButton);
//   } else {
//     enableButton(prevButton);
//   }

//   if (pageCount === currentPage) {
//     disableButton(nextButton);
//   } else {
//     enableButton(nextButton);
//   }
// };

// const handleActivePageNumber = () => {
//   document.querySelectorAll('.pagination-number').forEach(button => {
//     button.classList.remove('active');

//     const pageIndex = Number(button.getAttribute('page-index'));
//     if (pageIndex === currentPage) {
//       button.classList.add('active');
//     }
//   });
// };

// const appendPageNumber = index => {
//   const pageNumber = document.createElement('button');
//   pageNumber.className = 'pagination-number';
//   pageNumber.innerHTML = index;
//   pageNumber.setAttribute('page-index', index);
//   pageNumber.setAttribute('aria-label', 'Page ' + index);

//   paginationNumbers.appendChild(pageNumber);
// };

// const getPaginationNumbers = () => {
//   for (let i = 1; i <= pageCount; i++) {
//     appendPageNumber(i);
//   }
// };

// const setCurrentPage = pageNum => {
//   currentPage = pageNum;

//   handleActivePageNumber();
//   handlePageButtonsStatus();

//   const prevRange = (pageNum - 1) * PAGE_SIZE;
//   const currRange = pageNum * PAGE_SIZE;

//   listItems.forEach((item, index) => {
//     item.classList.add('hidden');
//     if (index >= prevRange && index < currRange) {
//       item.classList.remove('hidden');
//     }
//   });
// };

// window.addEventListener('load', paginationList());

// export function paginationList() {
//   getPaginationNumbers();
//   setCurrentPage(1);

//   prevButton.addEventListener('click', () => {
//     setCurrentPage(currentPage - 1);
//   });

//   nextButton.addEventListener('click', () => {
//     setCurrentPage(currentPage + 1);
//     fetchMovie();
//   });

//   document.querySelectorAll('.pagination-number').forEach(button => {
//     const pageIndex = Number(button.getAttribute('page-index'));

//     if (pageIndex) {
//       button.addEventListener('click', () => {
//         setCurrentPage(pageIndex);
//       });
//     }
//   });
// }
