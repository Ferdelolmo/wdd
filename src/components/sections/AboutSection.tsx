import { Card } from '@/components/ui/card';
import heroCoupleImage from '@/assets/hero-couple.jpg';
import coupleCasualImage from '@/assets/couple-casual.jpg';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gradient-romantic flex items-center py-20">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <h1 className="font-script text-6xl md:text-8xl text-primary mb-4">
            Sarah & James
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us as we celebrate our love and commitment to each other on the most magical day of our lives
          </p>
          <div className="text-lg text-muted-foreground">
            <p className="mb-2">Saturday, June 15th, 2024</p>
            <p>Garden Manor Estate, Napa Valley</p>
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
              <h2 className="font-serif text-3xl text-primary mb-6">About Us</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We met five years ago at a coffee shop in downtown San Francisco, where James accidentally spilled his latte on Sarah's laptop. What started as an embarrassing moment turned into hours of conversation over replacement coffee.
                </p>
                <p>
                  Since then, we've traveled the world together, adopted our beloved golden retriever Max, and built a home filled with laughter, love, and way too many houseplants (according to James).
                </p>
                <p>
                  We can't wait to share this special day with all of you - our family and friends who have supported us through this incredible journey.
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