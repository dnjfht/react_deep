import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkviolet;
`;

const TilContent = styled.div``;

const TilInputWrap = styled.div``;

function App() {
  return (
    <Wrap>
      <TilContent></TilContent>

      <TilInputWrap></TilInputWrap>
    </Wrap>
  );
}

export default App;
