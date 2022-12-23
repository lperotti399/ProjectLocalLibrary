const accounts = [
    {
      id: "5f446f2ecfaf0310387c9603",
      picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
      age: 25,
      name: {
        first: "Esther",
        last: "Tucker",
      },
      company: "ZILLACON",
      email: "esther.tucker@zillacon.me",
      registered: "Thursday, May 28, 2015 2:51 PM",
    },
    {
      id: "5f446f2ed46724f41c9fc431",
      picture: "https://api.adorable.io/avatars/75/ferrell.morris@ecolight.com",
      age: 35,
      name: {
        first: "Ferrell",
        last: "Morris",
      },
      company: "ECOLIGHT",
      email: "ferrell.morris@ecolight.com",
      registered: "Thursday, February 8, 2018 1:16 PM",
    },
    {
      id: "5f446f2e5e2952040e9f9b88",
      picture: "https://api.adorable.io/avatars/75/robertson.simmons@goko.tv",
      age: 38,
      name: {
        first: "Robertson",
        last: "Simmons",
      },
      company: "GOKO",
      email: "robertson.simmons@goko.tv",
      registered: "Monday, October 30, 2017 10:28 PM",
    },]

    const authors = [
        {
          id: 0,
          name: {
            first: "Lucia",
            last: "Moreno",
          },
        },
        {
          id: 1,
          name: {
            first: "Trisha",
            last: "Mathis",
          },
        },
        {
          id: 2,
          name: {
            first: "Arnold",
            last: "Marks",
          },
        },]

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

function getBooksPossessedByAccount(accountObject, bookArray, authorArray ) {

}
/*#### getBooksPossessedByAccount()

The `getBooksPossessedByAccount` function in `public/src/accounts.js` has three parameters, in the following order:

- An account object.
- An array of all book objects.
- An array of all author objects.

It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
*/