import React from "react";
import { connect } from "react-redux";
import { createOrder, removeFromCartByID } from "../../redux/cart/cartActions";
import CartListItem from "./cartListItem/CartListItem";
import { CartListContainer, CartListContainerWrapper } from "./CartListStyled";

const CartList = ({ cart, removeFromCartByID, createOrder }) => {
  const getTotalPrice = () =>
    cart.reduce((acc, product) => {
      acc += Number(product.price);
      return acc;
    }, 0);
  return (
    <CartListContainerWrapper>
      {cart.length ? (
        <>
          <CartListContainer>
            {cart.map((product) => (
              <CartListItem
                key={product.id}
                product={product}
                removeFromCart={removeFromCartByID}
              />
            ))}
          </CartListContainer>
          <div className='totalInfo'>
            <p className='totalInfoTitle'>Общая сумма заказа:</p>
            <p className='totalInfoPrice'>
              {getTotalPrice()} <span className='totalInfoTitle'>грн</span>
            </p>
          </div>
          <button type='button' onClick={createOrder} className='orderButton'>
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товары в корзину</p>
      )}
    </CartListContainerWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.items,
  };
};

const mapDispatchToProps = { removeFromCartByID, createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
