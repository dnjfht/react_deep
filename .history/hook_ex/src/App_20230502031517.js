import { useRef, useState } from "react";
import SquareBox from "./components/SquareBox";
import TextInput from "./components/TextInput";
import SuccessBtn from "./components/SuccessBtn";

import styled from "styled-components";

const Wrap = styled.div``;

function App() {
  const [text, setText] = useState("");

  const inputTextRef = useRef(null);

  return (
    <Wrap>
      <SquareBox text={text} />

      <div>
        <TextInput inputTextRef={inputTextRef} />
        <SuccessBtn inputTextRef={inputTextRef} setText={setText} />
      </div>
    </Wrap>
  );
}

export default App;
