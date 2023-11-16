import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<About />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}
