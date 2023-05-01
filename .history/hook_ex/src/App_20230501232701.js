import styled from "styled-components";
import SquareBox from "./components/SquareBox";
import TextInput from "./components/TextInput";

const Wrap = styled.div``;

function App() {
  return (
    <Wrap>
      <SquareBox />
      <TextInput />
    </Wrap>
  );
}

export default App;
