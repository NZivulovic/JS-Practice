const myLibrary = [];

formOutput = document.querySelector("output");
formDialog = document.querySelector(".formDialog");

theForm = document.querySelector("#theForm");

bookName = document.querySelector("#bookName");
bookAuthor = document.querySelector("#bookAuthor");
bookPageCount = document.querySelector("#bookPageCount");


newBookButton = document.querySelector(".addBookButton");
newBookButton.addEventListener("click", (event) => {
    formDialog.showModal();
})


cancelFormButton = document.querySelector("#cancelFormButton");
cancelFormButton.addEventListener("click", (event) => {
    formDialog.close();
})

confirmFormButton = document.querySelector("#confirmFormButton");
confirmFormButton.addEventListener("click", (event) => {
    event.preventDefault();
    theForm.submit();
})

function Book() {
    this.name = bookName.value
    this.author = bookAuthor.value
    this.pageCount = bookPageCount.returnValue
    this.id = crypto.randomUUID()
}

Object.getPrototypeOf(Book, addBookToLibrary);

function addBookToLibrary() {
    bookInfo = document.createElement('p')
    bookInfo.innerText = `${this.name}, ${this.author}, ${this.pageCount}, ${this.id}`
    document.body.appendChild(bookInfo);
}
console.log(addBookToLibrary())