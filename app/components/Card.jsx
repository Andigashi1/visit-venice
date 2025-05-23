const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="relative w-full rounded-xl overflow-hidden px-6 py-12">
        {/* Background image with gradient fade */}
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/92" />
        </div>
  
        {/* Content */}
        <div className="relative z-10 text-black space-y-3">
          <h1 className="text-2xl font-bold text-center uppercase">{title}</h1>
          <p className="text-center">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  