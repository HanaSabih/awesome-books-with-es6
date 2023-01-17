import { cardsContainer, bookTitle, bookAuthor } from './variables.js';

const addTodStorage = (arrBooks) => {
  const storage = localStorage.setItem('book', JSON.stringify(arrBooks));
  return storage;
};

const getStorage = () => {
  const storage = localStorage.getItem('book') === null
    ? []
    : JSON.parse(localStorage.getItem('book'));
  return storage;
};

// array
let arrBooks = getStorage();

const clearInputs = () => {
  bookTitle.value = '';
  bookAuthor.value = '';
};

const removeBookFromArr = (id) => {
  arrBooks = arrBooks.filter((item) => item.id !== +id);
  addTodStorage(arrBooks);
};

const removeBook = () => {
  cardsContainer.addEventListener('click', (e) => {
    const bookId = e.target.dataset.id;
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.parentElement.remove();
    }

    removeBookFromArr(bookId);
  });
};

export {
  addTodStorage, getStorage, removeBook, arrBooks, clearInputs,
};
