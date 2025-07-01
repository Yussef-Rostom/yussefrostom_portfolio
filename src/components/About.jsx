import { Card, CardContent } from "@/components/ui/card";
import { Code, Trophy, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-white/5 via-[#3e63dd]/10 to-[#232946]/20 blur-2xl" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-lg">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Software Development</h3>
              <p className="text-gray-300">Expert in C, C++, Python with proven experience in algorithms, data structures, and software design patterns</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Competitive Programming</h3>
              <p className="text-gray-300">ECCP Finalist with strong problem-solving ability and experience in global programming contests</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Performance Optimization</h3>
              <p className="text-gray-300">Skilled in SDLC, OOP, and software design patterns with focus on efficient and scalable solutions</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-200 leading-relaxed bg-white/5 rounded-xl p-6 backdrop-blur-md shadow-lg">
            Currently pursuing Bachelor of Computer and Information Sciences at Minia University, 
            with relevant coursework in Algorithms, Data Structures, Software Engineering, and Machine Learning. 
            I'm passionate about building efficient software solutions and have experience as both a developer 
            and coding instructor, helping strengthen the competitive programming community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;