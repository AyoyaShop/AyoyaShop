import { useEffect } from 'react';
import Hero from '../components/Hero';
import HomeShowcase from '../components/HomeShowcase';
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
      <HomeShowcase />
      <SocialProof />
      <HomeFaq />
      <NewsletterSignup />
    </>
  );
}
