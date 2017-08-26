import React, { Component } from 'react';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js';


class App extends Component {
  constructor() {
    super();


  }


  addBook (book) {
    addBookToFakeXHR(book)
    .then( (book) => {
      this.setState({
        books: book
      });
    });
  }

  componentDidMount () {
    getBooksFromFakeXHR()
    .then( (books) => {
      this.setState({
        books: books
      });
    });
  }

  render() {
    return (

      );
  }
}

export default App;