/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import Products from './components/Products';
import OriginStory from './components/OriginStory';
import SocialProof from './components/SocialProof';
import InteractiveTools from './components/InteractiveTools';
import Comparison from './components/Comparison';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CoreValues />
        <Products />
        <OriginStory />
        <SocialProof />
        <InteractiveTools />
        <Comparison />
        <Blogs />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

