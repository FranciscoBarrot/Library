let myLibrary = []
const addBtn = document.querySelector('.addBookBtn')
const submitBtn = document.querySelector('#submit-btn')
const cardsContainer = document.querySelector('.display-container')

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

Book.prototype.info = function () {
  let str
  if (read) {
    str = ' Already read'
  } else {
    str = ' Not read yet'
  }
  return title + ' by ' + author + ', ' + pages + ' pages,' + str
}

/* FUNCTIONS */
function addCliked(e) {}

function addBookToLibrary(title, author, pages, readed) {
  const oneBook = new Book(title, author, pages, readed)
  myLibrary.push(oneBook)
}

function display() {
  myLibrary.forEach()
}

/* displays */
function displayCards() {
  myLibrary.forEach((book) => {
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const author = document.createElement('h2')
    const pages = document.createElement('h2')
    const readed = document.createElement('h2')

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    readed.textContent = book.read

    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
    card.appendChild(readed)

    card.classList.add('card')
    cardsContainer.appendChild(card)
  })
}
addBookToLibrary('hola', 'german', 1000, true)
addBookToLibrary('hola', 'german', 1000, true)

displayCards()
