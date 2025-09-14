import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const speeches = [
  { title: 'Speech 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Speech 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Speech 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { title: 'Speech 4', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { title: 'Speech 5', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
];

const Speeches = () => {
  const { language } = useLanguage();

  const titles = {
    es: 'Discursos',
    it: 'Discorsi',
    scn: 'Discursi',
    en: 'Speeches',
  };

  return (
    <div className="min-h-screen bg-gradient-romantic py-20">
      <div className="fixed top-4 left-4 z-50">
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
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-script text-5xl md:text-7xl text-primary mb-4">
            {titles[language]}
          </h1>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {speeches.map((speech, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{speech.title}</AccordionTrigger>
                <AccordionContent>
                  {speech.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Speeches;