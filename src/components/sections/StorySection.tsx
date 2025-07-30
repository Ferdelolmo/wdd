import { Card } from '@/components/ui/card';
import { Heart, Coffee, Plane, Home, Gem, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const StorySection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const irelandImage = 'https://i.imgur.com/qL66Vcx.jpeg'; // Ireland
  const tripImage = 'https://i.imgur.com/Q5bWK0A.jpeg'; // Trip
  const barcelonaImage = 'https://i.imgur.com/6kP5JiP.jpeg'; // Barcelona
  const cordobaImage = 'https://imgur.com/lNUlBAD.jpeg'; // Cordoba
  const proposalImage = 'https://i.imgur.com/3DRviHe.jpeg'; // Proposal
  
  const milestones = [
    {
      icon: Heart,
      date: "June 2020",
      title: t.story.milestones.firstMeet.title,
      description: t.story.milestones.firstMeet.description,
      image: irelandImage
    },
    {
      icon: Plane,
      date: "October 2020",
      title: t.story.milestones.firstTrip.title,
      description: t.story.milestones.firstTrip.description,
      image: tripImage
    },
    {
      icon: Home,
      date: "March 2022",
      title: t.story.milestones.moving.title,
      description: t.story.milestones.moving.description,
      image: barcelonaImage
    },
    {
      icon: Users,
      date: "May 2023",
      title: t.story.milestones.familiesMeet.title,
      description: t.story.milestones.familiesMeet.description,
      image: cordobaImage
    },
    {
      icon: Gem,
      date: "June 2025",
      title: t.story.milestones.proposal.title,
      description: t.story.milestones.proposal.description,
      image: proposalImage
    }
  ];

  return (
    <section className="min-h-screen bg-wedding-cream py-20 relative overflow-hidden">
      {/* Background watermarks */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 text-8xl">🇪🇸</div>
        <div className="absolute top-40 right-20 text-6xl">🍋</div>
        <div className="absolute bottom-40 left-20 text-7xl">🇮🇪</div>
        <div className="absolute bottom-20 right-10 text-8xl">🇪🇸</div>
        <div className="absolute top-60 left-1/2 text-5xl">🍋</div>
        <div className="absolute bottom-60 right-1/3 text-6xl">🇮🇪</div>
        {/* Additional flag watermarks */}
        <img 
          src="/lovable-uploads/4d89bd0a-392c-4f23-be6c-96b30449cc7b.png" 
          alt="" 
          className="absolute top-16 right-8 w-12 h-8 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/7463b7b7-867a-4aa5-bb03-8b5d896db372.png" 
          alt="" 
          className="absolute top-80 left-8 w-12 h-8 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/4d89bd0a-392c-4f23-be6c-96b30449cc7b.png" 
          alt="" 
          className="absolute bottom-72 right-4 w-10 h-7 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/7463b7b7-867a-4aa5-bb03-8b5d896db372.png" 
          alt="" 
          className="absolute bottom-16 left-12 w-10 h-7 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/4d89bd0a-392c-4f23-be6c-96b30449cc7b.png" 
          alt="" 
          className="absolute top-[28rem] right-12 w-8 h-6 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/7463b7b7-867a-4aa5-bb03-8b5d896db372.png" 
          alt="" 
          className="absolute bottom-80 left-4 w-8 h-6 object-contain opacity-80"
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            {t.story.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.story.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Story Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-full flex items-center justify-center shadow-lg">
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 p-8 bg-card shadow-soft border-0 hover:shadow-romantic transition-shadow duration-300 ml-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="font-serif text-2xl text-primary">{milestone.title}</h3>
                      <span className="text-sm text-wedding-sage font-medium bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                        {milestone.date}
                      </span>
                    </div>
                    {milestone.image && (
                      <div className="mb-4">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title} 
                          className="w-full h-48 object-cover rounded-lg shadow-soft"
                        />
                      </div>
                    )}
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <Card className="mt-16 p-8 bg-gradient-romantic text-center shadow-romantic border-0">
            <h3 className="font-script text-3xl text-primary mb-4">
              {t.story.andNow}
            </h3>
            <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
              {t.story.conclusion}
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