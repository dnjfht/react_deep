import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.2rem;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
`;

const GoHomeButton = styled.button`
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

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <TitleWrap>
        <Title>707 ERROR</Title>
        <SubTitle>Not Found Page!</SubTitle>
      </TitleWrap>

      <GoHomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </GoHomeButton>
    </Wrap>
  );
}
