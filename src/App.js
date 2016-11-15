import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ElectionDetails from './api/electionDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electionDetails: []
    };
  }
  getElectionData() {
    return ElectionDetails.getDetails();
  }
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
