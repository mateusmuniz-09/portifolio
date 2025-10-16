import {
  Code2,
  Database,
  Globe,
  GitBranch,
  Layers,
  Terminal,
} from "lucide-react";

const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      technologies: [
        { name: "React", level: "Intermediário" },
        { name: "JavaScript", level: "Intermediário" },
        { name: "HTML5", level: "Avançado" },
        { name: "CSS3", level: "Avançado" },
        { name: "Tailwind CSS", level: "Intermediário" },
      ],
    },
    {
      category: "Backend",
      icon: <Terminal className="w-6 h-6" />,
      technologies: [
        { name: "Node.js", level: "Básico" },
        { name: "Express", level: "Básico" },
        { name: "API REST", level: "Básico" },
      ],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        { name: "SupaBase", level: "Básico" },
        { name: "FireBase", level: "Básico" },
      ],
    },
    {
      category: "Ferramentas",
      icon: <GitBranch className="w-6 h-6" />,
      technologies: [
        { name: "Git", level: "Intermediário" },
        { name: "GitHub", level: "Intermediário" },
        { name: "VS Code", level: "Avançado" },
        { name: "Vite", level: "Intermediário" },
      ],
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Avançado":
        return "avancado";
      case "Intermediário":
        return "intermediario";
      case "Básico":
        return "iniciante";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="scroll-mt-nav py-8 mt-15 fade-down">
      <div className="container mx-auto p-4">
        <div className="text-center mb-16">
          <h1 className="mb-8 md:text-5xl text-3xl flex gap-2 justify-center items-center">
            <span>Minhas</span>
            <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 bg-clip-text text-transparent text-nowrap font-bold">
              Especialidades
            </span>
          </h1>
          <p className="text-md text-[#98a6b3]  max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para criar soluções web
            modernas e eficientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-[#1a1d23] rounded-lg p-6 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-cyan-500">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <div className="space-y-3">
                {skill.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex justify-between items-center"
                  >
                    <span className=" font-medium">{tech.name}</span>
                    <span className={`text-xs ${getLevelColor(tech.level)}`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Vite",
          ].map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
