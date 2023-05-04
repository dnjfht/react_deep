import React from "react";
import styled from "styled-components";

const InputWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Label = styled.label``;

const Input = styled.input``;

export default function Write() {
  return (
    <InputWrap>
      <Label htmlFor="subject">과목</Label>
      <Input id="subject" placeholder="Write subject..." />
    </InputWrap>
  );
}
