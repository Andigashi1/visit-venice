import Image from "next/image";
import herobg from "@/public/herobg.jpg";
import { MoveDown } from "lucide-react";
const Header = () => {
  return (
    <header className="sections">
      <Image
        src={herobg}
        alt="Background image of venice"
        className="w-full h-full object-cover absolute -z-10"
        fill
        priority
      ></Image>
      <div className="top-52 w-full left-1/2 -translate-x-1/2 absolute text-center rounded-xl p-2 
      [&>*]:!text-white [&>*]:text-shadow-black [&>*]:text-shadow-2xs">
        <h1 className="!text-5xl lg:!text-6xl">Visit Venice</h1>
        <p className="">
          A historic city found in the middle of a lagoon
        </p>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 space-y-4 text-center">
        <p className=" !text-white font-bold">See more</p>
        <MoveDown
          height={40}
          width={50}
          className="animate-bounce text-white mx-3"
        />
      </div>
    </header>
  );
};

export default Header;
