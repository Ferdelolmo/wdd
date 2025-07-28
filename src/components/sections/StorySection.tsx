import { Card } from '@/components/ui/card';
import { Heart, Coffee, Plane, Home, Gem } from 'lucide-react';

const StorySection = () => {
  const milestones = [
    {
      icon: Coffee,
      date: "October 2019",
      title: "First Meeting",
      description: "A spilled latte at Blue Bottle Coffee became the beginning of our beautiful story."
    },
    {
      icon: Heart,
      date: "February 2020",
      title: "First Valentine's",
      description: "James surprised Sarah with a handwritten book of all their coffee shop conversations."
    },
    {
      icon: Plane,
      date: "Summer 2021",
      title: "European Adventure",
      description: "Our first big trip together through Italy, France, and Spain - creating unforgettable memories."
    },
    {
      icon: Home,
      date: "Spring 2022",
      title: "Moving In Together",
      description: "We found our perfect little home in Pacific Heights and adopted our golden retriever, Max."
    },
    {
      icon: Gem,
      date: "December 2023",
      title: "The Proposal",
      description: "James proposed at sunset on the beach in Half Moon Bay, the same place we had our first weekend getaway."
    }
  ];

  return (
    <section className="min-h-screen bg-wedding-cream py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            Our Love Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Story Timeline */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-8 bg-card shadow-soft border-0 hover:shadow-romantic transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center">
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="font-serif text-2xl text-primary">{milestone.title}</h3>
                      <span className="text-sm text-wedding-sage font-medium bg-secondary px-3 py-1 rounded-full">
                        {milestone.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Final Message */}
          <Card className="mt-16 p-8 bg-gradient-romantic text-center shadow-romantic border-0">
            <h3 className="font-script text-3xl text-primary mb-4">
              And now...
            </h3>
            <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              We're ready to start the next chapter of our adventure together as husband and wife. 
              Thank you for being part of our journey and for celebrating this special moment with us!
            </p>
            <div className="flex justify-center mt-6">
              <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StorySection;