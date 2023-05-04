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
  border-radius: 100px;

  color: #567dab;

  transition: all 0.5s;

  &:hover {
    background-color: transparent;

    border: 3px solid white;

    color: white;
  }
`;

const AddContent = styled.div`
  width: 100%;
  height: 500px;

  overflow: scroll;
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

      <AddContent></AddContent>
    </Wrap>
  );
}
