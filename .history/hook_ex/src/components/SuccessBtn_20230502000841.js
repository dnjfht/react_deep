import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
`;

export default function SuccessBtn({ setValue, inputTextRef }) {
  return (
    <Btn
      onClick={() => {
        setValue(inputTextRef.current.value);
      }}
    >
      Success
    </Btn>
  );
}
