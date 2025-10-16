import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import ScrollToTopLink from "./ScrollToTopLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1d23] border-t border-[#2d3139] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Mateus Muniz
            </h3>
            <p className="text-[#98a6b3]">
              Desenvolvedor Web Júnior dedicado a criar soluções web modernas e
              eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <ScrollToTopLink
                  to="/"
                  className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
                >
                  Inicio
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  to="/about"
                  className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
                >
                  Sobre
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  to="/skills"
                  className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
                >
                  Especialidades
                </ScrollToTopLink>
              </li>
              <li>
                <ScrollToTopLink
                  to="/projects"
                  className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
                >
                  Projetos
                </ScrollToTopLink>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-md font-semibold mb-4">Conecte-se</h4>
            <div className="flex flex-col gap-3 mb-4">
              <a
                href="mailto:mateus09muniz@gmail.com"
                className="text-[#98a6b3] hover:text-cyan-500 transition-colors flex items-center gap-2"
              >
                <Mail size={24} className="text-cyan-500" />
                mateus09muniz@gmail.com
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/mateusmuniz-09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} className="text-cyan-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-mateus-de-oliveira-muniz-554333233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#98a6b3] hover:text-cyan-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-cyan-500" />
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
                <FaWhatsapp className="text-cyan-500" size={24} />
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="/curriculo-mateus-muniz.pdf"
                download
                className="inline-flex items-center justify-center gap-2 text-[#98a6b3] hover:text-cyan-500/80 transition-colors"
              >
                <Download size={24} className="text-cyan-500" />
                <span> Download Currículo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2d3139] pt-8 text-center text-[#98a6b3]">
          <p className="text-xs">
            &copy; {currentYear} Mateus Muniz. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-[8px]">
            Desenvolvido com React, JavaScript e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
