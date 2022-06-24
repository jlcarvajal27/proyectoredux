const CarItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{ borderBotton: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delOneFromCart(id)}>eliminar uno </button>
      <br />
      <button onClick={() => delAllFromCart(id, true)}>eliminar todos </button>
    </div>
  );
};

export default CarItem;
