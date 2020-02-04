import React, { useState, useEffect } from 'react';
import './App.css';
import DogContainer from '../DogContainer/DogContainer.js';

const App = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + 'api/v1/dogs/')
      .then(response => response.json())
      .then(dogs => { setDogs(dogs) })
      .catch(err => console.log(err))
  }, []);
  return (
    <main className="App">
      <header className="main-header">
        <h1>Dogs! Dogs! Dogs!</h1>
      </header>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <DogContainer dogs={dogs} />
    </main>
  );
}

export default App;
