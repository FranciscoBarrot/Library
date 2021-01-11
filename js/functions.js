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
  myLibrary.forEach((book, index) => {
    const card = document.createElement('tr')

    if (index === 0) {
      const cardTitle = document.createElement('th')
      const cardAuthor = document.createElement('th')
      const cardPages = document.createElement('th')
      const cardReaded = document.createElement('th')
    } else {
      const cardTitle = document.createElement('td')
      const cardAuthor = document.createElement('td')
      const cardPages = document.createElement('td')
      const cardReaded = document.createElement('td')

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
