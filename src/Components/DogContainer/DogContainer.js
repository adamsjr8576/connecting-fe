import React from 'react';
import DogCard from '../DogCard/DogCard.js';

const DogContainer = ({ dogs }) => {
  const dogCards = dogs.map(dog => {
    return (
        <DogCard breed={dog.breed} age={dog.age} name={dog.name} />
    )
  });
  const display = dogCards.length? dogCards : 'There are no dogs!!!!!!!';
  console.log(display);
  return (
    <section className="dog-card-container">
      {display}
    </section>
  )
}

export default DogContainer;
