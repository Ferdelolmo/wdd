
import { FC, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const teamMembers = [
  {
    name: "Javier Jimenez",
    role: {
      en: "Bus assistant and Petanca match coordinator",
      es: "Asistente de autobús y coordinador de la partida de Petanca",
      it: "Assistente autobus e coordinatore della partita di Petanca",
      scn: "Assistenti di l'autobus e cuurdinaturi dâ partita di Petanca",
    },
    image: "https://i.imgur.com/oeXSckw.jpeg",
  },
  {
    name: "José Ángel",
    role: {
      en: "Walking and Eating Tour guide",
      es: "Guía del Tour a pie y gastronómico",
      it: "Guida del Tour a piedi e gastronomico",
      scn: "Guida dû Tour a pedi e gastronomicu",
    },
    image: "https://i.imgur.com/8Fvntan.jpeg",
  },
  {
    name: "Ivan Gomez",
    role: {
      en: "Paint and Wine Workshop artist",
      es: "Artista del Taller de pintura y vino",
      it: "Artista del Laboratorio di pittura e vino",
      scn: "Artista dû Laburatoriu di pittura e vinu",
    },
    image: "https://i.imgur.com/AZfcmqR.jpeg",
  },
];

const Team: FC = () => {
  const { language } = useLanguage();
  const [flipped, setFlipped] = useState<number | null>(null);

  const translations = {
    en: {
      title: "Our Team",
    },
    es: {
      title: "Nuestro Equipo",
    },
    it: {
      title: "Il Nostro Team",
    },
    scn: {
      title: "U Nostru Team",
    },
  };

  const t = translations[language];

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="absolute top-4 right-4 z-10">
          <LanguageSelector />
        </div>
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">
          {t.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group perspective"
              onClick={() => setFlipped(flipped === index ? null : index)}
            >
              <div
                className={`relative w-64 h-64 mx-auto transition-transform duration-500 transform-style-3d ${
                  flipped === index ? "rotate-y-180" : ""
                }`}
              >
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute w-full h-full bg-blue-500 text-white rounded-full backface-hidden rotate-y-180 flex items-center justify-center p-4">
                  <p className="text-center">{member.role[language]}</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-center mt-4 text-blue-900">
                {member.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

