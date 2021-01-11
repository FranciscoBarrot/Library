let myLibrary = []
const addBtn = document.querySelector('.addBookBtn')
const cardsContainer = document.querySelector('.display.container')

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

/* FUNCTIONS */
function addBookToLibrary(title, author, pages, readed) {
  const oneBook = new Book(title, author, pages, readed)
  myLibrary.push(oneBook)
}

/* displays */
function displayCards() {
  /* cardsContainer.innerHTML = */
  myLibrary.forEach((book, index) => {
    const card = document.createElement('tr')

    if (index === 0) {
      tableHeader()
    }
    const cardTitle = document.createElement('td')
    const cardAuthor = document.createElement('td')
    const cardPages = document.createElement('td')
    const cardReaded = document.createElement('td')

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

    card.dataset.index = index
    /* card.classList.add('card') */
    if (index === myLibrary.length - 1) {
      card.classList.add('last-card')
    }
    cardsContainer.appendChild(card)
  })
}

function tableHeader() {}
