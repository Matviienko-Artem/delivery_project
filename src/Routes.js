import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import map from 'lodash/map';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';

const routes = {
  shops: {
    path: '/',
    element: ShopPage,
    name: 'Shops',
    icon: StoreOutlinedIcon,
  },
  cart: {
    path: '/cart',
    element: CartPage,
    name: 'Cart',
    icon: ShoppingCartOutlinedIcon,
  },
  default: {
    path: '*',
    element: ShopPage,
    name: 'default',
  },
};

function Routes() {
  return (
    <ReactRoutes>
      {map(routes, ({ path, element }, key) => (
        <Route key={key} path={path} element={element} />
      ))}
    </ReactRoutes>
  );
}

export default Routes;
