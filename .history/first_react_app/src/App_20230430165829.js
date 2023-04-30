import styled from "styled-components";

import Til from "./components/Til";
import TilInput from "./components/TilInput";

const Wrap = styled.div``;

function App() {
  return (
    <Wrap>
      <Til />
      <TilInput />
    </Wrap>
  );
}

export default App;
