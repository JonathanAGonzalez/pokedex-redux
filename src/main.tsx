import React from 'react';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { theme } from './module/mui/index';
import { RoutingSystem } from './routes';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RoutingSystem />
      </Provider>
    </ThemeProvider>
    //{' '}
  </React.StrictMode>
);
