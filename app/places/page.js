import Card from "../components/Card";

const places = [
  {
    title: "Classic Venice",
    description:
      "Begin your journey at the historic Rialto Bridge, one of Venice’s oldest and most iconic landmarks. Wander through the bustling markets and admire the architecture before heading to the magnificent St. Mark’s Basilica and its expansive square. Wrap up your day with a scenic cruise along the Grand Canal, taking in the elegant palazzos and the life of the city from the water.",
    imageUrl: "/20240802_133409.jpg",
  },
  {
    title: "Hidden Alleys",
    description:
      "Step away from the crowds and into the quiet charm of Venice’s hidden alleys. These narrow, winding paths reveal a different side of the city—quiet courtyards, local artisan shops, and picturesque bridges tucked between centuries-old buildings. Get pleasantly lost and discover a slower, more intimate Venice untouched by time.",
    imageUrl: "/20240218_084523.jpg"
  },
  {
    title: "Island Hopping",
    description:
      "Escape the main island and explore the vibrant personalities of Venice’s surrounding isles. Watch glassblowers at work in Murano, stroll among the colorful houses and lace-makers of Burano, and experience the peaceful ruins and ancient churches of Torcello. Each island offers a unique glimpse into Venetian culture, history, and craftsmanship.",
    imageUrl: "/map.png",
  },
  {
    title: "Romantic Sunset",
    description:
      "Experience Venice at its most enchanting with a romantic gondola ride as the sun sets over the canals. Let the soft golden light reflect off the water and the quiet lapping of waves set the mood. Afterward, enjoy a candlelit dinner by the water’s edge, surrounded by the soft glow of lanterns and the timeless charm of the city.",
    imageUrl: "/20240203_174707.jpg",
  },
];

const Places = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-screen max-w-5xl mx-auto my-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase text-deep">
          Discover Venice
        </h1>
        <p className="">From iconic sites to hidden gems</p>
      </div>

      <div className="space-y-6 w-full">
        {places.map((place, i) => (
          <Card
            key={i}
            title={place.title}
            description={place.description}
            imageUrl={place.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Places;
