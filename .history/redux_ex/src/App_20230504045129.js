import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./redux/modules/cat";

function App() {
  const cat = useSelector((state) => state.cat);
  console.log(cat);

  const dispatch = useDispatch();

  return (
    <div>
      <p>name::::</p>
      <button
        onClick={() => {
          dispatch(changeName("perl"));
        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}

export default App;
