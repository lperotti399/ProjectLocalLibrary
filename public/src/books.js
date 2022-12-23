 function findAuthorById(authors, id) {
    let output = authors.filter(author => author.id === id)
    return output[0]
 }

function findBookById(books, id) {
    let output = books.filter(book => book.id === id)
    return output[0]
 }

function partitionBooksByBorrowedStatus(books) {
    //get all checked out books
    let checkedOutBooks = books.filter(book => book.borrows.some(bookId => bookId.returned===false))
    //get all returned books
    let returnedBooks = books.filter(book => book.borrows.every(bookId => bookId.returned===true))
    //combine checked out books with returned books
    let output = [checkedOutBooks,returnedBooks]
    return output
 }

//function getBorrowersForBook (book,accounts) {}
function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map((borrows) => {
    let account = accounts.find((account) =>
          account.id === borrows.id      )
    return {...borrows, ...account}
  })
  return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
