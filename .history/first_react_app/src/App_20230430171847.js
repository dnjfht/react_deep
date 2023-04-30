import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TilContent = styled.div`
  width: 70%;
  height: 100%;
  background-color: darkviolet;

  padding: 4rem 8rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 4rem;
`;

const TilInputWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: coral;

  padding: 2rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const PersonalInputWrap = styled.div`
  width: 100%;
  background-color: aquamarine;
`;

const InputName = styled.label``;

const Input = styled.input``;

function App() {
  return (
    <Wrap>
      <TilContent>
        <Title>TIL</Title>
      </TilContent>

      <TilInputWrap>
        <PersonalInputWrap>
          <InputName htmlFor="subject">과목</InputName>
          <Input id="subject" type="text" placeholder="subject" />
        </PersonalInputWrap>

        <PersonalInputWrap>
          <InputName htmlFor="content">내용</InputName>
          <Input id="content" type="text" placeholder="contents" />
        </PersonalInputWrap>

        <PersonalInputWrap>
          <InputName htmlFor="time">공부시간</InputName>
          <Input id="time" type="text" placeholder="study-time" />
        </PersonalInputWrap>
      </TilInputWrap>
    </Wrap>
  );
}

export default App;
