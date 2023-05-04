import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.2rem;
`;
const SubTitle = styled.p`
  font-size: 1.4rem;
`;

export default function NotFoundPage() {
  return (
    <Wrap>
      <Title>707 ERROR</Title>
      <SubTitle>Not Found Page!</SubTitle>
    </Wrap>
  );
}
