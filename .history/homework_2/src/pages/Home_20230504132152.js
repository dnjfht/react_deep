import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

export default function Home() {
  return (
    <Wrap>
      <h1>TIL</h1>
    </Wrap>
  );
}
