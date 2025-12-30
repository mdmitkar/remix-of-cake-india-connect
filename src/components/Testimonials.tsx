import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Fatima Sheikh",
    course: "Advance Cake Baking",
    rating: 5,
    review: "Chef Fahmeeda's teaching style is amazing! I learned so many techniques that I now run my own home bakery. The hands-on training was invaluable.",
    location: "Bhiwandi"
  },
  {
    name: "Ayesha Khan",
    course: "Basic Cake Baking",
    rating: 5,
    review: "As a beginner, I was nervous but the course was so well-structured. Now I confidently bake cakes for all family occasions!",
    location: "Bhiwandi"
  },
  {
    name: "Zainab Ansari",
    course: "Advance Bakery & Confectionary",
    rating: 5,
    review: "The fondant and sugar art module was exceptional. I've started taking custom cake orders and my clients love my work!",
    location: "Bhiwandi"
  },
  {
    name: "Rukhsar Patel",
    course: "Advance Cake Baking",
    rating: 5,
    review: "Best investment in my culinary journey. Chef Fahmeeda's patience and expertise helped me master complex cake designs.",
    location: "Bhiwandi"
  },
  {
    name: "Meera Joshi",
    course: "Basic Cake Baking",
    rating: 5,
    review: "The 100% eggless recipes are perfect for vegetarian families like mine. Every cake I make is now a hit at parties!",
    location: "Thane"
  },
  {
    name: "Kavita Singh",
    course: "Advance Bakery & Confectionary",
    rating: 5,
    review: "From zero baking knowledge to running a successful cake business - all thanks to Popinz Academy. Highly recommended!",
    location: "Mumbai"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Success Stories
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our talented students who have transformed their passion for baking into successful careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-background border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                
                {/* Review */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>
                
                {/* Student Info */}
                <div className="border-t border-primary/10 pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.course}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
