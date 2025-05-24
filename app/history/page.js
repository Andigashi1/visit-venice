import Image from "next/image";
import map from "@/public/map.png";

const History = () => {
  return (
    <div className="max-w-5xl mx-auto my-32 px-4">
      <h1 className="uppercase font-bold text-4xl text-center text-deep mb-20">
        Venice through the ages
      </h1>

      <Image src={map} alt="medieval map of venice" className="rounded-lg mb-12" />

      <div className="relative border-l-4 border-primary pl-8 space-y-20">
        {/* ORIGINS */}
        <div className="relative">
        <span className="absolute -left-6 top-2 w-4 h-4 bg-primary rounded-full" />
          <h2 className="text-xl font-semibold uppercase mb-2">5th–6th Century – Origins of a Floating City</h2>
          <p className="text-gray-700">
            Venice began not with a grand plan, but as a desperate solution. In the 5th and 6th centuries, waves of barbarian invasions drove people from the mainland to seek safety in the marshy islands of the Venetian Lagoon. Life was harsh and uncertain, but these settlers built wooden structures on stilts, slowly laying the foundation for what would become one of the most extraordinary cities in the world.
          </p>
        </div>

        {/* RISE */}
        <div className="relative">
        <span className="absolute -left-6 top-2 w-4 h-4 bg-primary rounded-full" />
          <h2 className="text-xl font-semibold uppercase mb-2">697 AD – Rise of the Republic</h2>
          <p className="text-gray-700">
            By the 9th century, Venice was gaining power and influence. Thanks to its strategic location between East and West, it became a key player in international trade. In 697 AD, Venice elected its first Doge — the ruler of the newly forming Republic.
            <br /><br />
            Venice's ships dominated the Mediterranean. Its merchants brought back silk, spices, and exotic goods from Constantinople and beyond, making the city immensely wealthy. The Venetian Arsenal could build a ship a day — an astonishing feat at the time.
          </p>
        </div>

        {/* CULTURE */}
        <div className="relative">
        <span className="absolute -left-6 top-2 w-4 h-4 bg-primary rounded-full" />
          <h2 className="text-xl font-semibold uppercase mb-2">Renaissance – Flourishing of Culture</h2>
          <p className="text-gray-700">
            With wealth came art. Venice became a beacon of the Renaissance, nurturing talents like Titian, Tintoretto, Bellini, and Veronese. The city's architecture blended Byzantine, Gothic, and Renaissance styles into a unique and elegant harmony.
            <br /><br />
            The iconic St. Mark&apos;s Basilica with its golden mosaics, the majestic Doge&apos;s Palace, and the Rialto Bridge all stand as lasting testaments to Venetian glory.
          </p>
        </div>

        {/* DECLINE */}
        <div className="relative">
          <span className="absolute -left-6 top-2 w-4 h-4 bg-primary rounded-full" />
          <h2 className="text-xl font-semibold uppercase mb-2">1797 – Decline and Reinvention</h2>
          <p className="text-gray-700">
            Venice’s golden age lasted until the 17th century, when shifting trade routes, wars, and the rise of powerful nation-states led to its slow decline. In 1797, Napoleon conquered the city, ending over a millennium of independence.
            <br /><br />
            But Venice never truly faded. In the centuries that followed, it reinvented itself — first as a romantic destination for poets and aristocrats, and now as a global cultural treasure. Today, it is a UNESCO World Heritage Site visited by millions, admired for its history, beauty, and resistance to time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
