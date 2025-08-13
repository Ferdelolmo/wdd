import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Mountain, Clock, Camera, Utensils, Church, Crown, TreePine } from 'lucide-react';
import avilaWallsImage from '@/assets/avila-walls.jpg';
import avilaCuisineImage from '@/assets/avila-cuisine.jpg';

const Avila = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Ávila - Ciudad de las Murallas",
      subtitle: "Patrimonio de la Humanidad en Castilla y León",
      heroDescription: "Descubre una de las ciudades medievales mejor conservadas de Europa, donde cada piedra cuenta una historia milenaria.",
      sections: {
        history: {
          title: "Historia Milenaria",
          content: "Ávila, conocida como la 'Ciudad de las Murallas', es una joya medieval situada en Castilla y León. Sus murallas del siglo XI son las mejor conservadas de España y fueron declaradas Patrimonio de la Humanidad por la UNESCO en 1985.",
          details: [
            { title: "Fundación", content: "Fundada en el siglo XI por orden del rey Alfonso VI tras la reconquista cristiana." },
            { title: "Santa Teresa", content: "Cuna de Santa Teresa de Jesús (1515-1582), mística y doctora de la Iglesia." },
            { title: "Patrimonio UNESCO", content: "Declarada Patrimonio de la Humanidad en 1985 por su valor histórico único." }
          ]
        },
        walls: {
          title: "Las Murallas Medievales",
          content: "Con más de 2.5 kilómetros de longitud, las murallas de Ávila rodean completamente el casco histórico. Construidas entre los siglos XI y XIV, cuentan con 88 torres y 9 puertas que han resistido el paso del tiempo.",
          details: [
            { title: "Dimensiones", content: "2.516 metros de perímetro, 12 metros de altura media y 3 metros de grosor." },
            { title: "Torres", content: "88 torres semicirculares que refuerzan la estructura defensiva." },
            { title: "Puertas", content: "9 puertas históricas, siendo la del Alcázar y la de San Vicente las más emblemáticas." }
          ]
        },
        culture: {
          title: "Patrimonio Cultural",
          content: "Ávila conserva un rico patrimonio religioso y cultural, con numerosos conventos, iglesias y palacios que narran siglos de historia cristiana y noble.",
          details: [
            { title: "Basílica de San Vicente", content: "Obra maestra del románico español del siglo XII." },
            { title: "Catedral de Ávila", content: "Primera catedral gótica de España, construida en el siglo XII." },
            { title: "Monasterio de la Encarnación", content: "Donde vivió Santa Teresa durante 27 años de su vida." }
          ]
        },
        gastronomy: {
          title: "Gastronomía Tradicional",
          content: "La cocina abulense destaca por sus carnes de ternera y cordero, las judías del Barco de Ávila, y las famosas yemas de Santa Teresa. Los vinos de la región complementan perfectamente esta rica tradición culinaria.",
          details: [
            { title: "Chuletón de Ávila", content: "Carne de ternera de la mejor calidad, criada en los pastos de la provincia." },
            { title: "Judías del Barco", content: "Legumbres con Denominación de Origen, famosas por su textura y sabor." },
            { title: "Yemas de Santa Teresa", content: "Dulce tradicional hecho con yema de huevo y azúcar desde el siglo XVI." }
          ]
        }
      },
      funFacts: {
        title: "Datos Curiosos",
        facts: [
          "Ávila está a 1.131 metros sobre el nivel del mar, siendo una de las capitales provinciales más altas de España.",
          "Las murallas son visibles desde el espacio debido a su perfecta conservación.",
          "Santa Teresa de Jesús reformó la orden carmelita desde esta ciudad.",
          "El casco histórico mantiene el trazado urbano medieval original."
        ]
      },
      historicalDetails: {
        title: "Historia y Memoria",
        sections: {
          fuero: {
            title: "⚖️ Fuero Medieval",
            content: "Conjunto de leyes y privilegios reales tras la repoblación: autonomía judicial local, franquicias fiscales y autogobierno concejil. Atraía vecinos, protegía rutas y consolidaba poder municipal."
          },
          farsa: {
            title: "🎭 Farsa de Ávila (1465)",
            content: "Ceremonia pública en la que nobles destronaron en efigie a Enrique IV y proclamaron a Alfonso. Teatro político con efectos reales."
          },
          guerra: {
            title: "⚔️ Guerra de las Comunidades (1520–1521)",
            content: "Levantamiento urbano contra Carlos V. De queja fiscal pasó a movimiento pluriclase por gobierno representativo. A menudo vista como precedente de revoluciones modernas."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez, hijo ilustre",
            content: "Nacido en Cebreros (Ávila). Primer presidente de la democracia y artífice de la Transición española."
          }
        }
      },
      mustSee: {
        title: "🗺 Lugares que no te deberías perder",
        places: [
          { name: "Murallas de Ávila 🏰", description: "Paseo de adarve y vistas 360°" },
          { name: "Monasterio de Santo Tomás ⛪", description: "Es Patrimonio de la Humanidad y una joya del patrimonio abulense. Fue escogido por los Reyes Católicos como residencia de verano y lugar de enterramiento del príncipe Juan, su hijo fallecido. Destaca por sus tres claustros y su retablo de Pedro Berruguete, y alberga un Museo de Arte Oriental. " },
          { name: "Basílica de San Vicente 🕍", description: "Es un templo románico-gótico del siglo XII dedicado a los mártires Vicente, Sabina y Cristeta, famoso por su cenotafio policromado y su imponente arquitectura en piedra caleña, parte del Patrimonio de la Humanidad." },
          { name: "Basílica de Santa Teresa ✝", description: "Fue construida en el siglo XVII sobre la casa natal de Santa Teresa de Jesús. Es un templo barroco carmelitano de planta de cruz latina con capillas laterales, conocido por su fachada a modo de retablo con la imagen de la santa y escudos familiares." },
          { name: "Catedral de Ávila 🏛", description: "La Catedral de Ávila, iniciada en el siglo XII, es la primera catedral gótica de España y también una fortaleza integrada en la muralla, destacando por su ábside defensivo y su mezcla de estilos románico y gótico." },
          { name: "Puerta del Alcázar 🛡", description: "Entrada monumental al casco histórico" },
          { name: "Plaza del Mercado Chico 🏘", description: "Tradicionalmente un centro de comercio y encuentro en la ciudad medieval, especialmente para productos locales y artesanías." },
          { name: "Plaza del Mercado Grande 🌟", description: "Servía como epicentro de las ferias y mercados mayores de Ávila en la Edad Media. Hoy es un lugar vivo y frecuentado, que mantiene su función de espacio público donde se celebran eventos culturales y mercadillos." },
          { name: "Cuatro Postes 🌅", description: "Monumento emblemático consta de cuatro pilares que sustentan una pequeña cruz. Es un lugar de descanso y reflexión para los peregrinos y visitantes, desde donde se obtiene una vista panorámica del recinto amurallado de Ávila." }
        ]
      },
      restaurants: {
        title: "🍽 Prueba nuestra gastronomía",
        content: "Una de las cosas que te sorprenderán de Ávila, es que cuando pidas una bebida, te pondrán un pincho sin haberlo pedirlo. Sí, tenemos esta cultura como otras ciudades en España, así que aprovechalo 😋",
        places: [
          { name: "El Pórtico 🍲", description: "Lugar que destaca por sus tapas variadas, entre ellas: Combinado, lomo adobado o champiñón, además de su bocadillo de calamares." },
          { name: "Venus Café Bar 🥘", description: "Destaca por su pincho de secreto y su chipirón" },
          { name: "La Oca Cocktail Bar 🍸", description: "Gastro coctelería y tapas variadas"" },
          { name: "La Rotonda del Ancla 🥟", description: "Croquetas, clásicos bien hechos" },
          { name: "Palacio de los Sofraga 🍖", description: "Destaca más bien por su lugar y sus vistas a la muralla" },
          { name: "La Lola Gastrobar 🍤", description: "Tapas caseras con toque moderno" },
          { name: "El Almacén 🥚", description: "Ya estamos hablando de restaurantes, aquí vas a encontrar un producto de calidad a precios no exageradamente altos. Muy recomendable" },
          { name: "Bococo 🥩", description: "Uno de los lugares más populares últimamente, con una cocina que mezcla tradición e innovación" },
          { name: "Los Candiles 🍗", description: "Tradición castellana cuidada" }
        ]
      }
    },
    en: {
      title: "Ávila - City of Walls",
      subtitle: "World Heritage Site in Castilla y León",
      heroDescription: "Discover one of Europe's best-preserved medieval cities, where every stone tells a millenary story.",
      sections: {
        history: {
          title: "Millenary History",
          content: "Ávila, known as the 'City of Walls', is a medieval jewel located in Castilla y León. Its 11th-century walls are the best preserved in Spain and were declared a UNESCO World Heritage Site in 1985.",
          details: [
            { title: "Foundation", content: "Founded in the 11th century by order of King Alfonso VI after the Christian reconquest." },
            { title: "Saint Teresa", content: "Birthplace of Saint Teresa of Jesus (1515-1582), mystic and Doctor of the Church." },
            { title: "UNESCO Heritage", content: "Declared World Heritage Site in 1985 for its unique historical value." }
          ]
        },
        walls: {
          title: "Medieval Walls",
          content: "With more than 2.5 kilometers in length, Ávila's walls completely surround the historic center. Built between the 11th and 14th centuries, they feature 88 towers and 9 gates that have withstood the test of time.",
          details: [
            { title: "Dimensions", content: "2,516 meters perimeter, 12 meters average height and 3 meters thick." },
            { title: "Towers", content: "88 semicircular towers that reinforce the defensive structure." },
            { title: "Gates", content: "9 historic gates, with Alcázar and San Vicente gates being the most emblematic." }
          ]
        },
        culture: {
          title: "Cultural Heritage",
          content: "Ávila preserves a rich religious and cultural heritage, with numerous convents, churches and palaces that tell centuries of Christian and noble history.",
          details: [
            { title: "Basilica of San Vicente", content: "Masterpiece of Spanish Romanesque architecture from the 12th century." },
            { title: "Ávila Cathedral", content: "First Gothic cathedral in Spain, built in the 12th century." },
            { title: "Monastery of the Incarnation", content: "Where Saint Teresa lived for 27 years of her life." }
          ]
        },
        gastronomy: {
          title: "Traditional Gastronomy",
          content: "Abulense cuisine stands out for its beef and lamb, the beans from Barco de Ávila, and the famous yemas de Santa Teresa. Regional wines perfectly complement this rich culinary tradition.",
          details: [
            { title: "Ávila Steak", content: "Top quality beef raised in the province's pastures." },
            { title: "Barco Beans", content: "Legumes with Designation of Origin, famous for their texture and flavor." },
            { title: "Yemas de Santa Teresa", content: "Traditional sweet made with egg yolk and sugar since the 16th century." }
          ]
        }
      },
      funFacts: {
        title: "Fun Facts",
        facts: [
          "Ávila is 1,131 meters above sea level, being one of Spain's highest provincial capitals.",
          "The walls are visible from space due to their perfect conservation.",
          "Saint Teresa of Jesus reformed the Carmelite order from this city.",
          "The historic center maintains the original medieval urban layout."
        ]
      },
      historicalDetails: {
        title: "History & Memory",
        sections: {
          fuero: {
            title: "⚖️ Medieval Fuero",
            content: "Royal charter of laws & privileges after repopulation: local judicial autonomy, tax reliefs and council self‑government—boosting settlement, trade and municipal power."
          },
          farsa: {
            title: "🎭 Farce of Ávila (1465)",
            content: "Public ceremony: Henry IV symbolically deposed in effigy; Alfonso proclaimed king. Political theatre with real consequences."
          },
          guerra: {
            title: "⚔️ War of the Communities (1520–1521)",
            content: "Urban uprising against Charles V—evolving from tax protest to cross‑class push for representative government; often seen as a forerunner of modern revolutions."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez",
            content: "From Cebreros (Ávila). Spain's first democratic Prime Minister and architect of the Transition."
          }
        }
      },
      mustSee: {
        title: "🗺 Must‑see Places",
        places: [
          { name: "Ávila Walls 🏰", description: "Rampart walk and 360° views" },
          { name: "Monastery of Santo Tomás ⛪", description: "Gothic cloisters; tomb of Prince Juan" },
          { name: "Basilica of San Vicente 🕍", description: "Masterpiece of Spanish Romanesque" },
          { name: "Basilica of Santa Teresa ✝", description: "Built over the saint's birthplace" },
          { name: "Ávila Cathedral 🏛", description: "First Gothic cathedral in Spain, integrated into the wall" },
          { name: "Gate of the Alcázar 🛡", description: "Monumental entrance to the historic center" },
          { name: "Plaza del Mercado Chico 🏘", description: "Municipal heart since the Middle Ages" },
          { name: "Plaza del Mercado Grande 🌟", description: "Great esplanade for fairs and meetings" },
          { name: "Four Posts Hermitage 🌅", description: "Iconic sunset viewpoint" }
        ]
      },
      restaurants: {
        title: "🍽 Taste Our Gastronomy",
        places: [
          { name: "El Pórtico 🍲", description: "Castilian soup, revolconas potatoes, asparagus" },
          { name: "Venus Café Bar 🥘", description: "Generous portions; tripe" },
          { name: "La Oca Cocktail Bar 🍸", description: "Gastro‑cocktails; \"Cod&Pop\" tapa" },
          { name: "La Rotonda del Ancla 🥟", description: "Croquettes, well-made classics" },
          { name: "Palacio de los Sofraga 🍖", description: "T-bone steak, rice dishes; next to the wall" },
          { name: "La Lola Gastrobar 🍤", description: "Homemade tapas with modern touch" },
          { name: "El Almacén 🥚", description: "Fried eggs with prawns; creative cuisine" },
          { name: "Bococo 🥩", description: "Large beans, revolconas, T-bone steak" },
          { name: "Los Candiles 🍗", description: "Careful Castilian tradition" }
        ]
      }
    },
    it: {
      title: "Ávila - Città delle Mura",
      subtitle: "Patrimonio dell'Umanità in Castiglia e León",
      heroDescription: "Scopri una delle città medievali meglio conservate d'Europa, dove ogni pietra racconta una storia millenaria.",
      sections: {
        history: {
          title: "Storia Millenaria",
          content: "Ávila, conosciuta come la 'Città delle Mura', è un gioiello medievale situato in Castiglia e León. Le sue mura dell'XI secolo sono le meglio conservate di Spagna e sono state dichiarate Patrimonio dell'Umanità dall'UNESCO nel 1985.",
          details: [
            { title: "Fondazione", content: "Fondata nell'XI secolo per ordine del re Alfonso VI dopo la riconquista cristiana." },
            { title: "Santa Teresa", content: "Culla di Santa Teresa di Gesù (1515-1582), mistica e dottore della Chiesa." },
            { title: "Patrimonio UNESCO", content: "Dichiarata Patrimonio dell'Umanità nel 1985 per il suo valore storico unico." }
          ]
        },
        walls: {
          title: "Le Mura Medievali",
          content: "Con più di 2,5 chilometri di lunghezza, le mura di Ávila circondano completamente il centro storico. Costruite tra l'XI e il XIV secolo, contano 88 torri e 9 porte che hanno resistito al passare del tempo.",
          details: [
            { title: "Dimensioni", content: "2.516 metri di perimetro, 12 metri di altezza media e 3 metri di spessore." },
            { title: "Torri", content: "88 torri semicircolari che rafforzano la struttura difensiva." },
            { title: "Porte", content: "9 porte storiche, con quelle dell'Alcázar e di San Vicente le più emblematiche." }
          ]
        },
        culture: {
          title: "Patrimonio Culturale",
          content: "Ávila conserva un ricco patrimonio religioso e culturale, con numerosi conventi, chiese e palazzi che narrano secoli di storia cristiana e nobiliare.",
          details: [
            { title: "Basilica di San Vicente", content: "Capolavoro del romanico spagnolo del XII secolo." },
            { title: "Cattedrale di Ávila", content: "Prima cattedrale gotica di Spagna, costruita nel XII secolo." },
            { title: "Monastero dell'Incarnazione", content: "Dove visse Santa Teresa per 27 anni della sua vita." }
          ]
        },
        gastronomy: {
          title: "Gastronomia Tradizionale",
          content: "La cucina abulense si distingue per le sue carni di vitello e agnello, i fagioli del Barco de Ávila, e le famose yemas de Santa Teresa. I vini della regione completano perfettamente questa ricca tradizione culinaria.",
          details: [
            { title: "Bistecca di Ávila", content: "Carne di vitello di prima qualità, allevata nei pascoli della provincia." },
            { title: "Fagioli del Barco", content: "Legumi con Denominazione d'Origine, famosi per la loro consistenza e sapore." },
            { title: "Yemas de Santa Teresa", content: "Dolce tradizionale fatto con tuorlo d'uovo e zucchero dal XVI secolo." }
          ]
        }
      },
      funFacts: {
        title: "Curiosità",
        facts: [
          "Ávila si trova a 1.131 metri sul livello del mare, essendo una delle capitali provinciali più alte di Spagna.",
          "Le mura sono visibili dallo spazio grazie alla loro perfetta conservazione.",
          "Santa Teresa di Gesù riformò l'ordine carmelitano da questa città.",
          "Il centro storico mantiene la disposizione urbana medievale originale."
        ]
      },
      historicalDetails: {
        title: "Storia e Memoria",
        sections: {
          fuero: {
            title: "⚖️ Fuero Medievale",
            content: "Sistema di leggi e privilegi reali per la ripopolazione: autonomia giudiziaria locale, agevolazioni fiscali e autogoverno del consiglio cittadino."
          },
          farsa: {
            title: "🎭 La Farsa di Ávila (1465)",
            content: "Atto pubblico: Enrico IV deposto in effigie e proclamazione di Alfonso. Teatro con effetti reali."
          },
          guerra: {
            title: "⚔️ Guerra delle Comunità (1520–1521)",
            content: "Sollevazione urbana contro Carlo V, da protesta fiscale a movimento interclassista per un governo più rappresentativo; spesso vista come antecedente di rivoluzioni moderne."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez",
            content: "Di Cebreros (Ávila). Primo presidente della democrazia e architetto della Transición."
          }
        }
      },
      mustSee: {
        title: "🗺 Luoghi da Non Perdere",
        places: [
          { name: "Mura di Ávila 🏰", description: "Passeggiata di ronda e viste a 360°" },
          { name: "Monastero di San Tommaso ⛪", description: "Chiostri gotici; sepolcro del Principe Juan" },
          { name: "Basilica di San Vincenzo 🕍", description: "Romanico maggiore castigliano" },
          { name: "Basilica di Santa Teresa ✝", description: "Sulla casa natale della santa" },
          { name: "Cattedrale di Ávila 🏛", description: "Prima gotica di Spagna, integrata nelle mura" },
          { name: "Porta dell'Alcázar 🛡", description: "Ingresso monumentale al centro storico" },
          { name: "Plaza del Mercado Chico 🏘", description: "Cuore municipale dal Medioevo" },
          { name: "Plaza del Mercado Grande 🌟", description: "Grande spianata di fiere e riunioni" },
          { name: "Quattro Pali 🌅", description: "Belvedere iconico al tramonto" }
        ]
      },
      restaurants: {
        title: "🍽 Assaggia la Nostra Cucina",
        places: [
          { name: "El Pórtico 🍲", description: "Zuppa castigliana, patate revolconas, asparagi" },
          { name: "Venus Café Bar 🥘", description: "Porzioni generose; trippa" },
          { name: "La Oca Cocktail Bar 🍸", description: "Gastro-cocktail; tapa \"Cod&Pop\"" },
          { name: "La Rotonda del Ancla 🥟", description: "Crocchette, classici ben fatti" },
          { name: "Palacio de los Sofraga 🍖", description: "Bistecca, risotti; vicino alle mura" },
          { name: "La Lola Gastrobar 🍤", description: "Tapas casalinghe con tocco moderno" },
          { name: "El Almacén 🥚", description: "Uova fritte con scampi; cucina creativa" },
          { name: "Bococo 🥩", description: "Fagioli grandi, revolconas, bistecca" },
          { name: "Los Candiles 🍗", description: "Tradizione castigliana curata" }
        ]
      }
    },
    scn: {
      title: "Ávila - Città di li Mura",
      subtitle: "Patrimoniu di l'Umanità in Castiglia e León",
      heroDescription: "Scopri una di li città medievali megghiu cunsirvati d'Europa, unni ogni petra cunta na storia millenaria.",
      sections: {
        history: {
          title: "Storia Millenaria",
          content: "Ávila, canusciuta comu la 'Città di li Mura', è na gioia medievali situata in Castiglia e León. Li so mura di l'XI sèculu sunnu li megghiu cunsirvati di Spagna e furunu dichiarati Patrimoniu di l'Umanità di l'UNESCO nto 1985.",
          details: [
            { title: "Fundazioni", content: "Fundata nto XI sèculu pi ordini dû re Alfonso VI doppu la ricunquista cristiana." },
            { title: "Santa Teresa", content: "Culluzza di Santa Teresa di Gesù (1515-1582), mistica e dutturi dâ Chiesa." },
            { title: "Patrimoniu UNESCO", content: "Dichiarata Patrimoniu di l'Umanità nto 1985 pi lu so valuri storicu unicu." }
          ]
        },
        walls: {
          title: "Li Mura Medievali",
          content: "Cu cchiù di 2,5 chilometri di lunghizza, li mura di Ávila circundanu cumpletamenti lu centru storicu. Custruite tra l'XI e lu XIV sèculu, hannu 88 turri e 9 porti chi hannu resistutu ô passari dû tempu.",
          details: [
            { title: "Dimensioni", content: "2.516 metri di perimetru, 12 metri di altizza media e 3 metri di spissuri." },
            { title: "Turri", content: "88 turri semicirculari chi rinforzanu la struttura difensiva." },
            { title: "Porti", content: "9 porti storici, cu chiddi di l'Alcázar e di San Vicente li cchiù emblematici." }
          ]
        },
        culture: {
          title: "Patrimoniu Culturali",
          content: "Ávila cunserva nu riccu patrimoniu religiosu e culturali, cu numerusi cunventi, chiesi e palazzi chi narranu sèculi di storia cristiana e nubiliari.",
          details: [
            { title: "Basilica di San Vicente", content: "Capulavuru dû rumanicu spagnolu dû XII sèculu." },
            { title: "Cattidrali di Ávila", content: "Prima cattidrali gotica di Spagna, custruita nto XII sèculu." },
            { title: "Munasteru di l'Incarnazioni", content: "Unni vìssiru Santa Teresa pi 27 anni dâ so vita." }
          ]
        },
        gastronomy: {
          title: "Gastronomia Tradiziunali",
          content: "La cucina abulensi si distingui pi li so carni di vitellu e agnellu, li fasola dû Barco de Ávila, e li famusi yemas de Santa Teresa. Li vini dâ riggioni cumplitanu perfettamenti sta ricca tradizioni culinaria.",
          details: [
            { title: "Bistecca di Ávila", content: "Carni di vitellu di prima qualità, allivata nti pasculi dâ pruvincia." },
            { title: "Fasola dû Barco", content: "Ligumi cu Dinuminazioni d'Origini, famusi pi la so cunsistenza e sapuri." },
            { title: "Yemas de Santa Teresa", content: "Durci tradiziunali fattu cu rùsulu d'ovu e zuccaru dû XVI sèculu." }
          ]
        }
      },
      funFacts: {
        title: "Curiosità",
        facts: [
          "Ávila si trova a 1.131 metri supra lu livellu dû mari, essennu una di li capitali pruvinciali cchiù auti di Spagna.",
          "Li mura sunnu visìbbili dû spazziu grazii â so perfetta cunsirvazioni.",
          "Santa Teresa di Gesù riformau l'ordini carmelitanu di sta città.",
          "Lu centru storicu manteni la dispusizioni urbana medievali originali."
        ]
      },
      historicalDetails: {
        title: "Storia e Memoria",
        sections: {
          fuero: {
            title: "⚖️ U fuoru",
            content: "Liggì e privìligi ri lu rè: autunumìa giudiziaria, scansiuni fiscali e autugovernu dû cunsigghiu pi 'mpupari a citati."
          },
          farsa: {
            title: "🎭 Farsa di Ávila (1465)",
            content: "Atto pupblicu: 'nni càvanu a Enrico IV 'n effiggi e fìciru rè Alfonso."
          },
          guerra: {
            title: "⚔️ Guerra di li Cumunità (1520–1521)",
            content: "Ribbillioni di cità contra Carlu V: di tassi a muvimentu di ceti mischiati pi guvernu cchiù rapprisintativu; vista comu antinati di rivuluzioni muderni."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez",
            content: "Di Cebreros (Ávila): primu prisidenti dâ dimucrazia, architettu dâ Transición."
          }
        }
      },
      mustSee: {
        title: "🗺 Così ca nun ti poi pèrdiri",
        places: [
          { name: "Mura 🏰", description: "Passiaggìata e vista di tutti li lati" },
          { name: "Munasteru di Santu Tomasu ⛪", description: "Chiostri gotici; sepulcru dû Prìncipi Juan" },
          { name: "Basilica di San Vinçenzu 🕍", description: "Capulavuru dû rumanicu spagnolu" },
          { name: "Basilica di Santa Teresa ✝", description: "Supra la casa unni nasciu" },
          { name: "Cattidrali di Ávila 🏛", description: "Prima gotica di Spagna, ntâ muraglia" },
          { name: "Porta dû Alcázar 🛡", description: "Ntranzata monumentali ô centru storicu" },
          { name: "Piazza dû Mercatu Nicu 🏘", description: "Cori municipali dû Mediuevu" },
          { name: "Piazza dû Mercatu Granni 🌟", description: "Granni spianata di fieri e riunioni" },
          { name: "Quattru Pusti 🌅", description: "Miradori ô caliduni" }
        ]
      },
      restaurants: {
        title: "🍽 Assaggia 'a cucina",
        places: [
          { name: "El Pórtico 🍲", description: "Zuppa castigliana, patati revolconas, sparaci" },
          { name: "Venus Café Bar 🥘", description: "Purziuni gennerusi; trippa" },
          { name: "La Oca Cocktail Bar 🍸", description: "Gastru-cocktail; tapa \"Cod&Pop\"" },
          { name: "La Rotonda dû Àncila 🥟", description: "Cruchetti, classici beni fatti" },
          { name: "Palacio di li Sofraga 🍖", description: "Bistecca, risotti; vicinu â muraglia" },
          { name: "La Lola Gastrobar 🍤", description: "Tapas casalinghi cu toccu mudernu" },
          { name: "El Almacén 🥚", description: "Ova fritti cu scampi; cucina creiativa" },
          { name: "Bococo 🥩", description: "Fasola grandi, revolconas, bistecca" },
          { name: "Los Candiles 🍗", description: "Tradizioni castigliana curata" }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={avilaWallsImage} 
          alt="Ávila Walls" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
                    {key === 'history' && <Clock className="h-5 w-5 text-primary" />}
                    {key === 'walls' && <Mountain className="h-5 w-5 text-primary" />}
                    {key === 'culture' && <Church className="h-5 w-5 text-primary" />}
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

            {/* Historical Details Section */}
            <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-primary" />
                  {currentContent.historicalDetails.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {Object.entries(currentContent.historicalDetails.sections).map(([key, section]) => (
                    <AccordionItem key={key} value={`historical-${key}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {section.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Must See Places */}
            <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {currentContent.mustSee.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {currentContent.mustSee.places.map((place, index) => (
                    <AccordionItem key={index} value={`place-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {place.name}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {place.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Restaurants */}
            <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  {currentContent.restaurants.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {currentContent.restaurants.places.map((restaurant, index) => (
                    <AccordionItem key={index} value={`restaurant-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {restaurant.name}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {restaurant.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Cuisine Image */}
            <Card className="overflow-hidden bg-card/80 backdrop-blur-sm">
              <img 
                src={avilaCuisineImage} 
                alt="Ávila Cuisine" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'es' ? 'Gastronomía Abulense' : 
                   language === 'en' ? 'Abulense Cuisine' :
                   language === 'it' ? 'Cucina Abulense' : 'Cucina Abulensi'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'es' ? 'Descubre los sabores únicos de la cocina tradicional de Ávila.' :
                   language === 'en' ? 'Discover the unique flavors of Ávila\'s traditional cuisine.' :
                   language === 'it' ? 'Scopri i sapori unici della cucina tradizionale di Ávila.' : 'Scopri li sapuri unici dâ cucina tradiziunali di Ávila.'}
                </p>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="p-6 bg-wedding-cream shadow-soft border-0">
              <h3 className="font-serif text-xl text-primary mb-6 text-center flex items-center gap-2 justify-center">
                <Camera className="h-5 w-5" />
                {currentContent.funFacts.title}
              </h3>
              <div className="space-y-4">
                {currentContent.funFacts.facts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <TreePine className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
                {language === 'es' ? 'Castilla y León, España' :
                 language === 'en' ? 'Castilla y León, Spain' :
                 language === 'it' ? 'Castiglia e León, Spagna' : 'Castiglia e León, Spagna'}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {language === 'es' ? '1.131 metros sobre el nivel del mar' :
                 language === 'en' ? '1,131 meters above sea level' :
                 language === 'it' ? '1.131 metri sul livello del mare' : '1.131 metri supra lu livellu dû mari'}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avila;
