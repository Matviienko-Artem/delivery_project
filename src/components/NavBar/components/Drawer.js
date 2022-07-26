import React, { memo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Badge,
  Box,
  Divider,
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import { filteredRoutes, shouldShowBadge } from '../constants';
import { ConditionalWrapper } from '../../../ui/ConditionalWrapper';

// eslint-disable-next-line react/prop-types
export const Drawer = memo(({ projectName, isOpen, toggleDrawer, badgeContent }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onListItemClick = useCallback(path => {
    return () => {
      navigate(path);
    };
  }, []);

  return (
    <MUIDrawer
      anchor="right"
      variant="temporary"
      open={isOpen}
      onClose={toggleDrawer}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box onClick={toggleDrawer}>
        <Typography variant="h6">{projectName}</Typography>

        <Divider />

        <List>
          {filteredRoutes.map(route => (
            <ListItem key={route.name} disablePadding>
              <ListItemButton
                selected={location.pathname === route.path}
                onClick={onListItemClick(route.path)}
              >
                <ConditionalWrapper
                  condition={shouldShowBadge(route.name)}
                  wrapper={children => (
                    <Badge badgeContent={badgeContent} color="secondary">
                      {children}
                    </Badge>
                  )}
                >
                  <ListItemText primary={route.name} />
                  <ListItemIcon>{route.icon}</ListItemIcon>
                </ConditionalWrapper>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MUIDrawer>
  );
});

Drawer.displayName = 'Drawer';
