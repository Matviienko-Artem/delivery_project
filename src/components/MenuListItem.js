import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import { addToCart } from '../store/cartSlice';

function MenuListItem({ menuItem }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 500 }} key={menuItem.dish}>
      <CardMedia component="img" height="140" image={menuItem.img} alt="dish image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {menuItem.dish}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {menuItem.price + '$'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'right' }}>
        <Button
          size="small"
          endIcon={<AddShoppingCartOutlinedIcon />}
          onClick={() => dispatch(addToCart({ ...menuItem, amount: 1 }))}
        >
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default MenuListItem;
