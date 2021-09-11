import React, { useEffect, useState } from "react";
import { getPeople } from "./_requests/getPeople";
import CardList from './Components/CardList/cardList';
import "./App.css";

export default function App(props) {
  useEffect(() => {
    (async () => {
      try {
        const people = await getPeople();
        setPeople(people);
      } catch (err) {
        console.error(err);
        //handle error mesasge if possible (Bonus)
      }
    })();
  }, []);

  const [people, setPeople] = useState([]);
  const [filter, setFilter] = useState(false);

  const selectFilter = (value) => {
    setFilter(value);
  }

  const deletePerson = (email) => {
    let filterArr = people.filter(person => {
      return person.email !== email
    })
    setPeople(filterArr);
  }

  return (
    <div className="container">
      <CardList
        people={people}
        filter={filter}
        deletePerson={deletePerson}
        selectFilter={selectFilter}
      />
    </div>
  );
}
