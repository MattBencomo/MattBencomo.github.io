import React, { useEffect } from 'react';
import Bootstrap from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

export default function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <>
      <h1>About</h1>

      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}
