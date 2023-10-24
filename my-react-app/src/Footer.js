import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <p>&copy; 2023 Your Company. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.twitter.com">Twitter</a>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
}

