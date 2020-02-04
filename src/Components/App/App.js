import React, { useState, useEffect } from 'react';
import './App.css';
import DogContainer from '../DogContainer/DogContainer.js';

const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('localhost:3000/api/v1/pets/')
      .then(response => response.json())
      .then(dogs => { setDogs(dogs) })
  }, []);

  return (
    <div className="App">
      <DogContainer dogs={dogs} />
    </div>
  );
}

export default App;
