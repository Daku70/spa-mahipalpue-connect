import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";

const services = [
  "Traditional Banya",
  "Deep Tissue Massage",
  "Hot Stone Therapy",
  "Aromatherapy Massage",
  "Swedish Massage",
  "Couple's Spa Package",
  "Thai Massage",
  "Sports Massage",
  "Reflexology",
  "Head & Scalp Massage",
  "Body Scrub & Polish",
  "Premium Facial",
  "Back, Neck & Shoulder",
  "Full Body Oil Massage",
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    const message = `*New Booking Request*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Service:* ${encodeURIComponent(formData.service)}`;
    
    const whatsappUrl = `https://wa.me/919355125143?text=${message}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Opening WhatsApp",
      description: "Send the message to complete your booking request.",
    });

    setFormData({ name: "", phone: "", email: "", service: "" });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="booking" aria-labelledby="booking-heading">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sunny/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-turquoise/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-2 border-turquoise/20 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="text-center bg-gradient-to-r from-navy via-navy/95 to-navy py-8">
              <div className="inline-flex items-center gap-2 bg-turquoise/20 border border-turquoise/30 rounded-full px-4 py-2 mb-4 mx-auto">
                <Sparkles className="w-4 h-4 text-turquoise" />
                <span className="text-sm font-medium text-white">Book Now</span>
              </div>
              <CardTitle id="booking-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                Book Your <span className="text-turquoise">Experience</span>
              </CardTitle>
              <CardDescription className="text-lg text-white/70">
                Fill in the form below and we'll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Spa booking form">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-2 border-muted hover:border-turquoise/50 focus:border-turquoise text-foreground rounded-xl py-6 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-semibold">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-2 border-muted hover:border-turquoise/50 focus:border-turquoise text-foreground rounded-xl py-6 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-2 border-muted hover:border-turquoise/50 focus:border-turquoise text-foreground rounded-xl py-6 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground font-semibold">Select Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                    <SelectTrigger className="bg-background border-2 border-muted hover:border-turquoise/50 focus:border-turquoise text-foreground rounded-xl py-6 transition-colors" aria-label="Choose spa service">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="py-3">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-turquoise to-coral hover:opacity-90 text-white font-bold text-lg py-7 rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
