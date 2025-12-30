import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Request Submitted!",
      description: "Popinz team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", cakeType: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Instagram,
      title: "Instagram",
      details: ["@fahmeeda954", "DM for quick response"],
      link: "https://www.instagram.com/fahmeeda954/",
    },
    {
      icon: Phone,
      title: "WhatsApp / Call",
      details: ["+91 93732 84417", "Available 10 AM - 8 PM"],
      link: "https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20enquire%20about%20cakes",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["fahmeeda.cakes@gmail.com", "For bulk orders"],
    },
    {
      icon: Clock,
      title: "Order Timing",
      details: ["Book 2-3 days in advance", "Same day available on request"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-dark rounded-full text-sm font-medium mb-4">
            Order Your Cake
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Let's Create Your <span className="text-rose">Dream Cake</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a special occasion coming up? Share your vision and we'll bring it to life with delicious flavors and stunning designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-up">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Cake Order Enquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cake Type
                </label>
                <select
                  value={formData.cakeType}
                  onChange={(e) => setFormData({ ...formData, cakeType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all"
                >
                  <option value="">Select cake type</option>
                  <option value="birthday">Birthday Cake</option>
                  <option value="wedding">Wedding Cake</option>
                  <option value="anniversary">Anniversary Cake</option>
                  <option value="photo">Photo Cake</option>
                  <option value="theme">Theme Cake</option>
                  <option value="cupcakes">Cupcakes / Cake Pops</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your cake (flavor, design, date, etc.)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-rose/50 focus:border-rose transition-all resize-none"
                  placeholder="E.g., I need a 1kg Pineapple cake for my daughter's birthday on 15th Jan. Theme: Unicorn..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Order Request
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link || "#"}
                  target={info.link ? "_blank" : undefined}
                  rel={info.link ? "noopener noreferrer" : undefined}
                  className="bg-card border border-border p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-rose-light rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-5 h-5 text-rose" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-rose p-8 rounded-2xl text-primary-foreground text-center">
              <h3 className="text-2xl font-display font-bold mb-4">
                Quick Order via WhatsApp
              </h3>
              <p className="mb-6 text-primary-foreground/80">
                For fastest response, send your order details directly on WhatsApp!
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-rose"
                asChild
              >
              <a href="https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20order%20a%20cake" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
              </Button>
            </div>

            {/* Instagram Follow */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-soft text-center">
              <p className="text-muted-foreground mb-4">
                See our latest cake creations and customer reviews on Instagram!
              </p>
              <Button variant="gold" asChild>
                <a href="https://www.instagram.com/fahmeeda954/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow @fahmeeda954
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
