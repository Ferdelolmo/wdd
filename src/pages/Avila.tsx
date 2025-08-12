import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mountain, Clock, Camera } from 'lucide-react';

const Avila = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Ávila - Ciudad de las Murallas",
      subtitle: "Patrimonio de la Humanidad en Castilla y León",
      sections: {
        history: {
          title: "Historia",
          content: "Ávila, conocida como la 'Ciudad de las Murallas', es una joya medieval situada en Castilla y León. Sus murallas del siglo XI son las mejor conservadas de España y fueron declaradas Patrimonio de la Humanidad por la UNESCO en 1985."
        },
        walls: {
          title: "Las Murallas",
          content: "Con más de 2.5 kilómetros de longitud, las murallas de Ávila rodean completamente el casco histórico. Construidas entre los siglos XI y XIV, cuentan con 88 torres y 9 puertas que han resistido el paso del tiempo."
        },
        culture: {
          title: "Cultura y Tradición",
          content: "Ávila es la cuna de Santa Teresa de Jesús, mística y escritora del siglo XVI. La ciudad conserva un rico patrimonio religioso y cultural, con numerosos conventos, iglesias y palacios que narran siglos de historia."
        },
        gastronomy: {
          title: "Gastronomía",
          content: "La cocina abulense destaca por sus carnes de ternera y cordero, las judías del Barco de Ávila, y las famosas yemas de Santa Teresa. Los vinos de la región complementan perfectamente esta rica tradición culinaria."
        }
      }
    },
    en: {
      title: "Ávila - City of Walls",
      subtitle: "World Heritage Site in Castilla y León",
      sections: {
        history: {
          title: "History",
          content: "Ávila, known as the 'City of Walls', is a medieval jewel located in Castilla y León. Its 11th-century walls are the best preserved in Spain and were declared a UNESCO World Heritage Site in 1985."
        },
        walls: {
          title: "The Walls",
          content: "With more than 2.5 kilometers in length, Ávila's walls completely surround the historic center. Built between the 11th and 14th centuries, they feature 88 towers and 9 gates that have withstood the test of time."
        },
        culture: {
          title: "Culture and Tradition",
          content: "Ávila is the birthplace of Saint Teresa of Jesus, a 16th-century mystic and writer. The city preserves a rich religious and cultural heritage, with numerous convents, churches and palaces that tell centuries of history."
        },
        gastronomy: {
          title: "Gastronomy",
          content: "Abulense cuisine stands out for its beef and lamb, the beans from Barco de Ávila, and the famous yemas de Santa Teresa. Regional wines perfectly complement this rich culinary tradition."
        }
      }
    },
    it: {
      title: "Ávila - Città delle Mura",
      subtitle: "Patrimonio dell'Umanità in Castiglia e León",
      sections: {
        history: {
          title: "Storia",
          content: "Ávila, conosciuta come la 'Città delle Mura', è un gioiello medievale situato in Castiglia e León. Le sue mura dell'XI secolo sono le meglio conservate di Spagna e sono state dichiarate Patrimonio dell'Umanità dall'UNESCO nel 1985."
        },
        walls: {
          title: "Le Mura",
          content: "Con più di 2,5 chilometri di lunghezza, le mura di Ávila circondano completamente il centro storico. Costruite tra l'XI e il XIV secolo, contano 88 torri e 9 porte che hanno resistito al passare del tempo."
        },
        culture: {
          title: "Cultura e Tradizione",
          content: "Ávila è la culla di Santa Teresa di Gesù, mistica e scrittrice del XVI secolo. La città conserva un ricco patrimonio religioso e culturale, con numerosi conventi, chiese e palazzi che narrano secoli di storia."
        },
        gastronomy: {
          title: "Gastronomia",
          content: "La cucina abulense si distingue per le sue carni di vitello e agnello, i fagioli del Barco de Ávila, e le famose yemas de Santa Teresa. I vini della regione completano perfettamente questa ricca tradizione culinaria."
        }
      }
    },
    scn: {
      title: "Ávila - Città di li Mura",
      subtitle: "Patrimoniu di l'Umanità in Castiglia e León",
      sections: {
        history: {
          title: "Storia",
          content: "Ávila, canusciuta comu la 'Città di li Mura', è na gioia medievali situata in Castiglia e León. Li so mura di l'XI sèculu sunnu li megghiu cunsirvati di Spagna e furunu dichiarati Patrimoniu di l'Umanità di l'UNESCO nto 1985."
        },
        walls: {
          title: "Li Mura",
          content: "Cu cchiù di 2,5 chilometri di lunghizza, li mura di Ávila circundanu cumpletamenti lu centru storicu. Custruite tra l'XI e lu XIV sèculu, hannu 88 turri e 9 porti chi hannu resistutu ô passari dû tempu."
        },
        culture: {
          title: "Cultura e Tradizioni",
          content: "Ávila è la culla di Santa Teresa di Gesù, mistica e scrittua dû XVI sèculu. La città cunserva nu riccu patrimoniu religiosu e culturali, cu numerusi cunventi, chiesi e palazzi chi narranu sèculi di storia."
        },
        gastronomy: {
          title: "Gastronomia",
          content: "La cucina abulensi si distingui pi li so carni di vitellu e agnellu, li fasola dû Barco de Ávila, e li famusi yemas de Santa Teresa. Li vini dâ riggioni cumplitanu perfettamenti sta ricca tradizioni culinaria."
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
                <Clock className="h-5 w-5 text-primary" />
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
                <Mountain className="h-5 w-5 text-primary" />
                {currentContent.sections.walls.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {currentContent.sections.walls.content}
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
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
                <MapPin className="h-5 w-5 text-primary" />
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

export default Avila;