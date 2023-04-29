import React, { useState } from "react";

// MyComponents.js

const One = (props) => {
  const [name, setName] = useState("mean0");
  return (
    <div>
      <h1>One</h1>
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
