import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './module/mui/index';
import { RoutingSystem } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RoutingSystem />
    </ThemeProvider>
  </React.StrictMode>
);
