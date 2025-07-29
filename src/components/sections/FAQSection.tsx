import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
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
  const { language } = useLanguage();
  const t = translations[language];
  
  const faqs = [
    {
      question: t.faq.items.rsvp.question,
      answer: t.faq.items.rsvp.answer
    },
    {
      question: t.faq.items.plusOne.question,
      answer: t.faq.items.plusOne.answer
    },
    {
      question: t.faq.items.children.question,
      answer: t.faq.items.children.answer
    },
    {
      question: t.faq.items.weather.question,
      answer: t.faq.items.weather.answer
    },
    {
      question: t.faq.items.parking.question,
      answer: t.faq.items.parking.answer
    },
    {
      question: t.faq.items.dietary.question,
      answer: t.faq.items.dietary.answer
    }
  ];

  const funFacts = [
    { icon: Heart, fact: "Una de nuestras habilidades es leernos el pensamiento del uno al otro sin mediar palabra" },
    { icon: Users, fact: "We have 150 amazing guests joining us" },
    { icon: Gift, fact: "Our first dance song is 'At Last' by Etta James" },
    { icon: Camera, fact: "We've been to 12 countries together" }
  ];

  return (
    <section className="min-h-screen bg-gradient-romantic py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl md:text-6xl text-primary mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* FAQ */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card/80 backdrop-blur-sm shadow-romantic border-0">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-2xl text-primary">{t.faq.title}</h3>
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
              <h3 className="font-serif text-xl text-primary mb-6 text-center">{t.faq.funFacts}</h3>
              <div className="space-y-4">
                {funFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <fact.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{fact.fact}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-wedding-gold text-center shadow-soft border-0">
              <h4 className="font-script text-2xl text-primary mb-3">{t.faq.cantWait.title}</h4>
              <p className="text-sm text-muted-foreground">
                {t.faq.cantWait.message}
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