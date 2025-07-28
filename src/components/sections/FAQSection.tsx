import { Card } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  Heart,
  Users,
  Gift,
  Car,
  Camera,
  Utensils
} from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "What should I wear?",
      answer: "We've requested cocktail attire! Think elegant garden party vibes. Florals and pastels are encouraged, and comfortable shoes are recommended as part of the celebration will be outdoors on grass."
    },
    {
      question: "Will the ceremony be outdoors?",
      answer: "Yes! Our ceremony will take place in the beautiful rose garden. In case of rain, we have a stunning indoor chapel as our backup plan."
    },
    {
      question: "Is parking available?",
      answer: "Yes, complimentary valet parking will be provided. We also recommend using Uber or Lyft for evening transportation, especially if you plan to enjoy the open bar!"
    },
    {
      question: "Are children welcome?",
      answer: "We love your little ones, but we've decided to have an adults-only celebration to allow our friends and family to relax and enjoy the evening."
    },
    {
      question: "What's the food situation?",
      answer: "We'll be serving a delicious farm-to-table three-course dinner with vegetarian and vegan options. Please let us know of any specific dietary restrictions when you RSVP."
    },
    {
      question: "Can I take photos during the ceremony?",
      answer: "We're having an unplugged ceremony! Please put away your phones and cameras during the ceremony so our professional photographer can capture the perfect shots. Feel free to snap away during the reception!"
    },
    {
      question: "Do you have a gift registry?",
      answer: "Your presence truly is our present! If you'd like to give a gift, we have registries at Williams Sonoma and Crate & Barrel, or contributions to our honeymoon fund are appreciated."
    },
    {
      question: "How do I get to the venue?",
      answer: "Garden Manor Estate is located at 1234 Vineyard Lane in Napa Valley. It's about 1.5 hours from San Francisco. We'll send detailed directions with your RSVP confirmation."
    }
  ];

  const funFacts = [
    { icon: Heart, fact: "James proposed with Sarah's grandmother's ring" },
    { icon: Users, fact: "We have 150 amazing guests joining us" },
    { icon: Gift, fact: "Our first dance song is 'At Last' by Etta James" },
    { icon: Camera, fact: "We've been to 12 countries together" }
  ];

  return (
    <section className="min-h-screen bg-gradient-romantic py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            FAQ & Fun Facts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your questions answered, plus some fun tidbits about us!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* FAQ */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-romantic border-0">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-2xl text-primary">Frequently Asked Questions</h3>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>

          {/* Fun Facts & Contact */}
          <div className="space-y-8">
            <Card className="p-6 bg-wedding-cream shadow-soft border-0">
              <h3 className="font-serif text-xl text-primary mb-6 text-center">Fun Facts About Us</h3>
              <div className="space-y-4">
                {funFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <fact.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{fact.fact}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-sage text-white shadow-soft border-0">
              <h3 className="font-serif text-xl mb-6 text-center">Questions?</h3>
              <div className="space-y-4 text-center">
                <p className="text-sm opacity-90">
                  Can't find what you're looking for? We're here to help!
                </p>
                <div className="space-y-3">
                  <Button variant="secondary" size="sm" className="w-full justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-center border-white text-white hover:bg-white hover:text-primary">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-wedding-gold text-center shadow-soft border-0">
              <h4 className="font-script text-2xl text-primary mb-3">Can't Wait!</h4>
              <p className="text-sm text-muted-foreground">
                We're so excited to celebrate with all of you. See you on June 15th!
              </p>
              <Heart className="w-6 h-6 text-primary fill-primary mx-auto mt-4 animate-pulse" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;