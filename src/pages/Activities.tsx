
import { FC } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const translations = {
  en: {
    saturdayActivities: "Saturday activities",
    eveningActivities: "19:00 - Evening Activities",
    paintWine: "Paint and Wine Workshop",
    paintWineDesc: (
      <>
        Unleash your inner artist with renowned local artist <a href="https://www.instagram.com/ivangomezescultor/?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Iván Gómez</a>. Enjoy a glass of wine while creating your own masterpiece.
      </>
    ),
    petanca: "Petanca Match",
    petancaDesc: "Join a friendly petanca match arranged by Javier Jimenez. A game of skill, strategy, and fun for everyone.",
    time2: "19:00",
    home: "Home",
    saturdayIntro: "We’ll take it easy as we prepare for the big day on Sunday. In the evening, we’ll host two relaxing activities — you can sign up for either one.",
    signUp: "Sign Up",
  },
  es: {
    saturdayActivities: "Actividades del sábado",
    eveningActivities: "19:00 - Actividades de la tarde",
    paintWine: "Taller de pintura y vino",
    paintWineDesc: (
      <>
        Desata tu artista interior con el reconocido artista local <a href="https://www.instagram.com/ivangomezescultor/?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Iván Gómez</a>. Disfruta de una copa de vino mientras creas tu propia obra maestra.
      </>
    ),
    petanca: "Partida de petanca",
    petancaDesc: "Únete a una partida amistosa de petanca organizada por Javier Jiménez. Un juego de habilidad, estrategia y diversión para todos.",
    time2: "19:00",
    home: "Inicio",
    saturdayIntro: "Nos lo tomaremos con calma mientras nos preparamos para el gran día del domingo. Por la tarde, organizaremos dos actividades relajantes, puedes apuntarte a cualquiera de las dos.",
    signUp: "Apuntarse",
  },
  it: {
    saturdayActivities: "Attività del sabato",
    eveningActivities: "19:00 - Attività serali",
    paintWine: "Laboratorio di pittura e vino",
    paintWineDesc: (
      <>
        Libera il tuo artista interiore con il rinomato artista locale <a href="https://www.instagram.com/ivangomezescultor/?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Iván Gómez</a>. Goditi un bicchiere di vino mentre crei il tuo capolavoro.
      </>
    ),
    petanca: "Partita di petanca",
    petancaDesc: "Partecipa a una partita amichevole di petanca organizzata da Javier Jimenez. Un gioco di abilità, strategia e divertimento per tutti.",
    time2: "19:00",
    home: "Home",
    saturdayIntro: "Ce la prenderemo comoda mentre ci prepariamo per il grande giorno di domenica. In serata, organizzeremo due attività rilassanti, potete iscrivervi a una delle due.",
    signUp: "Iscriviti",
  },
  scn: {
    saturdayActivities: "Attività dû sabbatu",
    eveningActivities: "19:00 - Attività dâ sira",
    paintWine: "Laburatoriu di pittura e vinu",
    paintWineDesc: (
      <>
        Libbira u to artistu nternu cu u famusu artista lucali <a href="https://www.instagram.com/ivangomezescultor/?hl=es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Iván Gómez</a>. Gòditi nu biccheri di vinu mentri crei a to òpira d'arti.
      </>
    ),
    petanca: "Partita di petanca",
    petancaDesc: "Partècipa a na partita amichevuli di petanca organizzata di Javier Jimenez. Nu jocu di abilità, stratiggìa e divertimentu pi tutti.",
    time2: "19:00",
    home: "Casa",
    saturdayIntro: "Ni la pigghiamu cu comodu mentri ni priparamu pû jornu granni di duminica. A sira, organizzamu du' attività rilassanti, vi putiti iscrìviri a una di li dui.",
    signUp: "Iscrìviti",
  }
};

const Activities: FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <Home className="w-4 h-4 mr-2" />
            {t.home}
          </Button>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-4 right-4 z-10">
          <LanguageSelector />
        </div>
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">{t.saturdayActivities}</h1>
        <p className="text-lg text-center mb-12 text-gray-700">{t.saturdayIntro}</p>
        <img src="https://i.imgur.com/BONFg6m.png" alt="Avila" className="w-4/5 h-auto object-cover mb-12 ml-auto" />
        <div className="flex">
          <div className="w-1/4 pr-8 relative">
            <div className="border-l-4 border-blue-500 absolute h-full top-0 left-2"></div>
            <div className="sticky top-1/2 -translate-y-1/2">
              <div className="flex items-center">
                <div className="bg-blue-500 w-4 h-4 rounded-full z-10"></div>
                <p className="ml-4 text-lg font-semibold">{t.time2}</p>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">{t.eveningActivities}</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2-1">
                  <AccordionTrigger className="text-xl font-bold">{t.paintWine}</AccordionTrigger>
                  <AccordionContent>
                    <Card className="overflow-hidden shadow-lg">
                      <img src="https://i.imgur.com/AZfcmqR.jpeg" alt={t.paintWine} className="w-full h-64 object-cover" />
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold">{t.paintWine}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mt-2">{t.paintWineDesc}</p>
                        <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">{t.signUp}</Button>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2-2">
                  <AccordionTrigger className="text-xl font-bold">{t.petanca}</AccordionTrigger>
                  <AccordionContent>
                    <Card className="overflow-hidden shadow-lg">
                      <img src="https://i.imgur.com/oeXSckw.jpeg" alt={t.petanca} className="w-full h-64 object-cover" />
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold">{t.petanca}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mt-2">{t.petancaDesc}</p>
                        <Button className="mt-6 w-full bg-blue-500 hover:bg-blue-600">{t.signUp}</Button>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
