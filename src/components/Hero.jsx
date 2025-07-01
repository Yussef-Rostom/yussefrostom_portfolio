import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Modern animated gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-br from-[#3e63dd]/30 via-[#232946]/60 to-[#1e2746]/80 animate-pulse-slow" />
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
            Yussef Rostom
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Software Engineer
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building efficient and scalable software solutions with expertise in
            <span className="text-gray-200 font-semibold"> C, C++, Python, JS </span>
            and competitive programming
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
          <a href="https://github.com/Yussef-Rostom" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300" >
              <Github className="w-5 h-5 mr-2" />
              Yussef-Rostom
            </Button>
          </a>

          <a href="https://www.linkedin.com/in/yussefrostom/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-5 h-5 mr-2" />
              yussefrostom
            </Button>
          </a>

          <a href="mailto:yussef.rostom@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Mail className="w-5 h-5 mr-2" />
              yussef.rostom@gmail.com
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400 animate-slide-in-right">
          <div className="flex items-center gap-2">
            <a href="https://wa.me/201017734990" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-inherit" >
              <Phone className="w-4 h-4" />
              <span>+201017734990</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Giza, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;