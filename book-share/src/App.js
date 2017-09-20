import React, { Component } from 'react';
import './App.css';
import BookPage from './components/book/book-page';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BookPage />
      </div>
    );
  }
}

export default App;
