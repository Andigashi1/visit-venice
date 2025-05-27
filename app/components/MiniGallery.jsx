import Image from "next/image";
import chiesa from "@/public/20250508_205423.jpg";
import palazzo from "@/public/20250508_204526.jpg";
import boh from "@/public/20240203_173305.jpg";
import moon from "@/public/20250508_203814.jpg";

const MiniGallery = () => {
  return (
    <div className="sections">
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase">Mini gallery</h1>
        <p className="text-neutral-500">
          Scenes that capture the soul of Venice.
        </p>
      </div>
      <div className="flex gap-4 [&>*]:rounded-2xl md:[&>*]:hover:scale-110 [&>*]:transition duration-200 [&>*]:hover:shadow-3xl
      max-lg:overflow-x-scroll">
        <Image
          src={chiesa}
          width={320}
          height={200}
          alt="photo of a church"
        ></Image>
        <Image
          src={palazzo}
          width={320}
          height={200}
          alt="photo of a church"
        ></Image>
        <Image
          src={boh}
          width={320}
          height={200}
          alt="photo of a church"
        ></Image>
        <Image
          src={moon}
          width={320}
          height={200}
          alt="photo of a church"
        ></Image>
      </div>
      <p className="text-neutral-500">Enjoy the full gallery here.</p>
    </div>
  );
};

export default MiniGallery;
