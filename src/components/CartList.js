import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ButtonGroup,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { incrementAmount, decrementAmount } from '../store/cartSlice';

function CartList() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalOrderPrice = cart.reduce((acc, value) => acc + value.total, 0);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <List sx={{ height: { md: 250 }, overflow: 'auto' }}>
            {cart.map(cartItem => {
              return (
                <ListItem
                  key={cartItem.dish}
                  secondaryAction={
                    <ButtonGroup disableElevation>
                      <Button onClick={() => dispatch(incrementAmount(cartItem))}>
                        <AddIcon />
                      </Button>
                      <Button onClick={() => dispatch(decrementAmount(cartItem))}>
                        <RemoveIcon />
                      </Button>
                    </ButtonGroup>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={cartItem.img} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={cartItem.dish}
                    secondary={
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {cartItem.amount} * {cartItem.price}$ = {cartItem.total}$
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
          <Typography
            sx={{ display: 'inline', fontSize: 20 }}
            component="h2"
            variant="body1"
            color="text.primary"
          >
            Total: {totalOrderPrice}$
          </Typography>
        </>
      ) : (
        <Typography
          sx={{ display: 'inline', fontSize: 20 }}
          component="h2"
          variant="body1"
          color="text.primary"
        >
          Yours cart is empty...
        </Typography>
      )}
    </>
  );
}

export default CartList;
