import { ScrollIndicator } from "./ScrollIndicator";
import { Canvas3D } from "./Canvas3D";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <Canvas3D />
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[#5D4037] mb-4 leading-tight">
            Timeless Elegance<br />
            <span className="text-[#D4AF37]">Handcrafted Legacy</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Brajo creates exquisite leather watch bracelets, combining Moroccan
            craftsmanship with contemporary design for over 20 years.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-[#5D4037] hover:bg-[#3E2723] text-white font-medium py-3 px-8 text-sm tracking-wide"
            >
              <a href="#products">EXPLORE COLLECTIONS</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#5D4037] text-[#5D4037] hover:bg-[#5D4037] hover:text-white font-medium py-3 px-8 text-sm tracking-wide"
            >
              <a href="#craftsmanship">OUR CRAFTSMANSHIP</a>
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator targetId="about" />

      <div className="absolute inset-0 bg-white bg-opacity-70 z-0"></div>
    </section>
  );
}
