import { createContext } from "react";
import "./App.css";

// ContextAPI()를 사용하려면 데이터를 저장해줄 공간부터 만들어야 함.
const MyStore = createContext();

function App() {
  return (
    <div className="App">
      <MyStore.Provider value={{ name: "mean-0" }}></MyStore.Provider>
    </div>
  );
}

export default App;
