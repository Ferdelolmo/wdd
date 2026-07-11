import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Waves, Sun, Utensils, Mountain, Palette, Crown, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import sicilyEtnaImage from '@/assets/sicily-etna.jpg';
import sicilyCuisineImage from '@/assets/sicily-cuisine.jpg';
import WeddingFooter from '@/components/WeddingFooter';
import LanguageSelector from '@/components/LanguageSelector';
import SoundCloudPlayer from '@/components/SoundCloudPlayer';


const Sicilia = () => {
  const { language } = useLanguage();

  const soundCloudContent = {
    es: {
      title: 'Audio Guía',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2171713713&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
    it: {
      title: 'Audio Guida',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2171146380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
    scn: {
      title: 'Audio Guida',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2171146380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
    en: {
      title: 'Audio Guide',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2170562532&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    },
  };

  const currentSoundCloudContent = soundCloudContent[language];

  const content = {
    es: {
      title: "Sicilia - La Perla del Mediterráneo",
      subtitle: "La isla más grande del Mar Mediterráneo",
      heroDescription: "Explora una isla donde la historia, la naturaleza y la cultura se entrelazan en un mosaico de belleza incomparable.",
      sections: {
        history: {
          title: "Historia Milenaria",
          content: "Sicilia ha sido cuna de civilizaciones durante más de 3.000 años. Griegos, romanos, árabes, normandos y españoles han dejado su huella en esta isla única, creando un patrimonio cultural extraordinario que se refleja en su arquitectura, arte y tradiciones.",
          details: [
            { title: "Grecia Antigua", content: "Los griegos fundaron ciudades como Siracusa y Agrigento, dejando templos magníficos como el Valle de los Templos." },
            { title: "Dominación Árabe", content: "Los árabes (827-1091) introdujeron nuevas técnicas agrícolas, la caña de azúcar y una arquitectura única." },
            { title: "Reino Normando", content: "Los normandos crearon un reino próspero, fusionando elementos árabes, bizantinos y occidentales." }
          ]
        },
        nature: {
          title: "Paisajes Únicos",
          content: "Desde las playas doradas de la costa este hasta los dramáticos acantilados del oeste, Sicilia ofrece paisajes incomparables. El majestuoso Etna domina la isla, mientras que las Islas Eolias y Egadas completan un escenario natural de belleza incomparable.",
          details: [
            { title: "Monte Etna", content: "El volcán activo más alto de Europa (3.329m), Patrimonio de la Humanidad por la UNESCO." },
            { title: "Islas Eolias", content: "Archipiélago volcánico con Stromboli, el 'Faro del Mediterráneo', y la elegante Lipari." },
            { title: "Playas y Costa", content: "Desde las playas de arena dorada de Taormina hasta los acantilados de Scala dei Turchi." }
          ]
        },
        culture: {
          title: "Arte y Cultura",
          content: "Los templos griegos de Agrigento, los mosaicos romanos de Villa del Casale, las catedrales normandas de Palermo y Monreale, y los teatros barrocos de Catania y Siracusa hacen de Sicilia un museo al aire libre único en el mundo.",
          details: [
            { title: "Valle de los Templos", content: "Complejo arqueológico griego mejor conservado del mundo, en Agrigento." },
            { title: "Villa Romana del Casale", content: "Mosaicos romanos del siglo IV considerados los más bellos del mundo." },
            { title: "Palermo Árabe-Normando", content: "Conjunto de monumentos únicos que fusionan culturas oriental y occidental." }
          ]
        },
        gastronomy: {
          title: "Gastronomía Excepcional",
          content: "La cocina siciliana fusiona influencias mediterráneas, árabes y españolas. Arancini, caponata, pasta alla norma, cannoli y granita son solo algunas de las delicias que han conquistado paladares en todo el mundo.",
          details: [
            { title: "Dulces Árabes", content: "Cannoli, cassata y frutta martorana reflejan la herencia árabe en la repostería." },
            { title: "Pasta y Pescado", content: "Pasta con sardinas, pasta alla norma y caponata son platos emblemáticos de la isla." },
            { title: "Granita y Gelato", content: "La granita siciliana y el gelato artesanal son tradiciones centenarias perfeccionadas." }
          ]
        }
      },
      funFacts: {
        title: "Datos Fascinantes",
        facts: [
          "Sicilia es la isla más grande del Mediterráneo con 25.711 km².",
          "El Etna es el volcán activo más alto de Europa y está en constante actividad.",
          "La isla tiene tres puntas que le dan forma triangular: Cabo Peloro, Cabo Passero y Cabo Lilibeo.",
          "Arquímedes, el gran matemático, nació en Siracusa en el 287 a.C."
        ]
      },
      culturalHeritage: {
        title: "🌴 Encanto Mediterráneo",
        intro: "Sicilia, la isla más grande del Mediterráneo, fue hogar de fenicios, griegos, romanos, árabes, normandos, aragoneses y españoles. Esa mezcla late en sus templos, plazas, palabras y sabores.",
        iconicPlaces: {
          title: "🏛 Pueblos y rincones icónicos",
          places: [
            { name: "Noto 🏰", description: "Barroco dorado, fachadas teatrales" },
            { name: "Taormina 🎭", description: "Teatro griego con vistas al mar y al Etna" },
            { name: "Giardini Naxos 🌊", description: "Primer asentamiento griego de Sicilia" },
            { name: "Islas Eolias 🌋", description: "Volcanes, calas y senderos (UNESCO)" },
            { name: "Cefalù 🐚", description: "Catedral normanda junto a la playa" },
            { name: "Agrigento 🏛", description: "Valle de los Templos, Grecia eterna" },
            { name: "Ragusa 🧱", description: "Barroco tardío entre callejuelas" },
            { name: "Catania 🐘", description: "Piedra de lava y vida universitaria" },
            { name: "Marsala 🍷", description: "Ciudad del vino y salinas rosadas" },
            { name: "Palermo 🕌", description: "Mezcla árabe‑normanda, mercados vivos" },
            { name: "Favignana 🐠", description: "Aguas turquesa, cuevas y bici" }
          ]
        },
        etna: {
          title: "🌋 El Etna",
          content: "Volcán activo y \"vecino\" respetado: a veces ceniza, siempre vida. Fertiliza suelos, define vinos y marca el horizonte."
        },
        flavors: {
          title: "🍝 Sabores sicilianos",
          content: "Arancini, pasta alla norma, cuscús trapanese, cannoli y granita al limón. Cocina de producto, especias árabes y memoria española."
        }
      }
    },
    en: {
      title: "Sicily - The Pearl of the Mediterranean",
      subtitle: "The largest island in the Mediterranean Sea",
      heroDescription: "Explore an island where history, nature and culture intertwine in a mosaic of incomparable beauty.",
      sections: {
        history: {
          title: "Millenary History",
          content: "Sicily has been the cradle of civilizations for over 3,000 years. Greeks, Romans, Arabs, Normans and Spanish have left their mark on this unique island, creating an extraordinary cultural heritage reflected in its architecture, art and traditions.",
          details: [
            { title: "Ancient Greece", content: "Greeks founded cities like Syracuse and Agrigento, leaving magnificent temples like the Valley of the Temples." },
            { title: "Arab Domination", content: "Arabs (827-1091) introduced new agricultural techniques, sugar cane and unique architecture." },
            { title: "Norman Kingdom", content: "Normans created a prosperous kingdom, fusing Arab, Byzantine and Western elements." }
          ]
        },
        nature: {
          title: "Unique Landscapes",
          content: "From the golden beaches of the east coast to the dramatic cliffs of the west, Sicily offers incomparable landscapes. The majestic Etna dominates the island, while the Aeolian and Aegadian Islands complete a natural setting of incomparable beauty.",
          details: [
            { title: "Mount Etna", content: "Europe's highest active volcano (3,329m), UNESCO World Heritage Site." },
            { title: "Aeolian Islands", content: "Volcanic archipelago with Stromboli, the 'Lighthouse of the Mediterranean', and elegant Lipari." },
            { title: "Beaches and Coast", content: "From Taormina's golden sand beaches to the cliffs of Scala dei Turchi." }
          ]
        },
        culture: {
          title: "Art and Culture",
          content: "The Greek temples of Agrigento, the Roman mosaics of Villa del Casale, the Norman cathedrals of Palermo and Monreale, and the Baroque theaters of Catania and Syracuse make Sicily a unique open-air museum in the world.",
          details: [
            { title: "Valley of the Temples", content: "World's best preserved Greek archaeological complex in Agrigento." },
            { title: "Villa Romana del Casale", content: "4th century Roman mosaics considered the most beautiful in the world." },
            { title: "Arab-Norman Palermo", content: "Unique complex of monuments fusing Eastern and Western cultures." }
          ]
        },
        gastronomy: {
          title: "Exceptional Gastronomy",
          content: "Sicilian cuisine fuses Mediterranean, Arab and Spanish influences. Arancini, caponata, pasta alla norma, cannoli and granita are just some of the delights that have conquered palates around the world.",
          details: [
            { title: "Arab Sweets", content: "Cannoli, cassata and frutta martorana reflect Arab heritage in pastry making." },
            { title: "Pasta and Fish", content: "Pasta con sarde, pasta alla norma and caponata are emblematic dishes of the island." },
            { title: "Granita and Gelato", content: "Sicilian granita and artisanal gelato are centuries-old perfected traditions." }
          ]
        }
      },
      funFacts: {
        title: "Fascinating Facts",
        facts: [
          "Sicily is the largest island in the Mediterranean with 25.711 km².",
          "Etna is Europe's highest active volcano and is constantly active.",
          "The island has three points that give it a triangular shape: Cape Peloro, Cape Passero and Cape Lilibeo.",
          "Archimedes, the great mathematician, was born in Syracuse in 287 BC."
        ]
      },
      culturalHeritage: {
        title: "🌴 Mediterranean Magic",
        intro: "Sicily, the Mediterranean's largest island, is a living tapestry of Phoenician, Greek, Roman, Arab, Norman, Aragonese and Spanish heritage—visible in stones, streets and flavors.",
        iconicPlaces: {
          title: "🏛 Iconic Towns & Spots",
          places: [
            { name: "Noto 🏰", description: "Golden Baroque, theatrical facades" },
            { name: "Taormina 🎭", description: "Greek theatre + Etna views" },
            { name: "Giardini Naxos 🌊", description: "First Greek colony" },
            { name: "Aeolian Islands 🌋", description: "Volcanoes, coves and trails (UNESCO)" },
            { name: "Cefalù 🐚", description: "Norman cathedral by the beach" },
            { name: "Agrigento 🏛", description: "Valley of Temples, eternal Greece" },
            { name: "Ragusa 🧱", description: "Late Baroque among alleys" },
            { name: "Catania 🐘", description: "Lava stone and university life" },
            { name: "Marsala 🍷", description: "Wine city and pink salt pans" },
            { name: "Palermo 🕌", description: "Arab‑Norman mix, living markets" },
            { name: "Favignana 🐠", description: "Turquoise waters, caves and bikes" }
          ]
        },
        etna: {
          title: "🌋 Mount Etna",
          content: "An active, respected \"neighbor\": sometimes ash, always life. It enriches soils and shapes distinctive wines."
        },
        flavors: {
          title: "🍝 Sicilian Flavors",
          content: "Arancini, pasta alla norma, Trapani couscous, cannoli, lemon granita—produce‑driven cuisine with Arab spices and Spanish echoes."
        }
      }
    },
    it: {
      title: "Sicilia - La Perla del Mediterraneo",
      subtitle: "L'isola più grande del Mar Mediterraneo",
      heroDescription: "Esplora un'isola dove storia, natura e cultura si intrecciano in un mosaico di bellezza incomparabile.",
      sections: {
        history: {
          title: "Storia Millenaria",
          content: "La Sicilia è stata culla di civiltà per oltre 3.000 anni. Greci, romani, arabi, normanni e spagnoli hanno lasciato il loro segno su quest'isola unica, creando un patrimonio culturale straordinario che si riflette nella sua architettura, arte e tradizioni.",
          details: [
            { title: "Grecia Antica", content: "I greci fondarono città come Siracusa e Agrigento, lasciando templi magnifici come la Valle dei Templi." },
            { title: "Dominazione Araba", content: "Gli arabi (827-1091) introdussero nuove tecniche agricole, la canna da zucchero e un'architettura unica." },
            { title: "Regno Normanno", content: "I normanni crearono un regno prospero, fondendo elementi arabi, bizantini e occidentali." }
          ]
        },
        nature: {
          title: "Paesaggi Unici",
          content: "Dalle spiagge dorate della costa orientale ai drammatici scogliere dell'ovest, la Sicilia offre paesaggi incomparabili. Il maestoso Etna domina l'isola, mentre le Isole Eolie ed Egadi completano uno scenario naturale di bellezza impareggiabile.",
          details: [
            { title: "Monte Etna", content: "Il vulcano attivo più alto d'Europa (3.329m), Patrimonio dell'Umanità UNESCO." },
            { title: "Isole Eolie", content: "Arcipelago vulcanico con Stromboli, il 'Faro del Mediterraneo', e l'elegante Lipari." },
            { title: "Spiagge e Costa", content: "Dalle spiagge di sabbia dorata di Taormina alle scogliere della Scala dei Turchi." }
          ]
        },
        culture: {
          title: "Arte e Cultura",
          content: "I templi greci di Agrigento, i mosaici romani di Villa del Casale, le cattedrali normanne di Palermo e Monreale, e i teatri barocchi di Catania e Siracusa fanno della Sicilia un museo a cielo aperto unico al mondo.",
          details: [
            { title: "Valle dei Templi", content: "Complesso archeologico greco meglio conservato al mondo, ad Agrigento." },
            { title: "Villa Romana del Casale", content: "Mosaici romani del IV secolo considerati i più belli del mondo." },
            { title: "Palermo Arabo-Normanna", content: "Complesso unico di monumenti che fondono culture orientali e occidentali." }
          ]
        },
        gastronomy: {
          title: "Gastronomia Eccezionale",
          content: "La cucina siciliana fonde influenze mediterranee, arabe e spagnole. Arancini, caponata, pasta alla norma, cannoli e granita sono solo alcune delle delizie che hanno conquistato palati in tutto il mondo.",
          details: [
            { title: "Dolci Arabi", content: "Cannoli, cassata e frutta martorana riflettono l'eredità araba nella pasticceria." },
            { title: "Pasta e Pesce", content: "Pasta con le sarde, pasta alla norma e caponata sono piatti emblematici dell'isola." },
            { title: "Granita e Gelato", content: "La granita siciliana e il gelato artigianale sono tradizioni centenarie perfezionate." }
          ]
        }
      },
      funFacts: {
        title: "Fatti Affascinanti",
        facts: [
          "La Sicilia è l'isola più grande del Mediterraneo con 25.711 km².",
          "L'Etna è il vulcano attivo più alto d'Europa ed è in costante attività.",
          "L'isola ha tre punte che le danno forma triangolare: Capo Peloro, Capo Passero e Capo Lilibeo.",
          "Archimede, il grande matematico, nacque a Siracusa nel 287 a.C."
        ]
      },
      culturalHeritage: {
        title: "🌴 Incanto Mediterraneo",
        intro: "La Sicilia, l'isola più grande del Mediterraneo, è un mosaico vivo di fenici, greci, romani, arabi, normanni, aragonesi e spagnoli: tutto si riflette in monumenti, parole e sapori.",
        iconicPlaces: {
          title: "🏛 Borghi e luoghi iconici",
          places: [
            { name: "Noto 🏰", description: "Barocco dorato" },
            { name: "Taormina 🎭", description: "Teatro greco e vista Etna" },
            { name: "Giardini Naxos 🌊", description: "Prima colonia greca" },
            { name: "Isole Eolie 🌋", description: "UNESCO" },
            { name: "Cefalù 🐚", description: "Cattedrale normanna" },
            { name: "Agrigento 🏛", description: "Valle dei Templi" },
            { name: "Ragusa 🧱", description: "Barroco tardivo" },
            { name: "Catania 🐘", description: "Pietra lavica" },
            { name: "Marsala 🍷", description: "Città del vino" },
            { name: "Palermo 🕌", description: "Mescolanza arabo-normanna" },
            { name: "Favignana 🐠", description: "Acque turchesi" }
          ]
        },
        etna: {
          title: "🌋 L'Etna",
          content: "Vulcano attivo e \"vicino\" rispettato: a volte cenere, sempre vita. Suoli fertili e vini dal carattere unico."
        },
        flavors: {
          title: "🍝 Sapori siciliani",
          content: "Arancini, pasta alla norma, cuscus trapanese, cannoli, granita al limone. Cucina di prodotto, spezie arabe e memoria spagnola."
        }
      }
    },
    scn: {
      title: "Sicilia - La Perla dû Mediterraneu",
      subtitle: "L'isula cchiù granni dû Mari Mediterraneu",
      heroDescription: "Esplora n'isula unni storia, natura e cultura s'ntriccianu nta nu musaicu di billizza incomparabbili.",
      sections: {
        history: {
          title: "Storia Millenaria",
          content: "La Sicilia fu culluzza di civiltà pi cchiù di 3.000 anni. Greci, rumani, àravi, nurmanni e spagnoli lassaru lu so signu nta st'isula unica, criannu nu patrimoniu culturali straordinariu chi si rifletti nta l'architettura, l'arti e li tradizioni.",
          details: [
            { title: "Grecia Antica", content: "Li greci fundaru città comu Siracusa e Agrigento, lassannu templi magnifici comu la Vaddi dî Templi." },
            { title: "Duminazioni Àravi", content: "L'àravi (827-1091) ntrudussiru novi tecnichi agriculi, la canna di zuccaru e n'architettura unica." },
            { title: "Regnu Nurmannu", content: "Li nurmanni criaru nu regnu prusperu, funnennu alimenti àravi, bizantini e uccidintali." }
          ]
        },
        nature: {
          title: "Paisaggi Unici",
          content: "Di li spiaggi durati dâ costa di livanti ê drammatici scugli di punenti, la Sicilia offri paisaggi incomparàbbili. Lu maestusu Etna dumina l'isula, mentri li Isuli Eolie ed Egadi cumplìtanu nu scenariu naturali di billizza impareggiàbbili.",
          details: [
            { title: "Munci Etna", content: "Lu vulcanu attivu cchiù autu d'Europa (3.329m), Patrimoniu di l'Umanità UNESCO." },
            { title: "Isuli Eolie", content: "Arcipelagu vulcanicu cu Stromboli, il 'Faro dû Mediterraneu', e l'eleganti Lipari." },
            { title: "Spiaggi e Costa", content: "Di li spiaggi di rina durata di Taormina ê scugli dâ Scala dî Turchi." }
          ]
        },
        culture: {
          title: "Arti e Cultura",
          content: "Li templi greci di Agrigento, li musaici rumani di Villa dû Casali, li cattidrali nurmanni di Palermu e Munreali, e li tiatri barocchi di Catania e Siracusa fannu dâ Sicilia nu museu a celu apertu unicu ô munnu.",
          details: [
            { title: "Vaddi dî Templi", content: "Cumplessu archiulogicu grecu megghiu cunsirvatu ô munnu, ad Agrigento." },
            { title: "Villa Rumana dû Casali", content: "Musaici rumani dû IV sèculu cunsidirati li cchiù beddi dû munnu." },
            { title: "Palermu Àravu-Nurmannu", content: "Cumplessu unicu di munumenti chi funnenu culturi urientali e uccidintali." }
          ]
        },
        gastronomy: {
          title: "Gastronomia Eccizziunali",
          content: "La cucina siciliana jonci nfluenzi mediterrani, àravi e spagnoli. Arancini, caponata, pasta â norma, cannoli e granita sunnu sulu qualchi dî dilizii chi cunquistaru palati nta tuttu lu munnu.",
          details: [
            { title: "Durci Àravi", content: "Cannoli, cassata e frutta marturana riflettinu l'eridità àrava nta la pasticceria." },
            { title: "Pasta e Pisci", content: "Pasta chî sardi, pasta â norma e caponata sunnu piatti emblimatici di l'isula." },
            { title: "Granita e Gelato", content: "La granita siciliana e lu gelato artigianali sunnu tradizioni cintinari pifizziunati." }
          ]
        }
      },
      funFacts: {
        title: "Fatti Affascinanti",
        facts: [
          "La Sicilia è l'isula cchiù granni dû Mediterraneu cu 25.711 km².",
          "L'Etna è lu vulcanu attivu cchiù autu d'Europa ed è nta custanti attività.",
          "L'isula havi tri punti chi li dannu forma triangulari: Capu Peloro, Capu Passero e Capu Lilibeo.",
          "Archimedi, lu granni matematicu, nasciu a Siracusa nto 287 a.C."
        ]
      },
      culturalHeritage: {
        title: "🌴 'Ncantu di lu Mediterraneu",
        intro: "Sicilia è 'na cruci di strati: fenici, greci, rumani, arabi, nurmanni, aragunesi e spagnoli lassaru a so stampa 'ntra petri, vuci e sapuri.",
        iconicPlaces: {
          title: "🏛 Paisi e biddizzi",
          places: [
            { name: "Noto 🏰", description: "Baroccu di oru" },
            { name: "Taormina 🎭", description: "Teatru grecu, vista Etna" },
            { name: "Giardini Naxos 🌊", description: "Prima colonia greca" },
            { name: "Isole Eolie 🌋", description: "UNESCO" },
            { name: "Cefalù 🐚", description: "Cattidrali nurmanna" },
            { name: "Agrigentu 🏛", description: "Vaddi dî Templi" },
            { name: "Ragusa 🧱", description: "Baroccu tardiu" },
            { name: "Catania 🐘", description: "Petra di lava" },
            { name: "Marsala 🍷", description: "Città dû vinu" },
            { name: "Palermu 🕌", description: "Mischiu àravu-nurmannu" },
            { name: "Favignana 🐠", description: "Acchi turchisi" }
          ]
        },
        etna: {
          title: "🌋 L'Etna",
          content: "Vulcanu vivu e rispittatu: a voti ceniri, sempri fruttu. Fa ricchi i tìrimi e duna caràttiri a li vigna."
        },
        flavors: {
          title: "🍝 Sapuri siciliani",
          content: "Arancini, pasta 'a norma, cùscusu trapanisi, cannola, granita di limuni. Cucina schietta, spizi arabi e ricordu spagnolu."
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      {/* Home Navigation */}
      <div className="absolute top-4 left-4 z-50">
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

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={sicilyEtnaImage} 
          alt="Mount Etna Sicily" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm rounded-md">
            <LanguageSelector />
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {currentContent.title}
            </h1>
            <p className="text-xl mb-2">
              {currentContent.subtitle}
            </p>
            <p className="text-lg max-w-2xl mx-auto px-4">
              {currentContent.heroDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {Object.entries(currentContent.sections).map(([key, section], index) => (
              <Card key={key} className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {key === 'history' && <Crown className="h-5 w-5 text-primary" />}
                    {key === 'nature' && <Mountain className="h-5 w-5 text-primary" />}
                    {key === 'culture' && <Palette className="h-5 w-5 text-primary" />}
                    {key === 'gastronomy' && <Utensils className="h-5 w-5 text-primary" />}
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {section.content}
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {section.details.map((detail, detailIndex) => (
                      <AccordionItem key={detailIndex} value={`${key}-${detailIndex}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {detail.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {detail.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}

            {/* Cultural Heritage Section */}
            {currentContent.culturalHeritage && (
              <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    {currentContent.culturalHeritage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentContent.culturalHeritage.intro}
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="iconic-places">
                      <AccordionTrigger className="text-left font-medium">
                        {currentContent.culturalHeritage.iconicPlaces.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {currentContent.culturalHeritage.iconicPlaces.places.map((place, index) => (
                            <div key={index} className="border rounded-lg p-3">
                              <h4 className="font-medium text-foreground">{place.name}</h4>
                              <p className="text-sm">{place.description}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="etna">
                      <AccordionTrigger className="text-left font-medium">
                        {currentContent.culturalHeritage.etna.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {currentContent.culturalHeritage.etna.content}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="flavors">
                      <AccordionTrigger className="text-left font-medium">
                        {currentContent.culturalHeritage.flavors.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {currentContent.culturalHeritage.flavors.content}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Cuisine Image */}
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm">
              <img 
                src={sicilyCuisineImage} 
                alt="Sicilian Cuisine" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'es' ? 'Gastronomía Siciliana' : 
                   language === 'en' ? 'Sicilian Cuisine' :
                   language === 'it' ? 'Cucina Siciliana' : 'Cucina Siciliana'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'es' ? 'Sabores únicos que fusionan tradiciones mediterráneas, árabes y españolas.' :
                   language === 'en' ? 'Unique flavors that fuse Mediterranean, Arab and Spanish traditions.' :
                   language === 'it' ? 'Sapori unici che fondono tradizioni mediterranee, arabe e spagnole.' : 'Sapuri unici chi joncinu tradizioni mediterrani, àravi e spagnoli.'}
                </p>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="p-6 bg-wedding-cream shadow-soft border-0">
              <h3 className="font-serif text-xl text-primary mb-6 text-center flex items-center gap-2 justify-center">
                <Sun className="h-5 w-5" />
                {currentContent.funFacts.title}
              </h3>
              <div className="space-y-4">
                {currentContent.funFacts.facts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Waves className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{fact}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6 bg-wedding-gold text-center shadow-soft border-0">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg text-primary mb-2">
                {language === 'es' ? 'Ubicación' :
                 language === 'en' ? 'Location' :
                 language === 'it' ? 'Posizione' : 'Pusizioni'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'es' ? 'Sur de Italia, Mar Mediterráneo' :
                 language === 'en' ? 'Southern Italy, Mediterranean Sea' :
                 language === 'it' ? 'Sud Italia, Mar Mediterraneo' : 'Sud Italia, Mari Mediterraneu'}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {language === 'es' ? '25.711 km² - La isla más grande del Mediterráneo' :
                 language === 'en' ? '25,711 km² - The largest Mediterranean island' :
                 language === 'it' ? '25.711 km² - L\'isola più grande del Mediterraneo' : '25.711 km² - L\'isula cchiù granni dû Mediterraneu'}
              </p>
            </Card>
          </div>
        </div>
      </div>
      <WeddingFooter />
    </div>
  );
};

export default Sicilia;