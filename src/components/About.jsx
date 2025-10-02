const About = () => {
  return (
    <section id="about" className="bg-[#181a1f] scroll-mt-nav mb-8 py-8">
      <div className="container mx-auto p-4">
        <div className="max-w-3xl mx-auto text-center p-8 ">
          <h1 className="mb-8 md:text-5xl text-3xl flex gap-2 justify-center items-center">
            <span>Quem sou</span>
            <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 bg-clip-text text-transparent text-nowrap font-bold">
              eu
            </span>
          </h1>
          <div className="space-y-6 text-lg text-[#98a6b3] animate-slide-up">
            <p>
              Sou um{" "}
              <strong className="text-cyan-500 italic font-medium">
                desenvolvedor web júnior
              </strong>
              , dedicado a dominar as tecnologias mais relevantes do
              desenvolvimento web moderno. Minha jornada na programação começou
              com uma profunda curiosidade sobre como a tecnologia pode
              transformar ideias em soluções reais.
            </p>
            <p>
              Com experiência prévia na área de{" "}
              <strong className="text-cyan-500 italic font-medium">
                telecomunicações
              </strong>
              , desenvolvi habilidades valiosas em resolução de problemas,
              trabalho em equipe e comunicação eficaz. Hoje, combino essa
              bagagem profissional com minha paixão por desenvolvimento web.
            </p>
            <p>
              Estou constantemente aprendendo e aprimorando minhas habilidades
              em{" "}
              <strong className="text-cyan-500 italic font-medium">
                React, JavaScript, HTML, CSS, Tailwind CSS
              </strong>{" "}
              e outras tecnologias modernas, sempre buscando escrever código
              limpo, eficiente e de fácil manutenção.
            </p>
            <p>
              Meu objetivo é crescer como desenvolvedor web e contribuir para
              projetos que façam diferença, sempre mantendo o foco na qualidade
              e nas melhores práticas do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
