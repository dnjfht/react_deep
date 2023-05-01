import React from "react";

export const TextArea = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export const Button = ({ inputTextRef, setText }) => {
  return (
    <button
      onClick={() => {
        // console.log(inputRef.current.value);
        setText(inputTextRef.current.value);
        inputTextRef.current.value = "";
      }}
    >
      Success
    </button>
  );
};

export const Input = ({ inputTextRef }) => {
  return <input ref={inputTextRef} />;
};
