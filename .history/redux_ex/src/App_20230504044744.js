import { useSelector, useDispatch } from "react-redux";

function App() {
  const cat = useSelector((state) => state.cat.name);
  console.log(cat);

  return <div>Test</div>;
}

export default App;
