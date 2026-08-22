/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import ScrollToHash from './components/ScrollToHash';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <ScrollToHash />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/san-pham" element={<ProductCatalog />} />
            <Route path="/san-pham/:id" element={<ProductDetail />} />
            <Route path="/ve-chung-toi" element={<AboutPage />} />
            <Route path="/hoi-dap" element={<FaqPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <CartDrawer />
      </div>
    </BrowserRouter>
  );
}
