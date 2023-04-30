import { useRef } from "react";
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
  width: 80%;
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
  width: 20%;
  height: 100%;

  padding: 3rem 2rem;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`;

const PersonalInputWrap = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputName = styled.label`
  margin-right: 1rem;

  font-size: 1.4rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 16rem;
  padding: 1rem;

  outline: none;

  &::placeholder {
    color: #ccc;
  }
`;

const AddTilButton = styled.button`
  width: 100%;
  height: 4rem;
  background-color: darkcyan;

  margin-top: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.2rem;
  border: none;

  color: white;

  outline: none;

  cursor: pointer;
`;

function App() {
  const subjectInputRef = useRef(null);
  const contentInputRef = useRef(null);
  const timeInputRef = useRef(null);

  return (
    <Wrap>
      <TilContent>
        <Title>TIL</Title>
      </TilContent>

      <TilInputWrap>
        <PersonalInputWrap>
          <InputName htmlFor="subject">과목 : </InputName>
          <Input
            ref={subjectInputRef}
            id="subject"
            type="text"
            placeholder="subject"
          />
        </PersonalInputWrap>

        <PersonalInputWrap>
          <InputName htmlFor="content">내용 : </InputName>
          <Input
            ref={contentInputRef}
            id="content"
            type="text"
            placeholder="contents"
          />
        </PersonalInputWrap>

        <PersonalInputWrap>
          <InputName htmlFor="time">공부시간 : </InputName>
          <Input
            ref={timeInputRef}
            id="time"
            type="text"
            placeholder="study-time"
          />
        </PersonalInputWrap>

        <AddTilButton>추가하기</AddTilButton>
      </TilInputWrap>
    </Wrap>
  );
}

export default App;
