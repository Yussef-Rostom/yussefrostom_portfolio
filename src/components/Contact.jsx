import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Trophy } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-white/5 via-[#3e63dd]/10 to-[#232946]/20 blur-2xl" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto bg-white/5 rounded-xl p-6 backdrop-blur-md shadow-lg">
          I'm always interested in discussing new opportunities, challenging projects,
          or just connecting with fellow developers.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a href="mailto:yussef.rostom@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-200 text-sm">yussef.rostom@gmail.com</p>
              </CardContent>
            </Card>
          </a>
          <a href="https://wa.me/201017734990" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-200 text-sm">+201017734990</p>
              </CardContent>
            </Card>
          </a>
          <a href="https://www.google.com/maps/place/Giza,+Egypt" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <p className="text-white font-semibold">Location</p>
                <p className="text-gray-200 text-sm">Giza, Egypt</p>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="https://github.com/Yussef-Rostom" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-700/80 text-white hover:bg-blue-600/90 shadow-lg">
              <Github className="w-5 h-5 mr-2" />
              GitHub Profile
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/yussefrostom" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-blue-700/80 text-white hover:bg-blue-600/90 shadow-lg">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </a>
          <a href="https://codeforces.com/profile/YussefRostom" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-purple-700/80 text-white hover:bg-purple-600/90 shadow-lg">
              <Trophy className="w-5 h-5 mr-2" />
              Codeforces
            </Button>
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2024 YussefRostom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;