import { cardsContainer } from './variables.js';
import { arrBooks } from './storage.js';

const displayBook = () => {
  const displayBook = arrBooks.map(
    (item) => `
          <tr id="tr${item.id}" class="trIndex">
          <td class="text-start"><span>"${item.title}"  By  ${item.author}</span></td>
          <td class="text-end"><button class="btn btn-secondary remove " data-id="${item.id}">remove</button></td>
        </tr>`,
  );
  cardsContainer.innerHTML = displayBook.join(' ');
};
export { displayBook };
