/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */

import {
  first, second, third, body0, bodyT, bodyS,
} from './modules/pageOutline.js';
import UI from './modules/classUI.js';
import Book from './modules/classBooks.js';
import date from './modules/dateTime.js';

first.addEventListener('click', () => {
  body0.style.display = 'block';
  bodyT.style.display = 'none';
  bodyS.style.display = 'none';
});

second.addEventListener('click', () => {
  body0.style.display = 'none';
  bodyT.style.display = 'block';
  bodyS.style.display = 'none';
});

third.addEventListener('click', () => {
  body0.style.display = 'none';
  bodyT.style.display = 'none';
  bodyS.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', UI.displayBooks);

date();

// add books

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // instantiate book
  const book = new Book(title, author);

  // add book to list
  UI.addBookToList(book);

  // clear fields
  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});
