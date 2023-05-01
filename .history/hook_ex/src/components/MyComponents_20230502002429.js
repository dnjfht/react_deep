import React from "react";

export const TextArea = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export const Button = ({ setText, textInputRef }) => {
  return (
    <button
      onClick={() => {
        setText(textInputRef);
      }}
    >
      Success
    </button>
  );
};

export const Input = ({ textInputRef }) => {
  return <input ref={textInputRef} />;
};
