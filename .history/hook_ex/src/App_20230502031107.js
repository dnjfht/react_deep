import { useRef, useState } from "react";
import SquareBox from "./components/SquareBox";

function App() {
  const [text, setText] = useState("");

  const inputTextRef = useRef(null);

  return (
    <div>
      <SquareBox text={text} />

      <div>
        <Input inputTextRef={inputTextRef} />
        <Button inputTextRef={inputTextRef} setText={setText} />
      </div>
    </div>
  );
}

export default App;
