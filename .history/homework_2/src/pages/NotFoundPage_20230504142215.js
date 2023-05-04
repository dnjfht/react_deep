import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
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

const GoHomeButton = styled.button``;

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <TitleWrap>
        <Title>707 ERROR</Title>
        <SubTitle>Not Found Page!</SubTitle>
      </TitleWrap>

      <GoHomeButton onClick={() => {}}>Go Home</GoHomeButton>
    </Wrap>
  );
}
