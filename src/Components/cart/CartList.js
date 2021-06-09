import React from "react";
import CartListItem from "./cartListItem/CartListItem";
const CartList = ({ cart, removeFromCart, removeAllFromCart }) => {
  return (
    <div className='cartContainer'>
      {cart.length ? (
        <>
          <ul className='cartList'>
            {cart.map((product) => (
              <CartListItem
                key={product.id}
                product={product}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>
          <button type='button' onClick={removeAllFromCart}>
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товары в корзину</p>
      )}
    </div>
  );
};

export default CartList;
