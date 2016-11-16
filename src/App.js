import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
