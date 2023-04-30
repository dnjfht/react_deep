import React from "react";
import styled from "styled-components";
import TilContents from "./TilContents";
import TilInput from "./TilInput";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function Til() {
  return (
    <Wrap>
      <TilContents />
      <TilInput />
    </Wrap>
  );
}
