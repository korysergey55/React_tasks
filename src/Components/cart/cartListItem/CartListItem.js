import React from "react";
const CartListItem = ({ product, removeFromCart }) => {
  const { name, price, id } = product;
  const remove = () => removeFromCart(id);
  return (
    <li>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={remove}>Remove</button>
    </li>
  );
};

export default CartListItem;
