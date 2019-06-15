import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './router';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
          {Router}
        <Footer />
      </main>
    );
  }
}

export default App;
