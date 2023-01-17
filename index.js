/* eslint-disable import/extensions */

import Storage, {
  Card,
  arrBooks,
  bookTitle,
  bookAuthor,
} from './modules/storage.js';
import Books from './modules/books.js';
import { DateTime } from './modules/luxon.js';
/* eslint-disable no-unused-vars */
const bodyCont = document.body;
const form = document.querySelector('#form');
const tableContainer = document.querySelector('.cards');
const warningLabel = document.querySelector('.warningLabel');
const navbar = document.querySelector('.navbar-nav');
const booksList = document.querySelector('.books-list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const navlist = document.querySelector('.navlist');
const navadd = document.querySelector('.navadd');
const navcontact = document.querySelector('.navcontact');

const d = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);

document.querySelector('.date-display').innerHTML = d;

let id = arrBooks.length;
/* eslint-disable no-plusplus */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (bookTitle.value === '' || bookAuthor.value === '') {
    warningLabel.classList.remove('d-none');
  } else {
    warningLabel.classList.add('d-none');

    const book = new Books(id++, bookTitle.value, bookAuthor.value);
    // id += 1;

    arrBooks.push(book);
    Card.displayBook();

    Card.clearInputs();
    Card.removeBook();

    Storage.addTodStorage(arrBooks);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  Card.displayBook();
  // remove from the dom
  Card.removeBook();
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
