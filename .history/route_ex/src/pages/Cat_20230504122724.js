import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cat() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cat Page</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Prev Page
      </button>
    </div>
  );
}
