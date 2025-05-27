import Image from "next/image";

const images = [
  {
    id: 1,
    alt: "image 1",
    imageUrl: "/20250508_203814.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 2,
    alt: "image 2",
    imageUrl: "/20240802_133409.jpg",
    orientation: "landscape",
    width: 800,
    height: 600,
  },
  {
    id: 3,
    alt: "image 1",
    imageUrl: "/20240203_173305.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 4,
    alt: "image 1",
    imageUrl: "/20240203_182154.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 5,
    alt: "image 2",
    imageUrl: "/20240203_174707.jpg",
    orientation: "landscape",
    width: 800,
    height: 600,
  },
  {
    id: 6,
    alt: "image 1",
    imageUrl: "/20240214_111313.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 7,
    alt: "image 1",
    imageUrl: "/20240218_084523.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 8,
    alt: "image 1",
    imageUrl: "/20240225_080102.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 9,
    alt: "image 1",
    imageUrl: "/20240723_130405.jpg",
    orientation: "landscape",
    width: 600,
    height: 800,
  },
  {
    id: 10,
    alt: "image 1",
    imageUrl: "/20240312_112533.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 11,
    alt: "image 1",
    imageUrl: "/20240323_075243.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 12,
    alt: "image 1",
    imageUrl: "/20240607_182105.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 13,
    alt: "image 1",
    imageUrl: "/20240607_195654.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 14,
    alt: "image 1",
    imageUrl: "/20240802_142402.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 15,
    alt: "image 1",
    imageUrl: "/20241102_163824.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 16,
    alt: "image 1",
    imageUrl: "/20241221_153910.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 17,
    alt: "image 1",
    imageUrl: "/20250508_203415.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 18,
    alt: "image 1",
    imageUrl: "/20250508_204526.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 19,
    alt: "image 1",
    imageUrl: "/20250508_205423.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  {
    id: 20,
    alt: "image 1",
    imageUrl: "/herobg.jpg",
    orientation: "landscape",
    width: 600,
    height: 800,
  },
  {
    id: 21,
    alt: "image 1",
    imageUrl: "/20250508_212039.jpg",
    orientation: "portrait",
    width: 600,
    height: 800,
  },
  
];
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 min-h-screen max-w-5xl mx-auto my-32 px-4">
      <div className="text-center">
        <h1>Moments from Venice</h1>
        <p>Wander through the beauty, one photo at a time.</p>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {images.map((image) => (
          <div key={image.id} className={` overflow-hidden rounded-lg shadow-md md:hover:scale-120 transition-all duration-200
          ${image.orientation === "portrait" ? 'row-span-2 aspect-[3/4]' : 'aspect-[4/3] '}`}>
            <Image
              src={image.imageUrl}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
