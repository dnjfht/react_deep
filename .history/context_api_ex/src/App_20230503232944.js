import { createContext } from "react";
import "./App.css";
import { useContext } from "react";
import { useState } from "react";

// ContextAPI()를 사용하려면 데이터를 저장해줄 공간부터 만들어야 함.
const MyStore = createContext();

function App() {
  const { name, setName } = useState("승민");
  return (
    <div className="App">
      <MyStore.Provider value={{ name, setName }}>
        {/* <MyStore.Consumer>
          // 데이터 구독. value를 사용해서 저장소에 저장되어 있는 데이터를 받아올 수 있음.
          {(value) => {
            return <div>{value.name}</div>;
          }}
        </MyStore.Consumer> */}

        {/* useContext hook을 사용한다면 Consumer를 사용할 필요가 없음. */}
        <MyStoreConsumer />
      </MyStore.Provider>
    </div>
  );
}

const MyStoreConsumer = () => {
  // 어떤 store에 있는 어떤 데이터를 구독해서 받아올 거임.
  const { name, setName } = useContext(MyStore);

  return (
    <div>
      {name}
      <button
        onClick={() => {
          setName("쿠쿠루삥뽕");
        }}
      >
        바꾸기
      </button>
    </div>
  );
};

export default App;
