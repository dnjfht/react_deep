import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTil } from "../redux/modules/til";
import { useRef } from "react";

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
  background-color: rgba(255, 255, 255, 0.6);

  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  border: none;

  color: #567dab;

  outline: none;

  transition: all 0.5s;

  &:hover {
    background-color: transparent;

    border: 3px solid white;

    color: white;
  }
`;

export default function Write() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SubjectInputRef = useRef(null);
  const ContentInputRef = useRef(null);
  const TimeInputRef = useRef(null);

  const handleClickAddTIL = (event) => {
    event.preventDefault();

    const newTIL = {
      subject: SubjectInputRef.current.value,
      content: ContentInputRef.current.value,
      time: TimeInputRef.current.value,
    };

    dispatch(addTil(newTIL));

    SubjectInputRef.current.value = "";
    ContentInputRef.current.value = "";
    TimeInputRef.current.value = "";
  };

  return (

    const TIL = useSelector((state)=>state.til);
    
    <InputWrap>
      <PersonalInputWrap>
        <Label htmlFor="subject">과목</Label>
        <Input
          ref={SubjectInputRef}
          id="subject"
          placeholder="Write subject..."
        />
      </PersonalInputWrap>

      <PersonalInputWrap>
        <Label htmlFor="content">내용</Label>
        <Input
          ref={ContentInputRef}
          id="content"
          placeholder="Write content..."
        />
      </PersonalInputWrap>

      <PersonalInputWrap>
        <Label htmlFor="time">공부시간</Label>
        <Input ref={TimeInputRef} id="time" placeholder="Write time..." />
      </PersonalInputWrap>

      <AddButton onClick={handleClickAddTIL}>추가하기</AddButton>
    </InputWrap>
  );
}
