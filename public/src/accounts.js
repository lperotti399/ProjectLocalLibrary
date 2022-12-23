function findAccountById(accounts, id) {
  let output = accounts.filter(account => account.id === id)
  return output[0];
}

 function sortAccountsByLastName(accounts) {
    let output = accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1)
    return output;
  }

function getTotalNumberOfBorrows(account, books) {
    //get the accountID of the account input
    let accountID = account.id
    //set a new borrowed id array
    let bookArray = []
    //set a new filtred borrowed id array
    let filteredBookArray =[]
    //for all the borrowed ids, add them to teh new borrowed id array
    for(let i=0; i<books.length; i++) {
        bookArray.push(books[i].borrows)
    }
    //for all the borrowed ids in the new borrowed id array, add each
    for(let j=0; j<bookArray.length;j++){
        for(let z=0; z<bookArray[j].length;z++) {
            if(bookArray[j][z].id === accountID){
                filteredBookArray.push(bookArray[j][z].id)
            }
        }
    }
    //count all of the book ids
    filteredBookArray = filteredBookArray.length
    return filteredBookArray
 }

function getBooksPossessedByAccount(account, books, authors) {
//get accountInput id
let outputArray = []
let accountInputID = account.id
//filter all book objects based on matching account input and account checked out
//returns an array of book objects
for(let i = 0; i < books.length; i++) {
    for(let j =0; j < books[i].borrows.length; j++) {
        if(books[i].borrows[j].id === accountInputID && !books[i].borrows[j].returned ){
          outputArray.push({ ...books[i],
                           //not just the book object; the author object is nested inside of it
                           author: authors.find(author => author.id === books[i].authorId),
                            })
        }

    }
}
return outputArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
