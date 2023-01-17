/* eslint-disable max-classes-per-file */
export default class Storage {
  static addTodStorage(arrBooks) {
    const storage = localStorage.setItem('book', JSON.stringify(arrBooks));
    return storage;
  }

  static getStorage() {
    const storage = localStorage.getItem('book') === null
      ? []
      : JSON.parse(localStorage.getItem('book'));
    return storage;
  }
}
/* eslint-disable import/no-mutable-exports */

// array
let arrBooks = Storage.getStorage();
const cardsContainer = document.querySelector('#cards');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');

export class Card {
  static displayBook() {
    const displayBook = arrBooks.map(
      (item) => `
        <tr id="tr${item.id}" class="trIndex">
        <td class="text-start"><span>"${item.title}"  By  ${item.author}</span></td>
        <td class="text-end"><button class="btn btn-secondary remove " data-id="${item.id}">remove</button></td>
      </tr>`,
    );
    cardsContainer.innerHTML = displayBook.join(' ');
  }

  static clearInputs() {
    bookTitle.value = '';
    bookAuthor.value = '';
  }

  static removeBook() {
    cardsContainer.addEventListener('click', (e) => {
      const bookId = e.target.dataset.id;
      if (e.target.classList.contains('remove')) {
        document.querySelector(`#tr${bookId}`).remove();
      }

      Card.removeBookFromArr(bookId);
    });
  }

  static removeBookFromArr(id) {
    arrBooks = arrBooks.filter((item) => item.id !== +id);
    Storage.addTodStorage(arrBooks);
  }
}

export { bookTitle, bookAuthor };

export { arrBooks };
