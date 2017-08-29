import React from 'react';
import Book from '../../components/Book.js';

const BookList = ({ books, bookFilter }) =>
  <ul>
    {books
      .filter( (book) => {
        return (
          bookFilter === '' ||
          book.title.toLowerCase().indexOf(bookFilter.toLowerCase()) >= 0 ||
          book.author.toLowerCase().indexOf(bookFilter.toLowerCase()) >= 0
        );
      })
      .map( (book, i) => <Book title={book.title} author={book.author} key={i}/>)}
  </ul>;

export default BookList;