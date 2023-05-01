import styled from "styled-components";
import { useRef, useState } from "react";
import { Button, Input, TextArea } from "./components/component";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: pink;
`;

function App() {
  const [text, setText] = useState("");

  const InputTextRef = useRef(null);

  return (
    <Wrap>
      <TextArea text={text} />

      <InputWrap>
        <Input />
        <Button />
      </InputWrap>
    </Wrap>
  );
}

export default App;
