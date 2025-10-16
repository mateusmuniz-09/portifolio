import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
    { name: "Início", to: "/", icon: Home },
    { name: "Sobre", to: "/about", icon: User },
    { name: "Especialidades", to: "/skills", icon: Code },
    { name: "Projetos", to: "/projects", icon: Folder },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // rolagem suave
    });
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
          <a
            href="#hero"
            className="relative p-2 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-cyan-400"
            onClick={handleClick}
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
                <NavLink
                  to={item.to}
                  key={item.name}
                  onClick={() => {
                    handleClick();
                  }}
                  className=" hover:scale-105 transition-all duration-200 flex gap-2 items-center justify-center p-2 rounded-md "
                >
                  <Icon className="text-cyan-500" size={18} />{" "}
                  <span>{item.name}</span>
                </NavLink>
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
          <div className="flex flex-col space-y-4 w-full py-4 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  to={item.to}
                  onClick={() => {
                    setIsOpen(false);
                    handleClick();
                  }}
                  key={item.name}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2 flex items-center justify-between p-2 "
                >
                  <div className="flex gap-2 justify-start items-center">
                    <Icon size={18} className="text-cyan-500" />{" "}
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className="text-cyan-500" />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
