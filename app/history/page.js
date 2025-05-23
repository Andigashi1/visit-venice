import Image from "next/image";
import map from "@/public/map.png"

const History = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-screen max-w-5xl mx-auto my-32">
      <h1 className="uppercase font-bold text-4xl mb-5 text-deep">
        Venice through the ages
      </h1>
      <Image src={map} alt="medieval map of venice"></Image>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold uppercase">
          The Origins of a Floating City
        </h2>
        <p>
          Venice began not with a grand plan, but as a desperate solution. In
          the 5th and 6th centuries, waves of barbarian invasions drove people
          from the mainland to seek safety in the marshy islands of the Venetian
          Lagoon. Life was harsh and uncertain, but these settlers built wooden
          structures on stilts, slowly laying the foundation for what would
          become one of the most extraordinary cities in the world.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold uppercase">
          Rise of the republic
        </h2>
        <p>
          By the 9th century, Venice was gaining power and influence. Thanks to
          its strategic location between East and West, it became a key player
          in international trade. In 697 AD, Venice elected its first Doge — the
          ruler of the newly forming Republic. Over the centuries, the Republic
          of Venice, or La Serenissima, evolved into one of the most successful
          and stable governments in European history. <br />
          <br />
          Venice&apos;s ships dominated the Mediterranean. Its merchants brought
          back silk, spices, and exotic goods from Constantinople and beyond,
          making the city immensely wealthy. The Venetian Arsenal, one of the
          largest industrial complexes of the Middle Ages, could build a ship a
          day — an astonishing feat at the time.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl uppercase font-semibold">
          A Flourishing of Culture and Architecture
        </h2>
        <p>
          With wealth came art. Venice became a beacon of the Renaissance,
          nurturing talents like Titian, Tintoretto, Bellini, and Veronese. The
          city’s architecture blended Byzantine, Gothic, and Renaissance styles
          into a unique and elegant harmony. The iconic St. Mark’s Basilica with
          its golden mosaics, the majestic Doge’s Palace, and the flowing curves
          of the Rialto Bridge all stand as lasting testaments to Venetian
          glory.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold uppercase">
          Decline and reinvention
        </h2>
        <p>
          Venice’s golden age lasted until the 17th century, when shifting trade
          routes, wars, and the rise of powerful nation-states led to its slow
          decline. In 1797, Napoleon conquered the city, ending over a millennium
          of independence. But Venice never truly faded. In the centuries that
          followed, it reinvented itself — first as a romantic destination for
          poets and aristocrats, and now as a global cultural treasure. Today, it
          is a UNESCO World Heritage Site visited by millions, admired for its
          history, beauty, and resistance to time.
        </p>
      </div>

    </div>
  );
};

export default History;
