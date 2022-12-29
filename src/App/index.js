import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Config/theme';
import './App.css';
import Routes from '../Routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App;
