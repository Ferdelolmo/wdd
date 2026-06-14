import { FC } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import LanguageSelector from "@/components/LanguageSelector";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Users, Disc, Trophy, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Petanca: FC = () => {
  const { language } = useLanguage();
  const t = translations[language].petancaRules;

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link to="/activities">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-16 relative max-w-4xl">
        <div className="absolute top-4 right-4 z-10">
          <LanguageSelector />
        </div>
        
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">{t.title}</h1>
        
        <div className="space-y-6">
          <Card className="shadow-md border-l-4 border-blue-500">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Target className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-2xl m-0">{t.goal.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">{t.goal.desc}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-l-4 border-blue-500">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Users className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-2xl m-0">{t.teams.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 whitespace-pre-line">{t.teams.desc}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-l-4 border-blue-500">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Disc className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-2xl m-0">{t.howItWorks.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
                {t.howItWorks.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="shadow-md border-l-4 border-blue-500">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Trophy className="w-8 h-8 text-blue-500" />
              <CardTitle className="text-2xl m-0">{t.scoring.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 whitespace-pre-line">{t.scoring.desc}</p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-t-4 border-t-yellow-500 bg-yellow-50/50">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <PartyPopper className="w-8 h-8 text-yellow-500" />
              <CardTitle className="text-2xl m-0">{t.activity.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium text-gray-800">{t.activity.desc}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Petanca;
