/**
 * this is the main page for displaying books.
 * it contains a list of books on the left and area on the left that
 * will display the details of the clicked book
 * 
 */
import React from 'react';
import Book from './book';
import books from '../../data/big-book.json'
class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.book = books.find(b => b.isbn === '1933988673');
  }
  render() {
    console.log(this.book);
    return <div><Book book={this.book} /></div>
  }
}

export default BookPage;