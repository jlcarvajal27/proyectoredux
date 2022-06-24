import { useSelector, useDispatch } from "react-redux";
import ProductItem from "./productItem";
import CarItem from "./carItem";
import { addToCart, clearCart, delFromCart } from "../actions/shoping.Actions";

const ShopingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shoping;

  return (
    <div>
      <h2>ShopingCart</h2>
      <h3>productos</h3>
      <article className="box grid-resposive">
        {products.map((products) => (
          <ProductItem
            key={products.id}
            data={products}
            addtoCart={() => dispatch(addToCart(products.id))}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => dispatch(clearCart())}>limpiar carrito</button>
        {cart.map((item, index) => (
          <CarItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </article>
    </div>
  );
};
export default ShopingCart;
