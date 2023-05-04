import Router from "./shared/Router";
import styled from "styled-components";

const Wrap = styled.div`
  width: 500px;
  height: 600px;
  background: rgb(238, 174, 202);
  background: linear-gradient(
    0deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  margin: 100px auto;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 10px;

  box-shadow: 10px 16px 10px rgba(12, 207, 192, 0.2);
`;

function App() {
  return (
    <Wrap>
      <Router />
    </Wrap>
  );
}

export default App;
