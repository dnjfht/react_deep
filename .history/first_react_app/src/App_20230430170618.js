import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkviolet;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TilContent = styled.div``;

const TilInputWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: gold;
`;

function App() {
  return (
    <Wrap>
      <TilContent></TilContent>

      <TilInputWrap></TilInputWrap>
    </Wrap>
  );
}

export default App;
