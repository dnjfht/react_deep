import styled from "styled-components";
import { useRef, useState } from "react";
import { Button, Input, TextArea } from "./components/MyComponents";

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
  console.log(InputTextRef, value);

  return (
    <Wrap>
      <TextArea />

      <InputWrap>
        <Input InputTextRef={InputTextRef} />
        <Button setValue={setValue} InputTextRef={InputTextRef} />
      </InputWrap>
    </Wrap>
  );
}

export default App;
