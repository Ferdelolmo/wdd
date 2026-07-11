import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const Banner = () => {
  const { language } = useLanguage();
  const t = translations[language].banner;
  const link = "https://chiaraefer.github.io/wedding/";

  if (!t) return null;

  return (
    <div className="w-full bg-primary text-primary-foreground py-4 px-6 text-center text-xl md:text-2xl shadow-lg font-medium">
      <span className="font-semibold">{t.movingTo}</span>{" "}
      <a
        href={link}
        className="underline hover:text-accent font-bold transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
      <span className="ml-2">{t.bookmark}</span>
    </div>
  );
};
