import React from "react";
import styled from "styled-components";

const InputWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const PersonalInputWrap = styled.div``;

const Label = styled.label``;

const Input = styled.input``;

export default function Write() {
  return (
    <InputWrap>
      <PersonalInputWrap>
        <Label htmlFor="subject">과목</Label>
        <Input id="subject" placeholder="Write subject..." />
      </PersonalInputWrap>

      <PersonalInputWrap>
        <Label htmlFor="content">내용</Label>
        <Input id="content" placeholder="Write content..." />
      </PersonalInputWrap>

      <PersonalInputWrap>
        <Label htmlFor="time">공부시간</Label>
        <Input id="time" placeholder="Write time..." />
      </PersonalInputWrap>

      <button onClick={() => {}}>추가하기</button>
    </InputWrap>
  );
}
