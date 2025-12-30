import { Clock, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Basic Cake Baking",
    duration: "2 Weeks",
    students: "12 per batch",
    price: "₹1,499",
    description: "Complete introduction to cake baking covering all popular cake varieties and techniques.",
    features: [
      "Introduction Of Cake Baking",
      "Pineapple Cake",
      "Mirror Glaze Cake",
      "Strawberry Cake",
      "Red Velvet Cake",
      "Pull Me Up Cake",
      "Doll Cake",
      "Anti Gravity Rasmalai Cake",
      "Thread Cake",
      "Pinata Cake",
      "Non Baked Cake",
      "Home Made Cake",
      "Popsicles",
      "Cup Cake",
      "Cake Pops"
    ],
    popular: false,
    color: "mango",
  },
  {
    title: "Advance Cake Baking",
    duration: "4 Weeks",
    students: "10 per batch",
    price: "₹2,799",
    description: "Take your skills to the next level with advanced decorating and specialty cake techniques.",
    features: [
      "Introduction Of Cake Baking",
      "Pineapple Cake",
      "Mirror Glaze Cake",
      "Strawberry Cake",
      "Red Velvet Cake",
      "Pull Me Up Cake",
      "Doll Cake",
      "Anti Gravity Cake",
      "Theme Cake",
      "Thread Cake",
      "Pinata Cake",
      "Brownie Cake",
      "Fondant Cake",
      "Sugar Free Cake",
      "Strawberry Gel Cake",
      "Non Baked Cake",
      "Home Made Cake",
      "Cup Cake",
      "Photo Print Cake",
      "Pineapple Gel Cake",
      "Vanilla Premix Cake",
      "Donuts",
      "Popsicles",
      "Cake Pops",
      "Chocolate Garnishing"
    ],
    popular: true,
    color: "orange",
  },
  {
    title: "Advance Bakery & Confectionary",
    duration: "6 Weeks",
    students: "8 per batch",
    price: "₹4,999",
    description: "Comprehensive professional training covering pastries, desserts, and complete bakery operations.",
    features: [
      "Creams, Fillings & Icings",
      "Chocolate & Confectionery",
      "Fondant & Sugar Art",
      "Pastry & Dessert Creations",
      "Professional Cake Decoration",
      "Business & Professional Practices"
    ],
    popular: false,
    color: "cherry",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-dark rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Choose Your <span className="text-rose">Learning Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From beginners to professionals, we have the perfect course to elevate your baking skills
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 animate-fade-up ${
                course.color === "mango" 
                  ? "border-2 border-mango bg-mango-light/30" 
                  : course.color === "orange"
                    ? "border-2 border-orange bg-orange-light/30"
                    : course.color === "cherry"
                      ? "border-2 border-cherry bg-cherry-light/30"
                      : course.popular 
                        ? "border-2 border-rose" 
                        : "border border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {course.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-rose text-primary-foreground text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className={`text-2xl font-display font-bold mb-2 ${
                course.color === "mango" ? "text-mango" : course.color === "orange" ? "text-orange" : course.color === "cherry" ? "text-cherry" : "text-foreground"
              }`}>
                {course.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {course.description}
              </p>

              {/* Course Meta */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className={`w-4 h-4 ${course.color === "mango" ? "text-mango" : course.color === "orange" ? "text-orange" : course.color === "cherry" ? "text-cherry" : "text-gold"}`} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className={`w-4 h-4 ${course.color === "mango" ? "text-mango" : course.color === "orange" ? "text-orange" : course.color === "cherry" ? "text-cherry" : "text-gold"}`} />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 max-h-64 overflow-y-auto">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <BookOpen className={`w-4 h-4 flex-shrink-0 ${course.color === "mango" ? "text-mango" : course.color === "orange" ? "text-orange" : course.color === "cherry" ? "text-cherry" : "text-rose"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl font-bold ${course.color === "mango" ? "text-mango" : course.color === "orange" ? "text-orange" : course.color === "cherry" ? "text-cherry" : "text-foreground"}`}>
                  {course.price}
                </span>
                <span className="text-muted-foreground"> / course</span>
              </div>

              {/* CTA */}
              <Button
                variant={course.popular ? "hero" : "outline"}
                className={`w-full ${
                  course.color === "mango" ? "border-mango text-mango hover:bg-mango hover:text-white" : 
                  course.color === "orange" ? "border-orange text-orange hover:bg-orange hover:text-white" : 
                  course.color === "cherry" ? "border-cherry text-cherry hover:bg-cherry hover:text-white" : ""
                }`}
                size="lg"
                asChild
              >
                <a href={`https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}`} target="_blank" rel="noopener noreferrer">
                  Enroll Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Certificate Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 rounded-full">
            <Award className="w-6 h-6 text-gold" />
            <span className="text-foreground font-medium">
              All courses include industry-recognized certification
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
