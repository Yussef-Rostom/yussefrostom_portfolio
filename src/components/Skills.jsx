import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "C/C++", level: 95 },
    { name: "Python", level: 90 },
    { name: "Data Structures & Algorithms", level: 95 },
    { name: "Competitive Programming", level: 90 },
    { name: "Software Design Patterns", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Git & Version Control", level: 85 },
    { name: "Problem Solving", level: 95 }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#3e63dd]/10 via-white/5 to-[#232946]/20 blur-2xl" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="animate-fade-in bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                {/* <span className="text-gray-300">{skill.level}%</span> */}
              </div>
              {/* <div className="relative">
                <Progress value={skill.level} className="h-3 bg-gray-700/60" />
                <div 
                  className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-blue-400/60 to-purple-400/60 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;