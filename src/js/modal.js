import { searchMovieById } from './fetch-film';
import { createModalMarkup } from './create-modal-markup';
import { handleAddWatchedMovies } from './add-watchet-movies';
  const refsModal = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    card: document.querySelector('.card'),
    li: document.querySelector('.section-gallery__item'),
  };

  refsModal.openModalBtn.addEventListener('click', toggleModal);
  refsModal.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    if (!refsModal.modal.classList.contains('is-hidden')) {
      refsModal.modal.classList.toggle('is-hidden');

      return;
    }

    // if (!isSwatchEl) {
    //   return;
    // }


    refsModal.modal.classList.toggle('is-hidden');
    refsModal.card.innerHTML = '';
    
    const id = e.target.id;
    createModal(id);
    };

    async function createModal(id) {
      const movie = await searchMovieById(id);
      refsModal.card.innerHTML = createModalMarkup(id, movie);
      addBtnWatched(id);
  }

  function addBtnWatched() {
    const watchedBtnRef = document.querySelector('.add-watched-btn-js');
    watchedBtnRef.addEventListener('click', handleAddWatchedMovies)
  }



export { toggleModal };
