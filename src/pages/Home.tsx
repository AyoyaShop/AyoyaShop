import { useEffect } from 'react';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import Products from '../components/Products';
import ProductGrid from '../components/ProductGrid';
import OriginStory from '../components/OriginStory';
import SocialProof from '../components/SocialProof';
import InteractiveTools from '../components/InteractiveTools';
import Comparison from '../components/Comparison';
import Blogs from '../components/Blogs';
import { applyDefaultSeo } from '../lib/seo';

export default function Home() {
  useEffect(() => {
    applyDefaultSeo();
  }, []);

  return (
    <>
      <Hero />
      <CoreValues />
      <Products />
      <ProductGrid />
      <OriginStory />
      <SocialProof />
      <InteractiveTools />
      <Comparison />
      <Blogs />
    </>
  );
}
