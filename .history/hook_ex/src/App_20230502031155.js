import { useRef, useState } from "react";
import SquareBox from "./components/SquareBox";
import TextInput from "./components/TextInput";
import SuccessBtn from "./components/SuccessBtn";

function App() {
  const [text, setText] = useState("");

  const inputTextRef = useRef(null);

  return (
    <div>
      <SquareBox text={text} />

      <div>
        <TextInput inputTextRef={inputTextRef} />
        <SuccessBtn inputTextRef={inputTextRef} setText={setText} />
      </div>
    </div>
  );
}

export default App;
