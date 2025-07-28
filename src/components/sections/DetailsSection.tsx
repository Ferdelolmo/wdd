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

const DetailsSection = () => {
  const schedule = [
    { time: "3:00 PM", event: "Guest Arrival & Cocktails", description: "Welcome drinks in the garden" },
    { time: "4:00 PM", event: "Wedding Ceremony", description: "Outdoor ceremony by the rose garden" },
    { time: "4:30 PM", event: "Cocktail Hour", description: "Celebrate with drinks and canapés" },
    { time: "6:30 PM", event: "Reception Begins", description: "Dinner, dancing, and celebration" },
    { time: "7:00 PM", event: "First Dance", description: "Our special moment" },
    { time: "11:00 PM", event: "Last Dance", description: "End the night with sparklers" }
  ];

  const details = [
    {
      icon: Shirt,
      title: "Dress Code",
      description: "Cocktail attire suggested. Think elegant garden party - florals and pastels encouraged!"
    },
    {
      icon: Utensils,
      title: "Dinner",
      description: "Farm-to-table three-course meal with vegetarian and vegan options available"
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Live acoustic duo during ceremony, DJ for reception dancing"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Unplugged ceremony requested - our photographer will capture everything!"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Valet parking available. Uber/Lyft recommended for evening transportation"
    },
    {
      icon: Gift,
      title: "Registry",
      description: "Your presence is our present! Registry available at Williams Sonoma and Crate & Barrel"
    }
  ];

  return (
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Wedding Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know for our special day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Schedule */}
          <div>
            <Card className="p-8 bg-gradient-sage text-white shadow-soft border-0 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6" />
                <h3 className="font-serif text-2xl">Day Schedule</h3>
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
                      <p className="text-sm opacity-90">{item.description}</p>
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