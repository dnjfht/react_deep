import React from "react";

export function TextArea({ text }) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

export function Button({ setText, textInputRef }) {
  return (
    <button
      onClick={() => {
        setText(textInputRef);
      }}
    >
      Success
    </button>
  );
}

export function Input({ textInputRef }) {
  return <input ref={textInputRef} />;
}
