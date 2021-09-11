import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const { 
    person,
    deletePerson,
    index
  } = props;

  return (
    <div className="Card">
      <div className="Card--top">
        <button onClick={() => deletePerson(`${person.email}`)}>X</button>
        <img src={person.picture.large} />
      </div>
      <div className="Card--bottom">
        <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
        <p><span>GENDER - </span> {person.gender}</p>
        <p><span>EMAIL - </span> {person.email}</p>
        <p><span>CELL - </span> {person.cell}</p>
        <p><span>COUNTRY - </span> {person.location.country}</p>
      </div>
    </div>
  )
}

Card.propTypes = {};

export default Card;
