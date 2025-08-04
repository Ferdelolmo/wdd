import { useParams, Navigate } from "react-router-dom";
import { getGuestBySlug } from "@/data/guests";
import { InvitationCard } from "@/components/InvitationCard";

const Invitation = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/" replace />;
  }
  
  const guest = getGuestBySlug(slug);
  
  if (!guest) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Invitation Not Found</h1>
          <p className="text-gray-600">Sorry, we couldn't find this invitation.</p>
        </div>
      </div>
    );
  }
  
  return <InvitationCard guest={guest} />;
};

export default Invitation;