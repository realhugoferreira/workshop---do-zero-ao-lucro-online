import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Modules from './components/Modules';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FadeInSection from './components/FadeInSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#050711] font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FadeInSection>
          <VideoSection />
        </FadeInSection>
        <FadeInSection>
          <Modules />
        </FadeInSection>
        <FadeInSection>
          <Bonuses />
        </FadeInSection>
        <FadeInSection>
          <Testimonials />
        </FadeInSection>
        <FadeInSection>
          <Pricing />
        </FadeInSection>
        <FadeInSection>
          <FAQ />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;