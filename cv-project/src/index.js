import React from 'react';
import ReactDOM from 'react-dom/client';
import './Content.css';
import Nav from './components/Nav';
import WorkSpace from './components/WorkSpace';

const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
  <React.StrictMode>
    <Nav />
    <WorkSpace />
  </React.StrictMode>
);
