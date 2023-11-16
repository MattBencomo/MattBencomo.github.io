import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ListGroup } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
      <h3>Contact</h3>
      <ListGroup>
        <ListGroup.Item
          as='li'
          className='d-flex justify-content-between align-items-start'
        >
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>GitHub</div>
            <a href='https://github.com/MattBencomo'>Github Profile</a>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>LinkedIn</div>
            <a href='https://www.linkedin.com/in/matthew-bencomo'>
              LinkedIn Profile
            </a>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}
