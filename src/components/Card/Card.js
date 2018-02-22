import React from 'react';

export const Card = ({ house }) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = house;
  return (
    <article className="Card">
      <h3>{name}</h3>
      <p>{founded}</p>
      <p>{seats}</p>
      <p>{titles}</p>
      <p>{coatOfArms}</p>
      <p>{ancestralWeapons}</p>
      <p>{words}</p>
    </article> 
  )

}

export default Card;