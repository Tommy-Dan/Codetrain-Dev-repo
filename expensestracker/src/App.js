import './App.css';
import Store from "./store/Store";
import { Provider } from "react";
import Main from "./containers/Main";


function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

export default App;
