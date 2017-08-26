import React from 'react';

const Book = ({ title, author }) => {
  return (
    <div className="book-list_item">
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  )
}

export default Book;