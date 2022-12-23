
const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
      {
        id: "5f446f2ef795e593cd3cd19d",
        returned: true,
      },
      {
        id: "5f446f2e2f35653fa80bf490",
        returned: true,
      },
      {
        id: "5f446f2e7b9cd304fed3a8bc",
        returned: true,
      },
      {
        id: "5f446f2ed9aac23c0340aab2",
        returned: true,
      },
    ],
  },
  {
    id: "5f4471329627160be1e8ce92",
    title: "esse ea veniam non occaecat",
    genre: "Classics",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ed3609b719568a415",
        returned: false,
      },
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e50cc2da9cd80efdb",
        returned: true,
      },
        {
        id: "5f446f2e136866e4fe60c893",
        returned: true,
      },
    ],
  }]






function partitionBooksByBorrowedStatus(books) {
  //get all checked out books
  let checkedOutBooks = books.filter((book) => book.borrows[0].returned === true)
  let checkedOutBooks = books.filter((book) => book.borrows.map(borrowedBook => borrowedBook.returned === true))
  //get all returned books
  let returnedBooks = books.filter(book => book.borrows.filter(bookId => !bookId.returned))
  //combine checked out books with returned books
  //let output = [checkedOutBooks,returnedBooks]
  let output = checkedOutBooks
  return output
}
console.log(JSON.stringify(partitionBooksByBorrowedStatus(books)))




 /*### getTotalBooksCount()

The `getTotalBooksCount()` function in `public/src/home.js` has a single parameter:

- An array of book objects.

It returns a _number_ that represents the number of book objects inside of the array.

**Example:**

```javascript
getTotalBooksCount(books); // 100*/

function getTotalBooks(books) {
  let output = books.filter(book => book.borrows.map(bookid => bookid.id))
  return output
}

//console.log(JSON.stringify(getTotalBooks(books)))

//console.log(JSON.stringify(getTotalBooks(books), null, 4))