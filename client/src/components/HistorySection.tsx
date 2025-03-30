import { HISTORY_TIMELINE } from "@/lib/constants";
import { SectionFadeIn } from "./SectionFadeIn";

export function HistorySection() {
  return (
    <section id="history" className="py-24 bg-[#3E2723] text-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionFadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
              <p className="mt-6 max-w-2xl mx-auto text-gray-300">
                Over two decades of dedication to craftsmanship and excellence
              </p>
            </div>
          </SectionFadeIn>

          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden md:block h-full w-[2px] bg-[#D4AF37] absolute left-1/2 transform -translate-x-1/2 top-0 -z-10"></div>

            {/* Timeline Events */}
            <div className="space-y-24">
              {HISTORY_TIMELINE.map((event, index) => (
                <SectionFadeIn key={event.id} threshold={0.15}>
                  <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 !== 0 ? 'md:rtl' : ''}`}>
                    <div className={`${index % 2 === 0 ? 'md:text-right' : ''} mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ltr`}>
                      <div className={`hidden md:block absolute ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} w-5 h-5 rounded-full bg-[#D4AF37] transform ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'} mt-2`}></div>
                      <h3 className="font-serif text-2xl font-bold text-[#D4AF37] mb-4">
                        {event.year}
                      </h3>
                      <h4 className="text-xl mb-4">{event.title}</h4>
                      <p className="text-gray-300">
                        {event.description}
                      </p>
                    </div>
                    <div className={`${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}></div>
                  </div>
                </SectionFadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
