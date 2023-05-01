import React from "react";
import styled from "styled-components";

const InputWrap = styled.div``;

const Input = styled.input`
  width: 400px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
`;

export default function TextInput() {
  return (
    <InputWrap>
      <Input />
    </InputWrap>
  );
}
