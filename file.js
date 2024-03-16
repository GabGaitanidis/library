const display = document.querySelector('.display')
const btn = document.getElementById('btn')

function Book(name, auhtor, pages){
  this.name = name
  this.auhtor = auhtor
  this.pages = pages
}

function addBookToLibrary(){
  let newBook = new Book()

  let title = document.getElementById('title')
  let auhtor = document.getElementById('auhtor')
  let page = document.getElementById('pages')

  page.pages = page.value
  title.name = title.value
  auhtor.auhtor = auhtor.value

  let book = document.createElement('div')
  
  book.classList.add('book')
  
  display.appendChild(book)
  
  
  
  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  let div3 = document.createElement('div')

  
  div1.textContent = `Title: ${title.name}`
  book.appendChild(div1)
  div1.classList.add('title')
  div2.textContent = `Auhtor: ${auhtor.auhtor}`
  div2.classList.add('author')
  book.appendChild(div2)
  div3.textContent = `${page.pages} pages`
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
}
 
btn.addEventListener('click', () =>{
  addBookToLibrary()
})
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".button");
const closeButton = document.querySelector("dialog button");

function getRandomNumbers(num) {
  return Math.floor(Math.random() * (num ));
}

function rgbNumber(item) {
  const randomNums = "rgb(" + getRandomNumbers(255) + "," + getRandomNumbers(255) + "," + getRandomNumbers(255) + ")";
  item.style.backgroundColor = randomNums;
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
