import Router from "./shared/Router";
import styled from "styled-components";

const Wrap = styled.div`
  width: 500px;
  height: 600px;
  background: rgb(12, 207, 192);
  background: linear-gradient(
    0deg,
    rgba(12, 207, 192, 1) 0%,
    rgba(166, 201, 225, 1) 71%
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
