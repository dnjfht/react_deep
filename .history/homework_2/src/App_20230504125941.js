import Router from "./shared/Router";
import styled from "styled-components";

const Wrap = styled.div`
  width: 500px;
  height: 600px;
  background-color: pink;
  margin: 100px auto;
`;

function App() {
  return (
    <Wrap>
      <Router />
    </Wrap>
  );
}

export default App;
