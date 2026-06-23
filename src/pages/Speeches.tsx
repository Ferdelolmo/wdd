
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const Speeches = () => {
  const { language } = useLanguage();

  const titles: Record<string, string> = {
    es: 'Discursos',
    it: 'Discorsi',
    scn: 'Discursi',
    en: 'Speeches',
  };

  const amparoSpeech = {
    title: {
      es: 'Discurso de Amparo, madre de Fer',
      it: 'Discorso di Amparo, madre di Fer',
      en: 'Amparo’s Speech, mother of Fer',
      scn: 'Speech 1',
    },
    content: {
      es: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Queridos novios, querida familia y amigos: muchas gracias a todos por acompañarnos en este día tan especial para nosotros.</p>
          <p>Justo hoy se cumple un año del día en que nos anunciasteis que ibais a casaros. La noticia nos pilló completamente por sorpresa, pero la alegría que nos disteis fue inmensa.</p>
          <p>Echando la vista atrás, me gustaría contaros que hace 10 años, precisamente en junio de 2016, Fer nos comunicó su decisión de marcharse a Dublín en busca de un futuro mejor. Una decisión que tomaste con valentía y responsabilidad, pero difícil para todos. Atrás dejabas tu familia, tus amigos, y para nosotros, aunque estábamos orgullosos de que lucharas por tus sueños, sentíamos que era un viaje hacia la incertidumbre.</p>
          <p>Siempre recordaré el momento en el que cruzaste el control de seguridad en Barajas. Fue muy agridulce: la emoción de la despedida y, al mismo tiempo, el orgullo de verte partir con tanta convicción en tu mirada.</p>
          <p>Un año más tarde, fuimos a visitarte a tu nueva casa: Irlanda. ¡Y qué manera de recibirnos!: Por un lado, con el huracán Ofelia, pero por el otro, con un huracán de amigos y afectos estupendos que hoy están aquí acompañándonos, que te ayudaron, te apoyaron y que hicieron que todo fuera más fácil para ti.</p>
          <p>El tiempo nos demostró que tomaste la decisión correcta. Pero lo mejor estaba por llegar. En 2020, en junio curiosamente, conociste a Chiara, qué deciros de Chiara, “ChiaraCali90”, que lo tiene todo, es guapa, simpática, inteligente y tiene el pelo más bonito del mundo.</p>
          <p>La primera vez que viniste acompañado de Chiara, es difícil de olvidar. Qué ganas teníamos de conocerte. Fer desde el primer momento nos contagió a toda la familia su cariño por Chiara.</p>
          <p>Tanto la abuela Pili como la abuela Esperanza, en Salvador, no podían estar más felices y orgullosas de conocer a la novia de su nieto. Pasamos un fin de semana feliz que acabamos, disfrutando con un recital de boleros, bajo las luces cálidas de una noche de verano, en la plaza de la Villa.</p>
          <p>Fer, si contigo conseguí el mejor título que me ha dado la vida, el de madre, con Chiara he conseguido otro título, el de suegra, pero lo más importante es que para nosotros, Chiara es una verdadera hija, al igual que sabemos que Ugo y Rosetta consideran a Fer como un hijo.</p>
          <p className="italic">(Rosetta, Ugo sto dicendo che per noi Chiara è una vera figlia e per voi, noi sappiamo que Fer e un vero figlio).</p>
          <p>Para terminar, voy a despedirme con los versos de una canción que, tanto a tu padre como a mí, nos encanta:</p>
          <p className="italic">
            “Que el corazón no se pase de moda,<br />
            que los otoños te doren la piel,<br />
            que cada noche sea noche de bodas,<br />
            que no se ponga la luna de miel.<br />
            ¡Qué vivan los novios!"
          </p>
        </div>
      ),
      it: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Cari sposi, cara famiglia e cari amici: grazie a tutti di cuore per essere qui con noi in questo giorno così speciale.</p>
          <p>Proprio oggi ricorre un anno esatto dal giorno in cui ci avete annunciato che vi sareste sposati. La notizia ci ha colti completamente di sorpresa, ma la gioia che ci avete regalato è stata immensa.</p>
          <p>Guardando indietro, mi piacerebbe raccontarvi che dieci anni fa, precisamente nel giugno del 2016, Fer ci comunicò la sua decisione di partire per Dublino in cerca di un futuro migliore. Una decisione presa con coraggio e responsabilità, ma difficile per tutti. Ti lasciavi alle spalle la famiglia, gli amici — e per noi, pur essendo orgogliosi che tu lottassi per i tuoi sogni, sembrava un viaggio verso l'incertezza.</p>
          <p>Ricorderò sempre il momento in cui hai attraversato i controlli di sicurezza all’aeroporto di Barajas. Fu qualcosa di agrodolce: l'emozione del congedo e, allo stesso tempo, l'orgoglio di vederti partire con tanta convinzione negli occhi.</p>
          <p>Un anno dopo siamo venuti a trovarti nella tua nuova casa: l'Irlanda. E che accoglienza! Da un lato l'uragano Ofelia, ma dall'altro un uragano di amici meravigliosi e affetti preziosi, molti dei quali sono qui oggi con noi, che ti hanno aiutato, sostenuto e reso tutto più facile.</p>
          <p>Il tempo ci ha dimostrato che hai preso la decisione giusta. Ma il meglio doveva ancora arrivare. Nel 2020 — curiosamente ancora a giugno — hai conosciuto Chiara. Cosa dire di Chiara? "ChiaraCali90"? Ha tutto: è bella, simpatica, intelligente e ha i capelli più belli del mondo.</p>
          <p>La prima volta che sei venuto accompagnato da Chiara è difficile da dimenticare. Quanto desideravamo conoscerti. Fin dal primo momento, Fer ha contagiato tutta la famiglia con il suo affetto per Chiara.</p>
          <p>Sia la nonna Pili che la nonna Esperanza, a Salvador, non potevano essere più felici e orgogliose di conoscere la fidanzata del loro nipote. Abbiamo trascorso un weekend felice che si è concluso godendoci un recital di boleros, sotto le luci calde di una serata estiva, in Plaza de la Villa.</p>
          <p>Fer, se con te ho ottenuto il titolo più bello che la vita mi abbia mai dato — quello di madre — con Chiara ne ho ottenuto un altro: quello di suocera. Ma la cosa più importante è che per noi Chiara è una vera figlia, proprio come sappiamo che Ugo e Rosetta considerano Fer come un vero figlio.</p>
          <p className="italic">(Rosetta, Ugo, sto dicendo che per noi Chiara è una vera figlia e che per voi, lo sappiamo, Fer è un vero figlio.)</p>
          <p>Per concludere, voglio accomiatarmi con i versi di una canzone che piace moltissimo sia a tuo padre che a me:</p>
          <p className="italic">
            "Che il cuore non passi mai di moda,<br />
            che gli autunni ti dorino la pelle,<br />
            che ogni notte sia una notte di nozze,<br />
            che la luna di miele non tramonti mai."<br />
            Viva gli sposi!
          </p>
        </div>
      ),
      en: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Dear bride and groom, dear family and friends: thank you all so much for joining us on this very special day.</p>
          <p>Today marks exactly one year since you announced to us that you were going to get married. The news caught us completely by surprise, but the joy you gave us was immense.</p>
          <p>Looking back, I would like to tell you that ten years ago, in June 2016 to be precise, Fer told us of his decision to move to Dublin in search of a better future. A decision you made with courage and a sense of responsibility, but a difficult one for everyone. You were leaving behind your family, your friends — and for us, although we were proud of you for fighting for your dreams, it felt like a journey into the unknown.</p>
          <p>I will always remember the moment you walked through security at Barajas airport. It was deeply bittersweet: the emotion of the farewell and, at the same time, the pride of watching you leave with such conviction in your eyes.</p>
          <p>A year later, we came to visit you in your new home: Ireland. And what a welcome you gave us! On one hand, Hurricane Ophelia — but on the other, a hurricane of wonderful friends and loved ones, many of whom are here with us today, who helped you, supported you and made everything easier for you.</p>
          <p>Time proved that you made the right decision. But the best was yet to come. In 2020 — in June, curiously enough — you met Chiara. What can we say about Chiara?, "ChiaraCali90"? She has it all: she is beautiful, warm, intelligent, and has the most gorgeous hair in the world.</p>
          <p>The first time you came with Chiara, it is hard to forget. How eager we were to meet her. From the very first moment, Fer passed on his love for Chiara to the whole family.</p>
          <p>Both Grandma Pili and Grandma Esperanza, in Salvador, could not have been happier or prouder to meet their grandson's girlfriend. We spent a wonderful weekend that ended with us enjoying a bolero recital under the warm lights of a summer evening in the Plaza de la Villa.</p>
          <p>Fer, if with you I earned the greatest title life has ever given me — that of mother — with Chiara I have earned another: that of mother-in-law. But most importantly, for us Chiara is a true daughter, just as we know that Ugo and Rosetta think of Fer as a true son.</p>
          <p className="italic">(Rosetta, Ugo, I am saying that for us Chiara is a true daughter, and we know that for you, Fer is a true son.)</p>
          <p>To close, I would like to say goodbye with the verses of a song that both your father and I love dearly:</p>
          <p className="italic">
            "May the heart never go out of fashion,<br />
            may the autumn seasons bronze your skin,<br />
            may every night be a wedding night,<br />
            may the honeymoon never set”.<br />
            Long live the bride and groom!
          </p>
        </div>
      ),
      scn: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
    }
  };

  const giusySpeech = {
    title: {
      es: 'Discurso de Giusy, tía de Chiara',
      it: 'Discorso di Giusy, zia di Chiara',
      en: 'Giusy’s Speech, Chiara’s aunt',
      scn: 'Speech 2',
    },
    content: {
      es: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Hola a todos, para quienes no me conocen soy Giusy, la tía de Chiara. Gracias a nuestros queridos amigos españoles por acogernos y hacernos sentir como en casa.</p>
          <p>Chiara, viéndote hoy tan radiante, mi mente vuela hacia atrás en el tiempo. Desde que naciste, entre nosotras dos se creó una relación especial, una armonía única que nunca necesitó demasiadas palabras para hacerse entender. Todavía recuerdo como si fuera ayer cuando me llamaste "tía" por primera vez.</p>
          <p>Eras tan pequeña, y sin embargo esa palabrita dicha con tu voz me regaló una grandísima emoción, que aún guardo en el corazón. Al crecer, nuestro vínculo se hizo cada vez más fuerte.</p>
          <p>Luego llegó el momento de tomar una decisión importante: te fuiste a estudiar lejos. Fuiste increíblemente valiente al partir cuando eras todavía tan joven para abrirte tu propio camino. Claro, tu ausencia la sentí muchísimo, pero el orgullo de verte emprender el vuelo era más grande que cualquier cosa. Y lo más bonito fue descubrir que la distancia no cambió nada: nuestra armonía permaneció intacta, porque ciertos lazos no temen a los kilómetros.</p>
          <p>A lo largo de los años te he visto expresar muchas cualidades: eres independiente, orgullosa de tus decisiones; eres tenaz, porque nunca te rindes, pero tienes una dulzura infinita, que calienta el corazón de quienes te rodean. Pero debo admitir que nunca había visto tus ojos brillar tanto como desde que Fernando entró en tu vida.</p>
          <p>Dicen que Sicilia y España tienen un vínculo histórico profundo, escrito en los monumentos y en nuestras culturas tan parecidas y acogedoras. Pero vosotros dos habéis hecho algo más grande y extraordinario: habéis unido dos mundos y dos historias distintas con la fuerza pura y valiente de vuestro amor, habéis demostrado que no existen fronteras geográficas cuando dos almas se reconocen y se eligen.</p>
          <p>Fernando, hoy te confío un pedazo grandísimo de mi corazón, una joya preciosa. Observándote estos años, he comprendido el hombre maravilloso que eres, inteligente, increíblemente atento y cariñoso, y el cuidado, el respeto y la dedicación que tienes por Chiara. Desde hoy nuestra familia se amplía y te acoge con los brazos abiertos.</p>
          <p>Sin embargo, querido Fernando, como tía siento el deber de darte algunos consejos de supervivencia. Hoy te estás casando con una mujer maravillosa pero también con una verdadera siciliana: ¡lo que significa que es apasionada, generosa pero también decidida y tenaz! Vosotros los españoles tenéis la sangre caliente, pero nosotros los sicilianos no nos quedamos atrás. ¡Vuestra vida juntos estará seguramente llena de vida, energía y discusiones animadas, por ejemplo sobre cuál cocina es la mejor!</p>
          <p>Fernando, nos has conquistado a todos desde el primer momento, ¡ahora hasta hablas nuestro dialecto siciliano! Ya eres un perfecto siciliano de adopción, ¡y eso te da una ventaja extra en nuestra familia!</p>
          <p>Os deseo que nunca perdáis la complicidad de hoy, que riáis juntos incluso en los días nublados, que seáis el uno el refugio seguro del otro y que construyáis un camino maravilloso, todo vuestro, celebrando cada pequeño éxito juntos.</p>
          <p>Chiara, sé siempre su guía y su fuerza.</p>
          <p>Fernando, gracias por la felicidad que se lee en los ojos de mi sobrina.</p>
          <p>¡Vivan los novios!</p>
        </div>
      ),
      it: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Ciao a tutti, per chi non mi conoscesse sono Giusy, la zia di Chiara. Grazie ai nostri cari amici spagnoli per averci accolti e averci fatto sentire come a casa.</p>
          <p>Chiara, guardandoti oggi così radiosa, la mia mente vola indietro nel tempo. Sin da quando sei nata, tra noi due si è creato un rapporto speciale, un’armonia unica che non ha mai avuto bisogno di troppe parole per farsi capire. Ricordo ancora come se fosse ieri quando mi hai chiamata ‘zia’ per la prima volta.</p>
          <p>Eri così piccola, eppure quella parolina detta con la tua voce mi ha regalato una grandissima emozione, che custodisco ancora nel cuore. Crescendo, il nostro legame è diventato sempre più forte.</p>
          <p>Poi è arrivato il momento di fare una scelta importante: sei andata a studiare lontano. Sei stata incredibilmente coraggiosa a partire quando eri ancora così giovane per farti la tua strada. Certo, la tua mancanza l’ho sentita tantissimo, ma l’orgoglio di vederti spiccare il volo era più grande di qualsiasi cosa. E la cosa più bella è stata scoprire che la distanza non ha cambiato nulla: quella nostra armonia è rimasta intatta, perché certi legami non temono i chilometri.</p>
          <p>Negli anni ti ho vista esprimere tante qualità: sei indipendente, fiera delle tue scelte; sei tenace, perché non ti arrendi mai, ma sei di una dolcezza infinita, che scalda il cuore di chi ti sta vicino.</p>
          <p>Ma devo ammettere che non ho mai visto i tuoi occhi brillare così tanto come da quando Fernando è entrato nella tua vita.</p>
          <p>Dicono che la Sicilia e la Spagna abbiano un legame storico profondo, scritto nei monumenti e nelle nostre culture così simili ed accoglienti. Ma voi due avete fatto qualcosa di più grande e straordinario: avete unito due mondi e due storie diverse con la forza pura e coraggiosa del vostro amore, avete dimostrato che non esistono confini geografici quando due anime si riconoscono e si scelgono.</p>
          <p>Fernando oggi ti affido un pezzo grandissimo del mio cuore, un gioiello prezioso. Guardandoti in questi anni, ho capito l’uomo meraviglioso che sei, intelligente, incredibilmente attento e premuroso, e la cura, il rispetto e la dedizione che hai per Chiara. Da oggi la nostra famiglia si allarga e ti accoglie a braccia aperte.</p>
          <p>Però, caro Fernando, da zia sento il dovere di darti qualche consiglio di sopravvivenza. Oggi stai sposando una donna meravigliosa ma anche una vera siciliana: il che significa che è passionale, generosa ma anche determinata e tenace! Voi spagnoli avete il sangue caldo ma noi siciliani non siamo da meno, la vostra vita insieme sarà sicuramente piena di vita, energia e discussioni animate per esempio su quale cucina sia la migliore!!</p>
          <p>Fernando ci hai conquistati tutti fin da subito, adesso parli anche il nostro dialetto siciliano! Ormai sei un perfetto siculo d'adozione e questo ti dà una marcia in più nella nostra famiglia!</p>
          <p>Vi auguro di non perdere mai la complicità di oggi, di ridere insieme anche nelle giornate nuvolose e di essere l'uno il rifugio sicuro dell'altro e di costruire una strada meravigliosa, tutta vostra, celebrando ogni piccolo successo insieme.</p>
          <p>Chiara sii sempre la sua guida e la sua forza. Fernando, grazie per la felicità che si legge negli occhi di mia nipote.</p>
          <p>Viva gli sposi!</p>
        </div>
      ),
      en: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Hello everyone, for those who don't know me, I'm Giusy, Chiara's aunt. Thank you to our dear Spanish friends for welcoming us and making us feel right at home.</p>
          <p>Chiara, watching you today so radiant, my mind travels back in time. Ever since you were born, a special bond grew between us — a unique harmony that never needed many words to be understood. I still remember as if it were yesterday the first time you called me 'auntie.'</p>
          <p>You were so little, yet that tiny word spoken in your voice gave me an enormous feeling of joy, one I still hold dear in my heart. As you grew up, our bond became stronger and stronger.</p>
          <p>Then came the moment to make an important choice: you went away to study. You were incredibly brave to leave when you were still so young, to carve out your own path. Of course, I missed you enormously, but the pride of watching you spread your wings was greater than anything else. And the most wonderful thing was discovering that the distance changed nothing: that harmony of ours remained intact, because certain bonds are not afraid of kilometres.</p>
          <p>Over the years I have watched you show so many qualities: you are independent, proud of your choices; you are tenacious, because you never give up — but you have an infinite sweetness that warms the hearts of those around you.</p>
          <p>But I must admit I have never seen your eyes shine as brightly as they have since Fernando entered your life.</p>
          <p>They say that Sicily and Spain share a deep historical bond, written in their monuments and in our cultures that are so similar and welcoming. But the two of you have done something greater and more extraordinary: you have united two worlds and two different stories with the pure, courageous force of your love, and you have shown that there are no geographical boundaries when two souls recognise each other and choose each other.</p>
          <p>Fernando, today I entrust you with a very large piece of my heart — a precious jewel. Watching you over these years, I have come to understand the wonderful man you are: intelligent, incredibly attentive and caring, and I have seen the care, respect and dedication you have for Chiara. From today our family grows larger and welcomes you with open arms.</p>
          <p>However, dear Fernando, as her aunt I feel it is my duty to give you a few survival tips. Today you are marrying a wonderful woman, but also a true Sicilian woman — which means she is passionate and generous, but also determined and tenacious! You Spanish have hot blood, but we Sicilians are no different; your life together will certainly be full of life, energy and lively debates — for example, over whose cuisine is the best!!</p>
          <p>Fernando, you won us all over from the very start, and now you even speak our Sicilian dialect! You are by now a perfect honorary Sicilian, and that gives you a real edge in our family!</p>
          <p>We wish you to never lose the closeness you share today, to laugh together even on cloudy days, to be each other's safe haven, and to build a wonderful road — entirely your own — celebrating every small success together.</p>
          <p>Chiara, always be his guide and his strength. Fernando, thank you for the happiness that shines in my niece's eyes.</p>
          <p>Long live the newlyweds!</p>
        </div>
      ),
      scn: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
    }
  };

  const fernandoSpeech = {
    title: {
      es: 'Votos de Fernando',
      it: 'Voti di Fernando',
      en: 'Fernando’s Vows',
      scn: 'Speech 3',
    },
    content: {
      es: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Chiara,</p>
          <p>Cuando empecé a pensar en estos votos y en qué podría decir de ti, lo primero que me vino a la mente fue una sonrisa. Y justo después, un enorme sentimiento de gratitud hacia la vida por haberme hecho encontrar no a mi media naranja, sino a una persona que me completa por entero.</p>
          <p>Porque, Chiara, tú tienes una cualidad que a mí me falta: la paciencia. Y podría decir otros cien adjetivos sobre ti, pero si pienso de verdad en el motivo por el que estoy convencido de querer casarme contigo, es sobre todo porque contigo he encontrado un equilibrio que nunca había tenido antes: la certeza de que estás y de que estarás, para ayudarme en los momentos más difíciles, pero también para celebrar los más bonitos.</p>
          <p>¿Te acuerdas cuando escuchamos a aquel filósofo hablar del amor? Decía así: «El amor es entrega. En el amor no se gana, se pierde». Es decir, amar significa dar sin esperar nada a cambio.</p>
          <p>Contigo, de hecho, no tengo ninguna duda de que seremos capaces los dos de dar sin llevar la cuenta, o, dicho de otra manera, de perder, pero de perder juntos.</p>
          <p>¿Te acuerdas cuando, hace casi un año, después de la pedida, una amiga de Juliano me preguntó: «¿Por qué le has pedido que se case contigo?». Fue entonces cuando, un poco alegre y con los ojos brillantes (como a ti te gusta) respondí: «Sentí un golpe en el corazón que me decía que era ella la persona con la que tenía que estar».</p>
          <p>En España se dice que los niños y los borrachos nunca mienten, y en todas partes cuecen habas. La verdad es que no sabría resumirlo mejor.</p>
          <p>Y es precisamente por eso que estamos aquí hoy: para asumir este compromiso delante de todos vosotros, elegirnos una vez más y prometer que seguiremos caminando juntos, incluso cuando el camino sea cuesta arriba.</p>
          <p>Chiara, te prometo estar a tu lado en la salud y en la enfermedad, apoyarte, cuidarte y caminar a tu lado ante todo lo que la vida nos depare. Te prometo celebrar contigo cada alegría y ayudarte en cada dificultad.</p>
          <p>Porque, si estos seis años me han enseñado algo, es que la felicidad no consiste en encontrar a una persona perfecta, sino en encontrar a alguien con quien construir una vida llena de significado.</p>
          <p>Y si hoy miro a mi alrededor y veo a toda esta gente reunida, muchos de los cuales han cruzado medio mundo para estar aquí, no puedo evitar pensar que ya hemos empezado a construir algo hermoso.</p>
          <p>Gracias por estos seis años. Gracias por haberme elegido. Y gracias por la vida que seguiremos construyendo juntos.</p>
          <p>Te quiero.</p>
        </div>
      ),
      it: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Chiara,</p>
          <p>Quando ho iniziato a pensare a queste promesse e a cosa avrei potuto dire di te, la prima cosa che mi è venuta in mente è stato un sorriso. E subito dopo, un enorme senso di gratitudine verso la vita per avermi fatto incontrare non la mia metà, ma una persona che mi completa interamente.</p>
          <p>Perché, Chiara, tu hai una qualità che io non ho abbastanza: la pazienza. E potrei dire altri cento aggettivi su di te, ma se penso davvero al motivo per cui sono convinto di volerti sposare, è soprattutto perché con te ho trovato un equilibrio che non avevo mai avuto in passato: la certezza che tu ci sei e che ci sarai, per aiutarmi nei momenti più difficili, ma anche per festeggiare quelli più belli.</p>
          <p>Ti ricordi quando abbiamo sentito quel filosofo parlare dell'amore? Diceva così: «El amor es entrega. Nell'amore non si guadagna, si perde». Cioè, amare significa dare senza aspettarsi nulla in cambio.</p>
          <p>Con te, infatti, non ho alcun dubbio che saremo in due capaci di dare senza fare i conti, o, in altre parole, di perdere, ma di perdere insieme.</p>
          <p>Ti ricordi quando, quasi un anno fa, dopo la proposta, un'amica di Juliano mi ha chiesto: «Perché le hai chiesto di sposarti?». È lì che, un po' brillo e con gli occhi brillanti (come piace a te) ho risposto: «Ho sentito un colpo al cuore che mi diceva che era lei la persona con cui dovevo stare».</p>
          <p>In Spagna si dice che i bambini e gli ubriachi non mentono mai e siccome tutto il mondo è paese. Infatti, non saprei riassumere in modo migliore.</p>
          <p>Ed è proprio per questo che siamo qui oggi: per assumere questo impegno davanti a tutti voi, sceglierci ancora una volta e promettere che continueremo a camminare insieme, macari quando la strada sarà in salita.</p>
          <p>Chiara, ti prometto di esserti accanto nella buona e nella cattiva sorte, di sostenerti, di prendermi cura di te e di camminare al tuo fianco davanti a tutto ciò che la vita ci riserverà. Ti prometto di festeggiare con te ogni gioia e di aiutarti in ogni difficoltà.</p>
          <p>Perché, se questi sei anni mi hanno insegnato qualcosa, è che la felicità non consiste nel trovare una persona perfetta, ma nel trovare qualcuno con cui costruire una vita piena di significato.</p>
          <p>E se oggi mi guardo attorno e vedo tutte queste persone riunite, molte delle quali hanno attraversato mezzo mondo per essere qui, non posso fare a meno di pensare che abbiamo già iniziato a costruire qualcosa di bello.</p>
          <p>Grazie per questi sei anni. Grazie per aver scelto me. E grazie per la vita che continueremo a costruire insieme.</p>
          <p>Ti amo.</p>
        </div>
      ),
      en: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Chiara,</p>
          <p>When I began thinking about these vows and what I could say about you, the first thing that came to mind was a smile. And right after that, an enormous feeling of gratitude towards life for having led me to find not my other half, but a person who completes me entirely.</p>
          <p>Because, Chiara, you have a quality that I lack: patience. And I could list a hundred other adjectives about you, but if I think honestly about why I am certain I want to marry you, it is above all because with you I have found a balance I had never had before: the certainty that you are here and that you will be here, to help me through the hardest moments, but also to celebrate the most beautiful ones.</p>
          <p>Do you remember when we listened to that philosopher talk about love? He said: "Love is giving. In love, you don't win — you lose." In other words, to love means to give without expecting anything in return.</p>
          <p>With you, I have no doubt at all that the two of us will be capable of giving without keeping score — or, put another way, of losing, but of losing together.</p>
          <p>Do you remember when, almost a year ago, after the proposal, a friend of Juliano's asked me: "Why did you ask her to marry you?" It was then that, a little tipsy and with shining eyes (just the way you like), I answered: "I felt a jolt in my heart that told me she was the person I was meant to be with."</p>
          <p>In Spain they say that children and drunks never lie — and the same holds true the world over. Honestly, I couldn't sum it up any better than that.</p>
          <p>And that is precisely why we are here today: to make this commitment in front of all of you, to choose each other once more, and to promise that we will keep walking together, even when the road goes uphill.</p>
          <p>Chiara, I promise to be by your side in good times and in bad, to support you, to take care of you, and to walk beside you through everything life has in store for us. I promise to celebrate every joy with you and to help you through every difficulty.</p>
          <p>Because if these six years have taught me anything, it is that happiness does not lie in finding a perfect person, but in finding someone with whom to build a life full of meaning.</p>
          <p>And if today I look around and see all these people gathered here, many of whom have crossed half the world to be here, I cannot help but think that we have already begun to build something beautiful.</p>
          <p>Thank you for these six years. Thank you for choosing me. And thank you for the life we will keep building together.</p>
          <p>I love you.</p>
        </div>
      ),
      scn: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
    }
  };

  const chiaraSpeech = {
    title: {
      es: 'Votos de Chiara',
      it: 'Voti di Chiara',
      en: 'Chiara’s Vows',
      scn: 'Speech 4',
    },
    content: {
      es: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Fernando,</p>
          <p>Si alguien me hubiera dicho hace 6 años que iba a estar aquí hoy, probablemente no me lo habría creído. Y no es porque no creyera en el amor. Sino porque estaba muy bien sola, tenía mi independencia, mis rutinas, mis amigos, mis defensas… y me había acostumbrado a pensar que esto era suficiente. Hasta que un día apareciste en mi vida y casi sin darme cuenta, aquello que nunca había buscado acabó encontrándome a mi.</p>
          <p>Nuestro amor fue creciendo poco a poco, de la forma más natural posible, con conversaciones interminables, cocinando en casa, viendo películas, debatiendo sobre política y con muchas risas. Sin intentar cambiarnos el uno al otro. Sin perder quiénes éramos antes de conocernos. Y creo que precisamente ahí está una de las razones por las que hoy estamos aquí.</p>
          <p>Durante estos años hemos vivido en tres ciudades distintas: Dublín, Barcelona y Madrid. Hemos cambiado de casa, de trabajo, de rutina y de etapa muchas veces. Hemos crecido como personas, como pareja y hemos ido construyendo poco a poco una vida juntos.</p>
          <p>Y en todo ese tiempo me has enseñado algo que yo no conocía de verdad: lo que significa ser un equipo.</p>
          <p>Porque un equipo no significa estar siempre de acuerdo. No significa pensar igual. Ni querer las mismas cosas todo el tiempo. Ni ver el mundo de la misma manera. Y nosotros somos la prueba:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Tú tienes un Excel para planificar todo.</li>
            <li>Yo sigo pensando que improvisar y hacer las cosas en el último momento también es una forma perfectamente válida de organización.</li>
            <li>Tú eres de derechas.</li>
            <li>Yo soy de izquierdas.</li>
            <li>Tu eres siempre puntual.</li>
            <li>Y yo...mejor no decir nada 😄</li>
          </ul>
          <p>Pero estar en un equipo significa algo mucho más importante: significa estar ahí cuando el otro lo necesita, hacernos reír en un día gris, cuidarnos cuando uno está enfermo, tomar juntos las decisiones difíciles y pensar en el bienestar de los dos antes que en el de uno solo. También significa que tu familia es la mía y que la mía es la tuya.</p>
          <p>Que estamos ahí para los nuestros, igual que estamos ahí el uno para el otro. Porque aunque somos muy diferentes, compartimos lo más importante: los mismos valores, la familia, la honestidad, el respeto y las ganas para seguir construyendo una vida juntos.</p>
          <p>Y quizás por eso, después de seis años, además de ser un gran equipo, seguimos pasándolo increíblemente bien juntos. Seguimos riéndonos de nuestras tonterías, de esas bromas que probablemente nadie más entiende, y de tus chistes malísimos, de los que prometo seguir riéndome aunque muchas veces sean objetivamente malos.</p>
          <p>Porque no me imagino una vida sin esas risas, sin nuestras conversaciones al final del día, sin escuchar "antipática" cuando quieres hacer la paz después de una pelea, o nuestros debates sobre visiones del mundo diferentes, ni sin compartir contigo todo lo bueno y todo lo malo que me pasa. Simplemente no me imagino una vida sin ti.</p>
          <p>Durante muchos años pensé que lo que tienen mis padres era algo excepcional, algo que simplemente les había tocado a ellos. Hoy sé que ese tipo de amor sí existe, y que no aparece de repente. Se construye poco a poco, con confianza, respeto y el compromiso de elegir a la misma persona una y otra vez. Como lo hemos hecho nosotros.</p>
          <p>Por eso hoy quiero hacerte promesas reales. No puedo prometerte que dejaré de llegar tarde. Ni que me volveré más organizada. Ni que todos nuestros días serán fáciles o maravillosos.</p>
          <p>Pero sí puedo prometerte algo mucho más importante.</p>
          <p>Te prometo que nunca tendrás que enfrentarte a nada solo. Que cuando la vida nos ponga a prueba, la afrontaremos juntos.</p>
          <p>Que seguiré cuidando de nosotros, de nuestras familias y de todo lo que construyamos en el futuro.</p>
          <p>Te prometo seguir amándote en todas las versiones de nuestra vida. En las ciudades que aún no conocemos, en las etapas que nos queden por vivir. Y en todos esos días normales, cocinando en casa, hablando al final del día, viendo una serie juntos en el sofá.</p>
          <p>Y te prometo que seguiré apostando por nosotros, incluso cuando las cosas se pongan difíciles.</p>
          <p>Porque eres la persona en la que más confío, mi compañero de vida favorito, y el mejor equipo que he tenido nunca. Y porque, después de seis años, sigo sintiéndome increíblemente afortunada de que insistieras en verme una vez más.</p>
          <p>Hace seis años pensaba que estaba perfectamente bien sola. Y tenía razón. Pero lo que no sabía era que un día aparecería alguien que haría mi vida mucho más feliz.</p>
          <p>Ese alguien eres tú.</p>
          <p>Te quiero.</p>
        </div>
      ),
      it: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Fernando,</p>
          <p>Se qualcuno mi avesse detto sei anni fa che oggi sarei stata qui, probabilmente non ci avrei creduto. Non perché non credessi nell'amore. Ma perché stavo benissimo da sola, avevo la mia indipendenza, le mie abitudini, i miei amici, le mie difese… e mi ero abituata a pensare che questo fosse sufficiente. Finché un giorno sei apparso nella mia vita e, quasi senza accorgermene, ciò che non avevo mai cercato ha finito per trovarmi.</p>
          <p>Il nostro amore è cresciuto poco a poco, nel modo più naturale possibile, con conversazioni interminabili, cucinando a casa, guardando film, discutendo di politica e ridendo moltissimo. Senza cercare di cambiarci l'uno con l'altro. Senza perdere chi eravamo prima di conoscerci. E credo che sia proprio lì una delle ragioni per cui oggi siamo qui.</p>
          <p>In questi anni abbiamo vissuto in tre città diverse: Dublino, Barcellona e Madrid. Abbiamo cambiato casa, lavoro, abitudini e fasi della vita molte volte. Siamo cresciuti come persone, come coppia, e abbiamo costruito poco a poco una vita insieme.</p>
          <p>E in tutto questo tempo mi hai insegnato qualcosa che non conoscevo davvero: cosa significa essere una squadra.</p>
          <p>Perché una squadra non significa essere sempre d'accordo. Non significa pensare allo stesso modo. Né volere le stesse cose in ogni momento. Né vedere il mondo con gli stessi occhi. E noi ne siamo la prova:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Tu hai un Excel per pianificare tutto.</li>
            <li>Io continuo a pensare che improvvisare e fare le cose all'ultimo momento sia un modo perfettamente valido di organizzarsi.</li>
            <li>Tu sei di destra.</li>
            <li>Io sono di sinistra.</li>
            <li>Tu sei sempre puntuale.</li>
            <li>E io… meglio non dire nulla 😄</li>
          </ul>
          <p>Ma far parte di una squadra significa qualcosa di molto più importante: significa esserci quando l'altro ne ha bisogno, farci ridere in una giornata grigia, prenderci cura l'uno dell'altro quando siamo malati, prendere insieme le decisioni difficili e pensare al benessere di entrambi prima che al proprio. Significa anche che la tua famiglia è la mia e che la mia è la tua.</p>
          <p>Che ci siamo per i nostri cari, così come ci siamo l'uno per l'altro. Perché anche se siamo molto diversi, condividiamo le cose più importanti: gli stessi valori, la famiglia, l'onestà, il rispetto e la voglia di continuare a costruire una vita insieme.</p>
          <p>E forse è proprio per questo che, dopo sei anni, oltre a essere una grande squadra, continuiamo a stare incredibilmente bene insieme. Continuiamo a ridere delle nostre sciocchezze, di quelle battute che probabilmente nessun altro capisce, e delle tue barzellette pessime, delle quali ti prometto che continuerò a ridere anche quando saranno oggettivamente brutte.</p>
          <p>Perché non mi immagino una vita senza quelle risate, senza le nostre conversazioni a fine giornata, senza sentirti dire "antipatica" quando vuoi fare pace dopo un litigio, senza i nostri dibattiti su visioni del mondo diverse, né senza condividere con te tutto il bello e tutto il brutto che mi capita. Semplicemente non mi immagino una vita senza di te.</p>
          <p>Per molti anni ho pensato che quello che hanno i miei genitori fosse qualcosa di eccezionale, qualcosa che era capitato solo a loro. Oggi so che quel tipo di amore esiste davvero, e che non arriva all'improvviso. Si costruisce poco a poco, con fiducia, rispetto e l'impegno di scegliere la stessa persona ancora e ancora. Come abbiamo fatto noi.</p>
          <p>Per questo oggi voglio farti promesse concrete. Non posso prometterti che smetterò di arrivare in ritardo. Né che diventerò più organizzata. Né che tutti i nostri giorni saranno facili o meravigliosi.</p>
          <p>Ma posso prometterti qualcosa di molto più importante.</p>
          <p>Ti prometto che non dovrai mai affrontare nulla da solo. Che quando la vita ci metterà alla prova, la affronteremo insieme.</p>
          <p>Che continuerò a prendermi cura di noi, delle nostre famiglie e di tutto ciò che costruiremo in futuro.</p>
          <p>Ti prometto di continuare ad amarti in tutte le versioni della nostra vita. Nelle città che ancora non conosciamo, nelle fasi che ci restano da vivere. E in tutti quei giorni normali, cucinando a casa, parlando a fine giornata, guardando una serie insieme sul divano.</p>
          <p>E ti prometto che continuerò a scommettere su di noi, anche quando le cose si faranno difficili.</p>
          <p>Perché sei la persona di cui mi fido di più, il mio compagno di vita preferito e la squadra migliore che abbia mai avuto. E perché, dopo sei anni, mi sento ancora incredibilmente fortunata che tu abbia insistito per rivedermi un'altra volta.</p>
          <p>Sei anni fa pensavo di stare perfettamente bene da sola. E avevo ragione. Ma quello che non sapevo era che un giorno sarebbe apparsa qualcuno che avrebbe reso la mia vita molto più felice. Quel qualcuno sei tu.</p>
          <p>Ti amo.</p>
        </div>
      ),
      en: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Fernando,</p>
          <p>If someone had told me six years ago that I would be standing here today, I probably wouldn't have believed them. Not because I didn't believe in love. But because I was perfectly happy on my own — I had my independence, my routines, my friends, my defences… and I had grown used to thinking that this was enough. Until one day you appeared in my life and, almost without realising it, what I had never looked for ended up finding me.</p>
          <p>Our love grew little by little, in the most natural way possible, through endless conversations, cooking at home, watching films, debating politics and laughing a great deal. Without trying to change each other. Without losing who we were before we met. And I think that is precisely one of the reasons why we are here today.</p>
          <p>Over these years we have lived in three different cities: Dublin, Barcelona and Madrid. We have changed homes, jobs, routines and chapters of our lives many times. We have grown as individuals, as a couple, and we have gradually built a life together.</p>
          <p>And throughout all of that time, you have taught me something I didn't truly know: what it means to be a team.</p>
          <p>Because being a team doesn't mean always agreeing. It doesn't mean thinking the same way. Or wanting the same things all the time. Or seeing the world through the same eyes. And we are living proof of that:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>You have a spreadsheet to plan everything.</li>
            <li>I still think that improvising and doing things at the last minute is a perfectly valid form of organisation.</li>
            <li>You are right-wing.</li>
            <li>I am left-wing.</li>
            <li>You are always on time.</li>
            <li>And I… well, better say nothing 😄</li>
          </ul>
          <p>But being part of a team means something far more important: it means being there when the other needs you, making each other laugh on a grey day, taking care of each other when one of us is ill, making the difficult decisions together and thinking of each other's wellbeing before our own. It also means that your family is mine and mine is yours. That we are there for the people we love, just as we are there for each other. Because even though we are very different, we share the things that matter most: the same values, family, honesty, respect and the desire to keep building a life together.</p>
          <p>And perhaps that is precisely why, after six years, as well as being a great team, we still have an incredibly good time together. We still laugh at our own silliness, at those jokes that probably nobody else understands, and at your terrible puns — which I promise I will keep laughing at, even when they are objectively awful.</p>
          <p>Because I cannot imagine a life without those laughs, without our conversations at the end of the day, without hearing you say "grumpy" when you want to make peace after an argument, without our debates about our different views of the world, or without sharing with you everything good and everything hard that happens to me. I simply cannot imagine a life without you.</p>
          <p>For many years I thought that what my parents have was something exceptional, something that had simply happened to them. Today I know that kind of love truly exists, and that it doesn't arrive all at once. It is built little by little, with trust, respect and the commitment to choose the same person again and again. As we have done.</p>
          <p>That is why today I want to make you real promises. I cannot promise you that I will stop being late. Or that I will become more organised. Or that all our days will be easy or wonderful.</p>
          <p>But I can promise you something far more important.</p>
          <p>I promise you that you will never have to face anything alone. That when life puts us to the test, we will face it together.</p>
          <p>That I will keep taking care of us, of our families and of everything we build in the future.</p>
          <p>I promise to keep loving you through every version of our life. In the cities we have yet to discover, in the chapters still ahead of us. And in all those ordinary days, cooking at home, talking at the end of the day, watching a series together on the sofa.</p>
          <p>And I promise that I will keep betting on us, even when things get hard.</p>
          <p>Because you are the person I trust most, my favourite life companion, and the best team I have ever had. And because, after six years, I still feel incredibly lucky that you insisted on seeing me one more time.</p>
          <p>Six years ago I thought I was perfectly fine on my own. And I was right. But what I didn't know was that one day someone would come along who would make my life so much happier. That someone is you.</p>
          <p>I love you.</p>
        </div>
      ),
      scn: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
    }
  };

  const mariPiliSpeech = {
    title: {
      es: 'Discurso de Mari Pili',
      it: 'Discorso di Mari Pili',
      en: 'Mari Pili’s Speech',
      scn: 'Speech 5',
    },
    content: {
      es: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Ladies and gentlemen, mesdames et messieurs, signore e signori, damas y caballeros, muy buenas tardes</p>
          <p>Para quienes no me conocéis, me presento: Soy Mari Pili, la tía de Fernando.</p>
          <p>Quiero dar un saludo muy especial a todos aquellos invitados que habéis venido desde lejos a celebrar el matrimonio de esta hermosa pareja. A todos vosotros: Bienvenidos a Ávila, estáis en vuestra casa. Gracias por venir.</p>
          <p>Hoy, me siento profundamente feliz de estar en vuestra presencia, rodeada de familiares y amigos, celebrando una vez más la unión de mi queridísimo sobrino y su radiante esposa, a quienes he visto contraer nupcias en Sicilia. Pero hoy, hoy me hace especial ilusión celebrar esta boda ¡a la española!</p>
          <p>Sería imposible para mí resumir todos los recuerdos que tengo con mi sobrino. Tantos momentos bonitos y divertidos; tantos momentos de la infancia en los que nos hizo tan felices. Fernando fue un niño bueno, obediente, alegre y sonriente. Y para nosotros, era el niño más guapo del mundo.</p>
          <p>¡Cómo no acordarme de los veranos en Benidorm! Se pasaba la hora de la siesta saltando y cantando:<br />
          “Somos, somos las vedettes de los cabaretes del viejo París, París, París, París, Paríiiiis”.</p>
          <p>Os lo prometo, era un niño súper divertido. Y esos momentos siempre, siempre los llevaré en mi corazón.</p>
          <p>El tiempo continuó su curso y Fernando creció para convertirse en un chico estudioso, responsable; y su esfuerzo lo llevaría a graduarse en la Universidad de Valladolid, una ciudad que también le sirvió como base para su primer trabajo. Pero Valladolid se quedaría corta para los sueños de Fer, y como todos ya sabéis, sus ganas de comerse el mundo le llevaron hasta la lluviosa y bella Irlanda, donde conoció a muchos de vosotros.</p>
          <p>Y ahora estamos aquí, sobrino, en el día de tu boda, después de haber logrado conquistar todos los retos que te impuso Irlanda: una isla que forjó tu garra y tu carácter, pero que también te regaló amigos maravillosos, que celebran hoy contigo. Pero Irlanda no solo te dio triunfos y amigos, porque lo mejor que esta etapa te tenía reservado, fue conocer a Chiara, el amor de tu vida.</p>
          <p>Chiara, ora sei parte di noi, y te agradezco tanto por haber hecho a Fer mucho más familiar. Eso, sin duda, es mérito tuyo. Te quisimos desde el momento en que te conocimos en Arévalo.</p>
          <p>Quererte es muy fácil Chiara, por guapa, simpática, cariñosa y -como me dijo Fer un día a solas- “¡tía, es muy inteligente!”. Di modo che, adesso, sono anche tua Zia. Benvenuta in famiglia, bellezza!</p>
          <p>E che dire della famiglia Calì - Zingali? Rossy, Ugo, Giusy, MarZia, voi siete il mondo di Chiara. Sin dal primo momento c'è stata grande intesa, ed è per questo che nutriamo nei vostri confronti, un profondo e sincero affetto. Anche voi, benvenuti in famiglia!</p>
          <p>Chiara, Fer, no os voy a dar ningún consejo porque no lo necesitáis, pero sí quiero desearos que este amor que ahora os tenéis, os dure toda la vida. Sois una pareja maravillosa y os quiero con todo mi corazón.</p>
          <p>¡Vivan los novios!</p>
        </div>
      ),
      it: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Ladies and gentlemen, mesdames et messieurs, signore e signori, damas y caballeros, buon pomeriggio a tutti.</p>
          <p>Per chi non mi conoscesse, mi presento: sono Mari Pili, la zia di Fernando.</p>
          <p>Voglio rivolgere un saluto molto speciale a tutti gli ospiti che sono venuti da lontano per celebrare il matrimonio di questa bellissima coppia. A tutti voi: benvenuti ad Ávila, siete a casa vostra. Grazie per essere qui.</p>
          <p>Oggi mi sento profondamente felice di essere in vostra presenza, circondata da familiari e amici, celebrando ancora una volta l'unione del mio carissimo nipote e della sua radiosa sposa, che ho già visto sposarsi in Sicilia. Ma oggi, oggi mi fa un'emozione particolare celebrare questo matrimonio all'española!</p>
          <p>Mi sarebbe impossibile riassumere tutti i ricordi che ho con mio nipote. Tanti momenti belli e divertenti; tanti momenti dell'infanzia in cui ci ha reso così felici. Fernando era un bambino buono, obbediente, allegro e sorridente. E per noi era il bambino più bello del mondo.</p>
          <p>Come non ricordare le estati a Benidorm! Passava l'ora del riposino saltando e cantando:<br />
          "Somos, somos las vedettes de los cabaretes del viejo París, París, París, París, Paríiiiis."</p>
          <p>Ve lo giuro, era un bambino super divertente. E quei momenti li porterò sempre, sempre nel cuore. Il tempo ha continuato il suo corso e Fernando è cresciuto diventando un ragazzo studioso e responsabile; il suo impegno lo avrebbe portato a laurearsi all'Università di Valladolid, una città che gli è servita anche come base per il suo primo lavoro.</p>
          <p>Ma Valladolid sarebbe stata troppo piccola per i sogni di Fer, e come tutti già sapete, la sua voglia di conquistare il mondo lo ha portato fino alla piovosa e bella Irlanda, dove ha conosciuto molti di voi.</p>
          <p>Ed eccoci qui, nipote, nel giorno del tuo matrimonio, dopo aver superato tutte le sfide che l'Irlanda ti ha imposto: un'isola che ha forgiato la tua grinta e il tuo carattere, ma che ti ha anche regalato amici meravigliosi, che oggi festeggiano con te. Ma l'Irlanda non ti ha dato solo successi e amici, perché la cosa più bella che questa fase aveva in serbo per te è stata conoscere Chiara, l'amore della tua vita.</p>
          <p>Chiara, ora sei parte di noi, e ti sono tanto grata per aver reso Fer molto più di casa. Questo, senza dubbio, è merito tuo. Ti abbiamo voluto bene dal momento in cui ti abbiamo conosciuta ad Arévalo.</p>
          <p>Volerti bene è facilissimo, Chiara: per quanto sei bella, simpatica, affettuosa — e come mi disse Fer un giorno in privato: "zia, è molto intelligente!". Quindi adesso sono anche tua zia. Benvenuta in famiglia, bellezza!</p>
          <p>E che dire della famiglia Calì-Zingali? Rossy, Ugo, Giusy, Marzia, voi siete il mondo di Chiara. Fin dal primo momento c'è stata una grande intesa, ed è per questo che nutriamo nei vostri confronti un affetto profondo e sincero. Anche voi, benvenuti in famiglia!</p>
          <p>Chiara, Fer, non vi darò nessun consiglio perché non ne avete bisogno, ma voglio augurarvi che questo amore che vi portate adesso duri tutta la vita. Siete una coppia meravigliosa e vi voglio con tutto il mio cuore.</p>
          <p>Viva gli sposi!</p>
        </div>
      ),
      en: (
        <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
          <p>Ladies and gentlemen, mesdames et messieurs, signore e signori, damas y caballeros, good afternoon everyone.</p>
          <p>For those who don't know me, allow me to introduce myself: I am Mari Pili, Fernando's aunt. I would like to extend a very special greeting to all the guests who have come from afar to celebrate the wedding of this beautiful couple. To all of you: welcome to Ávila, you are at home here. Thank you for coming.</p>
          <p>Today I feel deeply happy to be in your presence, surrounded by family and friends, celebrating once again the union of my dearest nephew and his radiant bride, whom I already had the joy of watching get married in Sicily. But today — today it fills me with a particular thrill to celebrate this wedding the Spanish way!</p>
          <p>It would be impossible for me to summarise all the memories I have with my nephew. So many beautiful and fun moments; so many childhood moments in which he made us so happy. Fernando was a good, obedient, cheerful and smiling little boy. And to us, he was the most handsome child in the world.</p>
          <p>How could I forget the summers in Benidorm! He would spend the whole afternoon nap time jumping around and singing:<br />
          "Somos, somos las vedettes de los cabaretes del viejo París, París, París, París, Paríiiiis."</p>
          <p>I promise you, he was an incredibly fun child. And those moments I will carry in my heart always, always.</p>
          <p>Time moved on and Fernando grew into a studious, responsible young man; his hard work and dedication led him to graduate from the University of Valladolid, a city that also served as the base for his first job. But Valladolid would prove too small for Fer's dreams, and as you all know, his hunger to take on the world brought him all the way to rainy, beautiful Ireland, where he met many of you.</p>
          <p>And here we are, nephew, on your wedding day, after having overcome every challenge Ireland set before you: an island that forged your drive and your character, but that also gave you wonderful friends, who are here celebrating with you today. But Ireland didn't only give you success and friends — because the finest thing this chapter had in store for you was meeting Chiara, the love of your life.</p>
          <p>Chiara, you are now part of us, and I am so grateful to you for having made Fer so much more at home. That, without a doubt, is down to you. We loved you from the moment we met you in Arévalo.</p>
          <p>It is so easy to love you, Chiara: you are beautiful, warm, affectionate — and as Fer told me one day in private: "auntie, she is very intelligent!" So now I am your aunt too. Welcome to the family, sweetheart!</p>
          <p>And what can we say about the Calì-Zingali family? Rossy, Ugo, Giusy, Marzia — you are Chiara's world. From the very first moment there was a wonderful connection between us, and that is why we feel a deep and sincere affection for you. You too — welcome to the family!</p>
          <p>Chiara, Fer, I am not going to give you any advice because you don't need it, but I do want to wish you that this love you have for each other now lasts a lifetime. You are a wonderful couple and I love you with all my heart.</p>
          <p>Long live the bride and groom!</p>
        </div>
      ),
      scn: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
    }
  };

  const speeches = [
    { 
      title: amparoSpeech.title[language as keyof typeof amparoSpeech.title] || amparoSpeech.title.en, 
      content: amparoSpeech.content[language as keyof typeof amparoSpeech.content] || amparoSpeech.content.en 
    },
    { 
      title: giusySpeech.title[language as keyof typeof giusySpeech.title] || giusySpeech.title.en, 
      content: giusySpeech.content[language as keyof typeof giusySpeech.content] || giusySpeech.content.en 
    },
    { 
      title: fernandoSpeech.title[language as keyof typeof fernandoSpeech.title] || fernandoSpeech.title.en, 
      content: fernandoSpeech.content[language as keyof typeof fernandoSpeech.content] || fernandoSpeech.content.en 
    },
    { 
      title: chiaraSpeech.title[language as keyof typeof chiaraSpeech.title] || chiaraSpeech.title.en, 
      content: chiaraSpeech.content[language as keyof typeof chiaraSpeech.content] || chiaraSpeech.content.en 
    },
    { 
      title: mariPiliSpeech.title[language as keyof typeof mariPiliSpeech.title] || mariPiliSpeech.title.en, 
      content: mariPiliSpeech.content[language as keyof typeof mariPiliSpeech.content] || mariPiliSpeech.content.en 
    }
  ];

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
            {titles[language] || titles.en}
          </h1>
          <p className="text-muted-foreground text-lg">
            {language === 'es' ? 'Aquí encontrarás los discursos después de la boda' :
             language === 'it' ? 'Qui troverete i discorsi dopo il matrimonio' :
             language === 'scn' ? 'Ccà truverete i discursi doppu u matrimoniu' :
             'You will find the speeches here after the wedding'}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {speeches.map((speech, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-medium">{speech.title}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {speech.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Speeches;