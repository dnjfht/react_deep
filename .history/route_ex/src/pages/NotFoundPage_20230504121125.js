import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 100 }}>707_ERROR</h1>
      <p style={{ fontSize: 40 }}>Not Found Page!</p>

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
