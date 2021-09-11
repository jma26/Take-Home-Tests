import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/card';
import './cardlist.css';

function CardList(props) {
  const {
    deletePerson,
    selectFilter,
  } = props;

  const [people, setPeople] = useState(props.people);

  useEffect(() => {
    if (props.filter) {
      let filterArr = props.people.filter(person => {
        return person.gender === props.filter
      })
      setPeople(filterArr);
    } else {
      setPeople(props.people);
    }
  }, [props.people, props.filter])

  return (
    <div className="CardList">
      <div className="CardList--filter">
        <input
          type="radio"
          id="No Filter"
          name="filter"
          value="No Filter"
          defaultChecked
          onClick={() => selectFilter(false)}
        />
        <label htmlFor="No Filter">No FIlter</label>
        <input 
          type="radio"
          id="Male"
          name="filter"
          value="Male"
          onClick={() => selectFilter("male")} />
        <label htmlFor="Male">Male</label>
        <input
          type="radio"
          id="Female"
          name="filter"
          value="Female"
          onClick={() => selectFilter("female")}/>
        <label htmlFor="Female">Female</label>
      </div>
      {
        people.map((person, index) => {
          return (
            <Card
              person={person}
              key={index}
              index={index}
              deletePerson={deletePerson}
            />
          )
        })
      }
    </div>
  )
}

CardList.propTypes = {};

export default CardList;
