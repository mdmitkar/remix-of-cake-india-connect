import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CakeFlavors from "@/components/CakeFlavors";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const bakerySchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Popinz Cake Bakers & Academy",
    "image": "https://popinzbakingacademy.com/popinz-logo.png",
    "@id": "https://popinzbakingacademy.com",
    "url": "https://popinzbakingacademy.com",
    "telephone": "+919373284417",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop Number 4, Gulmohar Building, T point, Hinganghat",
      "addressLocality": "Wardha",
      "postalCode": "442301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.5579,
      "longitude": 78.8402
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.instagram.com/fahmeeda954/"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Popinz Cake Bakers & Academy | Custom Cakes & Baking Classes"
        description="Order delicious 100% eggless custom cakes in Wardha/Hinganghat. Join professional baking classes - Basic to Advanced levels. FSSAI Registered."
        keywords="custom cakes, baking classes, eggless cakes, cake delivery wardha, baking academy, popinz cakes, cake design course"
        schema={bakerySchema}
      />
      <Header />
      <main>
        <Hero />
        <CakeFlavors />
        <About />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
