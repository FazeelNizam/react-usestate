import React, { useState } from "react";

const Objects = () => {
  const [person, setPerson] = useState({
    name: "fazeel",
    age: 23,
    massage: "hello friends",
  });

  const changeMassage = () => {
    //Spread Operator
    setPerson({ ...person, massage: "hello world" });
  };
  return (
    <>
      <h2>useState Objects</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.massage}</h4>
      <button className="btn" onClick={changeMassage}>
        change massage
      </button>
    </>
  );
};

export default Objects;
