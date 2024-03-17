const display = document.querySelector('.display')
const btn = document.getElementById('btn')

let library = []

function Book(title, auhtor, pages){
  this.title = title
  this.auhtor = auhtor
  this.pages = pages
}

function addBookToLibrary(){
  let newBook = new Book()

  let title = document.getElementById('title')
  let auhtor = document.getElementById('auhtor')
  let page = document.getElementById('pages')

  newBook.pages = page.value
  newBook.title = title.value
  newBook.auhtor = auhtor.value

  let book = document.createElement('div')
  
  book.classList.add('book')
  
  display.appendChild(book)
  
  
  
  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  let div3 = document.createElement('div')

  
  div1.textContent = `Title: ${newBook.title}`
  book.appendChild(div1)
  div1.classList.add('title')
  div2.textContent = `Auhtor: ${newBook.auhtor}`
  div2.classList.add('author')
  book.appendChild(div2)
  div3.textContent = `${newBook.pages} pages`
  book.appendChild(div3)
  div3.classList.add('page')

  let removeBtn = document.createElement('button')
  removeBtn.classList.add('rmvBtn')
  let img = document.createElement('img')
  img.src = 'delete-custom.png'
  removeBtn.appendChild(img)
  book.appendChild(removeBtn)
  removeBtn.addEventListener('click', () =>{
    display.removeChild(book)
    library.splice([newBook], 1)
  })
  let readBtn = document.createElement('button')
  readBtn.textContent = 'Read'
  readBtn.classList.add('read-btn')
  book.appendChild(readBtn)
  readBtn.addEventListener('click', () => {
    if(readBtn.textContent == 'Read'){
      readBtn.textContent = 'Unread'
      readBtn.classList.add('read-btn-changed')
    } else if(readBtn.textContent == 'Unread'){
      readBtn.textContent = 'Read'
      readBtn.classList.remove('read-btn-changed')
    }
  })
  library.push(newBook)
  console.log(library)
}
 
btn.addEventListener('click', () =>{
  addBookToLibrary()
})
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".button");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
