import React from 'react';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { theme } from './module/mui/index';
import { RoutingSystem } from './routes';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RoutingSystem />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
