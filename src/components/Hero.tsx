import { Button } from "@/components/ui/button";
import { Cake, Award, Heart, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&q=80"
        >
          <source 
            src="https://cdn.pixabay.com/video/2020/07/30/45593-446276377_large.mp4" 
            type="video/mp4" 
          />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-rose-light rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-gold-light rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <span className="inline-block px-4 py-2 bg-rose-light text-rose-dark rounded-full text-sm font-medium mb-6">
              🎂 Home Baker & Cake Artist | India
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Crafting <span className="text-rose">Delicious</span> Memories, One Cake at a Time
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Welcome to Popinz Cake Bakers & Academy! Specializing in customized cakes, trending designs, and professional baking courses for aspiring bakers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20order%20a%20custom%20cake" target="_blank" rel="noopener noreferrer">
                  Order Custom Cake
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+919373284417">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gold mb-1">
                  <Cake className="w-5 h-5" />
                  <span className="text-2xl font-bold">1000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Cakes Delivered</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gold mb-1">
                  <Heart className="w-5 h-5" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gold mb-1">
                  <Award className="w-5 h-5" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Cake Varieties</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Empty for balance */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
