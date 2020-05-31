import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Pages/Main';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from './Theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavBar sticky />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
