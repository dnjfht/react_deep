import { useRef, useState } from "react";
import SquareBox from "./components/SquareBox";
import TextInput from "./components/TextInput";
import SuccessBtn from "./components/SuccessBtn";

import styled from "styled-components";

import { useCompletes } from "./components/useCompletes";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 30%;
  height: 100%;
  padding: 60px;
  box-sizing: border-box;
`;

function App() {
  // const [text, setText] = useState("");
  const [text, setText] = useCompletes("");

  const inputTextRef = useRef(null);

  return (
    <Wrap>
      <SquareBox text={text} />

      <InputWrap>
        <TextInput inputTextRef={inputTextRef} />
        <SuccessBtn inputTextRef={inputTextRef} setText={setText} />
      </InputWrap>
    </Wrap>
  );
}

export default App;
