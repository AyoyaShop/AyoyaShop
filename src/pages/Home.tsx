import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import InteractiveTools from '../components/InteractiveTools';
import CoreValues from '../components/CoreValues';
import Products from '../components/Products';
import ProductGrid from '../components/ProductGrid';
import SimilarProductsComparison from '../components/SimilarProductsComparison';
import OriginStory from '../components/OriginStory';
import SocialProof from '../components/SocialProof';
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
      <FeaturedCategories />
      <InteractiveTools />
      <CoreValues />
      <Products />
      <ProductGrid />
      <SimilarProductsComparison />
      <OriginStory />
      <SocialProof />
      <Comparison />
      <Blogs />
    </>
  );
}
