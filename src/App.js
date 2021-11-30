import { useDispatch } from "react-redux";
import { getSearchId } from "./store";
import Ticket from "./components/Ticket";
import Transfers from "./components/Transfers";
import styles from "./App.module.css";
function App() {
  const dispatch = useDispatch();
  fetch("https://front-test.beta.aviasales.ru/search")
    .then((response) => response.json())
    .then((searchId) => dispatch(getSearchId(searchId)));
  return (
    <div className={styles.app_wrapper}>
      <Transfers />
      <Ticket />
    </div>
  );
}

export default App;
