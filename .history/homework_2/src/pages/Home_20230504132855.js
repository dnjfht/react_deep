import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

const TitleWrap = styled.div`
  width: 100%;
  height: 60px;

  border-bottom: 1px solid #fff;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TILTitle = styled.h1``;
const GoWriteButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: white;

  border: none;

  color: #567dab;
`;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <TitleWrap>
        <TILTitle>TIL</TILTitle>

        <GoWriteButton
          onClick={() => {
            navigate("/write");
          }}
        >
          추가
        </GoWriteButton>
      </TitleWrap>
    </Wrap>
  );
}
