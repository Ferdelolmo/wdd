import GallerySection from '@/components/sections/GallerySection';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const Gallery = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-romantic">
      <div className="fixed top-4 left-4 z-50">
        <Link to="/more">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <Home className="w-4 h-4 mr-2" />
            {language === 'es' ? 'Volver' :
              language === 'it' ? 'Indietro' :
                language === 'scn' ? 'Nnaccula' :
                  'Back'}
          </Button>
        </Link>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <GallerySection />
    </div>
  );
};

export default Gallery;
