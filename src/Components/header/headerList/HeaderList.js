import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";

import { HeaderNavigation } from "./HeaderListStyled";

const HeaderList = ({ data, hideModal, match }) => {
  console.log("match :>> ", match);
  return (
    <HeaderNavigation>
      <ul className='navigationList'>
        {mainRoutes.map((route) => (
          <li className='navigationListItem' key={route.path}>
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

export default withRouter(HeaderList);
