const myLibrary = [];

formOutput = document.querySelector("output");

formDialog = document.querySelector(".formDialog");
theForm = document.querySelector("#theForm");

bookName = document.querySelector("#bookName");
bookAuthor = document.querySelector("#bookAuthor");
bookPageCount = document.querySelector("#bookPageCount");


newBookButton = document.querySelector(".addBookButton");
newBookButton.addEventListener("click", () => {
    formDialog.showModal();
})


cancelFormButton = document.querySelector("#cancelFormButton");
cancelFormButton.addEventListener("click", () => {
    formDialog.close();
    theForm.reset();
})


let name = ''
let author = ''
let pageCount = ''
let id = ''

confirmFormButton = document.querySelector("#confirmFormButton");
confirmFormButton.addEventListener("click", () => {

    name = bookName.value
    author = bookAuthor.value
    pageCount = bookPageCount.value
    id = crypto.randomUUID()

    Book(name, author, pageCount, id);

    formDialog.close();
    theForm.reset();
})

function Book(name, author, pageCount, id) {
    this.name = name
    this.author = author
    this.pageCount = pageCount
    this.id = id
    addBookToLibrary();
}

myLibraryDiv = document.querySelector(".myLibrary")
function addBookToLibrary() {
    Object.getPrototypeOf(Book)

    myLibraryContainer = myLibraryDiv
    bookContainer = document.createElement('div')
    bookInfo = document.createElement('p')
    readCheckbox = document.createElement('input')
    readCheckboxLabel = document.createElement('label')
    deleteButton = document.createElement('button')

    bookContainer.setAttribute('id', `${this.id}`)
    deleteButton.setAttribute('id', `${this.id}`)

    deleteButton.setAttribute("class", 'delete-btn')
    bookContainer.setAttribute('class', 'bookItems')

    readCheckbox.setAttribute('type', 'checkbox')

    readCheckboxLabel.innerText = "Finished "
    deleteButton.innerText = "Delete"
    bookInfo.innerText = `Name: ${this.name}\n Author: ${this.author}\n Page Count: ${this.pageCount}\n ID: ${this.id}`

    myLibraryDiv.appendChild(bookContainer);

    bookContainer.appendChild(bookInfo);
    bookContainer.appendChild(readCheckboxLabel);
    bookContainer.appendChild(readCheckbox);
    bookContainer.appendChild(deleteButton);
}

myLibraryDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const parentID = e.target.id;
        console.log("Deleted item with ID: " + parentID);
        
        const bookToRemove = document.getElementById(parentID);
        if (bookToRemove) {
            bookToRemove.remove();
        }
    }
});
