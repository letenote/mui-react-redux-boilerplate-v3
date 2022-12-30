import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from 'Config/Theme';
import './App.css';
const Routes = lazy(() => import('Routes'));

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Suspense fallback={"loading app"}>
        <Routes />
      </Suspense>
    </ThemeProvider>
  )
}

export default App;
