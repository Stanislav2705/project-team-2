import { searchMovieById } from './fetch-film';
import { createModalMarkup } from './create-modal-markup';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    card: document.querySelector('.card'),
    li: document.querySelector('.section-gallery__item'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    // const isSwatchEl = e.target.classList.contains('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      refs.modal.classList.toggle('is-hidden');
      return;
    }

    // if (!isSwatchEl) {
    //   return;
    // }

    refs.modal.classList.toggle('is-hidden');
    refs.card.innerHTML = '';

    const id = e.target.id;
    createModal(id);
  }

  async function createModal(id) {
    const movie = await searchMovieById(id);
    refs.card.innerHTML = createModalMarkup(movie);
  }
})();

export { toggleModal };
