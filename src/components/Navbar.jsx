import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Folder,
  Mail,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Início", href: "#hero", icon: Home },
    { name: "Sobre", href: "#about", icon: User },
    { name: "Especialidades", href: "#skills", icon: Code },
    { name: "Projetos", href: "#projects", icon: Folder },
    { name: "Contato", href: "#contact", icon: Mail },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed p-3 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800/90 backdrop-blur-sm shadow-md"
          : "bg-gray-800/50"
      }`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}{" "}
          <a
            href="#hero"
            className="relative p-2 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-cyan-400"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <span
              className="text-xl font-black text-cyan-400"
              style={{ textShadow: "0 0 20px rgba(34, 211, 238, 0.8)" }}
            >
              MM
            </span>
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className=" hover:scale-105 transition-all duration-200 flex gap-2 items-center justify-center"
                >
                  <Icon className="text-cyan-500" size={18} />{" "}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? "" : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-0 right-0 w-full min-h-screen bg-black/80"
          ></div>
        )}

        <div
          className={`md:hidden py-4 fixed top-0 left-0 h-screen bg-[#111317] transition-all duration-300 overflow-hidden ${
            isOpen ? "w-[60%]" : "w-0"
          }`}
        >
          <X
            size={24}
            onClick={() => setIsOpen(!isOpen)}
            className=" float-end mx-5 text-cyan-500 bg-cyan-500/20 rounded-md"
          />
          <div className="flex flex-col space-y-4 w-full p-4 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2 flex items-center justify-between"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <Icon size={18} className="text-cyan-500" />{" "}
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className="text-cyan-500" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
