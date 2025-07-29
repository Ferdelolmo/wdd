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
    { id: 'gallery', label: t.nav.gallery },
    { id: 'faq', label: t.nav.faq }
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
      <div className="flex items-center justify-between bg-card/95 backdrop-blur-sm border border-border rounded-lg px-6 py-4 mx-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          disabled={!hasPrevious}
          className="rounded-full w-12 h-12 p-0 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          disabled={!hasNext}
          className="rounded-full w-12 h-12 p-0 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default SectionNavigator;