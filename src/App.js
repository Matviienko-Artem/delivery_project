import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import NavBar from './components/NavBar';
import Routes from './Routes';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />

      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <Routes />
      </Box>
    </Box>
  );
}

export default App;
