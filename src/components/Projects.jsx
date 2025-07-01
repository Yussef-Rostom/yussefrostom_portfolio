import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Animated Dancing Squirrel",
      description: "Designed a 2D skeletal animation system achieving 60 FPS performance through optimized shader use",
      technologies: ["C#", "OpenGL", "Shader Programming"],
      performance: "60 FPS",
      github: "https://github.com/Yussef-Rostom/DrawingBoundok"
    },
    {
      title: "To-Do Management System",
      description: "Built a full-stack web app with user authentication, serving 100+ monthly active users",
      technologies: ["Django", "Python", "Web Development"],
      users: "100+ MAU",
      github: "https://github.com/Yussef-Rostom/ToDoManagementSystem"
    },
    {
      title: "Student GPA Predictor",
      description: "Developed a machine learning model with 90% accuracy, leveraging Python and Scikit-learn",
      technologies: ["Python", "Machine Learning", "Scikit-learn"],
      accuracy: "90%",
      github: "https://colab.research.google.com/drive/10-zg_LNQZU3s4VcB73rebYzKA0He34d8?usp=sharing"
    },
    {
      title: "Queuing Simulation System",
      description: "Improved system efficiency by 30% through optimized queue management algorithms",
      technologies: ["C#", "OOP", "Algorithm Optimization"],
      improvement: "30% efficiency gain",
      github: "https://github.com/Yussef-Rostom/SimulationProject"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#232946]/20 via-[#3e63dd]/10 to-white/5 blur-2xl" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a key={project.title} href={project.github} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-400/10 text-blue-200 border-blue-400/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {(project.performance || project.users || project.accuracy || project.improvement) && (
                    <div className="mb-4">
                      <Badge className="bg-purple-400/10 text-purple-200 border-purple-400/20">
                        {project.performance || project.users || project.accuracy || project.improvement}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;