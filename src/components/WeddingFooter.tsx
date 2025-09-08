import { Heart, MapPin, Camera, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const WeddingFooter = () => {
  const { language } = useLanguage();

  const footerLinks = [
    {
      icon: MapPin,
      label: language === 'es' ? 'Ávila' : 
             language === 'it' ? 'Ávila' : 
             language === 'scn' ? 'Ávila' : 
             'Ávila',
      description: language === 'es' ? 'Descubre la ciudad' : 
                   language === 'it' ? 'Scopri la città' : 
                   language === 'scn' ? 'Scopri a cità' : 
                   'Discover the city',
      href: '/Avila'
    },
    {
      icon: Camera,
      label: language === 'es' ? 'Sicilia' : 
             language === 'it' ? 'Sicilia' : 
             language === 'scn' ? 'Sicilia' : 
             'Sicily',
      description: language === 'es' ? 'El hogar de Chiara' : 
                   language === 'it' ? 'La casa di Chiara' : 
                   language === 'scn' ? 'A casa di Chiara' : 
                   'Chiara\'s homeland',
      href: '/Sicilia'
    },
    {
      icon: Plus,
      label: language === 'es' ? 'Más' : 
             language === 'it' ? 'Altro' : 
             language === 'scn' ? 'Autu' : 
             'More',
      description: language === 'es' ? 'Menú, discursos y más' : 
                   language === 'it' ? 'Menu, discorsi e altro' : 
                   language === 'scn' ? 'Menu, discursi e autu' : 
                   'Menu, speeches & more',
      href: '/more'
    }
  ];

  return (
    <footer className="bg-card/60 backdrop-blur-md border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Secondary Navigation */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {footerLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.href} to={link.href} className="group">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/70 transition-all duration-200 hover:shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
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
      </div>
    </footer>
  );
};

export default WeddingFooter;