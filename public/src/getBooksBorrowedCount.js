/*### getBooksBorrowedCount()

The `getBooksBorrowedCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a _number_ that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction object in the `borrows` array of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.

**Example:**

```javascript
getBooksBorrowedCount(accounts); // 65*/
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
          id: "5f446f2ed3609b719568a415",
          returned: true,
        },
        {
          id: "5f446f2e1c71888e2233621e",
          returned: true,
        },
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: true,
        },
        {
          id: "5f446f2ede05a0b1e3394d8b",
          returned: true,
        },
      ],
    },]

function getBooksBorrowedCount(books) {
let output = []

for(let i =0; i<books.length; i++) {
    for(let j=0; j<books[i].borrows.length; j++) {
        if(books[i].borrows[j].returned === true) {
            output.push(books[i].borrows[j].id)
        }
    }
}
return output.length
}

console.log(getBooksBorrowedCount(books))