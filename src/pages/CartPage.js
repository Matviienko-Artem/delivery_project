import React from 'react';
import Grid from '@mui/material/Grid';

import CartList from '../components/CartList';
import UserForm from '../components/UserForm';

function CartPage() {
  return (
    <Grid container spacing={1} p={1}>
      <Grid item xs={12} md={6} textAlign="center">
        <CartList />
      </Grid>
      <Grid item xs={12} md={6}>
        <UserForm />
      </Grid>
    </Grid>
  );
}

export default CartPage;
