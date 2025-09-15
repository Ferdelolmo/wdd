import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const dictionary = [
  { scn: 'Acqua', es: 'Agua', it: 'Acqua', en: 'Water' },
  { scn: 'Addiu', es: 'Adiós', it: 'Addio', en: 'Goodbye' },
  { scn: 'Amuninni', es: '¡Vámonos!', it: 'Andiamo!', en: 'Let\'s go!' },
  { scn: 'Amuri', es: 'Amor', it: 'Amore', en: 'Love' },
  { scn: 'Aringa', es: 'Arenque', it: 'Aringa', en: 'Herring' },
  { scn: 'Atturatu', es: 'Gratinado', it: 'Tostato', en: 'Toasted' },
  { scn: 'Babbo', es: 'Bobo', it: 'Scemo', en: 'Fool' },
  { scn: 'Bedda matri', es: '¡Madre mía!', it: 'Mamma mia!', en: 'Oh my God!' },
  { scn: 'Beddu / Bedda', es: 'Hermoso / Hermosa', it: 'Bello / Bella', en: 'Beautiful' },
  { scn: 'Bocconcinu', es: 'Bocadito', it: 'Bocconcino', en: 'Small bite' },
  { scn: 'Bon jornu', es: 'Buenos días', it: 'Buongiorno', en: 'Good morning' },
  { scn: 'Bona sira', es: 'Buenas tardes', it: 'Buonasera', en: 'Good evening' },
  { scn: 'Camurria', es: 'Molestia', it: 'Scocciatura', en: 'Annoyance' },
  { scn: 'Capesante', es: 'Zamburiñas', it: 'Capesante', en: 'Scallops' },
  { scn: 'Capra', es: 'Cabra', it: 'Capra', en: 'Goat' },
  { scn: 'Caruso/a', es: 'Chico/a', it: 'Ragazzo/a', en: 'Boy/Girl' },
  { scn: 'Carvuni', es: 'Carbón', it: 'Carbone', en: 'Coal' },
  { scn: 'Ciau', es: 'Hola/Adiós', it: 'Ciao', en: 'Hello/Goodbye' },
  { scn: 'Cipudda', es: 'Cebolla', it: 'Cipolla', en: 'Onion' },
  { scn: 'Compa\' / \'Mbare', es: 'Compadre', it: 'Compare', en: 'Bro' },
  { scn: 'Comu stai?', es: '¿Cómo estás?', it: 'Come stai?', en: 'How are you?' },
  { scn: 'Comu ti chiami?', es: '¿Cómo te llamas?', it: 'Come ti chiami?', en: 'What\'s your name?' },
  { scn: 'Crochette', es: 'Croqueta', it: 'Crocchetta', en: 'Croquette' },
  { scn: 'Crustinu', es: 'Picatoste', it: 'Crostino', en: 'Crouton' },
  { scn: 'Favetti', es: 'Habitas', it: 'Favette', en: 'Fava beans' },
  { scn: 'Frutti di mare', es: 'Mariscos', it: 'Frutti di mare', en: 'Seafood' },
  { scn: 'Futtitinni', es: 'Pasa de todo', it: 'Fregatene', en: 'Don\'t worry about it' },
  { scn: 'Grazzi', es: 'Gracias', it: 'Grazie', en: 'Thank you' },
  { scn: 'Jammiru', es: 'Camarón', it: 'Gambero', en: 'Shrimp' },
  { scn: 'Letto', es: 'Cama', it: 'Letto', en: 'Bed' },
  { scn: 'Lima tonnu', es: 'Lata de atún', it: 'Scatoletta di tonno', en: 'Canned tuna' },
  { scn: 'Manciari', es: 'Comer', it: 'Mangiare', en: 'To eat' },
  { scn: 'Matruzza', es: '¡Madre mía!', it: 'Mamma mia', en: 'Oh my God' },
  { scn: 'Maunisa', es: 'Mayonesa', it: 'Maionese', en: 'Mayonnaise' },
  { scn: 'Mi scusassi', es: 'Disculpe/Perdón', it: 'Mi scusi', en: 'Excuse me/I\'m sorry' },
  { scn: 'Minchia', es: '¡Guau! / ¡Caramba!', it: 'Wow! / Accidenti!', en: 'Wow! / Damn!' },
  { scn: 'Mirruzzu', es: 'Merluza', it: 'Merluzzo', en: 'Hake' },
  { scn: 'Mizzica', es: '¡Caramba!', it: 'Cavolo!', en: 'Wow!' },
  { scn: 'Nìura', es: 'Negra', it: 'Nera', en: 'Black' },
  { scn: 'Nìuru di sicci', es: 'Tinta de calamar', it: 'Nero di seppia', en: 'Squid ink' },
  { scn: 'Nzalata russa', es: 'Ensaladilla rusa', it: 'Insalata russa', en: 'Russian salad' },
  { scn: 'Ogghiu', es: 'Aceite', it: 'Olio', en: 'Oil' },
  { scn: 'Palummedda', es: 'Paloma', it: 'Crostino', en: 'Cracker' },
  { scn: 'Pani', es: 'Pan', it: 'Pane', en: 'Bread' },
  { scn: 'Pani fritti', es: 'Pan frito', it: 'Pane fritto', en: 'Fried bread' },
  { scn: 'Parmiggianu', es: 'Parmesano', it: 'Parmigiano', en: 'Parmesan' },
  { scn: 'Pi faùri', es: 'Por favor', it: 'Per favore', en: 'Please' },
  { scn: 'Pipi russu', es: 'Pimiento rojo', it: 'Peperone rosso', en: 'Red pepper' },
  { scn: 'Pumadoru', es: 'Tomate', it: 'Pomodoro', en: 'Tomato' },
  { scn: 'Purpu', es: 'Pulpo', it: 'Polpo', en: 'Octopus' },
  { scn: 'Quagghia', es: 'Codorniz', it: 'Quaglia', en: 'Quail' },
  { scn: 'Quantu custa?', es: '¿Cuánto cuesta?', it: 'Quanto costa?', en: 'How much is this?' },
  { scn: 'Racina', es: 'Uva', it: 'Uva', en: 'Grape' },
  { scn: 'Risu', es: 'Arroz', it: 'Riso', en: 'Rice' },
  { scn: 'Salutamu', es: 'Hola', it: 'Salve / Ciao', en: 'Hello' },
  { scn: 'Sanguinazzu', es: 'Morcilla', it: 'Sanguinaccio', en: 'Blood sausage' },
  { scn: 'Sciamunitu', es: 'Idiota', it: 'Idiota', en: 'Fool' },
  { scn: 'Sicchi', es: 'Secos', it: 'Secchi', en: 'Dried' },
  { scn: 'Siccu', es: 'Seco', it: 'Secco', en: 'Dry' },
  { scn: 'Spigula', es: 'Lubina', it: 'Spigola', en: 'Sea bass' },
  { scn: 'Supra', es: 'Sobre', it: 'Sopra', en: 'On top' },
  { scn: 'T\'amu', es: 'Te amo', it: 'Ti amo', en: 'I love you (romantic)' },
  { scn: 'Tartuffu', es: 'Trufa', it: 'Tartufo', en: 'Truffle' },
  { scn: 'Tonnu', es: 'Atún', it: 'Tonno', en: 'Tuna' },
  { scn: 'Travagghiari', es: 'Trabajar', it: 'Lavorare', en: 'To work' },
  { scn: 'Tumazzu', es: 'Queso', it: 'Formaggio', en: 'Cheese' },
  { scn: 'Unni è?', es: '¿Dónde está?', it: 'Dov\'è?', en: 'Where is it?' },
  { scn: 'Vanigghia', es: 'Vainilla', it: 'Vaniglia', en: 'Vanilla' },
  { scn: 'Viteddu', es: 'Ternera', it: 'Vitello', en: 'Veal' },
];

const Dictionary = () => {
  const { language } = useLanguage();

  const titles = {
    es: 'Diccionario Catanese',
    it: 'Dizionario Catanese',
    scn: 'Dizziunariu Catanisi',
    en: 'Catanese Dictionary',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dictionary.map((entry, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm shadow-romantic border-0">
              <CardHeader>
                <CardTitle className="text-primary">{entry.scn}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-semibold">🇪🇸 Español:</span> {entry.es}</p>
                  <p><span className="font-semibold">🇮🇹 Italiano:</span> {entry.it}</p>
                  <p><span className="font-semibold">🇬🇧 English:</span> {entry.en}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
