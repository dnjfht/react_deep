import React from "react";
import styled from "styled-components";

const BoxWrap = styled.div`
  width: 70%;
  height: 100%;

  padding: 60px;
  box-sizing: border-box;
`;

export default function SquareBox({ text }) {
  return (
    <BoxWrap>
      <h1 style={{ margin: 0 }}>{text}</h1>
    </BoxWrap>
  );
}
