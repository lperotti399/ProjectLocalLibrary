const account = 
{
    id: "5f446f2e3900dfec59489477",
    picture: "https://api.adorable.io/avatars/75/langley.henson@zoxy.org",
    age: 31,
    name: {
      first: "Langley",
      last: "Henson",
    },
    company: "ZOXY",
    email: "langley.henson@zoxy.org",
    registered: "Friday, September 9, 2016 3:48 AM",
  }

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
            {
              id: "5f446f2e4081699cdc6a2735",
              returned: true,
            },
            {
              id: "5f446f2e3900dfec59489477",
              returned: true,
            },
            {
              id: "5f446f2e6059326d9feb9a68",
              returned: true,
            },
            {
              id: "5f446f2e409f8883af2955dd",
              returned: true,
            },
            {
              id: "5f446f2e3900dfec59489477",
              returned: true,
            },
            {
              id: "5f446f2eae901a82e0259947",
              returned: true,
            },
            {
              id: "5f446f2ef2ab5f5a9f60c4f2",
              returned: true,
            },
            {
              id: "5f446f2ea6b68cf6f85f6e28",
              returned: true,
            },
            {
              id: "5f446f2eed18105706d6ca19",
              returned: true,
            },
            {
              id: "5f446f2eae901a82e0259947",
              returned: true,
            },
            {
              id: "5f446f2e91c2af00cb74e82b",
              returned: true,
            },
            {
              id: "5f446f2e5aa2bb5545a0f8a6",
              returned: true,
            },
            {
              id: "5f446f2ea508b6a99c3e42c6",
              returned: true,
            },
            {
              id: "5f446f2e50cc2da9cd80efdb",
              returned: true,
            },
            {
              id: "5f446f2e0b3e2ff72fc503e7",
              returned: true,
            },
            {
              id: "5f446f2e91c2af00cb74e82b",
              returned: true,
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
        }]

const authors = [{
    id: 8,
    name: {
      first: "Susanne",
      last: "Lawson",
    }}]

/*The `getBooksPossessedByAccount` function in `public/src/accounts.js` has three parameters, in the following order:
        
        - An account object.
        - An array of all book objects.
        - An array of all author objects.
        
        It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. 
        _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
//Example
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/

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

console.log(JSON.stringify(getBooksPossessedByAccount(account, books, authors)))

