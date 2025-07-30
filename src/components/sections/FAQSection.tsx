import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { Button } from '@/components/ui/button';
import { HelpCircle, Phone, Mail, Heart, Users, Gift, Car, Camera, Utensils } from 'lucide-react';
const FAQSection = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  // Helper function to render text with multiple links
  const renderAnswerWithLinks = (answer: string, linkConfigs: {text: string, url: string}[]) => {
    let parts: (string | React.ReactNode)[] = [answer];
    
    linkConfigs.forEach((link, linkIndex) => {
      const newParts: (string | React.ReactNode)[] = [];
      parts.forEach((part, partIndex) => {
        if (typeof part === 'string' && part.includes(link.text)) {
          const splitParts = part.split(link.text);
          splitParts.forEach((splitPart, splitIndex) => {
            if (splitIndex > 0) {
              newParts.push(
                <a 
                  key={`${linkIndex}-${partIndex}-${splitIndex}`}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline"
                >
                  {link.text}
                </a>
              );
            }
            if (splitPart) {
              newParts.push(splitPart);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    
    return parts;
  };

  const faqs = [{
    question: t.faq.items.rsvp.question,
    answer: t.faq.items.rsvp.answer,
    hasLink: true,
    linkText: language === 'en' ? 'link' : (language === 'it' ? 'link' : (language === 'scn' ? 'culligamentu' : 'enlace')),
    linkUrl: 'https://forms.gle/Pu5jfecVs7exJadh7'
  }, {
    question: t.faq.items.weather.question,
    answer: t.faq.items.weather.answer
  }, {
    question: t.faq.items.parking.question,
    answer: t.faq.items.parking.answer
  }, {
    question: t.faq.items.dietary.question,
    answer: t.faq.items.dietary.answer
  }, {
    question: t.faq.items.aboutAvila.question,
    answer: t.faq.items.aboutAvila.answer
  }, {
    question: t.faq.items.gettingToAvila.question,
    answer: t.faq.items.gettingToAvila.answer,
    hasMultipleLinks: true,
    links: [
      { text: 'Príncipe Pío', url: 'https://maps.app.goo.gl/iswy9BN6BFcszrQW9' },
      { text: language === 'en' ? 'this company' : (language === 'it' ? 'questa compagnia' : (language === 'scn' ? 'sta cumpagnìa' : 'esta empresa')), url: 'https://www.jimenezdorado.com/' },
      { text: 'Estación Sur', url: 'https://maps.app.goo.gl/jahHQSus6wzWZivEA' }
    ]
  }, {
    question: t.faq.items.accommodation.question,
    answer: t.faq.items.accommodation.answer,
    hasMultipleLinks: true,
    links: [
      { text: 'Exe Reina Isabel', url: 'https://maps.app.goo.gl/iSW8nA4xA9MxEbAp9' },
      { text: 'Hotel ELE Mirador de Santa Ana', url: 'https://maps.app.goo.gl/bB1FJeGdnSn4KaGK6' },
      { text: 'Hotel Don Carmelo', url: 'https://maps.app.goo.gl/qNauHHkZ6yrLMhut8' },
      { text: 'Sofrafa Palacio', url: 'https://maps.app.goo.gl/SpZ1Q5LznLsyPJXQ9' }
    ]
  }];
  const funFacts = [
    { icon: Heart, fact: t.faq.funFactsList[0] },
    { icon: Users, fact: t.faq.funFactsList[1] },
    { icon: Gift, fact: t.faq.funFactsList[2] },
    { icon: Camera, fact: t.faq.funFactsList[3] }
  ];
  return <section className="min-h-screen bg-gradient-romantic py-20">
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
                {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.hasLink ? (
                        <>
                          {faq.answer.split(faq.linkText!)[0]}
                          <a 
                            href={faq.linkUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline"
                          >
                            {faq.linkText}
                          </a>
                          {faq.answer.split(faq.linkText!)[1]}
                        </>
                      ) : faq.hasMultipleLinks ? (
                        renderAnswerWithLinks(faq.answer, faq.links!)
                      ) : (
                        faq.answer
                      )}
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </Card>
          </div>

          {/* Fun Facts & Contact */}
          <div className="space-y-8">
            <Card className="p-6 bg-wedding-cream shadow-soft border-0">
              <h3 className="font-serif text-xl text-primary mb-6 text-center">{t.faq.funFacts}</h3>
              <div className="space-y-4">
                {funFacts.map((fact, index) => <div key={index} className="flex items-start gap-3">
                    <fact.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{fact.fact}</p>
                  </div>)}
              </div>
            </Card>

            <Card className="p-6 bg-wedding-gold text-center shadow-soft border-0">
              
              <p className="text-sm text-muted-foreground">
                {t.faq.cantWait.message}
              </p>
              <Heart className="w-6 h-6 text-primary fill-primary mx-auto mt-4 animate-pulse" />
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;