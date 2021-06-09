import React from "react";
import styles from "./PhoneListItem.module.css";
import { ColorItemLI, ListItemContainer } from "./PhoneListItemStyled";

const getColor = (color) => {
  switch (color) {
    case "red":
      return styles.red;
    case "blue":
      return styles.blue;
    case "white":
      return styles.white;
    case "green":
      return styles.green;

    default:
      return styles.green;
  }
};

const PhoneListItem = ({ phone }) => {
  return (
    <ListItemContainer>
      <div className='content'>
        <h3 className='listItemTitle'>{phone.name}</h3>
        <img src={phone.image} alt={phone.name} className='listItemImage' />
        <p className={phone.isSale ? styles.green : styles.red}>
          Sale:{" "}
          {phone.isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p>{phone.description.slice(0, 100) + "..."}</p>
        <ul className='colorsList'>
          {phone.colors.map((color) => (
            <ColorItemLI key={color} color={color} />
          ))}
          {/* {phone.colors.map((color) => (
            <li key={color} className={getColor(color)} />
          ))} */}
        </ul>
        <p>
          Цена: <span>{phone.price}</span>
        </p>
      </div>
    </ListItemContainer>
  );
};

export default PhoneListItem;
