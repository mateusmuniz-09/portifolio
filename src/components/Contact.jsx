import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import sendRequest from "../services/sendRequest";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.warning("Por favor, corrija os erros no formulário.");
      return;
    }

    // Simular envio - aqui você pode integrar com EmailJS, Netlify Forms ou sua API
    try {
      // Placeholder para integração futura
      sendRequest(formData);

      toast.success("Mensagem enviada! Obrigado pelo contato.");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Ocorreu um erro. Tente novamente mais tarde.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-nav py-8">
      <div className="container mx-auto p-4">
        <div className="text-center mb-16">
          <h1 className="mb-4 md:text-5xl text-3xl">
            Entre em{" "}
            <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 bg-clip-text text-transparent text-nowrap font-bold">
              Contato
            </span>
          </h1>
          <p className="text-md text-[#98a6b3] max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Envie
            uma mensagem!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale comigo</h3>
              <p className="text-[#98a6b3] mb-8">
                Estou sempre aberto a discutir novos projetos, ideias criativas
                ou oportunidades para fazer parte de sua visão.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Mail className="text-cyan-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <a
                    href="mailto:mateus09muniz@gmail.com"
                    className="text-[#98a6b3] hover:text-white text-sm transition-colors"
                  >
                    mateus09muniz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Phone className="text-cyan-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <a
                    href="tel:+5588981252883"
                    className="text-[#98a6b3] text-sm hover:text-white transition-colors"
                  >
                    +55 (88) 98125-2883
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <MapPin className="text-cyan-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="text-[#98a6b3] text-sm">Ceará, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1d23] p-8 rounded-lg shadow-[#1a1d23] ">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-[#111317] border border-[#282c33] transition-all duration-300 focus:ring-2 ring-cyan-500 outline-none placeholder:text-sm container rounded-md p-2 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-[#111317] border border-[#282c33] transition-all duration-300 focus:ring-2 ring-cyan-500 outline-none placeholder:text-sm container rounded-md p-2 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem aqui..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`bg-[#111317] border border-[#282c33] min-h-[150px] resize-none overflow-auto transition-all duration-300 focus:ring-2 ring-cyan-500 outline-none placeholder:text-sm container rounded-md p-2 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-500/90 disabled:bg-cyan-500/20 py-3 text-lg group rounded-md"
              >
                {isSubmitting ? (
                  <div className="flex justify-center text-[#1a1d23] items-center space-x-3">
                    <div className="w-4 h-4 border-b-2 border-cyan-500 animate-spin rounded-full"></div>{" "}
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex justify-center text-[#1a1d23] items-center gap-2">
                    <span>Enviar Mensagem</span>
                    <Send
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                      size={20}
                    />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
