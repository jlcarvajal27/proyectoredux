import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { ShopingReducers } from "./shopingReducers";

const reducer = combineReducers({
  contador: contadorReducer,
  shoping: ShopingReducers,
});

export default reducer;
