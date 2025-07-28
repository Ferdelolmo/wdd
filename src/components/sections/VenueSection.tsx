import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Phone, Clock } from 'lucide-react';
import weddingVenueImage from '@/assets/wedding-venue.jpg';

const VenueSection = () => {
  return (
    <section className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Our Venue
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A breathtaking setting where our love story reaches its perfect chapter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Venue Image */}
          <Card className="overflow-hidden shadow-romantic border-0">
            <div className="aspect-[4/3] relative">
              <img 
                src={weddingVenueImage} 
                alt="Garden Manor Estate wedding venue"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>

          {/* Venue Details */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-sage text-white shadow-soft border-0">
              <h3 className="font-serif text-3xl mb-6">Garden Manor Estate</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-sm opacity-90">
                      1234 Vineyard Lane<br />
                      Napa Valley, CA 94558
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Ceremony Time</p>
                    <p className="text-sm opacity-90">4:00 PM - 6:00 PM</p>
                    <p className="font-medium mb-1 mt-3">Reception</p>
                    <p className="text-sm opacity-90">6:30 PM - 11:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Contact</p>
                    <p className="text-sm opacity-90">(555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button variant="secondary" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </Button>
                <Button variant="outline" className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                  View Website
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-wedding-cream shadow-soft border-0">
              <h4 className="font-serif text-2xl text-primary mb-4">About the Venue</h4>
              <p className="text-muted-foreground leading-relaxed">
                Nestled in the heart of Napa Valley, Garden Manor Estate offers a perfect blend 
                of rustic elegance and natural beauty. The venue features stunning gardens, 
                historic architecture, and panoramic views of rolling vineyards - creating an 
                unforgettable backdrop for our special day.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;