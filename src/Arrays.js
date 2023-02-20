import React, { useState } from "react";
import { data } from "./data";

const Arrays = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState Arrays</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn1" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default Arrays;
