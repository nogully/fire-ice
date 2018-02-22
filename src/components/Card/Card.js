import React from 'react';

export const Card = ({ house, expandHouse }) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers } = house; 
  return (
    <article className="Card" onClick={expandHouse(name)}>
      <h3>Name: {name}</h3>
      <p>Founded: {founded}</p>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Words: {words}</p>
    </article> 
  )

}

export default Card;