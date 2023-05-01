import { useRef, useState } from "react";
import { Button, Input, TextArea } from "./components/component";

function App() {
  const [text, setText] = useState("");

  const inputTextRef = useRef(null);

  return (
    <div>
      <TextArea text={text} />

      <div>
        <Input InputTextRef={inputTextRef} />
        <Button InputTextRef={inputTextRef} setText={setText} />
      </div>
    </div>
  );
}

export default App;
