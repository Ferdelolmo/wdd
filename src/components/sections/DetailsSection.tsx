import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Utensils, Music, Camera, Gift, Shirt, Car, Bus, Heart, Wine, Beer } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
const DetailsSection = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];

  const handleAddToCalendar = () => {
    // Google Calendar URL with event details
    // June 21, 2026, 14:00-24:00 CEST (12:00-22:00 UTC)
    const startDate = '20260621T120000Z';
    const endDate = '20260621T220000Z';
    const title = 'Wedding Chiara & Fernando';
    const location = 'Dehesa de Pedrosillo, N-403, 05004 Ávila, Spain';
    const details = 'Wedding celebration of Chiara and Fernando';
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };
  const schedule = [{
    time: "14:00",
    event: t.details.schedule.items.busHop,
    icon: Bus,
    description: ""
  }, {
    time: "15:00",
    event: t.details.schedule.items.ceremony,
    icon: Heart,
    description: ""
  }, {
    time: "16:00",
    event: t.details.schedule.items.cocktail,
    icon: Wine,
    description: ""
  }, {
    time: "18:00",
    event: t.details.schedule.items.reception,
    icon: Utensils,
    description: ""
  }, {
    time: "20:00",
    event: t.details.schedule.items.party,
    icon: Music,
    description: ""
  }];
  const details = [{
    icon: Car,
    title: t.details.transportation.title,
    description: t.details.transportation.description
  }, {
    icon: Shirt,
    title: t.details.attire.title,
    description: t.details.attire.description
  }, {
    icon: Gift,
    title: t.details.gifts.title,
    description: t.details.gifts.description
  }];
  return <section className="min-h-screen bg-background py-20">
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
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t.details.schedule.day0}</h4>
                  <div className="space-y-3 text-white/90">
                    <p className="ml-8">
                      <span className="font-bold">{t.details.schedule.day1Event.split(' ')[0]}</span> {t.details.schedule.day1Event.substring(t.details.schedule.day1Event.indexOf(' ') + 1)}{' '}
                      <a 
                        href="https://maps.app.goo.gl/BcZ868rJU6Q9RSoW8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-white/80 underline"
                      >
                        {t.details.schedule.day1Venue}
                      </a>
                      {t.details.schedule.day1Description}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t.details.schedule.day1}</h4>
                  <div className="space-y-3 text-white/90">
                    <p className="ml-8">
                      <span className="font-bold">19:00</span> 
                      <a href="/activities" className="text-white hover:text-white/80 underline">
                        {t.details.schedule.breakOutActivities}
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t.details.schedule.day2}</h4>
                  <div className="space-y-3 text-white/90">
                    <div className="flex items-center gap-3">
                      <Bus className="w-5 h-5 text-white" />
                      <p><span className="font-bold">{t.details.schedule.pickup.split(' ')[0]}</span> {t.details.schedule.pickup.substring(t.details.schedule.pickup.indexOf(' ') + 1)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-white" />
                      <p><span className="font-bold">{t.details.schedule.ceremony.split(' ')[0]}</span> {t.details.schedule.ceremony.substring(t.details.schedule.ceremony.indexOf(' ') + 1)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wine className="w-5 h-5 text-white" />
                      <p><span className="font-bold">{t.details.schedule.cocktail.split(' ')[0]}</span> {t.details.schedule.cocktail.substring(t.details.schedule.cocktail.indexOf(' ') + 1)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Utensils className="w-5 h-5 text-white" />
                      <p><span className="font-bold">{t.details.schedule.banquet.split(' ')[0]}</span> {t.details.schedule.banquet.substring(t.details.schedule.banquet.indexOf(' ') + 1)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Music className="w-5 h-5 text-white" />
                      <p><span className="font-bold">{t.details.schedule.party.split(' ')[0]}</span> {t.details.schedule.party.substring(t.details.schedule.party.indexOf(' ') + 1)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm shadow-soft border-0">
              <div 
                onClick={handleAddToCalendar}
                className="flex items-center gap-2 text-lg text-muted-foreground hover:bg-card/70 hover:border-primary/30 cursor-pointer transition-all duration-200 hover:scale-105 group p-2 rounded-lg"
              >
                <Calendar className="w-5 h-5 text-primary group-hover:text-primary/80" />
                <div>
                  <p className="mb-1 font-medium">{t.about.date}</p>
                  <p className="text-sm">{t.about.location}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Important Details */}
          <div>
            
            
            <div className="grid gap-6">
              {details.map((detail, index) => <Card key={index} className="p-6 bg-card shadow-soft border-0 hover:shadow-romantic transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <detail.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-primary mb-2">{detail.title}</h4>
                      {detail.title === t.details.transportation.title ? (
                        <div className="text-muted-foreground text-sm leading-relaxed">
                          {language === 'en' ? (
                            <>
                              Shuttle service will be provided from{' '}
                              <a 
                                href="https://maps.app.goo.gl/PVvh7divSqqKRZky7"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Centro de Recepción de Visitantes
                              </a>
                              {' '}and the{' '}
                              <a 
                                href="https://maps.app.goo.gl/oRWeUqTWPiRmNBSC8"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                lane in front of the bus station
                              </a>
                              {' '}at 14:00. There will also be hourly buses leaving to Ávila starting at 23:00.
                            </>
                          ) : language === 'es' ? (
                            <>
                              Se proporcionará servicio de transporte desde{' '}
                              <a 
                                href="https://maps.app.goo.gl/PVvh7divSqqKRZky7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Centro de Recepción de Visitantes
                              </a>
                              {' '}y la{' '}
                              <a 
                                href="https://maps.app.goo.gl/oRWeUqTWPiRmNBSC8"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                vía de servicio en frente de la Estación de Autobuses
                              </a>
                              {' '}a las 14:00. También habrá autobuses cada hora saliendo hacia Ávila empezando a las 23:00.
                            </>
                          ) : language === 'it' ? (
                            <>
                              Sarà fornito un servizio navetta da{' '}
                              <a 
                                href="https://maps.app.goo.gl/PVvh7divSqqKRZky7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Centro de Recepción de Visitantes
                              </a>
                              {' '}e la{' '}
                              <a 
                                href="https://maps.app.goo.gl/oRWeUqTWPiRmNBSC8" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                corsia di fronte alla Stazione degli Autobus
                              </a>
                              {' '}alle 14:00. Ci saranno anche autobus ogni ora in partenza per Ávila a partire dalle 23:00.
                            </>
                          ) : (
                            <>
                              Sarà furnutu sirvizziu di trasportu di{' '}
                              <a 
                                href="https://maps.app.goo.gl/PVvh7divSqqKRZky7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Centro de Recepción de Visitantes
                              </a>
                              {' '}e a{' '}
                              <a 
                                href="https://maps.app.goo.gl/oRWeUqTWPiRmNBSC8" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                corsia davanti a Stazzioni di Autobùs
                              </a>
                              {' '}â 14:00. Ci sarannu puru autobùs ogni ora ca partunu versu Ávila ncuminzannu â 23:00.
                            </>
                          )}
                        </div>
                      ) : (
                        <div
                          className="text-muted-foreground text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: detail.description.replace(/\n/g, '<br />') }}
                        />
                      )}
                    </div>
                  </div>
                </Card>)}
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default DetailsSection;