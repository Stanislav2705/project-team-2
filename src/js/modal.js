import { searchMovieById } from './fetch-film';
import { createModalMarkup } from './create-modal-markup';
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    card: document.querySelector('.card'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    if (!refs.modal.classList.contains('is-hidden')) {
      refs.modal.classList.toggle('is-hidden');
      return;
    };

    refs.modal.classList.toggle('is-hidden');
    refs.card.innerHTML = '';
    
    const id = e.target.dataset.id;
    createModal(id);
    };

    async function createModal(id) {
      const movie = await searchMovieById(id);
      console.log(movie)
      refs.card.innerHTML = createModalMarkup(movie);
  }

})();

export { toggleModal };
