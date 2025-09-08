import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { FileText, Utensils, Volume2, Download, ExternalLink, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const More = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const menuItems = {
    es: {
      appetizers: ['Jamón ibérico con pan cristal', 'Queso manchego con membrillo', 'Croquetas de cocido madrileño'],
      mains: ['Cochinillo asado', 'Bacalao al pil pil', 'Paella valenciana'],
      desserts: ['Tarta de Santiago', 'Flan de huevo', 'Torrijas con helado']
    },
    it: {
      appetizers: ['Prosciutto iberico con pane', 'Formaggio manchego con cotognata', 'Crocchette di cocido madrileno'],
      mains: ['Maialino arrosto', 'Baccalà al pil pil', 'Paella valenciana'],
      desserts: ['Torta di Santiago', 'Flan alle uova', 'Torrijas con gelato']
    },
    scn: {
      appetizers: ['Prosciuttu ibericu cu pani', 'Caciu manchego cu cutognata', 'Crocchetti di cucidu madrileñu'],
      mains: ['Purcedduzzu arrustu', 'Baccalà â pil pil', 'Paella valenciana'],
      desserts: ['Torta di Santiagu', 'Flan di ova', 'Torrijas cu gilatu']
    },
    en: {
      appetizers: ['Iberian ham with crystal bread', 'Manchego cheese with quince', 'Madrid-style cocido croquettes'],
      mains: ['Roast suckling pig', 'Cod pil pil style', 'Valencian paella'],
      desserts: ['Santiago cake', 'Egg flan', 'Torrijas with ice cream']
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
          {/* Wedding Menu */}
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

          {/* Speeches */}
          <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Volume2 className="w-5 h-5" />
                {language === 'es' ? 'Discursos' : 
                 language === 'it' ? 'Discorsi' : 
                 language === 'scn' ? 'Discursi' : 
                 'Speeches'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {language === 'es' ? '¿Quieres dar un discurso? ¡Háznoslo saber!' : 
                 language === 'it' ? 'Vuoi fare un discorso? Faccelo sapere!' : 
                 language === 'scn' ? 'Voi fari nu discursu? Fàccillu sapiri!' : 
                 'Want to give a speech? Let us know!'}
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.open('https://forms.gle/speechform', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === 'es' ? 'Registrar Discurso' : 
                 language === 'it' ? 'Registra Discorso' : 
                 language === 'scn' ? 'Rijistra Discursu' : 
                 'Register Speech'}
              </Button>
              <div className="pt-2 border-t">
                <h4 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Discursos Programados' : 
                   language === 'it' ? 'Discorsi Programmati' : 
                   language === 'scn' ? 'Discursi Prugrammati' : 
                   'Scheduled Speeches'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === 'es' ? 'Los discursos aparecerán aquí cuando se registren' : 
                   language === 'it' ? 'I discorsi appariranno qui quando registrati' : 
                   language === 'scn' ? 'I discursi cumpariranu ccà quannu rijistrali' : 
                   'Speeches will appear here when registered'}
                </p>
              </div>
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
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                {language === 'es' ? 'Programa Detallado' : 
                 language === 'it' ? 'Programma Dettagliato' : 
                 language === 'scn' ? 'Prugramma Dittagliatu' : 
                 'Detailed Program'}
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                {language === 'es' ? 'Mapa del Lugar' : 
                 language === 'it' ? 'Mappa del Luogo' : 
                 language === 'scn' ? 'Mappa dû Locu' : 
                 'Venue Map'}
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                {language === 'es' ? 'Lista de Hoteles' : 
                 language === 'it' ? 'Lista Hotel' : 
                 language === 'scn' ? 'Lista Hotel' : 
                 'Hotel List'}
              </Button>
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
                onClick={() => window.open('https://forms.gle/musicrequest', '_blank')}
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
                  <h4 className="font-semibold text-foreground mb-2">Fernando</h4>
                  <p className="text-sm text-muted-foreground">fernando@email.com</p>
                  <p className="text-sm text-muted-foreground">+34 123 456 789</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Chiara</h4>
                  <p className="text-sm text-muted-foreground">chiara@email.com</p>
                  <p className="text-sm text-muted-foreground">+39 123 456 789</p>
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