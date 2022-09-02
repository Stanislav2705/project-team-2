import { searchMovieById } from './fetch-film';
import { createModalMarkup } from './create-modal-markup';
import { handleAddWatchedMovies } from './add-watchet-movies';
  const refsModal = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    card: document.querySelector('.card'),
    li: document.querySelector('.section-gallery__item'),
    body: document.querySelector('body'),
  };

  refsModal.openModalBtn.addEventListener('click', toggleModal);
  refsModal.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
  if (!refsModal.modal.classList.contains('is-hidden')) {
      document.removeEventListener("keydown", onEscape)
      refsModal.modal.classList.toggle('is-hidden');
      refsModal.body.classList.toggle('fixed');
      return;
  };

  document.addEventListener("keydown", onEscape);
    refsModal.body.classList.toggle('fixed');
    refsModal.modal.classList.toggle('is-hidden');
    refsModal.card.innerHTML = '';
    
    const id = e.target.id;
    createModal(id);
};

async function createModal(id) {
    const movie = await searchMovieById(id);
    refsModal.card.innerHTML = createModalMarkup(id, movie);
    addBtnWatched(id);
};

function addBtnWatched() {
  const watchedBtnRef = document.querySelector('.add-watched-btn-js');
  watchedBtnRef.addEventListener('click', handleAddWatchedMovies)
};

function onEscape({code}) {
  if (code === 'Escape') {
    toggleModal('is-hidden');
  };
};



export { toggleModal };
