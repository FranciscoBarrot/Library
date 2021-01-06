let myLibrary = []
const addBtn = document.querySelector('.addBookBtn')
const submitBtn = document.querySelector('#submit-btn')

addBtn.addEventListener('click', () => {
  document.querySelector('.popup').classList.toggle('show')
  addBtn.classList.toggle('default')
  addBtn.classList.toggle('clicked')
})

submitBtn.addEventListener('click', (e) => {})

/* CONSTRUCTOR */
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    let str
    if (read) {
      str = ' already read'
    } else {
      str = ' not read yet'
    }
    return title + ' by ' + author + ', ' + pages + ' pages,' + str
  }
}

Book.prototype.getPages = function () {
  return this.pages
}

const book1 = new Book('Brave New World', 'Aldous Huxley', 200, false)

console.log(book1)

/* FUNCTIONS */
function addCliked(e) {}

function addBookToLibrary(title, author, pages, readed) {
  const oneBook = new Book(title, author, pages, readed)
  myLibrary.push(oneBook)
}

function display() {
  myLibrary.forEach()
}
