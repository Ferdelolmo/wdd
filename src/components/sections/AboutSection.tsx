import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
const heroCoupleImage = 'https://i.imgur.com/NMWlDc8.jpeg'; // Puebla
const coupleCasualImage = 'https://i.imgur.com/vCo3YSx.jpeg'; // Alberca

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
          <Card className="p-6 bg-wedding-rose text-center shadow-soft border-0 px-[22px] py-[22px] inline-block">
            <h4 className="font-serif text-xl text-primary mb-3">{t.details.rsvp.title}</h4>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => window.open('https://forms.gle/Pu5jfecVs7exJadh7', '_blank')}>
              {t.details.rsvp.buttonText}
            </Button>
          </Card>
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