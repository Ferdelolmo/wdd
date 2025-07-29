import { Card } from '@/components/ui/card';
import { Heart, Coffee, Plane, Home, Gem } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const StorySection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const milestones = [
    {
      icon: Coffee,
      date: "March 2020",
      title: t.story.milestones.firstMeet.title,
      description: t.story.milestones.firstMeet.description
    },
    {
      icon: Heart,
      date: "April 2020",
      title: t.story.milestones.firstDate.title,
      description: t.story.milestones.firstDate.description
    },
    {
      icon: Plane,
      date: "August 2020",
      title: t.story.milestones.firstTrip.title,
      description: t.story.milestones.firstTrip.description
    },
    {
      icon: Home,
      date: "January 2022",
      title: t.story.milestones.moving.title,
      description: t.story.milestones.moving.description
    },
    {
      icon: Gem,
      date: "December 2023",
      title: t.story.milestones.proposal.title,
      description: t.story.milestones.proposal.description
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
          className="absolute top-32 right-32 w-20 h-14 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/7463b7b7-867a-4aa5-bb03-8b5d896db372.png" 
          alt="" 
          className="absolute top-72 left-32 w-20 h-14 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/4d89bd0a-392c-4f23-be6c-96b30449cc7b.png" 
          alt="" 
          className="absolute bottom-80 right-16 w-16 h-12 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/7463b7b7-867a-4aa5-bb03-8b5d896db372.png" 
          alt="" 
          className="absolute bottom-32 left-1/4 w-18 h-13 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/4d89bd0a-392c-4f23-be6c-96b30449cc7b.png" 
          alt="" 
          className="absolute top-96 right-1/4 w-14 h-10 object-contain opacity-80"
        />
        <img 
          src="/lovable-uploads/7463b7b7-867a-4aa5-bb03-8b5d896db372.png" 
          alt="" 
          className="absolute bottom-96 left-16 w-16 h-12 object-contain opacity-80"
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
              And now...
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