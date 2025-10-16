import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import fotoPErfil from "../assets/img/perfil.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center p-4 scroll-mt-nav"
    >
      <div className="container mx-auto mt-30 text-center fade-in">
        <div className="container mx-auto">
          <img
            src={fotoPErfil}
            alt="Foto de perfil"
            className="md:w-[250px] md:h-[250px] w-[180px] h-[180px] mx-auto object-cover rounded-full flutuar  shadow-cyan-500"
          />
        </div>
        <div className="mb-6 mt-10">
          <h1 className="mb-4 md:text-5xl text-3xl">
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 bg-clip-text text-transparent text-nowrap font-bold">
              Mateus Muniz
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedor Web Júnior
          </p>
          <p className="text-sm text-[#98a6b3] max-w-2xl mx-auto  italic mb-8">
            Transformo ideias em experiências web modernas e funcionais, com
            código limpo e eficiente.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={handleContactClick}
            className="bg-cyan-500 hover:bg-cyan-500/90 text-[#1a1d23]  px-6 py-4 rounded-xl text-lg group flex justify-center  items-center trasition-all duration-300 "
          >
            <span>Entre em Contato</span>
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={25}
            />
          </button>
          <Link
            to="/projects"
            className="border border-gray-600 hover:bg-cyan-500 hover:text-[#1a1d23] px-6 py-4 text-lg rounded-xl trasition-all duration-300"
          >
            Ver Projetos
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/mateusmuniz-09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 hover:text-cyan-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-mateus-de-oliveira-muniz-554333233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-700 hover:text-cyan-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:mateus09muniz@gmail.com"
            className="text-cyan-700 hover:text-cyan-500  transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
            aria-label="WhatsApp"
            title="WhatsApp"
            value="+55 (88) 98125-2883"
            href="https://wa.me/5588981252883"
          >
            <FaWhatsapp
              className="text-cyan-700 hover:text-cyan-500  transition-colors"
              size={24}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
