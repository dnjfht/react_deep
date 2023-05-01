import styled from "styled-components";
import SquareBox from "./components/SquareBox";
import TextInput from "./components/TextInput";
import SuccessBtn from "./components/SuccessBtn";
import { useRef, useState } from "react";

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
  const [value, setValue] = useState("");

  const InputTextRef = useRef(null);
  return (
    <Wrap>
      <SquareBox />

      <InputWrap>
        <TextInput InputTextRef={InputTextRef} />
        <SuccessBtn setValue={setValue} InputTextRef={InputTextRef} />
      </InputWrap>
    </Wrap>
  );
}

export default App;
