import React, { Component } from 'react';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js';
import AppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import NewBookForm from '../NewBookForm/index';
import BookFilterInput from '../../components/BookFilterInput';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      bookFilter: ''
    };

    this.setFilter = this.setFilter.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  setFilter (event) {
    const bookFilter = event.target.value;
    this.setState({ bookFilter });
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
      <BookFilterInput setFilter={ this.setFilter } />
      <BookList
        books={ this.state.books }
        bookFilter={ this.state.bookFilter }
      />
      <NewBookForm addBook={ this.addBook }/>
      </div>
      );
  }
}

export default App;