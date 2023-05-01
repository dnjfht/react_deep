import styled from "styled-components";
import SquareBox from "./components/SquareBox";
import TextInput from "./components/TextInput";
import SuccessBtn from "./components/SuccessBtn";
import { useState } from "react";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  const [value, setValue] = useState("");
  return (
    <Wrap>
      <SquareBox />
      <TextInput />
      <SuccessBtn />
    </Wrap>
  );
}

export default App;
