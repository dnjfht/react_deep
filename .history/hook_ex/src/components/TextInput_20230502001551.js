import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
`;

export default function TextInput({ InputTextRef }) {
  return <Input ref={InputTextRef} />;
}
