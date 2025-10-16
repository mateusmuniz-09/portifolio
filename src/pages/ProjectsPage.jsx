import { ExternalLink, Github } from "lucide-react";
import BoraCortar from "../assets/img/img-projects/BoraCortar.png";
import SaasCardAppio from "../assets/img/img-projects/SaasCardAppio.png";
import Landinpage from "../assets/img/img-projects/Landinpage.png";
import Ecomerce from "../assets/img/img-projects/E-Comerce.png";
import CardapioSopa from "../assets/img/img-projects/CardapioDigitalSopas.png";
import PrevisaoDoTempo from "../assets/img/img-projects/PrevisaoDoTempo.png";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Bora Cortar",
      description:
        "Sistema web para agendamento de cortes de cabelo e barba, permitindo selecionar horários, serviços e confirmar online de forma prática.",
      image: BoraCortar,
      technologies: ["React", "JavaScript", "SupaBase", "Tailwind CSS"],
      live: "https://agendacorte.vercel.app/",
    },
    {
      title: "Saas CardAppio",
      description:
        "Plataforma SaaS para pizzarias, com gerenciamento de produtos e cardápio digital para clientes, facilitando pedidos e controle de vendas.",
      image: SaasCardAppio,
      technologies: ["React", "JavaScript", "Tailwind CSS", "FireBase"],

      live: "https://my-cardappio.vercel.app/",
    },
    {
      title: "Landing Page Pessoal",
      description:
        "Página de apresentação de Personal Trainer, destacando serviços, planos e informações de contato.",
      image: Landinpage,
      technologies: ["HTML", "JavaScript", "CSS"],

      live: "https://melhoresuasaude.netlify.app/",
    },
    {
      title: "E-Comerce de moda",
      description:
        "Loja online de moda feminina, com produtos, carrinho e checkout integrados.",
      image: Ecomerce,
      technologies: ["HTML", "CSS", "JavaScript"],

      live: "https://eleganzamodas.netlify.app/",
    },
    {
      title: "Cardápio digital interativo",
      description:
        "Cardápio digital para sopas e caldos, permitindo que clientes vejam opções, ingredientes e façam pedidos de forma prática.",
      image: CardapioSopa,
      technologies: ["React", "JavaScript", "Tailwind CSS"],

      live: "https://demo-cardapio.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "Aplicativo de previsão do tempo com geolocalização, busca por cidade e interface intuitiva e elegante.",
      image: PrevisaoDoTempo,
      technologies: [
        "React",
        "CSS",
        "Tailwind CSS",
        "Geolocation",
        "API REST ",
      ],

      live: "https://previdotemp.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-nav py-8 mt-15 fade-rigth">
      <div className="container mx-auto p-4">
        <div className="text-center mb-10">
          <h1 className="mb-8 md:text-5xl text-3xl flex gap-2 justify-center items-center">
            <span>Meus</span>
            <span className="bg-gradient-to-r p-2 from-cyan-700 via-cyan-600 to-cyan-500 bg-clip-text text-transparent text-nowrap font-bold">
              Projetos
            </span>
          </h1>
          <p className="text-md text-[#98a6b3] max-w-2xl mx-auto">
            Alguns projetos que desenvolvi para demonstrar minhas habilidades e
            paixão por programação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-[#1a1d23] rounded-lg overflow-hidden shadow-lg shadow-[#30353d] hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#98a6b3] mb-4 text-xs">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#282c33] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    size="sm"
                    className="flex-1 bg-cyan-500 p-1 text-[#1a1d23] rounded-[20px] hover:bg-cyan-600 transition-all duration-300"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
