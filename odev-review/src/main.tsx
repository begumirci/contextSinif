import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './store/provider.tsx';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<>Loading...</>}>
      <AuthProvider>
        <ThemeProvider theme={createTheme()}>
          <SnackbarProvider maxSnack={3}>
            <CssBaseline />
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);
