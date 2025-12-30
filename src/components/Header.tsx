import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import popinzLogo from "@/assets/popinz-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { name: "Home", href: isHomePage ? "#home" : "/" },
    { name: "Our Cakes", href: isHomePage ? "#cakes" : "/#cakes" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Courses", href: isHomePage ? "#courses" : "/#courses" },
    { name: "Student Courses", href: "/student-courses" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={popinzLogo} 
              alt="Popinz Cake Bakers & Academy" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-rose transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-rose transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919373284417" className="flex items-center gap-2 text-muted-foreground hover:text-rose transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 93732 84417</span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20order%20a%20cake" target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground/80 hover:text-rose transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-rose transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a href="https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20order%20a%20cake" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
