import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Cat() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cat Page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}
