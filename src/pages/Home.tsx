import { useEffect } from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import NeedFinder from '../components/NeedFinder';
import OriginStory from '../components/OriginStory';
import SocialProof from '../components/SocialProof';
import HomeFaq from '../components/HomeFaq';
import NewsletterSignup from '../components/NewsletterSignup';
import { applyDefaultSeo } from '../lib/seo';

export default function Home() {
  useEffect(() => {
    applyDefaultSeo();
  }, []);

  return (
    <>
      <Hero />
      <Products />
      <NeedFinder />
      <OriginStory />
      <SocialProof />
      <HomeFaq />
      <NewsletterSignup />
    </>
  );
}
