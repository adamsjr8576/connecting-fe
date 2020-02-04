import React from 'react';
import DogCard from '../DogCard/DogCard.js';

const DogContainer = ({ dogs }) => {
  const dogCards = dogs.map(dog => {
    return (
      <section className="dog-card-container">
        <DogCard breed={dog.breed} age={dog.age} name={dog.name} />
      </section>
    )
  })
  return (

  )
}

export default DogContainer;
