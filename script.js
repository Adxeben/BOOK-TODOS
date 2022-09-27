//-----------delete book----------------//
const list = document.querySelector('.card-body-container ul');

list.addEventListener('click', (e) => {
   if(e.target.className === 'delete'){
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
   }
});


//--------- hamburger -------------//
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    list.classList.toggle('show');
    document.body.classList.toggle('overlay')
});


//---------------add books-------------//
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //target input value
    const value = addForm.querySelector('input[type="text"]').value;
    
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //append to dom
    li.append(bookName); //append span to li
    li.append(deleteBtn); //append span to li

    list.append(li); //appends li to dom

    //add content
    bookName.textContent=value;
    deleteBtn.textContent='delete';

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

});


//----------search books--------------//
const searchBook = document.forms['search'].querySelector('input');
searchBook.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');

    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display="flex";
        }else{
            book.style.display="none";
        }
    });
});


