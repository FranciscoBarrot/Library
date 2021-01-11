let myLibrary = []

addBookToLibrary('Title', 'Author', 'Pages', 'Status') //Header of table

const addBtn = document.querySelector('.addBookBtn')
const cardsContainer = document.querySelector('.display-table')
displayCards()

addBtn.addEventListener('click', openAndClose)

/* BOOK */
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

Book.prototype.change = function () {
  this.read = !this.read
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

/* FUNCTIONS */
function openAndClose() {
  document.querySelector('.popup').classList.toggle('show')
  addBtn.classList.toggle('default')
  addBtn.classList.toggle('clicked')
}

function addBookToLibrary(title, author, pages, readed) {
  const oneBook = new Book(title, author, pages, readed)
  myLibrary.push(oneBook)
}

function displayCards() {
  cardsContainer.innerHTML = ''
  myLibrary.forEach((book, index) => {
    const card = document.createElement('tr')
    let cardTitle
    let cardAuthor
    let cardPages
    let cardReaded

    if (index === 0) {
      cardTitle = document.createElement('th')
      cardAuthor = document.createElement('th')
      cardPages = document.createElement('th')
      cardReaded = document.createElement('th')
      card.classList.add('categories')
    } else {
      cardTitle = document.createElement('td')
      cardAuthor = document.createElement('td')
      cardPages = document.createElement('td')
      cardReaded = document.createElement('td')

      /* buttons */
      const deleteBtn = document.createElement('div')
      const changeBtn = document.createElement('div')

      deleteBtn.classList.add('delete-btn')
      changeBtn.classList.add('change-btn')

      deleteBtn.addEventListener('click', (e) => {
        myLibrary.splice(e.target.parentNode.dataset.index, 1)
        displayCards()
      })
      deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

      changeBtn.addEventListener('click', (e) => {
        myLibrary[e.target.parentNode.dataset.index].change()
        displayCards()
      })
      changeBtn.textContent = 'Change'

      card.appendChild(changeBtn)
      card.appendChild(deleteBtn)
    }

    cardTitle.textContent = book.title
    cardAuthor.textContent = book.author
    cardPages.textContent = book.pages
    cardReaded.textContent = book.read

    card.appendChild(cardTitle)
    card.appendChild(cardAuthor)
    card.appendChild(cardPages)
    card.appendChild(cardReaded)

    card.dataset.index = index
    /* card.classList.add('card') 
    if (index === myLibrary.length - 1) {
      card.classList.add('last-card')
    }*/
    cardsContainer.appendChild(card)
  })
}
