import React from "react";
import PropTypes from "prop-types";

const LaptopListItem = ({ ...laptop }) => {
  console.log("data", laptop);
  return (
    <li>
      {/* <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>
        Sale:{" "}
        <span>
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </span>
      </p>
      <p>{description}</p>

      <p>
        Цена: <span>{price}</span>
      </p> */}
    </li>
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
