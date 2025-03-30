import { useState } from "react";
import { SectionFadeIn } from "./SectionFadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Send } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields.",
      });
      return;
    }

    // Here you would normally send the form data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you! We'll respond to your inquiry shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#5D4037] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <SectionFadeIn>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>

              <p className="mb-8">
                Whether you're interested in our collections, have questions about
                our craftsmanship, or wish to discuss a bespoke creation, we'd love
                to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Visit Our Workshop</h4>
                    <p className="text-gray-300">
                      Quartier Artisanal, 23 Rue des Artisans<br />
                      Fès Médina, 30000<br />
                      Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Call Us</h4>
                    <p className="text-gray-300">
                      +212 535 123 456<br />
                      Monday - Friday: 9am - 6pm (GMT+1)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#D4AF37] bg-opacity-20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Email Us</h4>
                    <p className="text-gray-300">
                      info@brajo-leather.com<br />
                      custom@brajo-leather.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-serif mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                  >
                    <Send className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </SectionFadeIn>

            <SectionFadeIn>
              <div className="bg-white bg-opacity-10 p-8 rounded-lg">
                <h3 className="font-serif text-2xl font-bold mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-400 border-opacity-20 rounded-md focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium"
                    >
                      Your Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-400 border-opacity-20 rounded-md focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium"
                    >
                      Subject
                    </label>
                    <Select 
                      onValueChange={handleSelectChange}
                      value={formData.subject}
                    >
                      <SelectTrigger className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-400 border-opacity-20 rounded-md focus:outline-none focus:border-[#D4AF37]">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="custom">Custom Order</SelectItem>
                        <SelectItem value="wholesale">Wholesale Opportunities</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-400 border-opacity-20 rounded-md focus:outline-none focus:border-[#D4AF37]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#D4AF37] hover:bg-[#F5D76E] text-[#3E2723] font-bold py-3 px-8 rounded-md transition duration-300 font-sans text-sm tracking-wide uppercase"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </SectionFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
