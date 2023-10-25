let bookList = document.querySelector('#table');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pageInput = document.querySelector('#pages');
let stateInput = document.querySelector('#status');
let addBookBtn = document.querySelector('#submitBtn');

let bookItem;
let bookTitle;
let bookAuthor;
let bookPages;
let bookState;
let btnCol;
let delBtn, editBtn;

const myLibrary = [];

function Book (title, name, pages, state) {
    this.title = title;
    this.author = name;
    this.pages = pages;
    this.state = state;
}

Book.prototype.toggle = function () {
    if (this.state === 'Read') {
        return this.state = 'Not read';
    }
    else {
        return this.state = 'Read';
    }
}

function addToLibrary (title, name, pages, status){
    let book = new Book(title, name, pages, status);
    myLibrary.push(book);

    clearBookList();
    demonstrate();
}

function demonstrate () {
    for (let i = 0; i < myLibrary.length; i++) {
        bookItem = document.createElement('tr');

        bookTitle = document.createElement('td');
        bookTitle.textContent = myLibrary[i].title;

        bookAuthor = document.createElement('td');
        bookAuthor.textContent = myLibrary[i].author;

        bookPages = document.createElement('td');
        bookPages.textContent = myLibrary[i].pages;

        bookState = document.createElement('td');
        bookState.textContent = myLibrary[i].state;

        btnCol = document.createElement('td');

        delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.setAttribute('data-del-ind', i);
        delBtn.addEventListener('click', deleteBook);
        
        editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.setAttribute('data-edit-ind', i);
        editBtn.addEventListener('click', togglee);

        btnCol.appendChild(delBtn);
        btnCol.appendChild(editBtn);

        bookList.appendChild(bookItem);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookAuthor);
        bookItem.appendChild(bookPages);
        bookItem.appendChild(bookState);
        bookItem.appendChild(btnCol);
    }

    for (let i = 1; i < bookItem.childElementCount; i++) {
        child
    }
}

function clearBookList () {
    while (bookList.childElementCount > 1) {
        bookList.removeChild(bookList.lastChild);
    }
}

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (titleInput.value == '' || authorInput.value == '' || pageInput.value == '' || stateInput.value == ''){
        alert("Fill the inputs, please!");
    }
    else {
        let title = titleInput.value;
        let author = authorInput.value;
        let pages = pageInput.value;
        let state = stateInput.value;

        addToLibrary(title, author, pages, state);

        titleInput.value = '';
        authorInput.value = '';
        pageInput.value = '';
    }
})

function deleteBook (e) {
    let index = e.target.getAttribute('data-del-ind');
    for (let i = 0; i < myLibrary.length; i++){
        if (i == index) {
            myLibrary.splice(i, 1);
        }
    }

    clearBookList();
    demonstrate();
}

function togglee (e) {
    let index = e.target.getAttribute('data-edit-ind');
    for (let i = 0; i < myLibrary.length; i++) {
        if (i == index) {
            myLibrary[i].toggle();
        }
    }

    clearBookList();
    demonstrate();
}


