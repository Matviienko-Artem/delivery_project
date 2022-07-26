import React from 'react';
import List from '@mui/material/List';

import ShopListItem from './ShopListItem';

function ShopList({ shops, current, changeCurrent }) {
  return (
    <List sx={{ p: '0', height: '100%', borderRight: { md: '1px solid #1976d2' } }}>
      {shops.map(shop => (
        <ShopListItem key={shop._id} shop={shop} current={current} changeCurrent={changeCurrent} />
      ))}
    </List>
  );
}

export default ShopList;
