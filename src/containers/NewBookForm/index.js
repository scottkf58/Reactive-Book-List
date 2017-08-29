import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: '',
      newAuthor: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle (event) {
    this.setState({
      newTitle: event.target.value
    });
  }

  handleChangeAuthor (event) {
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
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={ this.handleChangeTitle }
            value={ this.state.newTitle }
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Author"
            onChange={ this.handleChangeAuthor }
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

export default NewBookForm;
