import React from "react";
import styled from "styled-components";

const InputWrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PersonalInputWrap = styled.div`
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.3rem;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  background-color: transparent;

  margin: 10px 0 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 6px;

  outline: none;

  color: #666;
  font-size: 1.1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8rem;
  }
`;

const AddButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
`;

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

      <AddButton onClick={() => {}}>추가하기</AddButton>
    </InputWrap>
  );
}
