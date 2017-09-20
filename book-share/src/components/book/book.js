/**
 * function component that displays individual book details
 */
import React from 'react';
const Book = props => {
  return(
    <div>
      <div>{props.book.title} </div>
      <div>{props.book.authors.join(",")} </div>
      <img src={props.book.thumbnailUrl} alt={props.book.title} />
    </div>
  );
}
export default Book;