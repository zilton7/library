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

addBookToLibrary(book1);

console.log(library);
