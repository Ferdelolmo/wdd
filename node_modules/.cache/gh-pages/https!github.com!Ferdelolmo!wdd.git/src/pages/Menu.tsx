import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Utensils, Wine, Fish, Beef, Cake, GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';
import WeddingFooter from '@/components/WeddingFooter';
import { translations } from '@/translations';

const Menu = () => {
    const { language } = useLanguage();
    const t = translations[language];
    // @ts-ignore - menu is added dynamically
    const menu = t.menu;

    if (!menu) return null;

    const getIcon = (title: string) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('cocktail') || lowerTitle.includes('coctel')) return <Wine className="w-6 h-6" />;
        if (lowerTitle.includes('isla') || lowerTitle.includes('isole')) return <Fish className="w-6 h-6" />;
        if (lowerTitle.includes('entrante') || lowerTitle.includes('antipastu') || lowerTitle.includes('antipasto') || lowerTitle.includes('starter')) return <Utensils className="w-6 h-6" />;
        if (lowerTitle.includes('principali') || lowerTitle.includes('principal') || lowerTitle.includes('main')) return <Beef className="w-6 h-6" />;
        if (lowerTitle.includes('dulci') || lowerTitle.includes('postre') || lowerTitle.includes('dessert')) return <Cake className="w-6 h-6" />;
        if (lowerTitle.includes('vini') || lowerTitle.includes('vinos') || lowerTitle.includes('wines')) return <GlassWater className="w-6 h-6" />;
        return <Utensils className="w-6 h-6" />;
    };

    return (
        <div className="min-h-screen bg-gradient-romantic py-20">
            {/* Home Navigation */}
            <div className="fixed top-4 left-4 z-50">
                <Link to="/">
                    <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
                        <Home className="w-4 h-4 mr-2" />
                        {language === 'es' ? 'Inicio' :
                            language === 'it' ? 'Home' :
                                language === 'scn' ? 'Casa' :
                                    'Home'}
                    </Button>
                </Link>
            </div>

            <div className="fixed top-4 right-4 z-50">
                <LanguageSelector />
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-script text-5xl md:text-7xl text-primary mb-4 animate-in fade-in slide-in-from-top-4 duration-1000">
                        {menu.title}
                    </h1>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {menu.sections.map((section: any, idx: number) => (
                        <Card key={idx} className="bg-card/80 backdrop-blur-sm shadow-romantic border-0 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                            <CardHeader className="bg-gradient-sage text-white p-6">
                                <CardTitle className="flex items-center gap-3 font-serif text-2xl">
                                    {getIcon(section.title)}
                                    {section.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                {section.items && section.items.length > 0 && (
                                    <ul className="space-y-4">
                                        {section.items.map((item: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 text-muted-foreground text-lg italic">
                                                <span className="text-primary mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {section.subsections && (
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {section.subsections.map((sub: any, i: number) => (
                                            <div key={i} className="space-y-3">
                                                <h4 className="font-serif text-xl text-primary border-b border-primary/20 pb-2">
                                                    {sub.title}
                                                </h4>
                                                {sub.items && sub.items.length > 0 && (
                                                    <ul className="space-y-2">
                                                        {sub.items.map((item: string, j: number) => (
                                                            <li key={j} className="text-muted-foreground italic flex items-start gap-2">
                                                                <span className="text-primary/60">•</span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {sub.description && (
                                                    <p className="text-muted-foreground italic text-sm">{sub.description}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <WeddingFooter />
        </div>
    );
};

export default Menu;
