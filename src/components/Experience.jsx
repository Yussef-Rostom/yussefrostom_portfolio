import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Orange Digital Center Egypt & Digital HUB",
      location: "Cairo",
      period: "2024",
      certification: "https://drive.google.com/file/d/1rSIrzrX5ikzHYkOUIPOXpzVelyWMZ6O3/view?usp=sharing",
      achievements: [
        "Developed customized software solutions in collaboration with a team of 5 engineers and designers, improving project delivery time by 20%",
        "Resolved 15+ critical bugs through systematic debugging, enhancing software stability and user satisfaction",
        "Applied best practices in software design, reducing code redundancy by 25% and improving maintainability"
      ]
    },
    {
      title: "Machine Learning Student",
      company: "National Telecommunication Institute (NTI)",
      location: "Minia",
      period: "2024 Sep - 2024 Nov",
      certification: "https://drive.google.com/file/d/14nEmn6MzZi-UNuB7ndQks8aG1EPj7hTK/view?usp=drive_link",
      achievements: [
        "Trained in ML model development, achieving 90% accuracy in a student GPA prediction project",
        "Implemented real-world ML solutions, optimizing data preprocessing pipelines to reduce training time by 30%"
      ]
    },
    {
      title: "Coding Instructor & Head of Training",
      company: "ICPC Minia University",
      location: "Minia",
      period: "2022 Sep - present",
      certification: "https://drive.google.com/file/d/1MGBW4VOzf_7hzLZ8X9b7J3Bi-Zyt9icn/view?usp=sharing",
      achievements: [
        "Leading volunteer community to strengthen competitive programming skills of Minia University students",
        "Training students to participate in global competitions such as ICPC and ACPC",
        "Developed training materials and curriculum for competitive programming"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#3e63dd]/10 via-white/5 to-[#232946]/20 blur-2xl" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <a
              key={exp.title}
              href={exp.certification}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 animate-fade-in cursor-pointer" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                  <div className="text-blue-200 font-semibold text-lg">{exp.company}</div>
                  <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-200 flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;