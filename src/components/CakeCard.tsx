interface CakeCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
}

const CakeCard = ({ name, description, image, category }: CakeCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-rose text-primary-foreground text-xs font-medium rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-rose transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Buy Now Link */}
        <a
          href={`https://wa.me/919373284417?text=${encodeURIComponent(`Hi, I am interested in ordering the ${name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-rose text-white text-sm font-medium rounded-lg hover:bg-rose-dark transition-colors"
        >
          <span>Buy Now</span>
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CakeCard;
