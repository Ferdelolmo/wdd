import { useState } from 'react';
import { Heart, Menu, X, MapPin, Camera, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import LanguageSelector from '@/components/LanguageSelector';
import { Link } from 'react-router-dom';

interface WeddingNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const WeddingNav = ({ activeSection, onSectionChange }: WeddingNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const sections = [
    { id: 'about', label: t.nav.aboutUs },
    { id: 'venue', label: t.nav.venue },
    { id: 'story', label: t.nav.ourStory },
    { id: 'details', label: t.nav.weddingDetails },
    { id: 'faq', label: t.nav.faq },
    { id: 'gallery', label: t.nav.gallery }
  ];

  const newSections = [
    { 
      href: '/Avila', 
      label: language === 'es' ? 'Ávila' : language === 'it' ? 'Ávila' : language === 'scn' ? 'Ávila' : 'Ávila',
      icon: MapPin 
    },
    { 
      href: '/Sicilia', 
      label: language === 'es' ? 'Sicilia' : language === 'it' ? 'Sicilia' : language === 'scn' ? 'Sicilia' : 'Sicily',
      icon: Camera 
    },
    { 
      href: '/more', 
      label: language === 'es' ? 'Más' : language === 'it' ? 'Altro' : language === 'scn' ? 'Autu' : 'More',
      icon: Plus 
    }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onSectionChange('about')}
            >
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="font-script text-2xl text-primary">Fernando & Chiara</span>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onSectionChange(section.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              {newSections.map((section) => (
                <Link
                  key={section.href}
                  to={section.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-primary text-muted-foreground flex items-center gap-1"
                >
                  <section.icon className="w-4 h-4" />
                  {section.label}
                </Link>
              ))}
              <LanguageSelector />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onSectionChange('about')}
            >
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-script text-xl text-primary">Fernando & Chiara</span>
            </div>

            <LanguageSelector />
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => onSectionChange(section.id)}
                className="justify-center text-xs font-medium h-9"
              >
                {section.label}
              </Button>
            ))}
          </div>
          
          {/* New Sections */}
          <div className="grid grid-cols-3 gap-2">
            {newSections.map((section) => (
              <Link key={section.href} to={section.href}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center text-xs font-medium h-9 flex items-center gap-1"
                >
                  <section.icon className="w-3 h-3" />
                  {section.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default WeddingNav;