import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

// REPLACE THESE WITH YOUR ACTUAL CLOUDINARY URLS
const GALLERY_IMAGES = [
  { id: 1, src: 'https://i.imgur.com/HUJXAFf.jpeg', alt: 'Wedding moment 1' },
  { id: 2, src: 'https://i.imgur.com/JdtoZzb.jpeg', alt: 'Wedding moment 2' },
  { id: 3, src: 'https://i.imgur.com/LdNKreo.jpeg', alt: 'Wedding moment 3' },
  { id: 4, src: 'https://i.imgur.com/lmB8K4X.jpeg', alt: 'Wedding moment 4' },
  { id: 5, src: 'https://i.imgur.com/j7X6MMG.jpeg', alt: 'Wedding moment 5' },
  { id: 6, src: 'https://i.imgur.com/AQGaHOV.jpeg', alt: 'Wedding moment 6' },
  { id: 7, src: 'https://i.imgur.com/XpAcVLw.jpeg', alt: 'Wedding moment 7' },
  { id: 8, src: 'https://i.imgur.com/aBSbUod.jpeg', alt: 'Wedding moment 8' },
  { id: 9, src: 'https://i.imgur.com/jpXdRy7.jpeg', alt: 'Wedding moment 9' },
];

const Pictures = () => {
  const { language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const titles: Record<string, string> = {
    es: 'Fotos',
    it: 'Foto',
    scn: 'Fotografii',
    en: 'Pictures',
  };

  const descriptions: Record<string, string> = {
    es: 'Aquí puedes ver y compartir los recuerdos de la boda',
    it: 'Qui puoi vedere e condividere i ricordi del matrimonio',
    scn: 'Ccà pôi vìdiri e spartìri li ricordi dû matrimoniu',
    en: 'Here you can view and share the wedding memories',
  };

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-romantic py-20 flex flex-col relative">
      <div className="fixed top-4 left-4 z-40">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <Home className="w-4 h-4 mr-2" />
            {language === 'es' ? 'Inicio' :
              language === 'it' ? 'Home' :
                language === 'scn' ? 'Casa' :
                  'Home'}
          </Button>
        </Link>
      </div>

      <div className="fixed top-4 right-4 z-40">
        <LanguageSelector />
      </div>

      <div className="container mx-auto px-4 flex-1 flex flex-col z-10">
        <div className="text-center mb-12">
          <h1 className="font-script text-5xl md:text-7xl text-primary mb-4">
            {titles[language] || titles.en}
          </h1>
          <p className="text-muted-foreground text-lg">
            {descriptions[language] || descriptions.en}
          </p>
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {GALLERY_IMAGES.map((img, index) => (
              <div
                key={img.id}
                className="relative aspect-square overflow-hidden rounded-xl shadow-romantic cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Slideshow */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
            onClick={showPrev}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Main Image */}
          <div className="w-full h-full p-4 md:p-12 flex items-center justify-center">
            <img
              src={GALLERY_IMAGES[selectedImageIndex].src}
              alt={GALLERY_IMAGES[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain drop-shadow-2xl select-none"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing lightbox
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50"
            onClick={showNext}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest text-sm">
            {selectedImageIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pictures;
