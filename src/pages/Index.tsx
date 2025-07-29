import { useState } from 'react';
import WeddingNav from '@/components/WeddingNav';
import AboutSection from '@/components/sections/AboutSection';
import VenueSection from '@/components/sections/VenueSection';
import StorySection from '@/components/sections/StorySection';
import DetailsSection from '@/components/sections/DetailsSection';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'venue':
        return <VenueSection />;
      case 'story':
        return <StorySection />;
      case 'details':
        return <DetailsSection />;
      case 'gallery':
        return <GallerySection />;
      case 'faq':
        return <FAQSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen">
      <WeddingNav 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
