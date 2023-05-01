import styled from "styled-components";
import SquareBox from "./components/SquareBox";
import TextInput from "./components/TextInput";
import SuccessBtn from "./components/SuccessBtn";

const Wrap = styled.div``;

function App() {
  const [] = useState("");
  return (
    <Wrap>
      <SquareBox />
      <TextInput />
      <SuccessBtn />
    </Wrap>
  );
}

export default App;
