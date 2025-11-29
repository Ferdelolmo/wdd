import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { Music, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const Soundtrack = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Placeholder IDs - User can replace these later
    const spotifyPlaylistId = "4GspsOYjqP6lkaWZeUt0KH"; // Updated with user's playlist

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
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-script text-5xl md:text-7xl text-primary mb-4">
                        {t.soundtrack.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.soundtrack.subtitle}
                    </p>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        {t.soundtrack.description}
                    </p>
                </div>

                <div className="grid gap-8 max-w-4xl mx-auto">
                    {/* Spotify Embed */}
                    <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-0 overflow-hidden">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-primary">
                                <Music className="w-5 h-5" />
                                {t.soundtrack.spotifyTitle}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 sm:p-6">
                            <div className="w-full flex justify-center">
                                <iframe
                                    style={{ borderRadius: '12px' }}
                                    src={`https://open.spotify.com/embed/playlist/${spotifyPlaylistId}?utm_source=generator`}
                                    width="100%"
                                    height="450"
                                    frameBorder="0"
                                    allowFullScreen
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="max-w-full"
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Soundtrack;
