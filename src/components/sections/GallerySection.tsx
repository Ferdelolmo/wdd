import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

// Import gallery images - using uploaded images
const gallery1 = 'https://i.imgur.com/HzABhvA.jpeg'; // Rupit
const gallery2 = 'https://i.imgur.com/tU5SEYi.jpeg'; // Indonesia
const gallery3 = 'https://i.imgur.com/GIFLuyd.jpeg'; // Figon
const gallery4 = 'https://i.imgur.com/oEAAeCe.jpeg'; // Templo
const gallery5 = 'https://i.imgur.com/tPV3MUZ.jpeg'; // Singapur
const gallery6 = 'https://i.imgur.com/Q4kEVhH.jpeg'; // SuperIlla
const gallery7 = 'https://i.imgur.com/q4vh5Li.jpeg'; // Lisboa
const gallery8 = 'https://i.imgur.com/0Mmh0ij.jpeg'; // Madeira
const gallery9 = 'https://i.imgur.com/KRNVCcc.jpeg'; // Tenerife
const gallery10 = 'https://i.imgur.com/4OKB5L6.jpeg'; // Bromo
const gallery11 = 'https://i.imgur.com/yWvHlpi.jpeg'; // Chauen
const gallery12 = 'https://i.imgur.com/gZYajPN.jpeg'; // Madrid

const GallerySection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [activeHeartIndex, setActiveHeartIndex] = useState<number | null>(null);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  const images = [
    { src: gallery1, alt: 'Adventure in tropical destination' },
    { src: gallery2, alt: 'Romantic dinner date' },
    { src: gallery3, alt: 'Mountain adventure together' },
    { src: gallery4, alt: 'Exploring ancient temples' },
    { src: gallery5, alt: 'City night views' },
    { src: gallery6, alt: 'Casual day together' },
    { src: gallery7, alt: 'European city exploration' },
    { src: gallery8, alt: 'Traditional village visit' },
    { src: gallery9, alt: 'Tenerife' },
    { src: gallery10, alt: 'Bromo' },
    { src: gallery11, alt: 'Chauen' },
    { src: gallery12, alt: 'Madrid' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLike = (index: number) => {
    const newLiked = new Set(likedImages);
    if (!newLiked.has(index)) {
      newLiked.add(index);
      setLikedImages(newLiked);
    }

    // Trigger animation
    setActiveHeartIndex(index);
    setTimeout(() => setActiveHeartIndex(null), 800);
  };

  const handleImageClick = (index: number) => {
    if (clickTimeout) {
      // Double click detected
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      handleLike(index);
    } else {
      // Single click potential
      const timeout = setTimeout(() => {
        openModal(index);
        setClickTimeout(null);
      }, 250);
      setClickTimeout(timeout);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-wedding-cream to-wedding-rose/20 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer shadow-romantic hover:shadow-xl transition-all duration-300 border-0 top-0"
              onClick={() => handleImageClick(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Like Indicator (Small Heart) */}
                {likedImages.has(index) && (
                  <div className="absolute top-4 right-4 z-20 animate-fade-in">
                    <Heart className="w-6 h-6 text-red-500 fill-red-500 drop-shadow-md" />
                  </div>
                )}

                {/* Pop-up Heart Animation */}
                {activeHeartIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    <Heart className="w-24 h-24 text-white fill-white animate-bounce-in drop-shadow-xl" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;