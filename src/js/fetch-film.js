import axios from 'axios';
import { createGallaryHome } from './create-gallary';
import { mainRefs } from './refs';
// import { currentPage, PAGE_SIZE } from './pagination';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'cb5d99917b11063d4e60e6f353e2f3b8';
// export const PAGE_SIZE = 20;
// export let currentPage = 1;
const PAGE_SIZE = 20;
const pageCount = PAGE_SIZE / 4;
let currentPage = 1;

const paginationNumbers = document.getElementById('pagination-numbers');
const paginatedList = document.getElementById(mainRefs.galleryList.id);
const listItems = paginatedList.querySelectorAll('paginated-list');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

export async function fetchMovie() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}&language=uk&per_page=${PAGE_SIZE}&page=${currentPage}`
    );
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

const disableButton = button => {
  button.classList.add('disabled');
  button.setAttribute('disabled', true);
};

const enableButton = button => {
  button.classList.remove('disabled');
  button.removeAttribute('disabled');
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll('.pagination-number').forEach(button => {
    button.classList.remove('active');

    const pageIndex = Number(button.getAttribute('page-index'));
    if (pageIndex === currentPage) {
      button.classList.add('active');
    }
  });
};

const appendPageNumber = index => {
  const pageNumber = document.createElement('button');
  pageNumber.className = 'pagination-number';
  pageNumber.innerHTML = index;
  pageNumber.setAttribute('page-index', index);
  pageNumber.setAttribute('aria-label', 'Page ' + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  // const pageIndex = pageCount * indexPage;
  // let b = 1;
  // if (pageIndex >= 5) {
  //   b = 5;
  // }
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = pageNum => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();

  const prevRange = (pageNum - 1) * PAGE_SIZE;
  const currRange = pageNum * PAGE_SIZE;

  listItems.forEach((item, index) => {
    item.classList.add('hidden');
    if (index >= prevRange && index < currRange) {
      item.classList.remove('hidden');
    }
  });
  console.log(currentPage);
  console.log(fetchMovie());
  createGallaryHome();
  window.scrollTo(0, 0);
};

// window.addEventListener('load', paginationList());

export async function paginationList() {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener('click', () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener('click', () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll('.pagination-number').forEach(button => {
    const pageIndex = Number(button.getAttribute('page-index'));

    if (pageIndex) {
      button.addEventListener('click', () => {
        setCurrentPage(pageIndex);
      });
    }
  });
}
