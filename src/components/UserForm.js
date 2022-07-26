import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack, TextField, Box } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import { deleteCart } from '../store/cartSlice';
import { createNewOrder } from '../actions';

function UserForm() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const totalOrderPrice = cart.reduce((acc, value) => acc + value.total, 0);

    const userOrder = {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      address: inputAddress,
      cart,
      totalOrderPrice,
    };

    createNewOrder(userOrder);

    dispatch(deleteCart());
    setInputName('');
    setInputEmail('');
    setInputPhone('');
    setInputAddress('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="column" justifyContent="center" spacing={2}>
        <TextField
          required
          id="user_name"
          label="Name"
          variant="outlined"
          size="small"
          value={inputName}
          onChange={e => setInputName(e.target.value)}
        />
        <TextField
          required
          id="user_email"
          label="Email"
          variant="outlined"
          size="small"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
        />
        <TextField
          required
          id="user_phone"
          label="Phone"
          variant="outlined"
          size="small"
          value={inputPhone}
          onChange={e => setInputPhone(e.target.value)}
        />
        <TextField
          required
          id="user_address"
          label="Address"
          variant="outlined"
          size="small"
          value={inputAddress}
          onChange={e => setInputAddress(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          startIcon={<LocalDiningIcon />}
          type="submit"
        >
          submit
        </Button>
      </Stack>
    </Box>
  );
}

export default UserForm;
