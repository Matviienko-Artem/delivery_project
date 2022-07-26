import React, { memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';

import { Drawer } from './components/Drawer';
import { filteredRoutes, shouldShowBadge } from './constants';
import { useStyles } from './styles';
import { ConditionalWrapper } from '../../ui/ConditionalWrapper';

const projectName = 'Yours Delivery';

export const NavBar = memo(() => {
  const cart = useSelector(state => state.cart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [setIsDrawerOpen, isDrawerOpen]);

  const classes = useStyles({ link, active });

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div">
            {projectName}
          </Typography>

          <Box>
            {filteredRoutes.map(route => (
              <NavLink
                key={route.name}
                to={route.path}
                className={({ isActive }) => clsx(classes.link, { [classes.active]: isActive })}
              >
                <ConditionalWrapper
                  condition={shouldShowBadge(route.name)}
                  wrapper={children => (
                    <Badge badgeContent={cart.length} color="secondary">
                      {children}
                    </Badge>
                  )}
                >
                  <Button endIcon={route.icon}>{route.name}</Button>
                </ConditionalWrapper>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          projectName={projectName}
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer()}
          badgeContent={cart.length}
        />
      </Box>
    </>
  );
});

NavBar.displayName = 'NavBar';
