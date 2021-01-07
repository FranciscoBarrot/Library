let myLibrary = []
const addBtn = document.querySelector('.addBookBtn')
const cardsContainer = document.querySelector('.display-container')

addBtn.addEventListener('click', openAndClose)

function openAndClose() {
  document.querySelector('.popup').classList.toggle('show')
  addBtn.classList.toggle('default')
  addBtn.classList.toggle('clicked')
}

/* FORM  */
const form = document.getElementById('form')
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const read = document.getElementById('read')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  addBookToLibrary(title.value, author.value, pages.value, read.value)
  displayCards()
  openAndClose()
  form.reset()
})

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
function addBookToLibrary(title, author, pages, readed) {
  const oneBook = new Book(title, author, pages, readed)
  myLibrary.push(oneBook)
}

/* displays */
function displayCards() {
  cardsContainer.textContent = ''
  myLibrary.forEach((book) => {
    const card = document.createElement('div')
    const cardTitle = document.createElement('h2')
    const cardAuthor = document.createElement('h2')
    const cardPages = document.createElement('h2')
    const cardReaded = document.createElement('h2')

    cardTitle.textContent = book.title
    cardAuthor.textContent = book.author
    cardPages.textContent = book.pages
    cardReaded.textContent = book.read

    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(cardReaded)

    /* buttons */
    const deleteBtn = document.createElement('div')
    const changeBtn = document.createElement('div')

    deleteBtn.classList.add('deleteBtn')
    changeBtn.classList.add('changeBtn')

    deleteBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf())
      displayCards()
    })

    card.appendChild(deleteBtn)
    card.appendChild(changeBtn)

    card.classList.add('card')
    cardsContainer.appendChild(card)
  })
}
