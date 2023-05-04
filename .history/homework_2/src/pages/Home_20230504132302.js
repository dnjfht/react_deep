import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <h1>TIL</h1>

      <button
        onClick={() => {
          navigate("/write");
        }}
      >
        추가
      </button>
    </Wrap>
  );
}
