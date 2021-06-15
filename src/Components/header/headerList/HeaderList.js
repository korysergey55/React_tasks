import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";

import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = ({ data, hideModal }) => {
  return (
    <HeaderNavigation>
      <ul className='navigationList'>
        {mainRoutes.map((route) => (
          <li key={route.path} className='navigationListItem' key={route.path}>
            <NavLink
              to={route.path}
              exact={route.exact}
              className='navigationListItemAnchor'
              activeClassName='navigationListItemActive'
              onClick={hideModal}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};

export default HeaderList;
