import React, { Component } from 'react';
import ToDoApp from './ToDoApp';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <h1>Welcome to Our Landing Page</h1>
        <p>Paragraph</p>
        <p>Info</p>
        <button className="button">Learn More</button>
        <ToDoApp />
      </div>
    );
  }
}



