import React from "react";
import styled from "styled-components";
import TilContents from "./TilContents";
import TilInput from "./TilInput";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightyellow;
`;

export default function Til() {
  return (
    <Wrap>
      <TilContents />
      <TilInput />
    </Wrap>
  );
}
