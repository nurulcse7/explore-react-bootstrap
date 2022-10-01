import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup, Button, Spinner, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import GridCard from './components/GridCard/GridCard';
import Toast from './components/Toast/Toast';


function App() {
  return (
    <div className='App'>
      <button>Plain Button</button>
      <Button variant='danger'>My Button</Button>
      <Spinner animation='grow' variant='danger' />
      <GridCard></GridCard>
      <Toast></Toast>
    </div>
  );
}

export default App;
