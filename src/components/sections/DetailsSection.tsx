import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Utensils, 
  Music, 
  Camera, 
  Gift,
  Shirt,
  Car
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const DetailsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const schedule = [
    { time: "15:00", event: t.details.schedule.items.arrival, description: "" },
    { time: "16:00", event: t.details.schedule.items.ceremony, description: "" },
    { time: "16:30", event: t.details.schedule.items.photos, description: "" },
    { time: "18:30", event: t.details.schedule.items.dinner, description: "" },
    { time: "19:00", event: t.details.schedule.items.party, description: "" }
  ];

  const details = [
    {
      icon: Shirt,
      title: t.details.attire.title,
      description: t.details.attire.description
    },
    {
      icon: Car,
      title: t.details.transportation.title,
      description: t.details.transportation.description
    },
    {
      icon: Gift,
      title: t.details.gifts.title,
      description: t.details.gifts.description
    }
  ];

  return (
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            {t.details.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.details.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Schedule */}
          <div>
            <Card className="p-8 bg-gradient-sage text-white shadow-soft border-0 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6" />
                <h3 className="font-serif text-2xl">{t.details.schedule.title}</h3>
              </div>
              
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Clock className="w-5 h-5 mt-1" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-semibold text-sm">{item.time}</span>
                        <span className="font-medium">{item.event}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-wedding-rose text-center shadow-soft border-0">
              <h4 className="font-serif text-xl text-primary mb-3">RSVP Required</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Please respond by April 15th, 2024
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                RSVP Now
              </Button>
            </Card>
          </div>

          {/* Important Details */}
          <div>
            <h3 className="font-serif text-3xl text-primary mb-8 flex items-center gap-3">
              <MapPin className="w-7 h-7" />
              Important Details
            </h3>
            
            <div className="grid gap-6">
              {details.map((detail, index) => (
                <Card key={index} className="p-6 bg-card shadow-soft border-0 hover:shadow-romantic transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <detail.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary mb-2">{detail.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 p-6 bg-wedding-cream text-center shadow-soft border-0">
              <h4 className="font-serif text-xl text-primary mb-3">Weather Backup Plan</h4>
              <p className="text-sm text-muted-foreground">
                In case of rain, the ceremony will move to our beautiful indoor chapel. 
                The reception will continue as planned in our covered pavilion.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;