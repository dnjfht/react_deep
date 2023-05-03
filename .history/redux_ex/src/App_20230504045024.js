import { useSelector, useDispatch } from "react-redux";

function App() {
  const cat = useSelector((state) => state.cat);
  console.log(cat);

  return (
    <div>
      <p>name::::</p>
      <button
        onClick={() => {
          useDispatch(changeName("perl"));
        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}

export default App;
