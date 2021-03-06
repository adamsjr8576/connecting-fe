import React from 'react';
import './DogCard.css';

const DogCard = ({ breed, age, name }) => {
  return (
    <article className="dog-article">
      <h2>{name}</h2>
      <p>{age} years old</p>
      <p>{breed}</p>
    </article>
  )
}

export default DogCard;
