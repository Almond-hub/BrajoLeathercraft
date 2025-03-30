import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#3E2723] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-[#5D4037] rounded-full flex items-center justify-center text-white font-serif text-lg font-bold">
                  B
                </div>
                <span className="ml-3 text-xl font-serif font-semibold">
                  Brajo
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Crafting exquisite leather watch bracelets since 2000, blending
                Moroccan heritage with contemporary design.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#history"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Our History
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#craftsmanship"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Craftsmanship
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Collections</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Classic Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Modern Fusion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Heritage Series
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Executive Elite
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#D4AF37] transition-colors">
                    Bespoke Creations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to receive updates on new collections and exclusive
                offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 bg-white bg-opacity-10 border border-gray-500 border-opacity-20 rounded-l-md focus:outline-none focus:border-[#D4AF37] flex-grow text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#D4AF37] hover:bg-[#F5D76E] text-[#3E2723] px-4 py-2 rounded-r-md transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Brajo. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm"
              >
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
