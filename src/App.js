import { useDispatch } from "react-redux";
import { getSearchId } from "./store";
import Ticket from "./components/Ticket";
function App() {
  const dispatch = useDispatch();
  fetch("https://front-test.beta.aviasales.ru/search")
    .then((response) => response.json())
    .then((searchId) => dispatch(getSearchId(searchId)));
  return (
    <div>
      <Ticket />
    </div>
  );
}

export default App;
