import { useSelector, useDispatch } from "react-redux";

function App() {
  const cat = useSelector((state) => state.cat.name);

  return <div>Test</div>;
}

export default App;
