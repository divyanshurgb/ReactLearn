import React from 'react';

const books = [
    {
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: "fiction",
    year_published: 1813,
    id:1

  },
  {
    name: 'The Great Gatsby',
    author: ' F. Scott Fitzgerald',
    genre: "tragedy",
    year_published: 1925,
    id:2
    },
  ];
  
const Mapping = () => {

    return (
  
      <div>
            <h1>Book Names</h1>
            {books.map((book)=>
                <p key={book.id}>{book.name} </p>)
                }

            <h2>Year published</h2>
            {books.map((book)=>
                <li key={book.id}>{book.year_published}</li>
                )}
        </div>
      );
    };

export default Mapping;

