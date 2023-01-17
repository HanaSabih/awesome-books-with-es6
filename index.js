/* eslint-disable import/extensions */
import {
  form,
  warningLabel,
  booksList,
  addNew,
  contact,
  navlist,
  navadd,
  navcontact,
  bookTitle,
  bookAuthor,
} from './modules/variables.js';
import {
  addTodStorage,
  arrBooks,
  clearInputs,
  removeBook,
} from './modules/storage.js';
import Books from './modules/books.js';
import displayBook from './modules/addBook.js';

import { DateTime } from './modules/luxon.js';

const d = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
document.querySelector('.date-display').innerHTML = d;

let id = arrBooks.length;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (bookTitle.value === '' || bookAuthor.value === '') {
    warningLabel.classList.remove('d-none');
  } else {
    warningLabel.classList.add('d-none');

    const book = new Books(id, bookTitle.value, bookAuthor.value);
    id += 1;

    arrBooks.push(book);
    displayBook();
    clearInputs();
    removeBook();
    addTodStorage(arrBooks);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  displayBook();
  // remove from the dom
  removeBook();
});

navlist.onclick = () => {
  booksList.classList.remove('d-none');
  addNew.classList.add('d-none');
  contact.classList.add('d-none');
};
navadd.onclick = () => {
  booksList.classList.add('d-none');
  addNew.classList.remove('d-none');
  contact.classList.add('d-none');
};
navcontact.onclick = () => {
  booksList.classList.add('d-none');
  addNew.classList.add('d-none');
  contact.classList.remove('d-none');
};
