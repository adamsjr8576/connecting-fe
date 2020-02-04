import React, { useState, useEffect } from 'react';
import './App.css';
import DogContainer from '../DogContainer/DogContainer.js';

const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('localhost:3000/api/v1/pets/')
      .then(response => response.json())
      .then(dogs => { setDogs(dogs) })
      .catch(err => console.log(err))
  }, []);
  return (
    <main className="App">
      <header className="main-header">
        <h1>Dogs! Dogs! Dogs!</h1>
      </header>
      <DogContainer dogs={dogs} />
    </main>
  );
}

export default App;
