import React from 'react';

function MyFirstReactApp() {
  return (
    <div className="app-container">
      <header>
        <h1 className="department-header">Department of Electronics & Telecommunication Engineering</h1>
      </header>
      <main>
        <div className="output-container">
          <h2>FINAL OUTPUT:</h2>
          <p className="output-text">master.dr5qnh2cdhd17.amplifyapp.com</p>
        </div>
        <div className="content-container">
          <p className="app-description">This is my first React Application</p>
          <a href="https://reactjs.org/learn" target="_blank" rel="noopener noreferrer">
            <button className="learn-react-button">Learn React</button>
          </a>
        </div>
      </main>
    </div>
  );
}

export default MyFirstReactApp;
