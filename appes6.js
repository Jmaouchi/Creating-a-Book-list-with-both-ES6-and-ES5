// book and UI constructors
class Book {
  constructor (title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
}


class UI {
  addBookList(book){
      const list = document.getElementById('book-list');
      // creat tr element
      const row = document.createElement ('tr');
      // add cols
      row.innerHTML = `
      <td> ${book.title} </td>
      <td> ${book.author} </td>
      <td> ${book.isbn} </td>
      <td><a href="" classe = 'delete'>X</a> </td>
      `
     list.appendChild(row)
  }


  showAlert(message, className) {
    const div = document.createElement('div');
    //add a className
    div.className = `alert ${className}`;
    // add textNode
    div.appendChild(document.createTextNode(message));
    // get parent 
    const container = document.querySelector('.container');
  
    const form = document.querySelector('#book-form');
  
    container.insertBefore(div,form);
  
    //set timout
  
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000 );
  }


  deleteBook(target){
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }


  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}




// start of event listeners 

document.getElementById('book-form').addEventListener('submit',
function (e){
  
  //get form value
  const firstValue = document.getElementById ('title').value,
        secondValue = document.getElementById ('author').value,
        thirdValue = document.getElementById ('isbn').value


       
  const book = new Book (firstValue, secondValue, thirdValue);
  
  const ui = new UI ();

  //validation alerts
  if( firstValue === '' || secondValue === '' || thirdValue === ''){
    ui.showAlert('please add values', 'error');
  }
  else{
    
ui.addBookList(book);

ui.showAlert('book added', 'success')

//clear field after submit 

ui.clearFields();

  }
  // add book to list

e.preventDefault();
}
);


// Event listener for delete 

document.getElementById('book-list').addEventListener('click', function(e){


 const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('book deleted' , 'success')

  e.preventDefault();
})
