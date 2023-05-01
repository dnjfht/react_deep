import React from "react";

export function TextArea({ text }) {
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export function Button({ setText, textInputRef }) {
  return (
    <button
      onClick={() => {
        setText(textInputRef);
      }}
    ></button>
  );
}

export function Input({ textInputRef }) {
  return <input ref={textInputRef} />;
}
