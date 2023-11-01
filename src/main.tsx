import { ThemeProvider } from '@lobehub/ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app.tsx';
import './global.css';

const root = createRoot(document.querySelector('#root')!);

root.render(
  <StrictMode>
    <ThemeProvider themeMode={'auto'}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
