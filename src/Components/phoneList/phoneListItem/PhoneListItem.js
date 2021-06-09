import React from "react";
import { ColorItemLI, ListItemContainer } from "./PhoneListItemStyled";

const PhoneListItem = ({ phone }) => {
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
              <span className='withSalePrice'>{phone.price - 1000} </span>
              <span className='withoutSalePrice'>{phone.price}</span>
            </>
          ) : (
            <span className='withoutSalePrice'>{phone.price}</span>
          )}
          {" грн"}
        </p>
      </div>
    </ListItemContainer>
  );
};

export default PhoneListItem;
