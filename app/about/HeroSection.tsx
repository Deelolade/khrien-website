import Image from "next/image";
import heroImage from '@/public/about-bg.jpeg'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden max-w-360 mx-auto my-6 mt-[12vh] md:mt-[14vh] shadow-sm rounded-3xl h-[40vh] md:h-[60vh] flex items-center justify-center">
      <Image
        src={heroImage}
        alt="About Khrien Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-white text-4xl md:text-7xl font-black uppercase italic">About Khrien</h1>
      </div>
    </section>
  );
};
export default HeroSection;
