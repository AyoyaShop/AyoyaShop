import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import {CartProvider} from './context/CartContext';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);

// data-ssr marks markup built at deploy time for this very address (index.html clears it otherwise).
if (root.dataset.ssr) hydrateRoot(root, app);
else createRoot(root).render(app);
