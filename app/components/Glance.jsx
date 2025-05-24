import { Landmark, Sailboat, History, VenetianMask } from "lucide-react";

const glance = [
  {
    title: "118 islands & 400+ bridges",
    description: "Linking you with every part of the city.",
    icon: <Landmark />,
  },
  {
    title: "No cars, just canals",
    description: "Walk around the city or travel by boat.",
    icon: <Sailboat />,
  },
  {
    title: "1000+ years of history",
    description: "A UNESCO World Heritage site.",
    icon: <History />,
  },
  {
    title: "Venice Carnival",
    description: "A famous cultural tradition held annually",
    icon: <VenetianMask />,
  },
];

const Glance = () => {
  return (
    <div className="sections mx-4">
      <h1>Venice at a glance</h1>
      <div className="flex gap-2">
        {glance.map((card, i) => (
          <div key={i} className="px-4 py-16 bg-primary rounded-md">
            {card.icon}
            <h2 className="text-xl">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500">And much much more...</p>
    </div>
  );
};

export default Glance;
