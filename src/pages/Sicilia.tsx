import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Waves, Sun, Utensils } from 'lucide-react';

const Sicilia = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Sicilia - La Perla del Mediterráneo",
      subtitle: "La isla más grande del Mar Mediterráneo",
      sections: {
        history: {
          title: "Historia Milenaria",
          content: "Sicilia ha sido cuna de civilizaciones durante más de 3.000 años. Griegos, romanos, árabes, normandos y españoles han dejado su huella en esta isla única, creando un patrimonio cultural extraordinario que se refleja en su arquitectura, arte y tradiciones."
        },
        nature: {
          title: "Paisajes Únicos",
          content: "Desde las playas doradas de la costa este hasta los dramáticos acantilados del oeste, Sicilia ofrece paisajes incomparables. El majestuoso Etna domina la isla, mientras que las Islas Eolias y Egadas completan un escenario natural de belleza incomparable."
        },
        culture: {
          title: "Arte y Cultura",
          content: "Los templos griegos de Agrigento, los mosaicos romanos de Villa del Casale, las catedrales normandas de Palermo y Monreale, y los teatros barrocos de Catania y Siracusa hacen de Sicilia un museo al aire libre único en el mundo."
        },
        gastronomy: {
          title: "Gastronomía Excepcional",
          content: "La cocina siciliana fusiona influencias mediterráneas, árabes y españolas. Arancini, caponata, pasta alla norma, cannoli y granita son solo algunas de las delicias que han conquistado paladares en todo el mundo."
        }
      }
    },
    en: {
      title: "Sicily - The Pearl of the Mediterranean",
      subtitle: "The largest island in the Mediterranean Sea",
      sections: {
        history: {
          title: "Millenary History",
          content: "Sicily has been the cradle of civilizations for over 3,000 years. Greeks, Romans, Arabs, Normans and Spanish have left their mark on this unique island, creating an extraordinary cultural heritage reflected in its architecture, art and traditions."
        },
        nature: {
          title: "Unique Landscapes",
          content: "From the golden beaches of the east coast to the dramatic cliffs of the west, Sicily offers incomparable landscapes. The majestic Etna dominates the island, while the Aeolian and Aegadian Islands complete a natural setting of incomparable beauty."
        },
        culture: {
          title: "Art and Culture",
          content: "The Greek temples of Agrigento, the Roman mosaics of Villa del Casale, the Norman cathedrals of Palermo and Monreale, and the Baroque theaters of Catania and Syracuse make Sicily a unique open-air museum in the world."
        },
        gastronomy: {
          title: "Exceptional Gastronomy",
          content: "Sicilian cuisine fuses Mediterranean, Arab and Spanish influences. Arancini, caponata, pasta alla norma, cannoli and granita are just some of the delights that have conquered palates around the world."
        }
      }
    },
    it: {
      title: "Sicilia - La Perla del Mediterraneo",
      subtitle: "L'isola più grande del Mar Mediterraneo",
      sections: {
        history: {
          title: "Storia Millenaria",
          content: "La Sicilia è stata culla di civiltà per oltre 3.000 anni. Greci, romani, arabi, normanni e spagnoli hanno lasciato il loro segno su quest'isola unica, creando un patrimonio culturale straordinario che si riflette nella sua architettura, arte e tradizioni."
        },
        nature: {
          title: "Paesaggi Unici",
          content: "Dalle spiagge dorate della costa orientale ai drammatici scogliere dell'ovest, la Sicilia offre paesaggi incomparabili. Il maestoso Etna domina l'isola, mentre le Isole Eolie ed Egadi completano uno scenario naturale di bellezza impareggiabile."
        },
        culture: {
          title: "Arte e Cultura",
          content: "I templi greci di Agrigento, i mosaici romani di Villa del Casale, le cattedrali normanne di Palermo e Monreale, e i teatri barocchi di Catania e Siracusa fanno della Sicilia un museo a cielo aperto unico al mondo."
        },
        gastronomy: {
          title: "Gastronomia Eccezionale",
          content: "La cucina siciliana fonde influenze mediterranee, arabe e spagnole. Arancini, caponata, pasta alla norma, cannoli e granita sono solo alcune delle delizie che hanno conquistato palati in tutto il mondo."
        }
      }
    },
    scn: {
      title: "Sicilia - La Perla dû Mediterraneu",
      subtitle: "L'isula cchiù granni dû Mari Mediterraneu",
      sections: {
        history: {
          title: "Storia Millenaria",
          content: "La Sicilia fu culluzza di civiltà pi cchiù di 3.000 anni. Greci, rumani, àravi, nurmanni e spagnoli lassaru lu so signu nta st'isula unica, criannu nu patrimoniu culturali straordinariu chi si rifletti nta l'architettura, l'arti e li tradizioni."
        },
        nature: {
          title: "Paisaggi Unici",
          content: "Di li spiaggi durati dâ costa di livanti ê drammatici scugli di punenti, la Sicilia offri paisaggi incomparàbbili. Lu maestusu Etna dumina l'isula, mentri li Isuli Eolie ed Egadi cumplìtanu nu scenariu naturali di billizza impareggiàbbili."
        },
        culture: {
          title: "Arti e Cultura",
          content: "Li templi greci di Agrigento, li musaici rumani di Villa dû Casali, li cattidrali nurmanni di Palermu e Munreali, e li tiatri barocchi di Catania e Siracusa fannu dâ Sicilia nu museu a celu apertu unicu ô munnu."
        },
        gastronomy: {
          title: "Gastronomia Eccizziunali",
          content: "La cucina siciliana jonci nfluenzi mediterrani, àravi e spagnoli. Arancini, caponata, pasta â norma, cannoli e granita sunnu sulu qualchi dî dilizii chi cunquistaru palati nta tuttu lu munnu."
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-primary" />
                {currentContent.sections.history.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {currentContent.sections.history.content}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Waves className="h-5 w-5 text-primary" />
                {currentContent.sections.nature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {currentContent.sections.nature.content}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {currentContent.sections.culture.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {currentContent.sections.culture.content}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                {currentContent.sections.gastronomy.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {currentContent.sections.gastronomy.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sicilia;