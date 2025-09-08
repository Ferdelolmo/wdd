import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WeddingFooter = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-card/60 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-script text-xl text-primary">Fernando & Chiara</span>
          </div>

          {/* Date */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {language === 'es' ? '21 de Junio, 2026 • Ávila, España' : 
               language === 'it' ? '21 Giugno, 2026 • Ávila, Spagna' : 
               language === 'scn' ? '21 Giugnu, 2026 • Ávila, Spagna' : 
               'June 21, 2026 • Ávila, Spain'}
            </p>
          </div>

          {/* RSVP Button */}
          <Button 
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.open('https://forms.gle/Pu5jfecVs7exJadh7', '_blank')}
          >
            {language === 'es' ? 'Confirmar' : 
             language === 'it' ? 'Conferma' : 
             language === 'scn' ? 'Cunferma' : 
             'RSVP'}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;