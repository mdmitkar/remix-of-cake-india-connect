import { CheckCircle, Award, Users, BookOpen, Star } from "lucide-react";
import chefFahmedaImage from "@/assets/chef-fahmeda.png";

const highlights = [
  { icon: Users, stat: "1000+", label: "Students Trained" },
  { icon: BookOpen, stat: "100+", label: "Cake Varieties" },
  { icon: Award, stat: "Rising Women", label: "Award 2025" },
];

const features = [
  "Easy teaching methods for all skill levels",
  "Hands-on practical training",
  "Personal mentorship & guidance",
  "Skill-based learning approach",
  "Focus on creativity & hygiene",
  "Career-oriented courses",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium mb-6">
            Meet Your Mentor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Chef <span className="text-rose">Fahmeeda Momin</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Chef Image */}
          <div className="animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={chefFahmedaImage}
                alt="Chef Fahmeeda Momin - Founder of Popinz Cake Bakers & Academy"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Highlights Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {highlights.map((item) => (
                <div key={item.label} className="bg-card border border-border p-4 rounded-xl shadow-card text-center">
                  <item.icon className="w-6 h-6 text-rose mx-auto mb-2" />
                  <p className="text-xl font-bold text-foreground">{item.stat}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Chef Fahmeeda Momin's journey is a true example of how <span className="text-rose font-semibold">passion, dedication, and continuous learning</span> can turn a dream into a successful profession.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                She began her journey as a student with a deep interest in baking and cake making. What started as a curiosity soon became a passion. With consistent practice, training, and self-belief, she developed her skills in baking, cake decoration, and confectionery arts.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Understanding the need for quality baking education, she took a bold step forward and founded <span className="text-gold font-semibold">Popinz Cake Bakers and Academy</span>. Her vision was not only to create beautiful and delicious cakes but also to empower students with practical skills that could help them build careers or start their own baking businesses.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Today, Popinz Cake Bakers and Academy stands as a trusted name in baking education. Courses are designed for students, homemakers, and aspiring entrepreneurs.
              </p>
            </div>

            {/* Features List */}
            <div className="bg-card border border-border p-6 rounded-2xl shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                Why Learn From Chef Fahmeeda?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inspirational Quote */}
            <div className="bg-gradient-rose p-6 rounded-2xl text-primary-foreground">
              <blockquote className="text-lg italic mb-2">
                "From being a student to becoming a successful cake chef, educator, and entrepreneur — my journey continues to inspire many aspiring bakers to believe in themselves and follow their passion."
              </blockquote>
              <p className="text-sm text-primary-foreground/80 font-medium">— Chef Fahmeeda Momin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
