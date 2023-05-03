import { useSelector, useDispatch } from "react-redux";

function App() {
  const cat = useSelector((state) => state.cat);
  console.log(cat);

  return <div>Test</div>;
}

export default App;
