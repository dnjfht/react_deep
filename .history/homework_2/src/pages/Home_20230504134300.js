import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

const TitleWrap = styled.div`
  width: 100%;

  margin-bottom: 40px;
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
  height: 480px;

  overflow: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 6px;
  }
`;

export default function Home() {
  const navigate = useNavigate();

  const TIL = useSelector((state) => 
    state.til;
  );

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
