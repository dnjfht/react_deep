import Router from "./shared/Router";
import styled from "styled-components";

const Wrap = styled.div`
  width: 500px;
  height: 600px;
  background-color: pink;
  margin: 100px auto;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 50px;
`;

function App() {
  return (
    <Wrap>
      <Router />
    </Wrap>
  );
}

export default App;
