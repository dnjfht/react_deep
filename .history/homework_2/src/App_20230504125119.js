import Router from "./shared/Router";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
