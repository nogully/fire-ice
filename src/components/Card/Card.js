import React from 'react';

export const Card = ({ house, handleClick }) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers } = house; 
  const swornMemberElements = swornMembers.includes('http') ?
   null : <p>swornMembers coming!</p>;
  return (
    <article className="Card" id={name} onClick={handleClick}>
      <h3>Name: {name}</h3>
      <p>Founded: {founded}</p>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>{words}</p>
      { swornMemberElements }
    </article> 
  )
}

export default Card;