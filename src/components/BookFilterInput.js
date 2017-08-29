import React from 'react';

const BookFilterInput = ({ setFilter }) => {
  return (
      <input
      type="text"
      placeholder="Search"
      onChange={setFilter}
      />
    );
}

  export default BookFilterInput;