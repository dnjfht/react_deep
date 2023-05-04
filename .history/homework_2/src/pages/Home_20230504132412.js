import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

const TILTitle = styled.h1``;
const GoWriteButton = styled.button``;

export default function Home() {
  const navigate = useNavigate();

  return (
    <Wrap>
      <TILTitle>TIL</TILTitle>

      <GoWriteButton
        onClick={() => {
          navigate("/write");
        }}
      >
        추가
      </GoWriteButton>
    </Wrap>
  );
}
