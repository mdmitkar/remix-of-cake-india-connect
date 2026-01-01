import {
  GraduationCap,
  Clock,
  BookOpen,
  Award,
  Users,
  Lightbulb,
  ChefHat,
  Building2,
  Target,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Play
} from "lucide-react";
import studentCoursesVideo from "@/assets/student-courses-video.mp4";
import studentVideo2 from "@/assets/student-video-2.mp4";
import studentVideo3 from "@/assets/student-video-3.mp4";
import studentVideo4 from "@/assets/student-video-4.mp4";
import studentVideo5 from "@/assets/student-video-5.mp4";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";


const StudentCourses = () => {
  const courseModules = [
    {
      title: "Module 1: Introduction to Baking",
      icon: BookOpen,
      topics: [
        "Basics of baking science",
        "Understanding ingredients (flour, sugar, butter, leavening agents)",
        "Kitchen tools & equipment",
        "Hygiene & safety standards"
      ]
    },
    {
      title: "Module 2: Basic Cakes",
      icon: ChefHat,
      topics: [
        "Plain sponge cake",
        "Vanilla cake",
        "Chocolate cake",
        "Butter cake",
        "Eggless cake techniques"
      ]
    },
    {
      title: "Module 3: Creams & Fillings",
      icon: Star,
      topics: [
        "Whipped cream preparation",
        "Buttercream basics",
        "Chocolate ganache",
        "Simple fillings (jam, chocolate, fruit)"
      ]
    },
    {
      title: "Module 4: Cake Decoration Basics",
      icon: Lightbulb,
      topics: [
        "Cake leveling & icing",
        "Piping techniques",
        "Borders & patterns",
        "Writing on cakes",
        "Use of nozzles & piping bags"
      ]
    },
    {
      title: "Module 5: Theme & Celebration Cakes",
      icon: Award,
      topics: [
        "Birthday cake basics",
        "Cartoon / simple theme cakes",
        "Cupcakes decoration",
        "Cake toppers (basic)"
      ]
    },
    {
      title: "Module 6: Advanced (College Students)",
      icon: GraduationCap,
      topics: [
        "Fondant introduction",
        "Covering cake with fondant",
        "Simple fondant flowers & figures",
        "Photo cake basics"
      ]
    },
    {
      title: "Module 7: Baking as a Career",
      icon: Target,
      topics: [
        "Home baking business basics",
        "Costing & pricing",
        "Packaging & storage",
        "Food safety & FSSAI awareness",
        "Social media & marketing basics"
      ]
    }
  ];

  const durationOptions = [
    { name: "Short Workshop", duration: "1–3 Days", color: "mango" },
    { name: "Certificate Course", duration: "2–4 Weeks", color: "orange" },
    { name: "Advanced Course", duration: "6–8 Weeks", color: "rose" }
  ];

  const teachingMethods = [
    "Live demonstrations",
    "Hands-on practical sessions",
    "Group activities",
    "Individual cake making",
    "Q&A and doubt-solving sessions"
  ];

  const studentBenefits = [
    "Practical life skill",
    "Creativity development",
    "Career exposure",
    "Confidence building",
    "Opportunity for self-employment",
    "Portfolio creation"
  ];

  const institutionBenefits = [
    "Skill-based learning program",
    "Value-added certificate course",
    "Industry-oriented activity",
    "Enhances student engagement",
    "Supports vocational education goals"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Student Baking Courses | Popinz Cake Bakers & Academy"
        description="Join our specialized baking courses for school and college students. Learn cake making, decoration, and entrepreneurship skills. Certified courses available."
        keywords="student baking classes, baking course for beginners, cake making workshop, vocational courses for students, baking classes wardha"
        image="https://popinzbakingacademy.com/student-courses-thumb.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Student Baking & Cake Artistry Course",
          "description": "A comprehensive baking course designed for students to learn the art of cake making and decoration.",
          "provider": {
            "@type": "Organization",
            "name": "Popinz Cake Bakers & Academy",
            "sameAs": "https://popinzbakingacademy.com"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "In-person",
            "courseWorkload": "P2W"
          }
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-dark rounded-full text-sm font-medium mb-4 animate-fade-up">
            For Schools & Colleges
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-up">
            🎂 Cake & Baking <span className="text-rose">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-up">
            Student-friendly, skill-based courses designed for beginners. Build creativity, confidence, and an entrepreneurship mindset!
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up">
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20enquire%20about%20student%20courses%20for%20our%20institution" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Contact for Enrollment
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/919373284417?text=Hi%2C%20Please%20send%20the%20student%20courses%20brochure" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 mr-2" />
                Request Brochure
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              🎬 See Our <span className="text-rose">Classes in Action</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch how students learn and create amazing cakes in our hands-on baking sessions
            </p>
          </div>

          {/* Main Featured Video */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-hover bg-foreground/5">
              <video
                className="w-full aspect-video object-contain"
                controls
                preload="auto"
                playsInline
              >
                <source src={studentCoursesVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[studentVideo2, studentVideo3, studentVideo4, studentVideo5].map((video, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-shadow bg-foreground/5">
                <video
                  className="w-full aspect-video object-contain"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Objective */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              🎯 Course <span className="text-rose">Objective</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Introduce students to basic to advanced cake baking skills",
              "Build creativity, confidence, and entrepreneurship mindset",
              "Provide hands-on practical exposure",
              "Enable students to pursue home baking, internships, or small businesses"
            ].map((objective, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-card text-center hover:shadow-hover transition-shadow">
                <Target className="w-10 h-10 text-rose mx-auto mb-4" />
                <p className="text-foreground font-medium">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              👩‍🎓👨‍🎓 <span className="text-rose">Eligibility</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-mango-light/30 border-2 border-mango p-6 rounded-2xl">
                <GraduationCap className="w-10 h-10 text-mango mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">School Students</h3>
                <p className="text-muted-foreground">Class 6 onwards</p>
              </div>
              <div className="bg-orange-light/30 border-2 border-orange p-6 rounded-2xl">
                <Users className="w-10 h-10 text-orange mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">College Students</h3>
                <p className="text-muted-foreground">Any stream</p>
              </div>
              <div className="bg-rose-light border-2 border-rose p-6 rounded-2xl">
                <CheckCircle className="w-10 h-10 text-rose mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">No Experience</h3>
                <p className="text-muted-foreground">Required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duration Options */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              ⏱️ Course <span className="text-rose">Duration Options</span>
            </h2>
            <p className="text-muted-foreground">Classes can be conducted weekly or daily as per institution schedule</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {durationOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl shadow-card text-center hover:shadow-hover transition-all hover:-translate-y-2 border-2 ${option.color === "mango" ? "border-mango" :
                    option.color === "orange" ? "border-orange" : "border-rose"
                  }`}
              >
                <Clock className={`w-12 h-12 mx-auto mb-4 ${option.color === "mango" ? "text-mango" :
                    option.color === "orange" ? "text-orange" : "text-rose"
                  }`} />
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{option.name}</h3>
                <p className={`text-2xl font-bold ${option.color === "mango" ? "text-mango" :
                    option.color === "orange" ? "text-orange" : "text-rose"
                  }`}>{option.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              📘 Course <span className="text-rose">Modules</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-hover transition-shadow border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-light rounded-lg">
                    <module.icon className="w-6 h-6 text-rose" />
                  </div>
                  <h3 className="font-display font-bold text-foreground">{module.title}</h3>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                🧑‍🍳 Teaching <span className="text-rose">Methodology</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {teachingMethods.map((method, index) => (
                <div key={index} className="bg-card p-4 rounded-xl shadow-card text-center">
                  <ChefHat className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              📜 <span className="text-rose">Certification</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-mango-light/30 border-2 border-mango p-6 rounded-2xl">
                <Award className="w-12 h-12 text-mango mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">School Students</h3>
                <p className="text-muted-foreground">Participation Certificate</p>
              </div>
              <div className="bg-orange-light/30 border-2 border-orange p-6 rounded-2xl">
                <Award className="w-12 h-12 text-orange mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">College Students</h3>
                <p className="text-muted-foreground">Completion Certificate</p>
              </div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-card">
              <h4 className="font-bold text-foreground mb-4">Certificates Include:</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {["Course name", "Duration", "Institution name", "Instructor signature"].map((item, index) => (
                  <span key={index} className="px-4 py-2 bg-rose-light text-rose-dark rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Requirements */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                🏫 Infrastructure <span className="text-rose">Requirements</span>
              </h2>
              <p className="text-muted-foreground">(Basic)</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Classroom / lab space",
                "Oven (OTG or convection)",
                "Tables & electric points",
                "Basic baking tools (can be shared)",
                "Ingredients (provided by organizer or institution)"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-card">
                  <Building2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Student Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
                🌟 Benefits for <span className="text-mango">Students</span>
              </h2>
              <div className="space-y-3">
                {studentBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-mango-light/30 p-4 rounded-xl border border-mango">
                    <Star className="w-5 h-5 text-mango flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Institution Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
                🎓 Benefits for <span className="text-orange">Institutions</span>
              </h2>
              <div className="space-y-3">
                {institutionBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-orange-light/30 p-4 rounded-xl border border-orange">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-rose text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Bring Baking Classes to Your Institution?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us to schedule a demo session or discuss customized course options for your school or college.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gold" size="lg" asChild>
              <a href="tel:+919373284417">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-rose" asChild>
              <a href="https://wa.me/919373284417?text=Hi%2C%20I%20want%20to%20send%20an%20inquiry%20about%20baking%20classes%20for%20our%20institution" target="_blank" rel="noopener noreferrer">
                <Mail className="w-5 h-5 mr-2" />
                Send Inquiry
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default StudentCourses;
