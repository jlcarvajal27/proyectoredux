import { Provider } from "react-redux";
import Contador from "./components/Contador";
import ShopingCart from "./components/ShopingCar";
import TeoriaRedux from "./components/teoriaRedux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1> teoria de redux</h1>
        <ShopingCart />
        <hr />
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
