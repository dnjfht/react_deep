import React from "react";
import styled from "styled-components";

const InputWrap = styled.div``;

const Input = styled.input`
  width: 200px;
  height: 40px;
`;

export default function TextInput() {
  return (
    <InputWrap>
      <Input />
    </InputWrap>
  );
}
