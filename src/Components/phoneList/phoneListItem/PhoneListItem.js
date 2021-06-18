import React from "react";
import { ColorItemLI, ListItemContainer } from "./PhoneListItemStyled";
import { withRouter } from "react-router-dom";

const PhoneListItem = ({ phone, addToCart, history, match, location }) => {
  const addProduct = () => {
    addToCart(phone);
  };
  const openDetails = () => {
    history.push({
      pathname: `${match.path}/${phone.id}`,
      state: { from: location.pathname },
    });
  };
  return (
    <ListItemContainer>
      <div className='content'>
        <h3 className='listItemTitle'>{phone.name}</h3>
        <div className='imageWrapper'>
          <img src={phone.image} alt={phone.name} className='listItemImage' />
        </div>

        {/* <ul className='colorsList'>
          {phone.colors.map((color) => (
            <ColorItemLI key={color} color={color} />
          ))}
        </ul> */}
        <p className='priceTitle'>
          {phone.isSale ? (
            <>
              <span className='withSalePrice'> {phone.price}</span>{" "}
              <span className='withoutSalePrice'>
                {(phone.price - phone.price / 10).toFixed(0)}
              </span>
            </>
          ) : (
            <span className='withoutSalePrice'>{phone.price}</span>
          )}
          {" грн"}
        </p>
        <div className='options'>
          <button
            onClick={addProduct}
            className='detailsButton'
            onClick={openDetails}>
            Детальнее
          </button>
          <button onClick={addProduct} className='addToCartButton'>
            Добавить в корзину
          </button>
        </div>
      </div>
    </ListItemContainer>
  );
};

export default withRouter(PhoneListItem);
