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
    <div className="mt-8 mb-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-4 bg-background/90 backdrop-blur-md border-2 border-primary/20 rounded-full px-6 py-2 shadow-lg shadow-primary/10">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            disabled={!hasPrevious}
            className="rounded-full w-10 h-10 p-0 border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </Button>

          <div className="text-center min-w-[100px]">
            <div className="text-sm font-medium text-foreground">
              {sections[currentIndex]?.label}
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            disabled={!hasNext}
            className="rounded-full w-10 h-10 p-0 border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigator;