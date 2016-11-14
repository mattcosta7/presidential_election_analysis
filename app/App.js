import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Problem from './components/Problem';
import Histry from './components/Histry';
import Analysis from './components/Analysis';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Header />
        <Problem />
        <Histry />
        <Analysis />
        <Conclusion />
        <Footer />
      </div>
    );
  }
}
