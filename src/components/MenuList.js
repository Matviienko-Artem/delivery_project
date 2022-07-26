import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import MenuListItem from './MenuListItem';

function MenuList({ shops, current }) {
  const [currentMenu, setCurrentMenu] = useState();

  useEffect(() => {
    setCurrentMenu(current.menu);
  }, [shops, current]);

  return (
    <Grid container spacing={2}>
      {currentMenu &&
        currentMenu.map(menuItem => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={menuItem._id}>
            <MenuListItem menuItem={menuItem} />
          </Grid>
        ))}
    </Grid>
  );
}

export default MenuList;
