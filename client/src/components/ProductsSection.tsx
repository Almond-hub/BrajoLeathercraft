import { useState } from "react";
import { PRODUCTS } from "@/lib/constants";
import { SectionFadeIn } from "./SectionFadeIn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type ProductCategory = "all" | "classic" | "modern" | "heritage" | "bespoke";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");

  const categories: { id: ProductCategory; label: string }[] = [
    { id: "all", label: "All Collections" },
    { id: "classic", label: "Classic" },
    { id: "modern", label: "Modern" },
    { id: "heritage", label: "Heritage" },
    { id: "bespoke", label: "Bespoke" },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionFadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Our Collections
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-gray-600">
                Discover our exquisite range of handcrafted leather watch bracelets,
                each piece a testament to uncompromising quality and artisanship
              </p>
            </div>
          </SectionFadeIn>

          {/* Product Categories */}
          <SectionFadeIn>
            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <div className="flex space-x-2 md:space-x-6 font-sans text-sm">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "py-2 px-6 rounded-full transition duration-300 focus:outline-none",
                      activeCategory === category.id
                        ? "bg-[#5D4037] text-white"
                        : "hover:bg-[#5D4037] hover:text-white border border-[#5D4037] text-[#5D4037]"
                    )}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </SectionFadeIn>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <SectionFadeIn key={product.id} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-400 hover:translate-y-[-10px] hover:shadow-xl">
                  <div className={`h-64 ${
                    index === 0 ? 'bg-[#5D4037]' : 
                    index === 1 ? 'bg-[#8D6E63]' : 
                    index === 2 ? 'bg-[#C35A38]' : 
                    index === 3 ? 'bg-gray-800' : 
                    index === 4 ? 'bg-[#1A6DB4]' : 'bg-amber-800'
                  } relative`}>
                    <div className="absolute inset-0 flex items-center justify-center text-white font-serif">
                      <p>Product Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-serif text-xl font-bold">{product.name}</h3>
                      <span className="text-[#D4AF37] font-sans">{product.price}</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.customizable ? (
                          <span className="text-xs text-gray-500">Customizable</span>
                        ) : (
                          <>
                            <span className="text-xs text-gray-500">Available in:</span>
                            <div className="flex mt-1 space-x-2">
                              {product.colors?.map((color, colorIndex) => (
                                <div 
                                  key={colorIndex} 
                                  className={`w-4 h-4 rounded-full ${color.color} border border-white`}
                                  title={color.name}
                                ></div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      <button className="text-[#5D4037] hover:text-[#D4AF37] transition-colors focus:outline-none">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </SectionFadeIn>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-[#5D4037] hover:bg-[#3E2723] text-white font-medium py-3 px-8 text-sm tracking-wide">
              VIEW ALL COLLECTIONS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
