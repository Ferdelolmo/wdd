import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
const heroCoupleImage = 'https://i.imgur.com/NMWlDc8.jpeg'; // Puebla
const coupleCasualImage = 'https://i.imgur.com/vCo3YSx.jpeg'; // Alberca

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleAddToCalendar = () => {
    // Google Calendar URL with event details
    // June 21, 2026, 14:00-24:00 CEST (12:00-22:00 UTC)
    const startDate = '20260621T120000Z';
    const endDate = '20260621T220000Z';
    const title = 'Wedding Chiara & Fernando';
    const location = 'Dehesa de Pedrosillo, N-403, 05004 Ávila, Spain';
    const details = 'Wedding celebration of Chiara and Fernando';
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

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
          <div 
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 text-lg text-muted-foreground bg-card/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-border/50 hover:bg-card/70 hover:border-primary/30 cursor-pointer transition-all duration-200 hover:scale-105 group"
          >
            <Calendar className="w-5 h-5 text-primary group-hover:text-primary/80" />
            <div>
              <p className="mb-1 font-medium">{t.about.date}</p>
              <p className="text-sm">{t.about.location}</p>
            </div>
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