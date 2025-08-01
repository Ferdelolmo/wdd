import { Guest } from "@/data/guests";

interface InvitationCardProps {
  guest: Guest;
}

const invitationTexts = {
  EN: {
    title: "Chiara & Fernando are getting married",
    greeting: (name: string) => `Dear ${name},`,
    message: "We are thrilled to invite you to our wedding! We can't wait to celebrate this special moment with you.",
    date: "21 June 2026 · Ávila, Spain",
    rsvp: "Please RSVP",
    website: "www.chiaraefer.com"
  },
  ES: {
    title: "¡Chiara y Fernando se casan!",
    greeting: (name: string) => `Hola ${name},`,
    message: "¡Estamos encantados de invitarte a nuestra boda! No podemos esperar para celebrar este momento especial contigo.",
    date: "21 Junio 2026 · Ávila, Spain", 
    rsvp: "Por favor, confirma tu asistencia",
    website: "www.chiaraefer.com"
  },
  IT: {
    title: "Chiara & Fernando si sposano",
    greeting: (name: string) => `Ciao ${name},`,
    message: "Siamo felicissimi di invitarti al nostro matrimonio! Non vediamo l'ora di festeggiare insieme questo momento speciale.",
    date: "21 Giugno 2026 · Ávila, Spagna",
    rsvp: "È gradita conferma", 
    website: "www.chiaraefer.com"
  }
};

export const InvitationCard = ({ guest }: InvitationCardProps) => {
  const text = invitationTexts[guest.language];
  
  return (
    <div 
      className="fixed inset-0 w-full h-full"
      style={{
        backgroundImage: `url('https://i.imgur.com/5zWPP8m.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6">
        {/* Glass container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full text-center text-white">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold leading-tight">
              {text.title}
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl font-medium">
                {text.greeting(guest.name)}
              </p>
              
              <p className="text-lg leading-relaxed opacity-90">
                {text.message}
              </p>
            </div>
            
            <div className="space-y-3 pt-4">
              <p className="text-lg font-semibold">
                {text.date}
              </p>
              
              <div className="space-y-2">
                <a 
                  href="https://www.chiaraefer.com" 
                  className="block text-lg hover:underline transition-all duration-300"
                >
                  {text.rsvp}
                </a>
                
                <a 
                  href="https://www.chiaraefer.com"
                  className="inline-block mt-4 bg-yellow-200/90 text-black px-6 py-3 rounded-xl font-semibold text-base hover:bg-yellow-300/90 transition-all duration-300"
                >
                  {text.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};