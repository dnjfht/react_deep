import { createContext } from "react";
import "./App.css";
import { useContext } from "react";

// ContextAPI()를 사용하려면 데이터를 저장해줄 공간부터 만들어야 함.
const MyStore = createContext();

function App() {
  return (
    <div className="App">
      <MyStore.Provider value={{ name: "mean0" }}>
        <MyStore.Consumer>
          {/* 데이터 구독. value를 사용해서 저장소에 저장되어 있는 데이터를 받아올 수 있음. */}
          {(value) => {
            return <div>{value.name}</div>;
          }}
        </MyStore.Consumer>
      </MyStore.Provider>
    </div>
  );
}

const MyStoreConsumer = () => {
  // 어떤 store에 있는 어떤 데이터를 구독해서 받아올 거임.
  const { name } = useContext(MyStore);

  return <></>;
};

export default App;
