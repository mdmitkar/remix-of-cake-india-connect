import CakeCard from "./CakeCard";

// Import all cake images
import pineappleCake from "@/assets/cakes/pineapple-cake.jpg";
import mirrorGlazeCake from "@/assets/cakes/mirror-glaze-cake.jpg";
import strawberryCake from "@/assets/cakes/strawberry-cake.jpg";
import redVelvetCake from "@/assets/cakes/red-velvet-cake.jpg";
import pullMeUpCake from "@/assets/cakes/pull-me-up-cake.jpg";
import dollCake from "@/assets/cakes/doll-cake.jpg";
import rasmalaiCake from "@/assets/cakes/rasmalai-cake.jpg";
import threadCake from "@/assets/cakes/thread-cake.jpg";
import pinataCake from "@/assets/cakes/pinata-cake.jpg";
import nonBakedCake from "@/assets/cakes/non-baked-cake.jpg";
import homemadeCake from "@/assets/cakes/homemade-cake.jpg";
import popsicles from "@/assets/cakes/popsicles.jpg";
import cupcakes from "@/assets/cakes/cupcakes.jpg";
import cakePops from "@/assets/cakes/cake-pops.jpg";
import chocolateTruffleCake from "@/assets/cakes/chocolate-truffle-cake.jpg";
import butterscotchCake from "@/assets/cakes/butterscotch-cake.jpg";
import blackForestCake from "@/assets/cakes/black-forest-cake.jpg";
import mangoCake from "@/assets/cakes/mango-cake.jpg";
import fondantCake from "@/assets/cakes/fondant-cake.jpg";
import brownieCake from "@/assets/cakes/brownie-cake.jpg";

const cakes = [
  {
    name: "Pineapple Cake",
    description: "Tropical delight with fresh pineapple chunks and smooth buttercream frosting",
    image: pineappleCake,
    category: "Classic",
  },
  {
    name: "Mirror Glaze Cake",
    description: "Stunning galaxy-inspired reflective glaze with mesmerizing color swirls",
    image: mirrorGlazeCake,
    category: "Premium",
  },
  {
    name: "Strawberry Cake",
    description: "Fresh strawberries with cream cheese frosting and berry compote",
    image: strawberryCake,
    category: "Classic",
  },
  {
    name: "Red Velvet Cake",
    description: "Rich cocoa layers with signature cream cheese frosting",
    image: redVelvetCake,
    category: "Classic",
  },
  {
    name: "Chocolate Truffle Cake",
    description: "Rich dark chocolate ganache with chocolate shavings and fudgy layers",
    image: chocolateTruffleCake,
    category: "Premium",
  },
  {
    name: "Butterscotch Cake",
    description: "Caramel drizzle with butterscotch chips and golden brown frosting",
    image: butterscotchCake,
    category: "Classic",
  },
  {
    name: "Black Forest Cake",
    description: "Classic German cake with cherries, chocolate shavings and whipped cream",
    image: blackForestCake,
    category: "Classic",
  },
  {
    name: "Mango Cake",
    description: "Fresh mango slices with tropical mango cream frosting",
    image: mangoCake,
    category: "Seasonal",
  },
  {
    name: "Pull Me Up Cake",
    description: "Interactive chocolate drip cake with dramatic reveal effect",
    image: pullMeUpCake,
    category: "Trending",
  },
  {
    name: "Doll Cake",
    description: "Princess-themed celebration cake with fondant dress design",
    image: dollCake,
    category: "Kids Special",
  },
  {
    name: "Anti Gravity Rasmalai Cake",
    description: "Fusion dessert with traditional Indian rasmalai flavors",
    image: rasmalaiCake,
    category: "Indian Fusion",
  },
  {
    name: "Thread Cake",
    description: "Artistic sugar thread decorations for an elegant finish",
    image: threadCake,
    category: "Premium",
  },
  {
    name: "Pinata Cake",
    description: "Surprise-filled cake with hidden candies inside",
    image: pinataCake,
    category: "Party Special",
  },
  {
    name: "Fondant Cake",
    description: "Smooth fondant finish with colorful decorations for any occasion",
    image: fondantCake,
    category: "Designer",
  },
  {
    name: "Brownie Cake",
    description: "Fudgy chocolate layers with walnuts and rich chocolate frosting",
    image: brownieCake,
    category: "Chocolate Lovers",
  },
  {
    name: "Non Baked Cake",
    description: "No-oven required creamy cheesecake with berry topping",
    image: nonBakedCake,
    category: "Easy",
  },
  {
    name: "Home Made Cake",
    description: "Rustic, homestyle cake with fresh cream frosting",
    image: homemadeCake,
    category: "Classic",
  },
  {
    name: "Pop Sicles",
    description: "Refreshing frozen fruit popsicles in various flavors",
    image: popsicles,
    category: "Frozen Treats",
  },
  {
    name: "Cup Cakes",
    description: "Individual portions with colorful frosting swirls",
    image: cupcakes,
    category: "Mini Delights",
  },
  {
    name: "Cake Pops",
    description: "Bite-sized cake balls with candy coating on sticks",
    image: cakePops,
    category: "Party Favorites",
  },
];

const CakeFlavors = () => {
  return (
    <section id="cakes" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-rose-light text-rose-dark rounded-full text-sm font-medium mb-4">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Flavors We <span className="text-rose">Teach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the art of creating these stunning cake varieties with our expert-led courses
          </p>
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cakes.map((cake, index) => (
            <div
              key={cake.name}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CakeCard {...cake} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeFlavors;
