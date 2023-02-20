import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const Increase = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h4>{value}</h4>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>counter with timeout</h2>
        <h4>{value}</h4>
        <button className="btn" onClick={Increase}>
          increase later
        </button>
      </section>
    </>
  );
};

export default Counter;
