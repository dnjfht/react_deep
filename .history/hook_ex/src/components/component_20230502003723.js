import React from "react";

export const TextArea = ({ text }) => {
  return (
    <div>
      <pre>{text}</pre>
    </div>
  );
};

export const Button = ({ setText, textInputRef }) => {
  return (
    <button
      onClick={() => {
        console.log(textInputRef.current.value);
        setText(textInputRef.current.value);
        textInputRef.current.value = "";
      }}
    >
      Success
    </button>
  );
};

export const Input = ({ textInputRef }) => {
  return <input ref={textInputRef} />;
};
