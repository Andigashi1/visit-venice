import Image from "next/image";
import herobg from "@/public/herobg.jpg";
import chiesa from "@/public/20250508_205423.jpg"
import palazzo from "@/public/20250508_204526.jpg"
import boh from "@/public/20240203_173305.jpg"
import moon from "@/public/20250508_203814.jpg"
import { MoveDown } from "lucide-react";

const Home = () => {
  return (
    <div>

      {/* section 1 */}
      <header className="h-screen">
        <Image src={herobg} 
        alt="Background image of venice"
        className="h-full absolute -z-10"></Image>
        <div className="top-52 left-1/2 -translate-x-1/2 absolute text-center bg-black/25 rounded-xl p-2 shadow-2xl">
        <h1 className="!text-6xl !text-white">Visit Venice</h1>
        <p className="!text-white text-lg">A historic city found in the middle of a lagoon</p>
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 space-y-4 text-center">
        <p className=" !text-white font-bold">See more</p>
        <MoveDown height={40} width={50} className="animate-bounce text-white mx-3"/>
        </div>
      </header>

      {/* section 2 */}
      <div className="h-screen flex flex-col justify-center items-center gap-8">
        <h1>Venice at a glance</h1>
        <div className="flex gap-2">
          <div className="bg-primary p-4 rounded-md hover:scale-105 transition">
            <h2 className="text-lg">118 islands connected by 400+ bridges</h2>
            <p className="text-sm">Linking you with every part of the city</p>
          </div>
          <div className="bg-primary p-4 rounded-md">
            <h2 className="text-lg">No cars</h2>
            <p className="text-sm">Walk around the city or travel by boat</p>
          </div>
          <div className="bg-primary p-4 rounded-md">
            <h2 className="text-lg">1000+ years of history</h2>
            <p className="text-sm">And a UNESCO site recognised for global heritage</p>
          </div>
          <div className="bg-primary p-4 rounded-md">
            <h2 className="text-lg">The Venice Carnival</h2>
            <p className="text-sm">A famous cultural tradition held annually</p>
          </div>
        </div>
        <p className="text-gray-500">And much much more...</p>
      </div>

      {/* section 3 */}
      <div className="h-screen flex flex-col justify-center items-center gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Mini gallery</h1>
          <p className="text-neutral-500">Scenes that capture the soul of Venice.</p>
        </div>
        <div className="flex gap-4 [&>*]:rounded-2xl [&>*]:hover:scale-110 [&>*]:transition duration-200 [&>*]:hover:shadow-3xl">
          <Image src={chiesa} width={320} height={200} alt="photo of a church"></Image>
          <Image src={palazzo} width={320} height={200} alt="photo of a church"></Image>
          <Image src={boh} width={320} height={200} alt="photo of a church"></Image>
          <Image src={moon} width={320} height={200} alt="photo of a church"></Image>
        </div>
        <p className="text-neutral-500">Enjoy the full gallery here.</p>
      </div>

      {/* section 4 */}
      <div className="h-screen flex flex-col justify-center items-center gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Ready to explore more?</h1>
          <p>Take a closer look at what makes it so unique</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
