import React from "react";

import { useState } from "react";

import data from '../data/data';
import Person from './Person';

const BirthdayList = () => {

  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([])
  }

  return (
    <div className="container">
      <h1>{people.length > 0 ? people.length : "0"} Birthdays Today</h1>
      <div className="list">
        <ul><Person people={people} /></ul>
      </div>
      <div>
        <button onClick={clearAll}>Clear all</button>
      </div>
    </div>
  )
}

export default BirthdayList;