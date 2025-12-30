import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import popinzLogo from "@/assets/popinz-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Cakes", href: "#cakes" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  const cakeTypes = [
    "Birthday Cakes",
    "Wedding Cakes",
    "Photo Cakes",
    "Theme Cakes",
    "Cupcakes & Pops",
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/fahmeeda954/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/919373284417", label: "WhatsApp" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-burgundy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img 
              src={popinzLogo} 
              alt="Popinz Cake Bakers & Academy" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 mb-6">
              Crafting delicious memories with homemade cakes for all your special celebrations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-rose transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cake Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Cake Categories</h4>
            <ul className="space-y-3">
              {cakeTypes.map((cake) => (
                <li key={cake}>
                  <a
                    href="#cakes"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {cake}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-4 text-primary-foreground/70">
              <p>
                <strong className="text-primary-foreground">Instagram:</strong><br />
                @fahmeeda954
              </p>
              <p>
                <strong className="text-primary-foreground">WhatsApp:</strong><br />
                +91 93732 84417
              </p>
              <p>
                <strong className="text-primary-foreground">Timing:</strong><br />
                Mon - Sat: 10 AM - 8 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © 2024 Popinz Cake Bakers & Academy. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Designed by <span className="text-primary-foreground font-medium">Datamatex Technologies</span>
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
