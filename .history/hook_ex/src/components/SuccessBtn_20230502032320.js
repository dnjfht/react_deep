import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);

  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;

  color: white;
  font-size: 0%.8rem;
`;

export default function SuccessBtn({ setText, inputTextRef }) {
  return (
    <Btn
      onClick={() => {
        setText(inputTextRef.current.value);
        inputTextRef.current.value = "";
      }}
    >
      Success
    </Btn>
  );
}
