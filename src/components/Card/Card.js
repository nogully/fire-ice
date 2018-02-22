import React from 'react';
import { connect } from 'react-redux';
import { expandHouse } from '../../actions/actions'

export const Card = ({ house, expandHouse }) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers } = house; 
  const swornMemberElements = swornMembers.length ? <p>swornMembers</p> : null;
  return (
    <article className="Card" onClick={(name) => expandHouse(name)}>
      <h3>Name: {name}</h3>
      <p>Founded: {founded}</p>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Words: {words}</p>
      { swornMemberElements }
    </article> 
  )

}

export default connect(null, mapDispatchToProps)(Card);