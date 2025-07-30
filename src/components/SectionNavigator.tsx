import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

interface SectionNavigatorProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const SectionNavigator = ({ currentSection, onSectionChange }: SectionNavigatorProps) => {
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

  const currentIndex = sections.findIndex(section => section.id === currentSection);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < sections.length - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      onSectionChange(sections[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      onSectionChange(sections[currentIndex + 1].id);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 bg-background/90 backdrop-blur-md border-2 border-primary/20 rounded-full px-8 py-3 shadow-lg shadow-primary/10">
        <Button
          variant="outline"
          size="lg"
          onClick={goToPrevious}
          disabled={!hasPrevious}
          className="rounded-full w-14 h-14 p-0 border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
        >
          <ChevronLeft className="w-7 h-7 text-primary" />
        </Button>

        <div className="text-center min-w-[120px]">
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {currentIndex + 1} / {sections.length}
          </div>
          <div className="text-sm font-medium text-foreground">
            {sections[currentIndex]?.label}
          </div>
        </div>

        <Button
          variant="outline"
          size="lg"
          onClick={goToNext}
          disabled={!hasNext}
          className="rounded-full w-14 h-14 p-0 border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
        >
          <ChevronRight className="w-7 h-7 text-primary" />
        </Button>
      </div>
    </div>
  );
};

export default SectionNavigator;