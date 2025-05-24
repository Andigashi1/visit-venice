import Image from "next/image";

const Card = ({ title, description, imageUrl }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col md:flex-row group">
      <div className="relative w-full md:w-1/2 h-64 md:h-72">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 md:w-1/2 flex flex-col">
        <h2 className="text-2xl font-semibold text-deep mb-2">{title}</h2>
        <p className="text-gray-600 line-clamp-4">{description}</p>
      </div>
    </div>
    );
  };
  
  export default Card;
  