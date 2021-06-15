import React from "react";
import { productsRoutes } from "../routes/productsRoutes";
import { NavLink } from "react-router-dom";
import { ProductsPageContainer } from "./ProductsPageStyled";

const ProductsPage = ({ match, phones, laptops, addToCart }) => {
  return (
    <ProductsPageContainer>
      <ul className='navigationList'>
        {productsRoutes.map((route) => (
          <li className='navigationListItem' key={route.path}>
            <NavLink
              to={match.url + route.path}
              exact={route.exact}
              className='navigationListItemAnchor'>
              {route.name}
            </NavLink>
          </li>
        ))}
        {/* <Section title='Мобильные телефоны'>
        <PhoneList phones={phones} addToCart={addToCart} />
      </Section>
      <Section title='Ноутбуки'>
        <LaptopList laptops={laptops} addToCart={addToCart} />
      </Section> */}
      </ul>
    </ProductsPageContainer>
  );
};

export default ProductsPage;
