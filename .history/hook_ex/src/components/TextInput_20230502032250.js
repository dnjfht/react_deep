import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;

  &::placeholder {
    color: #ccc;
  }
`;

export default function TextInput({ inputTextRef }) {
  return <Input ref={inputTextRef} placeholder="Write text..." />;
}
