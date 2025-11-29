import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { FileText, Utensils, Volume2, Download, ExternalLink, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const More = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const menuItems = {
    es: {
      appetizers: ['TBD'],
      mains: ['TBD'],
      desserts: ['TBD']
    },
    it: {
      appetizers: [''],
      mains: [''],
      desserts: ['']
    },
    scn: {
      appetizers: [''],
      mains: [''],
      desserts: ['TBD']
    },
    en: {
      appetizers: [''],
      mains: [''],
      desserts: ['TBD']
    }
  };

  const currentMenu = menuItems[language as keyof typeof menuItems];

  return (
    <div className="min-h-screen bg-gradient-romantic py-20">
      {/* Home Navigation */}
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-script text-5xl md:text-7xl text-primary mb-4">
            {language === 'es' ? 'Más Información' :
              language === 'it' ? 'Più Informazioni' :
                language === 'scn' ? 'Cchiù Nfurmazzioni' :
                  'More Information'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'es' ? 'Todo lo que necesitas para nuestro día especial' :
              language === 'it' ? 'Tutto quello che ti serve per il nostro giorno speciale' :
                language === 'scn' ? 'Tuttu chiddu ca ti servi pi u nostru jornu spiciali' :
                  'Everything you need for our special day'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/*
          <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Utensils className="w-5 h-5" />
                {language === 'es' ? 'Menú de Boda' : 
                 language === 'it' ? 'Menu del Matrimonio' : 
                 language === 'scn' ? 'Menu dû Matrimoniu' : 
                 'Wedding Menu'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'es' ? 'Aperitivos' : 
                     language === 'it' ? 'Antipasti' : 
                     language === 'scn' ? 'Antipasti' : 
                     'Appetizers'}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {currentMenu.appetizers.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'es' ? 'Platos Principales' : 
                     language === 'it' ? 'Piatti Principali' : 
                     language === 'scn' ? 'Piatti Principali' : 
                     'Main Courses'}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {currentMenu.mains.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'es' ? 'Postres' : 
                     language === 'it' ? 'Dolci' : 
                     language === 'scn' ? 'Duci' : 
                     'Desserts'}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {currentMenu.desserts.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          */}

          {/* Soundtrack Promo */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Volume2 className="w-5 h-5" />
                {t.soundtrackPromo.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {t.soundtrackPromo.description}
              </p>
              <Link to="/soundtrack" className="block w-full">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.soundtrackPromo.button}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Documents */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="w-5 h-5" />
                {language === 'es' ? 'Documentos' :
                  language === 'it' ? 'Documenti' :
                    language === 'scn' ? 'Ducumenti' :
                      'Documents'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/dictionary">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  {language === 'es' ? 'Diccionario 🍋 🇪🇸 🇬🇧 🇮🇹 ' :
                    language === 'it' ? 'Dizionario 🍋 🇪🇸 🇬🇧 🇮🇹 ' :
                      language === 'scn' ? 'Dizzionariu 🍋 🇪🇸 🇬🇧 🇮🇹 ' :
                        'Dictionary 🍋 🇪🇸 🇬🇧 🇮🇹 '}
                </Button>
              </Link>
              <Link to="/speeches">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  {language === 'es' ? 'Discursos' :
                    language === 'it' ? 'Discorsi' :
                      language === 'scn' ? 'Discursi' :
                        'Speeches'}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Music Requests */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Volume2 className="w-5 h-5" />
                {language === 'es' ? 'Peticiones Musicales' :
                  language === 'it' ? 'Richieste Musicali' :
                    language === 'scn' ? 'Richiesti Musicali' :
                      'Music Requests'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {language === 'es' ? '¿Tienes una canción especial? ¡El DJ la tocará!' :
                  language === 'it' ? 'Hai una canzone speciale? Il DJ la suonerà!' :
                    language === 'scn' ? 'Hai na canzuni spiciali? U DJ a sunarà!' :
                      'Have a special song? The DJ will play it!'}
              </p>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://form.jotform.com/252126974853061', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === 'es' ? 'Pedir Canción' :
                  language === 'it' ? 'Richiedi Canzone' :
                    language === 'scn' ? 'Richiedi Canzuni' :
                      'Request Song'}
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-primary">
                {language === 'es' ? 'Información de Contacto' :
                  language === 'it' ? 'Informazioni di Contatto' :
                    language === 'scn' ? 'Nfurmazzioni di Cuntattu' :
                      'Contact Information'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2"> </h4>
                  <p className="text-sm text-muted-foreground">ciao@chiaraefer.com</p>
                  <p className="text-sm text-muted-foreground">+34 621 35 47 23</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default More;