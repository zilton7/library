let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.already_read = function () {
    if (read == true) {
      return "already read";
    } else {
      return "not read yet";
    }
  };
  this.info = function () {
    console.log(
      `${title} by ${author}, ${pages} pages, ${this.already_read()}`
    );
  };
}

function addBookToLibrary(obj) {
  library.push(obj);
}

const book1 = new Book("Whatever", "Johnny Johnson", 300, true);
const book2 = new Book("Other Book", "Johnny Johnson", 400, false);

addBookToLibrary(book1);
addBookToLibrary(book2);

function index() {
  let table = document.getElementById("book-table");

  library.forEach((book) => {
    let book_data = `<tr><td>${book.title}</td><td>${book.author}</td><td>${
      book.pages
    }</td><td>${book.already_read()}</td></tr>`;
    table.innerHTML += book_data;
  });
}

index();
