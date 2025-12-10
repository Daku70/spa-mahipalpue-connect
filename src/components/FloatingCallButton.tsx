import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919355125143";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919355125143", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <Button
        onClick={handleWhatsApp}
        size="lg"
        className="rounded-full w-16 h-16 shadow-gold bg-[#25D366] hover:bg-[#20BD5A] text-white transition-smooth"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      
      <Button
        onClick={handleCallNow}
        size="lg"
        className="rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-turquoise to-coral hover:opacity-90 text-white transition-smooth animate-bounce-subtle"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingCallButton;
