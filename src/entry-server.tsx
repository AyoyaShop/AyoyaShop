// Used only at build time by scripts/prerender.ts to write each page's HTML.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppLayout } from './App';
import { CartProvider } from './context/CartContext';

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <CartProvider>
        <StaticRouter location={url}>
          <AppLayout />
        </StaticRouter>
      </CartProvider>
    </StrictMode>
  );
}
