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
            <p className='totalInfoTitle'>Total price in order:</p>
            <p className='totalInfoPrice'>
              {getTotalPrice()} <span className='totalInfoTitle'>UAH</span>
            </p>
          </div>
          <button type='button' onClick={createOrder} className='orderButton'>
            Checkout
          </button>
        </>
      ) : (
        <p>Cart is empty!</p>
      )}
    </CartListContainerWrapper>
  );
};

const mapStateToProps = (state) => ({ cart: state.cart.items });

const mapDispatchToProps = { removeFromCartByID, createOrder };

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
