import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Mountain, Clock, Camera, Utensils, Church, Crown, TreePine, Home } from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import avilaHeroImg from '@/assets/avila-hero-new.jpg';
import AvilaMap from '@/components/AvilaMap';
import WeddingFooter from '@/components/WeddingFooter';
import SoundCloudPlayer from '@/components/SoundCloudPlayer';

const Avila = () => {
  const { language } = useLanguage();

  const soundCloudContent = {
    es: {
      title: 'Audio Guía',
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2171713713&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
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

  const currentAudio = soundCloudContent[language];

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
            { title: "Fundación", content: "Fundada en el siglo XI por orden del rey Alfonso VI tras la reconquista cristiana, se erigió como ciudad fortificada para defender la frontera del Reino de Castilla frente a los musulmanes. Sus murallas, levantadas en esa época, reflejan su carácter militar y estratégico. Su legado medieval sigue vivo en cada rincón de la ciudad amurallada." },
            { title: "Santa Teresa", content: "Cuna de Santa Teresa de Jesús (1515-1582), mística, escritora y reformadora de la orden carmelita. Su influencia espiritual traspasó fronteras y hoy es considerada Doctora de la Iglesia, un título único para su tiempo." },
            { title: "Patrimonio UNESCO", content: "En 1985, la Ciudad Vieja de Ávila y sus iglesias extramuros fueron declaradas Patrimonio de la Humanidad por la UNESCO. La muralla románica, sus templos y conventos, junto con el trazado medieval de la ciudad, representan un ejemplo excepcional de la arquitectura defensiva y religiosa de la Edad Media en España." }
          ]
        },
        walls: {
          title: "Las Murallas Medievales", 
          content: "La muralla de Ávila, construida en el siglo XI, es uno de los recintos amurallados medievales mejor conservados de Europa. Rodea completamente el casco histórico con más de 2,5 km de perímetro, 87 torreones y 9 puertas monumentales. Declarada Patrimonio de la Humanidad por la UNESCO, es el símbolo indiscutible de la ciudad y un recordatorio de su importancia estratégica en la Edad Media.",
          details: [
            { title: "Dimensiones", content: "2.516 metros de perímetro, 12 metros de altura media y 3 metros de grosor." },
            { title: "Torres", content: "87 torres semicirculares que refuerzan la estructura defensiva." },
            { title: "Puertas", content: "9 puertas históricas, siendo la del Alcázar y la de San Vicente las más emblemáticas." }
          ]
        },
        culture: {
          title: "Patrimonio Cultural",
          content: "Ávila conserva un rico patrimonio religioso y cultural, con numerosos conventos, iglesias y palacios que narran siglos de historia cristiana y noble.",
          details: [
            { title: "Murallas de Ávila 🏰", content: "Paseo de adarve y vistas 360°" },
            { title: "Monasterio de Santo Tomás ⛪", content: "Es Patrimonio de la Humanidad y una joya del patrimonio abulense. Fue escogido por los Reyes Católicos como residencia de verano y lugar de enterramiento del príncipe Juan, su hijo fallecido. Destaca por sus tres claustros y su retablo de Pedro Berruguete, y alberga un Museo de Arte Oriental." },
            { title: "Basílica de San Vicente 🕍", content: "Es un templo románico-gótico del siglo XII dedicado a los mártires Vicente, Sabina y Cristeta, famoso por su cenotafio policromado y su imponente arquitectura en piedra caleña, parte del Patrimonio de la Humanidad." },
            { title: "Basílica de Santa Teresa ✝", content: "Fue construida en el siglo XVII sobre la casa natal de Santa Teresa de Jesús. Es un templo barroco carmelitano de planta de cruz latina con capillas laterales, conocido por su fachada a modo de retablo con la imagen de la santa y escudos familiares." },
            { title: "Catedral de Ávila 🏛", content: "La Catedral de Ávila, iniciada en el siglo XII, es la primera catedral gótica de España y también una fortaleza integrada en la muralla, destacando por su ábside defensivo y su mezcla de estilos románico y gótico." },
            { title: "Puerta del Alcázar 🛡", content: "Entrada monumental al casco histórico" },
            { title: "Plaza del Mercado Chico 🏘", content: "Tradicionalmente un centro de comercio y encuentro en la ciudad medieval, especialmente para productos locales y artesanías." },
            { title: "Plaza del Mercado Grande 🌟", content: "Servía como epicentro de las ferias y mercados mayores de Ávila en la Edad Media. Hoy es un lugar vivo y frecuentado, que mantiene su función de espacio público donde se celebran eventos culturales y mercadillos." },
            { title: "Cuatro Postes 🌅", content: "Monumento emblemático consta de cuatro pilares que sustentan una pequeña cruz. Es un lugar de descanso y reflexión para los peregrinos y visitantes, desde donde se obtiene una vista panorámica del recinto amurallado de Ávila." }
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
            content: "Concedido por el rey Alfonso VII durante la reconquista en 1256 fue un <strong>conjunto de leyes y privilegios reales</strong> tras la repoblación: autonomía judicial local, franquicias fiscales y autogobierno concejil. Este pacto, <strong>cimentó la libertad, el autogobierno y el estatus privilegiado de sus caballeros y vecinos</strong>, sustentando su importancia estratégica y su autonomía desde la Edad Media."
          },
          farsa: {
            title: "🎭 Farsa de Ávila (1465)",
            content: "Avila ha sido primer testigo de grandes cambios a lo largo de la historia. Uno de estos acontecimientos fue la llamada <strong>Farsa de Ávila</strong>, en el año 1465. Esto fue un <strong>acto político</strong> celebrado cerca de las murallas de Ávila, en el que una <strong>coalición de nobles castellanos, enfrentados al rey Enrique IV de Castilla (“el Impotente”), lo depusieron simbólicamente al grito de</strong> <a href=\"https://www.youtube.com/watch?v=lyzNt7e4PRQ\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline hover:text-primary/80\"><strong>\"¡al suelo puto!\"</strong></a>, mediante una ceremonia cargada de rituales y teatralidad. No se trató de una batalla, sino de una puesta en escena polémica y muy recordada."
          },
          guerra: {
            title: "⚔️ Guerra de las Comunidades (1520–1521)",
            content: "Otro evento que tuvo sus primeros pasos en Ávila, donde se consituyó la Santa Sede. <a href='https://youtu.be/zIp6y0GvgxQ?si=NnNCjat0Qzluq1yb' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline font-semibold'><strong>La Guerra de las Comunidades</strong></a> fue un <strong>levantamiento armado</strong> ocurrido entre 1520 y 1522, durante el reinado de Carlos V del Sacro Imperio Romano Germánico. El conflicto surgió como <strong>reacción al creciente descontento social y político hacia el rey Carlos V</strong>, quien llegó desde Flandes con una corte extranjera, enfrentado a su madre Juana y apenas hablando el castellano, lo que generó recelos en la nobleza y los estamentos sociales locales. <strong>El levantamiento</strong>, a pesar de haber juntado a diversos estamentos y estratos sociales, influenciados por las ideas humanistas de la Universidad de Salamanca, <strong>fracasó</strong> y sus líderes Bravo, Padilla, Francisco y Javier de Maldonado fueron ejecutados tras la <strong>derrota de Villalar</strong>. El 23 de Abril, es una fecha marcado entre los castellanos, pues aunque supuso la derrota por el ejército imperial, rememora el espíritu de rebeldía y de valentía frente a las injusticias. <strong>Este levantamiento supuso un árduo dolor de cabeza para el emperador</strong>."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez, hijo ilustre",
            content: "Nacido en Cebreros (Ávila). <strong>Primer presidente de la democracia y artífice de la Transición española</strong>. Adolfo Suárez fue el motor político de la Transición española, conduciendo el paso de un régimen autoritario a una democracia plural y constitucional en un período breve pero lleno de retos, logrando una transición pacífica y consensuada que aún hoy es referencia histórica."
          },
          ximena: {
            title: "🦸🏻‍♀️ Ximena de Ávila",
            content: "<strong>Protagonista de una legendaria defensa de la ciudad</strong> durante el siglo XII, en tiempos convulsos de constantes enfrentamientos entre musulmanes y cristianos. Ante la ausencia de los hombres de la ciudad, organizó a mujeres y ancianos para simular una gran defensa desde las murallas y así <strong>evitar un ataque musulmán</strong>. Puedes visitar su estatua homenaje en la Calle San Miguel."
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
        content: "Una de las cosas que te sorprenderán de Ávila, es que cuando pidas una bebida, te pondrán un pincho sin haberlo pedirlo. Sí, tenemos esta cultura como otras ciudades en España, así que aprovéchalo 😋",
          places: [
            { name: "El Pórtico 🍲", description: "Lugar que destaca por sus tapas variadas, entre ellas: Combinado, lomo adobado o champiñón, además de su bocadillo de calamares." },
            { name: "Bar La Oficina 🥘", description: "Destaca por su pincho de secreto" },
            { name: "La Oca Cocktail Bar 🍸", description: "Gastro coctelería y tapas variadas" },
            { name: "La Rotonda del Ancla 🥟", description: "Croquetas, clásicos bien hechos" },
            { name: "Palacio de los Sofraga 🍖", description: "Destaca más bien por su lugar y sus vistas a la muralla" },
            { name: "La Lola Gastrobar 🍤", description: "Tapas caseras con toque moderno" },
            { name: "El Almacén 🥚", description: "Ya estamos hablando de restaurantes, aquí vas a encontrar un producto de calidad a precios no exageradamente altos. Muy recomendable" },
            { name: "Bococo 🥩", description: "Uno de los lugares más populares últimamente, con una cocina que mezcla tradición e innovación" },
            { name: "Los Candiles 🍗", description: "Tradición castellana cuidada" }
          ]
        },
        traditionalDishes: {
          title: "🍽 Gastronomía Tradicional",
          content: "La cocina abulense destaca por sus carnes de ternera y cordero, las judías del Barco de Ávila, y las famosas yemas de Santa Teresa. Los vinos de la región complementan perfectamente esta rica tradición culinaria.",
          dishes: [
            {
              title: "Chuletón de Ávila 🥩",
              content: "Marca emblema gastronómico de la ciudad. Carne de ternera de calidad excepcional de la zona."
            },
            {
              title: "Patatas revolconas 🥔🔥", 
              content: "Un puré de patatas con pimentón, ajo y coronado con torreznos crujientes. Plato humilde y típico de Ávila, perfecto para días fríos."
            },
            {
              title: "Judías del Barco 🫘",
              content: "Legumbres con Denominación de Origen, famosas por su textura y sabor únicos."
            },
            {
              title: "Yemas de Santa Teresa 🍮",
              content: "Dulce tradicional hecho con yema de huevo y azúcar desde el siglo XVI."
            }
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
          content: "With more than 2.5 kilometers in length, Ávila's walls completely surround the historic center. Built between the 11th and 14th centuries, they feature 87 towers and 9 gates that have withstood the test of time.",
          details: [
            { title: "Dimensions", content: "2,516 meters perimeter, 12 meters average height and 3 meters thick." },
            { title: "Towers", content: "87 semicircular towers that reinforce the defensive structure." },
            { title: "Gates", content: "9 historic gates, with Alcázar and San Vicente gates being the most emblematic." }
          ]
        },
        culture: {
          title: "Cultural Heritage",
          content: "Ávila preserves a rich religious and cultural heritage, with numerous convents, churches and palaces that tell centuries of Christian and noble history.",
          details: [
            { title: "Ávila Walls 🏰", content: "Rampart walk and 360° views" },
            { title: "Monastery of Santo Tomás ⛪", content: "Gothic cloisters; tomb of Prince Juan" },
            { title: "Basilica of San Vicente 🕍", content: "Masterpiece of Spanish Romanesque" },
            { title: "Basilica of Santa Teresa ✝", content: "Built over the saint's birthplace" },
            { title: "Ávila Cathedral 🏛", content: "First Gothic cathedral in Spain, integrated into the wall" },
            { title: "Gate of the Alcázar 🛡", content: "Monumental entrance to the historic center" },
            { title: "Plaza del Mercado Chico 🏘", content: "Municipal heart since the Middle Ages" },
            { title: "Plaza del Mercado Grande 🌟", content: "Great esplanade for fairs and meetings" },
            { title: "Four Posts Hermitage 🌅", content: "Iconic sunset viewpoint" }
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
            content: "Granted by King Alfonso VII during the reconquest in 1256, it was a set of royal laws and privileges after repopulation: local judicial autonomy, tax exemptions and council self-government. This pact cemented freedom, self-government and the privileged status of its knights and neighbors, sustaining its strategic importance and autonomy since the Middle Ages."
          },
          farsa: {
            title: "🎭 Farce of Ávila (1465)",
            content: "Ávila has been the first witness to great changes throughout history. One of these events was the so-called <strong>Farce of Ávila</strong>, in the year 1465. This was a political act held near the walls of Ávila, in which a coalition of Castilian nobles, opposed to King Henry IV of Castile ('the Impotent'), symbolically deposed him to the cry of <a href=\"https://www.youtube.com/watch?v=lyzNt7e4PRQ\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline hover:text-primary/80\"><strong>\"¡al suelo puto!\"</strong></a>, through a ceremony charged with rituals and theatricality. It was not a battle, but a controversial and well-remembered staging."
          },
          guerra: {
            title: "⚔️ War of the Communities (1520–1521)",
            content: "Another event that had its first steps in Ávila, where the Holy See was established. <a href=\"https://youtu.be/zIp6y0GvgxQ?si=NnNCjat0Qzluq1yb\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline hover:text-primary/80\"><strong>The War of the Communities</strong></a> was an armed uprising that occurred between 1520 and 1522, during the reign of Charles V of the Holy Roman Empire. The conflict arose as a reaction to growing social and political discontent towards King Charles V, who came from Flanders with a foreign court, confronted with his mother Juana and barely speaking Castilian, which generated suspicions in the nobility and local social estates. The uprising, despite having brought together various estates and social strata, influenced by humanist ideas from the University of Salamanca, failed and its leaders Bravo, Padilla, Francisco and Javier de Maldonado were executed after the defeat of Villalar. April 23 is a marked date among Castilians, because although it meant defeat by the imperial army, it commemorates the spirit of rebellion and courage against injustices, which caused an arduous headache for the emperor."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez, illustrious son",
            content: "Born in Cebreros (Ávila). First president of democracy and architect of the Spanish Transition. Adolfo Suárez was the political engine of the Spanish Transition, leading the transition from an authoritarian regime to a plural and constitutional democracy in a brief but challenging period, achieving a peaceful and consensual transition that is still a historical reference today."
          },
          ximena: {
            title: "🦸🏻‍♀️ Ximena de Ávila",
            content: "Protagonist of a legendary defense of the city during the 12th century, in turbulent times of constant confrontations between Muslims and Christians. In the absence of the city's men, she organized women and elderly people to simulate a great defense from the walls and thus avoid a Muslim attack. You can visit her commemorative statue on Calle San Miguel."
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
        content: "When you order a drink in Ávila, you'll be surprised that they'll bring you a small tapa without asking for it. Yes, we have this culture like other cities in Spain, so enjoy it! 😋",
        places: [
          { name: "El Pórtico 🍲", description: "A place that stands out for its varied tapas, including: mixed platter, marinated pork loin, or mushrooms, as well as its calamari sandwich" },
          { name: "Bar La Oficina 🥘", description: "Known for its pork secreto tapa" },
          { name: "La Oca Cocktail Bar 🍸", description: "Gastro‑cocktails with assorted tapas" },
          { name: "La Rotonda del Ancla 🥟", description: "Croquettes, well-made classics" },
          { name: "Palacio de los Sofraga 🍖", description: "Stands out more for its location and its views of the wall" },
          { name: "La Lola Gastrobar 🍤", description: "Homemade tapas with modern touch" },
          { name: "El Almacén 🥚", description: "Now wer're talking about restaurants; here you'll find quality products at prices that are not excessively high" },
          { name: "Bococo 🥩", description: "One of the most popular places in town lately, with cuisine that blends tradition and innovation" },
          { name: "Los Candiles 🍗", description: "Careful Castilian tradition" }
        ]
      },
        traditionalDishes: {
          title: "🍽 Traditional Gastronomy", 
          content: "Abulense cuisine stands out for its beef and lamb, the beans from Barco de Ávila, and the famous yemas de Santa Teresa. Regional wines perfectly complement this rich culinary tradition.",
          dishes: [
          {
            title: "Ávila T-bone Steak 🥩",
            content: "Emblematic gastronomic brand of the city. Exceptional quality beef from the area."
          },
          {
            title: "Patatas revolconas 🥔🔥",
            content: "A potato puree with paprika, garlic and topped with crispy pork cracklings. Humble and typical dish from Ávila, perfect for cold days."
          },
          {
            title: "Barco Beans 🫘",
            content: "Legumes with Designation of Origin, famous for their unique texture and flavor."
          },
          {
            title: "Yemas de Santa Teresa 🍮",
            content: "Traditional sweet made with egg yolk and sugar since the 16th century."
          }
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
            { title: "Fondazione", content: "Fondata nell'XI secolo per ordine del re Alfonso VI dopo la riconquista cristiana, si eresse come città fortificata per difendere la frontiera del Regno di Castiglia contro i musulmani. Le sue mura, costruite in quell'epoca, riflettono il suo carattere militare e strategico. La sua eredità medievale vive ancora in ogni angolo della città murata." },
            { title: "Santa Teresa", content: "Culla di Santa Teresa di Gesù (1515-1582), mistica, scrittrice e riformatrice dell'ordine carmelitano. La sua influenza spirituale ha oltrepassato i confini e oggi è considerata Dottore della Chiesa, un titolo unico per il suo tempo." },
            { title: "Patrimonio UNESCO", content: "Nel 1985, la Città Vecchia di Ávila e le sue chiese extramurarie furono dichiarate Patrimonio dell'Umanità dall'UNESCO. La muraglia romanica, i suoi templi e conventi, insieme al tracciato medievale della città, rappresentano un esempio eccezionale dell'architettura difensiva e religiosa del Medioevo in Spagna." }
          ]
        },
        walls: {
          title: "Le Mura Medievali",
          content: "La muraglia di Ávila, costruita nell'XI secolo, è uno dei recinti murari medievali meglio conservati d'Europa. Circonda completamente il centro storico con più di 2,5 km di perimetro, 87 torrioni e 9 porte monumentali. Dichiarata Patrimonio dell'Umanità dall'UNESCO, è il simbolo indiscusso della città e un ricordo della sua importanza strategica nel Medioevo.",
          details: [
            { title: "Dimensioni", content: "2.516 metri di perimetro, 12 metri di altezza media e 3 metri di spessore." },
            { title: "Torri", content: "87 torri semicircolari che rafforzano la struttura difensiva." },
            { title: "Porte", content: "9 porte storiche, con quelle dell'Alcázar e di San Vicente le più emblematiche." }
          ]
        },
        culture: {
          title: "Patrimonio Culturale",
          content: "Ávila conserva un ricco patrimonio religioso e culturale, con numerosi conventi, chiese e palazzi che narrano secoli di storia cristiana e nobiliare.",
          details: [
            { title: "Mura di Ávila 🏰", content: "Passeggiata di ronda e viste a 360°" },
            { title: "Monastero di Santo Tomás ⛪", content: "È Patrimonio dell'Umanità e un gioiello del patrimonio abulense. Fu scelto dai Re Cattolici come residenza estiva e luogo di sepoltura del principe Juan, il loro figlio defunto. Si distingue per i suoi tre chiostri e la sua pala d'altare di Pedro Berruguete, e ospita un Museo d'Arte Orientale." },
            { title: "Basilica di San Vicente 🕍", content: "È un tempio romanico-gotico del XII secolo dedicato ai martiri Vicente, Sabina e Cristeta, famoso per il suo cenotafio policromo e la sua imponente architettura in pietra caleña, parte del Patrimonio dell'Umanità." },
            { title: "Basilica di Santa Teresa ✝", content: "Fu costruita nel XVII secolo sulla casa natale di Santa Teresa di Gesù. È un tempio barocco carmelitano a pianta a croce latina con cappelle laterali, noto per la sua facciata come una pala d'altare con l'immagine della santa e stemmi familiari." },
            { title: "Cattedrale di Ávila 🏛", content: "La Cattedrale di Ávila, iniziata nel XII secolo, è la prima cattedrale gotica di Spagna e anche una fortezza integrata nella muraglia, che si distingue per la sua abside difensiva e la sua mescolanza di stili romanico e gotico." },
            { title: "Porta dell'Alcázar 🛡", content: "Ingresso monumentale al centro storico" },
            { title: "Plaza del Mercado Chico 🏘", content: "Tradizionalmente un centro di commercio e incontro nella città medievale, specialmente per prodotti locali e artigianato." },
            { title: "Plaza del Mercado Grande 🌟", content: "Serviva come epicentro delle fiere e mercati maggiori di Ávila nel Medioevo. Oggi è un luogo vivace e frequentato, che mantiene la sua funzione di spazio pubblico dove si celebrano eventi culturali e mercatini." },
            { title: "Quattro Pali 🌅", content: "Monumento emblematico composto da quattro pilastri che sostengono una piccola croce. È un luogo di riposo e riflessione per pellegrini e visitatori, da dove si ottiene una vista panoramica del recinto murato di Ávila." }
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
            content: "Concesso dal re Alfonso VII durante la riconquista nel 1256, fu un insieme di leggi e privilegi reali dopo il ripopolamento: autonomia giudiziaria locale, esenzioni fiscali e autogoverno del consiglio. Questo patto cementò la libertà, l'autogoverno e lo status privilegiato dei suoi cavalieri e vicini, sostenendo la sua importanza strategica e la sua autonomia sin dal Medioevo."
          },
          farsa: {
            title: "🎭 La Farsa di Ávila (1465)",
            content: "Ávila è stata la prima testimone di grandi cambiamenti nella storia. Uno di questi eventi fu la cosiddetta <strong>Farsa di Ávila</strong>, nell'anno 1465. Questo fu un atto politico celebrato vicino alle mura di Ávila, in cui una coalizione di nobili castigliani, contraria al re Enrico IV di Castiglia ('l'Impotente'), lo depose simbolicamente al grido di <a href=\"https://www.youtube.com/watch?v=lyzNt7e4PRQ\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline hover:text-primary/80\"><strong>\"¡al suelo puto!\"</strong></a>, attraverso una cerimonia carica di rituali e teatralità. Non si trattò di una battaglia, ma di una messa in scena controversa e molto ricordata."
          },
          guerra: {
            title: "⚔️ Guerra delle Comunità (1520–1521)",
            content: "Un altro evento che ebbe i suoi primi passi ad Ávila, dove si costituì la Santa Sede. <a href=\"https://youtu.be/zIp6y0GvgxQ?si=NnNCjat0Qzluq1yb\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline hover:text-primary/80\"><strong>La Guerra delle Comunità</strong></a> fu un sollevamento armato avvenuto tra il 1520 e il 1522, durante il regno di Carlo V del Sacro Romano Impero. Il conflitto sorse come reazione al crescente malcontento sociale e politico verso il re Carlo V, che arrivò dalle Fiandre con una corte straniera, in conflitto con sua madre Giovanna e parlando appena il castigliano, il che generò sospetti nella nobiltà e negli stati sociali locali. Il sollevamento, nonostante avesse riunito diversi stati e strati sociali, influenzati dalle idee umanistiche dell'Università di Salamanca, fallì e i suoi leader Bravo, Padilla, Francisco e Javier de Maldonado furono giustiziati dopo la sconfitta di Villalar. Il 23 aprile è una data segnata tra i castigliani, perché anche se significò la sconfitta da parte dell'esercito imperiale, commemora lo spirito di ribellione e coraggio contro le ingiustizie, che causarono un arduo mal di testa all'imperatore."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez, figlio illustre",
            content: "Nato a Cebreros (Ávila). Primo presidente della democrazia e architetto della Transizione spagnola. Adolfo Suárez fu il motore politico della Transizione spagnola, conducendo il passaggio da un regime autoritario a una democrazia plurale e costituzionale in un periodo breve ma pieno di sfide, ottenendo una transizione pacifica e consensuale che è ancora oggi un riferimento storico."
          },
          ximena: {
            title: "🦸🏻‍♀️ Ximena de Ávila",
            content: "Protagonista di una leggendaria difesa della città durante il XII secolo, in tempi turbolenti di costanti scontri tra musulmani e cristiani. In assenza degli uomini della città, organizzò donne e anziani per simulare una grande difesa dalle mura e così evitare un attacco musulmano. Puoi visitare la sua statua commemorativa in Calle San Miguel."
          }
        }
      },
      mustSee: {
        title: "🗺 Luoghi da Non Perdere",
        places: [
          { name: "Mura di Ávila 🏰", description: "Passeggiata di ronda e viste a 360°" },
          { name: "Monastero di Santo Tomás ⛪", description: "È Patrimonio dell'Umanità e un gioiello del patrimonio abulense. Fu scelto dai Re Cattolici come residenza estiva e luogo di sepoltura del principe Juan, il loro figlio defunto. Si distingue per i suoi tre chiostri e la sua pala d'altare di Pedro Berruguete, e ospita un Museo d'Arte Orientale." },
          { name: "Basilica di San Vicente 🕍", description: "È un tempio romanico-gotico del XII secolo dedicato ai martiri Vicente, Sabina e Cristeta, famoso per il suo cenotafio policromo e la sua imponente architettura in pietra caleña, parte del Patrimonio dell'Umanità." },
          { name: "Basilica di Santa Teresa ✝", description: "Fu costruita nel XVII secolo sulla casa natale di Santa Teresa di Gesù. È un tempio barocco carmelitano a pianta a croce latina con cappelle laterali, noto per la sua facciata come una pala d'altare con l'immagine della santa e stemmi familiari." },
          { name: "Cattedrale di Ávila 🏛", description: "La Cattedrale di Ávila, iniziata nel XII secolo, è la prima cattedrale gotica di Spagna e anche una fortezza integrata nella muraglia, che si distingue per la sua abside difensiva e la sua mescolanza di stili romanico e gotico." },
          { name: "Porta dell'Alcázar 🛡", description: "Ingresso monumentale al centro storico" },
          { name: "Plaza del Mercado Chico 🏘", description: "Tradizionalmente un centro di commercio e incontro nella città medievale, specialmente per prodotti locali e artigianato." },
          { name: "Plaza del Mercado Grande 🌟", description: "Serviva come epicentro delle fiere e mercati maggiori di Ávila nel Medioevo. Oggi è un luogo vivace e frequentato, che mantiene la sua funzione di spazio pubblico dove si celebrano eventi culturali e mercatini." },
          { name: "Quattro Pali 🌅", description: "Monumento emblematico composto da quattro pilastri che sostengono una piccola croce. È un luogo di riposo e riflessione per pellegrini e visitatori, da dove si ottiene una vista panoramica del recinto murato di Ávila." }
        ]
      },
      restaurants: {
        title: "🍽 Assaggia la Nostra Gastronomia",
        content: "Una cosa che ti sorprenderà di Ávila è che quando ordini una bevanda, ti porteranno un pincho senza averlo chiesto. Sì, abbiamo questa cultura come altre città in Spagna, quindi approfittane! 😋",
        places: [
          { name: "El Pórtico 🍲", description: "Locale che si distingue per le sue tapas varie, tra cui: Combinado, lonza marinata o funghi, oltre al suo panino ai calamari." },
          { name: "Bar La Oficina 🥘", description: "Si distingue per il suo pincho di segreto" },
          { name: "La Oca Cocktail Bar 🍸", description: "Gastro cocktail e tapas varie" },
          { name: "La Rotonda del Ancla 🥟", description: "Crocchette, classici ben fatti" },
          { name: "Palacio de los Sofraga 🍖", description: "Si distingue più per il suo luogo e le sue viste sulla muraglia" },
          { name: "La Lola Gastrobar 🍤", description: "Tapas casalinghe con tocco moderno" },
          { name: "El Almacén 🥚", description: "Stiamo già parlando di ristoranti, qui troverai un prodotto di qualità a prezzi non eccessivamente alti. Molto raccomandabile" },
          { name: "Bococo 🥩", description: "Uno dei posti più popolari ultimamente, con una cucina che mescola tradizione e innovazione" },
          { name: "Los Candiles 🍗", description: "Tradizione castigliana curata" }
        ]
      },
        traditionalDishes: {
          title: "🍽 Gastronomia Tradizionale",
          content: "La cucina abulense si distingue per le sue carni di vitello e agnello, i fagioli del Barco de Ávila, e i famosi yemas de Santa Teresa. I vini della regione completano perfettamente questa ricca tradizione culinaria.",
          dishes: [
          {
            title: "Bistecca di Ávila 🥩",
            content: "Emblema gastronomico della città. Carne bovina di qualità eccezionale della zona."
          },
          {
            title: "Patate revolconas 🥔🔥",
            content: "Un purè di patate con paprika, aglio e coronato con ciccioli croccanti. Piatto umile e tipico di Ávila, perfetto per i giorni freddi."
          },
          {
            title: "Fagioli del Barco 🫘",
            content: "Legumi con Denominazione d'Origine, famosi per la loro consistenza e sapore unici."
          },
          {
            title: "Yemas de Santa Teresa 🍮",
            content: "Dolce tradizionale fatto con tuorlo d'uovo e zucchero dal XVI secolo."
          }
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
            { title: "Fundazioni", content: "Fundata nto XI sèculu pi ordini dû re Alfonso VI doppu la ricunquista cristiana, si erigiu comu città furtificata pi diffènniri la fruntiera dû Regnu di Castiglia contra i musulmani. Li so mura, livati 'n chidda epuca, riflèttinu lu so caràttiri militari e stratègicu. Lu so ligatu medievali è ancora vivu 'n ogni cantunera dâ città murata." },
            { title: "Santa Teresa", content: "Culluzza di Santa Teresa di Gesù (1515-1582), mistica, scrittora e riformatora di l'òrdini carmelitanu. La so 'nfluenza spirituali trapassau li cunfini e oji è cunsidirata Dutturi dâ Chiesa, nu tìtulu unicu pi lu so tempu." },
            { title: "Patrimoniu UNESCO", content: "Nto 1985, la Città Vecchia di Ávila e li so chiesi extramuralii furunu dichiarati Patrimoniu di l'Umanità di l'UNESCO. La muraglia rumanica, li so tempî e cunventi, 'nsèmi ô tracciatu medievali dâ città, rapprisèntanu n'esèmpiu eccezziunali di l'architettura difensiva e religgijusa dû Mediuevu 'n Spagna." }
          ]
        },
        walls: {
          title: "Li Mura Medievali",
          content: "La muraglia di Ávila, custruita nto XI sèculu, è unu di li ricinti murati medievali megghiu cunsirvati d'Europa. Circunda cumpletamenti lu centru storicu cu cchiù di 2,5 km di perimetru, 87 turriuni e 9 porti monumentali. Dichiarata Patrimoniu di l'Umanità di l'UNESCO, è lu sìmbulu 'ndiscutìbbili dâ città e nu ricordu dâ so 'mpurtanza stratègica nto Mediuevu.",
          details: [
            { title: "Dimensioni", content: "2.516 metri di perimetru, 12 metri di altizza media e 3 metri di spissuri." },
            { title: "Turri", content: "87 turri semicirculari chi rinforzanu la struttura difensiva." },
            { title: "Porti", content: "9 porti storici, cu chiddi di l'Alcázar e di San Vicente li cchiù emblematici." }
          ]
        },
        culture: {
          title: "Patrimoniu Culturali",
          content: "Ávila cunserva nu riccu patrimoniu religiosu e culturali, cu numerusi cunventi, chiesi e palazzi chi narranu sèculi di storia cristiana e nubiliari.",
          details: [
            { title: "Mura di Ávila 🏰", content: "Passiaggìata e vista di tutti li lati" },
            { title: "Munasteru di Santu Tomasu ⛪", content: "È Patrimoniu di l'Umanità e na gioia dû patrimoniu abulensi. Fu scigghiutu di li Re Cattòlici comu residenza estiva e locu di sippillitura dû prìncipi Juan, lu so figghiu mortu. Si distingui pi li so tri chiostri e la so pala d'autari di Pedro Berruguete, e òspita nu Museu d'Arti Orientali." },
            { title: "Basilica di San Vinçenzu 🕍", content: "È nu tempiu rumànicu-gòticu dû XII sèculu dicatu â màrtiri Vicente, Sabina e Cristeta, famusu pi lu so cenotafiu policròmu e la so 'mpunenti architettura 'n petra caleña, parti dû Patrimoniu di l'Umanità." },
            { title: "Basilica di Santa Teresa ✝", content: "Fu custruita nto XVII sèculu supra la casa unni nasciu Santa Teresa di Gesù. È nu tempiu barròccu carmelitanu a pianta a cruci latina cu cappeddi laterali, canusciutu pi la so facciata comu na pala d'autari cu l'immàggini dâ santa e stemmi familiari." },
            { title: "Cattidrali di Ávila 🏛", content: "La Cattidrali di Ávila, cuminciannu nto XII sèculu, è la prima cattidrali gòtica di Spagna e macari na furtizza 'ntegrata nnâ muraglia, chi si distingui pi la so àbsidi difensiva e la so mischianza di stili rumànicu e gòticu." },
            { title: "Porta dû Alcázar 🛡", content: "Ntranzata monumentali ô centru storicu" },
            { title: "Piazza dû Mercatu Nicu 🏘", content: "Tradizionalmenti nu centru di cummèrciu e 'ncuntru nnâ città medievali, spicialimenti pi prudutti lucali e artigianatu." },
            { title: "Piazza dû Mercatu Granni 🌟", content: "Sirvìa comu epicentru di li fieri e mercati majuri di Ávila nto Mediuevu. Oji è nu locu vivu e friquentatu, chi manteni la so funzioni di spazzu pupblicu unni si celèbranu eventi culturali e mercatini." },
            { title: "Quattru Pusti 🌅", content: "Munumentu emblèmaticu cunsisti 'n quattru pilastri chi sustèninu na piccola cruci. È nu locu di riposu e riflessioni pi piligrini e visitaturi, di unni si otteni na vista panoràmica dû ricinta muratu di Ávila." }
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
            title: "⚖️ U fuoru medievali",
            content: "Cuncissu dû re Alfonso VII duranti la ricunquista nto 1256, fu nu 'nsemi di liggì e privilègi riali doppu lu ripupulamientu: autunamìa giudiziaria lucali, esenziuni fiscali e autugovirnu dû cunsigghiu. Stu pattu cimentau la libirtà, l'autugovirnu e lu status privileggiatu di li so cavaleri e vicini, sustinennu la so 'mpurtanza stratègica e la so autunamìa dû Mediuevu."
          },
          farsa: {
            title: "🎭 Farsa di Ávila (1465)",
            content: "Ávila fu la prima tistimònia di granni canci nnâ storia. Unu di sti avvenimenti fu la cusì chiamata <strong>Farsa di Ávila</strong>, nto 1465. Stu fu n'attu pulìticu cilebbratu vicinu â mura di Ávila, unni na cualizzioni di nòbbili castigliani, contra lu re Enrico IV di Castiglia ('lu 'Mpotenti'), lu diposiru simbolicamenti ô gritu di <a href=\"https://www.youtube.com/watch?v=lyzNt7e4PRQ\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline hover:text-primary/80\"><strong>\"¡al suelo puto!\"</strong></a>, attraversu na cirimònia carca di rituali e tiatiralità."
          },
          guerra: {
            title: "⚔️ Guerra di li Cumunità (1520–1521)",
            content: "N'autru avvenimentu chi ebbi li so primi passi 'n Ávila. <a href=\"https://youtu.be/zIp6y0GvgxQ?si=NnNCjat0Qzluq1yb\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline hover:text-primary/80\"><strong>La Guerra di li Cumunità</strong></a> fu na rivulta armata tra lu 1520 e lu 1522, duranti lu regnu di Carlu V. Lu cunflittu nasciu comu riazzioni ô criscenti scuntientu suciali e pulìticu versu lu re, chi vinni di li Fiandri cu na corti stranera, cunfruntannusi cu so matri Giovanna e appena parlannu castiglanu. Lu livamentu, macari ca ebbi juntatu diversi strati suciali, 'nfluinzati di l'idei umanisti di l'Università di Salamanca, falliu e li so capi Bravo, Padilla, Francisco e Javier de Maldonado furunu giustiziati doppu la scunfitta di Villalar. Lu 23 d'aprili è na data signata ntra li castigliani, picchì macari chi significau la scunfitta pi l'esèrcitu imperiali, rimmìmbira lu spiritu di ribellioni e coraggiu contra li 'ngiustizie."
          },
          suarez: {
            title: "🇪🇸 Adolfo Suárez, figghiu illustri",
            content: "Nasciutu 'n Cebreros (Ávila). Primu prisidenti dâ dimucrazìa e architettu dâ Transizioni spagnola. Adolfo Suárez fu lu muturi pulìticu dâ Transizioni spagnola, cunducennu lu passaggiu di nu règimi autùritariu a na dimucrazìa plurali e custituziunali."
          },
          ximena: {
            title: "🦸🏻‍♀️ Ximena de Ávila",
            content: "Prutagunista di na ligendaria difisa dâ città duranti lu XII sèculu, nti tempi turbulinzi di custanti scontri tra musulmani e cristiani. Nâ assenza di l'omini dâ città, urganizzau fimmini e ancianu pi simulari na granni difisa di li mura e accussì evitari n'attaccu musulmanu. Poi visitari la so statua cummimuratìva nâ Calle San Miguel."
          }
        }
      },
      mustSee: {
        title: "🗺 Così ca nun ti poi pèrdiri",
        places: [
          { name: "Mura di Ávila 🏰", description: "Passiaggìata e vista di tutti li lati" },
          { name: "Munasteru di Santu Tomasu ⛪", description: "È Patrimoniu di l'Umanità e na gioia dû patrimoniu abulensi. Fu scigghiutu di li Re Cattòlici comu residenza estiva e locu di sippillitura dû prìncipi Juan, lu so figghiu mortu. Si distingui pi li so tri chiostri e la so pala d'autari di Pedro Berruguete, e òspita nu Museu d'Arti Orientali." },
          { name: "Basilica di San Vinçenzu 🕍", description: "È nu tempiu rumànicu-gòticu dû XII sèculu dicatu â màrtiri Vicente, Sabina e Cristeta, famusu pi lu so cenotafiu policròmu e la so 'mpunenti architettura 'n petra caleña, parti dû Patrimoniu di l'Umanità." },
          { name: "Basilica di Santa Teresa ✝", description: "Fu custruita nto XVII sèculu supra la casa unni nasciu Santa Teresa di Gesù. È nu tempiu barròccu carmelitanu a pianta a cruci latina cu cappeddi laterali, canusciutu pi la so facciata comu na pala d'autari cu l'immàggini dâ santa e stemmi familiari." },
          { name: "Cattidrali di Ávila 🏛", description: "La Cattidrali di Ávila, cuminciannu nto XII sèculu, è la prima cattidrali gòtica di Spagna e macari na furtizza 'ntegrata nnâ muraglia, chi si distingui pi la so àbsidi difensiva e la so mischianza di stili rumànicu e gòticu." },
          { name: "Porta dû Alcázar 🛡", description: "Ntranzata monumentali ô centru storicu" },
          { name: "Piazza dû Mercatu Nicu 🏘", description: "Tradizionalmenti nu centru di cummèrciu e 'ncuntru nnâ città medievali, spicialimenti pi prudutti lucali e artigianatu." },
          { name: "Piazza dû Mercatu Granni 🌟", description: "Sirvìa comu epicentru di li fieri e mercati majuri di Ávila nto Mediuevu. Oji è nu locu vivu e friquentatu, chi manteni la so funzioni di spazzu pupblicu unni si celèbranu eventi culturali e mercatini." },
          { name: "Quattru Pusti 🌅", description: "Munumentu emblèmaticu cunsisti 'n quattru pilastri chi sustèninu na piccola cruci. È nu locu di riposu e riflessioni pi piligrini e visitaturi, di unni si otteni na vista panoràmica dû ricinta muratu di Ávila." }
        ]
      },
      restaurants: {
        title: "🍽 Assaggia 'a cucina",
        content: "Na cosa ca ti maravigghierà di Ávila è ca quannu addumanni na vivanda, ti portanu nu pinchu senza averlu addumandatu. Sì, avemu sta cultura comu autri città di Spagna, accussì approfittanu! 😋",
        places: [
          { name: "El Pórtico 🍲", description: "Locu chi si distingui pi li so tapas varii, ntra cui: Cumbinatu, lonzu marrinatu o funghi, 'nzè mu lu so paninu cu calamari." },
          { name: "Bar La Oficina 🥘", description: "Si distingui pi lu so pinchu di sicretu" },
          { name: "La Oca Cocktail Bar 🍸", description: "Gastru cocktail e tapas varii" },
          { name: "La Rotonda dû Àncila 🥟", description: "Cruchetti, classici beni fatti" },
          { name: "Palacio di li Sofraga 🍖", description: "Si distingui cchiù pi lu so locu e li so visti â muraglia" },
          { name: "La Lola Gastrobar 🍤", description: "Tapas casalinghi cu toccu mudernu" },
          { name: "El Almacén 🥚", description: "Sta già parrannu di ristoranti, ccà trovi nu pruduttu di qualità a prezzi nun eccessivamenti auti. Assai racumandàbbili" },
          { name: "Bococo 🥩", description: "Unu di li posti cchiù populari ultimamenti, cu na cucina chi mischia tradizioni e 'nnovazioni" },
          { name: "Los Candiles 🍗", description: "Tradizioni castigliana curata" }
        ]
      },
        traditionalDishes: {
          title: "🍽 Gastronomia Tradiziunali", 
          content: "La cucina abulensi si distingui pi li so carni di vitellu e agnellu, li fasola dû Barco de Ávila, e li famusi yemas de Santa Teresa. Li vini dâ riggioni cumplitanu perfettamenti sta ricca tradizioni culinaria.",
          dishes: [
          {
            title: "Bistecca di Ávila 🥩",
            content: "Emblema gastronomicu dâ città. Carni di vitellu di qualità eccezziunali dâ zona."
          },
          {
            title: "Patati revolconas 🥔🔥",
            content: "Nu purè di patati cu paprica, agghiu e curunatu cu ciccioli croccanti. Chibbu umili e tipicu di Ávila, perfettu pi li jorna friddi."
          },
          {
            title: "Fasola dû Barco 🫘",
            content: "Ligumi cu Dinuminazioni d'Origini, famusi pi la so cunsistenza e sapuri unichi."
          },
          {
            title: "Yemas de Santa Teresa 🍮",
            content: "Durci tradiziunali fattu cu rùsulu d'ovu e zuccaru dû XVI sèculu."
          }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/50">
      {/* Home Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <Home className="w-4 h-4 mr-2" />
            {language === 'es' ? ' ' : 
             language === 'it' ? ' ' : 
             language === 'scn' ? ' ' : 
             ' '}
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={avilaHeroImg} 
          alt="Ávila Walls" 
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
            {/* 1. Historia milenaria */}
            {currentContent.sections.history && (
              <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    {currentContent.sections.history.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentContent.sections.history.content}
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    {currentContent.sections.history.details.map((detail, detailIndex) => (
                      <AccordionItem key={detailIndex} value={`history-${detailIndex}`}>
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
            )}

            {currentAudio.src && (
              <SoundCloudPlayer src={currentAudio.src} />
            )}

            {/* 2. Historia y memoria */}
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
                         <div dangerouslySetInnerHTML={{ __html: section.content }} />
                       </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* 3. Las murallas medievales */}
            {currentContent.sections.walls && (
              <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-primary" />
                    {currentContent.sections.walls.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentContent.sections.walls.content}
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    {currentContent.sections.walls.details.map((detail, detailIndex) => (
                      <AccordionItem key={detailIndex} value={`walls-${detailIndex}`}>
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
            )}

            {/* 4. Patrimonio cultural */}
            {currentContent.sections.culture && (
              <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Church className="h-5 w-5 text-primary" />
                    {currentContent.sections.culture.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentContent.sections.culture.content}
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    {currentContent.sections.culture.details.map((detail, detailIndex) => (
                      <AccordionItem key={detailIndex} value={`culture-${detailIndex}`}>
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
            )}

            {/* 7. Gastronomia tradicional */}
            {currentContent.traditionalDishes && (
              <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
              <div className="overflow-hidden">
                <img 
                  src="https://i.imgur.com/7VByEbi.png" 
                  alt="Gastronomía abulense - platos típicos de Ávila" 
                  className="w-full h-48 object-cover object-top"
                />
              </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    {currentContent.traditionalDishes.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentContent.traditionalDishes.content}
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    {currentContent.traditionalDishes.dishes.map((dish, index) => (
                      <AccordionItem key={index} value={`dish-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {dish.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {dish.content}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}

            {/* 8. Prueba nuestra gastronomia */}
            <Card className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  {currentContent.restaurants.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{currentContent.restaurants.content}</p>
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

            {/* Interactive Map */}
            <Card className="p-6 bg-wedding-cream shadow-soft border-0">
              <h3 className="font-serif text-xl text-primary mb-4 text-center flex items-center gap-2 justify-center">
                <MapPin className="h-5 w-5" />
                {language === 'es' ? 'Puntos de Interés - Patrimonio Cultural' :
                 language === 'en' ? 'Points of Interest - Cultural Heritage' :
                 language === 'it' ? 'Punti di Interesse - Patrimonio Culturale' : 'Punti d\'Interessi - Patrimoniu Culturali'}
              </h3>
              
              {/* Map */}
              <div className="w-full h-80 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center mb-6">
                <AvilaMap className="w-full h-full" />
              </div>

              {/* Legend */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Catedral de Ávila' :
                       language === 'en' ? 'Ávila Cathedral' :
                       language === 'it' ? 'Cattedrale di Ávila' : 'Cattidrali di Ávila'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Monasterio Santo Tomás' :
                       language === 'en' ? 'Santo Tomás Monastery' :
                       language === 'it' ? 'Monastero Santo Tomás' : 'Munasteru Santu Tomás'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">V</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Basílica San Vicente' :
                       language === 'en' ? 'San Vicente Basilica' :
                       language === 'it' ? 'Basilica San Vicente' : 'Basilica San Vicenzu'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">T</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Basílica Santa Teresa' :
                       language === 'en' ? 'Santa Teresa Basilica' :
                       language === 'it' ? 'Basilica Santa Teresa' : 'Basilica Santa Tirisa'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Puerta del Alcázar' :
                       language === 'en' ? 'Alcázar Gate' :
                       language === 'it' ? 'Porta dell\'Alcázar' : 'Porta di l\'Alcázar'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xs font-bold">P1</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Plaza Mercado Chico' :
                       language === 'en' ? 'Small Market Square' :
                       language === 'it' ? 'Piazza del Mercato Piccolo' : 'Chiazza dû Mircatu Nicu'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">P2</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Plaza Mercado Grande' :
                       language === 'en' ? 'Large Market Square' :
                       language === 'it' ? 'Piazza del Mercato Grande' : 'Chiazza dû Mircatu Granni'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 bg-amber-700 rounded-full flex items-center justify-center text-white text-xs font-bold">4P</div>
                    <span className="text-muted-foreground">
                      {language === 'es' ? 'Cuatro Postes' :
                       language === 'en' ? 'Four Posts Viewpoint' :
                       language === 'it' ? 'Quattro Pilastri' : 'Quattru Pilastri'}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                {language === 'es' ? 'Haz clic en el mapa para explorar los principales monumentos del Patrimonio Cultural de Ávila. Cada color representa un punto de interés diferente.' :
                 language === 'en' ? 'Click on the map to explore the main monuments of Ávila\'s Cultural Heritage. Each color represents a different point of interest.' :
                 language === 'it' ? 'Clicca sulla mappa per esplorare i principali monumenti del Patrimonio Culturale di Ávila. Ogni colore rappresenta un punto di interesse diverso.' :
                 'Clicca supra la mappa pi spluràri li principali munumenti dû Patrimoniu Culturali di Ávila. Ogni culuri riprisenta nu puntu d\'interessi diversu.'}
              </p>
            </Card>
        </div>
      </div>
      <WeddingFooter />
    </div>
    </div>
  );
};

export default Avila;
