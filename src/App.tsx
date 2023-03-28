import React from 'react';
import './App.css';

import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { Album } from './components/Album';
import { AlbumsProvider } from './context/AlbumsProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlbumsProvider>
        <Layout>
          <Album />
        </Layout>
      </AlbumsProvider>
    </ThemeProvider>
  );
}

export default App;
