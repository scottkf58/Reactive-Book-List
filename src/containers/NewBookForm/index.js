import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../actions';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: '',
      newAuthor: ''
    };

    this.handleNewTitle = this.handleNewTitle.bind(this);
    this.handleNewAuthor = this.handleNewAuthor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    console.log(this.props);
  }

  handleNewTitle (event) {
    this.setState({
      newTitle: event.target.value
    });
  }

  handleNewAuthor (event) {
    this.setState({
      newAuthor: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.addBook({
      title: this.state.newTitle,
      author: this.state.newAuthor
    });

    this.setState({
      newTitle: '',
      newAuthor: ''
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div>Add New Book</div>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={ this.handleNewTitle }
            value={ this.state.newTitle }
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Author"
            onChange={ this.handleNewAuthor }
            value={ this.state.newAuthor }
          />
        </div>
        <div>
          <button type="submit">Add New Book</button>
        </div>
      </form>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      dispatch(addBook(book));
    }
  }
}

const ConnectedNewBookForm = connect(
  null,
  mapDispatchToProps
)(NewBookForm);

export default ConnectedNewBookForm;
