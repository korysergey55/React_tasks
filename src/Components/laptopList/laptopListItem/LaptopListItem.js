import React from "react";
import PropTypes from "prop-types";
import { ListItemContainer } from "./LaptopListItemStyled";

const LaptopListItem = ({ laptop }) => {
  return (
    <ListItemContainer>
      <div className='content'>
        <h3 className='listItemTitle'>{laptop.name}</h3>
        <div className='imageWrapper'>
          <img src={laptop.image} alt={laptop.name} className='listItemImage' />
        </div>
        <p className='priceTitle'>
          {laptop.isSale ? (
            <>
              <span className='withSalePrice'>{laptop.price - 1000} </span>
              <span className='withoutSalePrice'>{laptop.price}</span>
            </>
          ) : (
            <span className='withoutSalePrice'>{laptop.price}</span>
          )}
          {" грн"}
        </p>
      </div>
    </ListItemContainer>
  );
};

export default LaptopListItem;

LaptopListItem.propTypes = {
  laptop: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    isSale: PropTypes.bool,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }),
};
