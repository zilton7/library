const newBookButton = document.querySelector('#new-book');
const newButtonForm = document.querySelector('.hidden-form');

newBookButton.addEventListener('click', () => {
  newButtonForm.classList.toggle('ninja');
});

let library = [];
if (localStorage.getItem('library') !== null) {
  library = JSON.parse(window.localStorage.getItem('library'));
}

function saveToLocalStorage() {
  window.localStorage.setItem('library', JSON.stringify(library));
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, ${this.read}`);
  };
}

function addBookToLibrary(obj) {
  library.push(obj);
}

function index() {
  const table = document.getElementById('book-table');
  table.innerHTML = '<tr><th> Title</th ><th>Author</th><th>Pages</th><th>Read?</th><th>Remove Book</th></tr>';
  let iter = 0;
  library.forEach((book) => {
    const bookData = `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td><a href="#" onclick="changeStatus(${iter});">${book.read}</a></td><th><a onclick="removeBook(${iter});" href="#" class="remove-button color-red">X</a></th></tr>`;
    table.innerHTML += bookData;
    iter += 1;
  });

  saveToLocalStorage();
}

/* eslint-disable */
function removeBook(bookID) {
  library.splice(bookID, 1);
  index();
}

function changeStatus(bookID) {
  const book = library[bookID];
  console.log(book);
  if (book.read) {
    book.read = false;
  } else {
    book.read = true;
  }

  index();
}

/* eslint-enable */

index();

document
  .getElementById('submit-button')
  .addEventListener('click', () => {
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newNumPages = document.getElementById('num_pages').value;
    const newCheckbox = document.getElementById('read').checked;

    const newBook = new Book(newTitle, newAuthor, newNumPages, newCheckbox);
    addBookToLibrary(newBook);

    console.log(newBook);

    index();
  });
