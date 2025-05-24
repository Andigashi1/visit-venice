import Image from "next/image"
import herobg from "@/public/herobg.jpg";
import { MoveDown } from "lucide-react";
const Header = () => {
  return (
    <header className="sections">
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
  )
}

export default Header