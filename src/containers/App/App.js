import React, { Component } from 'react';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js';
import AppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm/index';
import BookFilter from '../../components/BookFilterInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      bookfilter: ''
    };
  }

  setFilter (event) {
    const bookfilter = event.target.value;
    this.setState({ bookfilter });
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
      <div>
      <AppTitle title="Book List" />
      <BookFilter setFilter={ this.setFilter } />
      </div>
      );
  }
}

export default App;