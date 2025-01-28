import Image from "next/image";
import HeroImage from "@/public/heroImg.jpg";
function HeroBanner() {
  return (
    <div className="relative w-full h-[75vh]  mt-2">
      <Image
        src={HeroImage}
        alt="Hero image"
        fill
        className="object-cover rounded-lg"
        priority
      />
    </div>
  );
}

export default HeroBanner;
