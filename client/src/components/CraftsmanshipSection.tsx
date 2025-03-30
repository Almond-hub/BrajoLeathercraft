import { CRAFTSMANSHIP_STEPS } from "@/lib/constants"; 
import { SectionFadeIn } from "./SectionFadeIn";
import { Check, Scissors, Search, Sparkles, HandMetal } from "lucide-react";

export function CraftsmanshipSection() {
  // Map for icons based on step icon name
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "search":
        return <Search className="h-6 w-6" />;
      case "scissors":
        return <Scissors className="h-6 w-6" />;
      case "hand":
        return <HandMetal className="h-6 w-6" />;
      case "sparkles":
        return <Sparkles className="h-6 w-6" />;
      default:
        return <Check className="h-6 w-6" />;
    }
  };

  return (
    <section id="craftsmanship" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionFadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Our Craftsmanship
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-gray-600">
                Each Brajo piece embodies centuries of Moroccan artisanal tradition
                combined with contemporary innovation
              </p>
            </div>
          </SectionFadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <SectionFadeIn direction="left">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[#8D6E63] bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[#3E2723] font-serif">
                  <p className="bg-white bg-opacity-70 p-4 rounded">
                    Craftsmanship Image
                  </p>
                </div>
              </div>
            </SectionFadeIn>

            <SectionFadeIn direction="right">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-[#5D4037]">
                The Art of Creation
              </h3>
              <p className="mb-6 text-gray-700">
                Our process begins with the careful selection of the finest leathers,
                sourced from renowned tanneries that practice sustainable and ethical
                methods. Each hide is meticulously inspected for quality and character
                before being approved for use.
              </p>
              <p className="mb-8 text-gray-700">
                The leather is then cut, shaped, and treated by hand using techniques
                that have been perfected over generations. Our master craftsmen apply
                traditional Moroccan methods passed down through the centuries, ensuring
                that each bracelet not only meets but exceeds the expectations of our
                discerning clients.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                  <span>Hand-selected leather</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                  <span>Traditional techniques</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                  <span>Meticulous stitching</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-[#D4AF37] mr-2" />
                  <span>Custom sizing</span>
                </div>
              </div>
            </SectionFadeIn>
          </div>

          {/* Process Steps */}
          <SectionFadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {CRAFTSMANSHIP_STEPS.map((step) => (
                <div key={step.id} className="text-center">
                  <div className="w-20 h-20 bg-[#5D4037] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    {getStepIcon(step.icon)}
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-4">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </SectionFadeIn>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#5D4037] bg-opacity-5 rounded-full"></div>
      <div className="absolute -left-24 -top-24 w-64 h-64 bg-[#D4AF37] bg-opacity-5 rounded-full"></div>
    </section>
  );
}
