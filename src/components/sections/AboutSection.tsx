import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import heroCoupleImage from '@/assets/hero-couple.jpg';
import coupleCasualImage from '@/assets/couple-casual.jpg';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="min-h-screen bg-gradient-romantic flex items-center py-20">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
          <div className="text-lg text-muted-foreground">
            <p className="mb-2">{t.about.date}</p>
            <p>{t.about.location}</p>
          </div>
        </div>

        {/* About Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Main Photo */}
          <Card className="overflow-hidden shadow-romantic border-0">
            <div className="aspect-[4/3] relative">
              <img 
                src={heroCoupleImage} 
                alt="Sarah and James engagement photo"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          {/* About Text & Secondary Photo */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-soft border-0">
              <h2 className="font-serif text-3xl text-primary mb-6">{t.about.aboutUsTitle}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {t.about.description}
                </p>
                <p>
                  {t.about.joinUs}
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-romantic border-0">
              <div className="aspect-square relative">
                <img 
                  src={coupleCasualImage} 
                  alt="Sarah and James casual photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;