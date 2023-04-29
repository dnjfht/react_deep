import React, { useState } from "react";

// MyComponents.js

const One = (props) => {
  const [name, setName] = useState("mean0");

  return (
    <div>
      <h1>One</h1>
      <p>{name}</p>
      <button
        onClick={() => {
          setName("유승민");
        }}
      ></button>
    </div>
  );
};

const Two = (props) => {
  return (
    <div>
      <h1>Two</h1>
    </div>
  );
};

export default One;
export { Two };
