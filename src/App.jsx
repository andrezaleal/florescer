import React from 'react';
import { Normalize } from 'styled-normalize';
import Routes from './routes/routes';
import Theme from './styles/Theme';
import GlobalStyle from './styles/global';
import AuthProvider from './services/auth';


function App() {
  return (
    <Theme>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
