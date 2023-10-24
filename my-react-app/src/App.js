import React, { Component } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}



