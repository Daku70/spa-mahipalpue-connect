import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Traditional Russian Banya",
  "Deep Tissue Massage",
  "Hot Stone Therapy",
  "Aromatherapy Massage",
  "Swedish Massage",
  "Couple's Spa Package",
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

    // Create WhatsApp message with booking details
    const message = `*New Booking Request*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Service:* ${encodeURIComponent(formData.service)}`;
    
    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/919818931148?text=${message}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Opening WhatsApp",
      description: "Send the message to complete your booking request.",
    });

    setFormData({ name: "", phone: "", email: "", service: "" });
  };

  return (
    <section className="py-20 bg-background" id="booking" aria-labelledby="booking-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle id="booking-heading" className="text-4xl text-gold mb-2">Book Your Experience</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Fill in the form below and we'll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Spa booking form">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-border text-foreground"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-input border-border text-foreground"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-border text-foreground"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Select Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                    <SelectTrigger className="bg-input border-border text-foreground" aria-label="Choose spa service">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark font-semibold text-lg py-6 shadow-gold transition-smooth"
                >
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
