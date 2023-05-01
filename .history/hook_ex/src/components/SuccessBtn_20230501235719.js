import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 400px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
`;

export default function SuccessBtn() {
  return <Btn>Success</Btn>;
}
