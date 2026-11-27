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
import PolicyPage from './pages/PolicyPage';
import NotFound from './pages/NotFound';
import ScrollToHash from './components/ScrollToHash';
import PromoNotice from './components/PromoNotice';
import PillarPage from './pages/PillarPage';
import TetSetsPage from './pages/TetSetsPage';
import { PILLARS } from './data/pillars';

// The router is chosen by the caller: the browser's here, a static one when pages are pre-rendered.
export function AppLayout() {
  return (
      <div className="min-h-screen">
        <ScrollToHash />
        <Navbar />
        <PromoNotice />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/san-pham" element={<ProductCatalog />} />
            <Route path="/san-pham/:id" element={<ProductDetail />} />
            <Route path="/thao-moc" element={<PillarPage key="thao-moc" pillar={PILLARS[0]} />} />
            <Route path="/tram-huong" element={<PillarPage key="tram-huong" pillar={PILLARS[1]} />} />
            <Route path="/phong-thuy" element={<PillarPage key="phong-thuy" pillar={PILLARS[2]} />} />
            <Route path="/bo-qua-tet" element={<TetSetsPage />} />
            <Route path="/ve-chung-toi" element={<AboutPage />} />
            <Route path="/hoi-dap" element={<FaqPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/chinh-sach/:slug" element={<PolicyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <CartDrawer />
      </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
