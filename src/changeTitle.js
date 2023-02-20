import React, { useState } from "react";

const ChangeTitle = () => {
  const [text, setText] = useState("Just A Title");

  const handleClick = () => {
    if (text === "Just A Title") {
      setText("Hello People");
    } else {
      setText("Just A Title");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ChangeTitle;
