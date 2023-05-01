import React from "react";
import styled from "styled-components";

const BoxWrap = styled.div`
  width: 70%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  padding: 60px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export default function SquareBox({ text }) {
  return (
    <BoxWrap>
      <h1 style={{ margin: 0 }}>{text}</h1>
    </BoxWrap>
  );
}
