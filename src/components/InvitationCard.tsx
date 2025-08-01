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
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center p-4">
      <div 
        className="w-full max-w-sm bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `url('https://i.imgur.com/5zWPP8m.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="p-8 text-center space-y-6 bg-white/90 backdrop-blur-sm">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              {text.title}
            </h1>
            
            <div className="space-y-3">
              <p className="text-lg font-medium text-gray-700">
                {text.greeting(guest.name)}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {text.message}
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <p className="text-lg font-semibold text-gray-800">
                {text.date}
              </p>
              
              <p className="text-gray-600">
                {text.rsvp}
              </p>
              
              <p className="text-sm font-medium text-rose-600">
                {text.website}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};