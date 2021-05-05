// Show/Hide form based on button click
let new_book_button = document.querySelector("#new-book");
let newButtonForm = document.querySelector(".hidden-form");

new_book_button.addEventListener("click", () => {
  newButtonForm.classList.toggle("ninja");
});

// logic for library
let library = [];

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

const book1 = new Book("Whatever", "Johnny Johnson", 300, true);
const book2 = new Book("Other Book", "Johnny Johnson", 400, false);

addBookToLibrary(book1);
addBookToLibrary(book2);

function removeBook(book_id) {
  library.splice(book_id, 1);
  index();
}

function changeStatus(book_id) {
  let book = library[book_id];
  console.log(book);
  if (book.read) {
    book.read = false;
  } else {
    book.read = true;
  }

  index();
}

function index() {
  let table = document.getElementById("book-table");

  table.innerHTML =
    "<tr><th> Title</th ><th>Author</th><th>Pages</th><th>Read?</th><th>Remove Book</th></tr>";
  let iter = 0;
  library.forEach((book) => {
    let book_data = `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td><td><a href="#" onclick="changeStatus(${iter});">${book.read}</a></td><th><a onclick="removeBook(${iter});" href="#" class="remove-button color-red">X</a></th></tr>`;
    table.innerHTML += book_data;
    iter++;
  });
}

index();

// When button is clicked add a new book
let submit_button = document
  .getElementById("submit-button")
  .addEventListener("click", () => {
    let new_title = document.getElementById("title").value;
    let new_author = document.getElementById("author").value;
    let new_num_pages = document.getElementById("num_pages").value;
    let new_checkbox = document.getElementById("read").checked;

    let new_book = new Book(new_title, new_author, new_num_pages, new_checkbox);
    addBookToLibrary(new_book);

    console.log(new_book);

    index();
  });
