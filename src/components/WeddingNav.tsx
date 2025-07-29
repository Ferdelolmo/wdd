import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import LanguageSelector from '@/components/LanguageSelector';

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
    { id: 'faq', label: t.nav.faq }
  ];

  return (
    <nav className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50 shadow-soft">
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
          <div className="hidden md:flex items-center gap-8">
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
            <LanguageSelector />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Navigation - Always visible on mobile */}
        <div className="md:hidden mt-4 pb-4 border-t border-border">
          <div className="grid grid-cols-2 gap-3 pt-4">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => onSectionChange(section.id)}
                className="justify-center text-xs font-medium h-10"
              >
                {section.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default WeddingNav;