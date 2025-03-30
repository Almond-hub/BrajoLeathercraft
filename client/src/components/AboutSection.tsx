import { TEAM } from "@/lib/constants";
import { SectionFadeIn } from "./SectionFadeIn";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionFadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                The Brajo Story
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>
          </SectionFadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionFadeIn direction="left">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[#5D4037] bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[#3E2723] font-serif">
                  <p className="bg-white bg-opacity-70 p-4 rounded">
                    Company Image Placeholder
                  </p>
                </div>
              </div>
            </SectionFadeIn>

            <SectionFadeIn direction="right">
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-[#5D4037]">
                A Legacy of Excellence
              </h3>
              <p className="mb-6 text-gray-700">
                Founded over two decades ago in Morocco by master craftsman
                Abdelah, Brajo has established itself as a premier creator of
                luxury leather watch bracelets. Our journey began in a small
                workshop in the ancient city of Fez, where traditional
                techniques were passed down through generations.
              </p>
              <p className="mb-8 text-gray-700">
                Today, under the leadership of Abdelah's sons, Said and
                Mustapha, we continue to honor our heritage while embracing
                innovation. Each Brajo creation reflects our commitment to
                quality, attention to detail, and respect for Morocco's rich
                leather-working tradition.
              </p>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-[#D4AF37]"></div>
                <p className="ml-4 text-[#5D4037] italic font-serif">
                  "The art of time, wrapped in tradition."
                </p>
              </div>
            </SectionFadeIn>
          </div>

          {/* Founders Section */}
          <div className="mt-32">
            <SectionFadeIn>
              <h3 className="font-serif text-3xl font-bold text-center mb-16">
                Our Leadership
              </h3>
            </SectionFadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {TEAM.map((member, index) => (
                <SectionFadeIn key={member.id} delay={index * 200}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:translate-y-[-5px] hover:shadow-xl duration-300">
                    <div className={`h-56 ${index === 0 ? 'bg-[#5D4037]' : 'bg-[#8D6E63]'} relative`}>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-serif">
                        <p>{member.name} Image</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="font-serif text-xl font-bold mb-2">
                        {member.name}
                      </h4>
                      <p className="text-[#D4AF37] font-medium mb-4 text-sm">
                        {member.role}
                      </p>
                      <p className="text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </SectionFadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%235d4037%27%20fill-opacity%3D%270.08%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50 -z-10"></div>
    </section>
  );
}
