import React from "react";


const Person = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <li className="list" key={person.name}>
            <img src={person.image} />
            <div className="details">
              <p className="name">{person.name}</p>
              <p>{person.age} years old</p>
            </div>
          </li>
        )
      })}
    </div>
  )
}

export default Person;