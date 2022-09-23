const Home = () => {
  return (
    <div className="sm:mt-24 mt-16">
      <section className="flex flex-col sm:flex-row sm:px-24 h-full px-6">
        <div className="flex flex-col sm:w-3/4 gap-4 justify-end sm:pb-24">
          <span className="font-semibold text-4xl sm:text-8xl text-left text-ec-blue">
            Estrategia Consultores
          </span>
          <span className="font-normal text-base sm:text-base sm:w-3/4 text-left">
            Centrada en investigación de mercados y opinión pública, planeación
            estratégica, comunicación integral e innovación para el
            emprendimiento
          </span>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:relative mt-6 sm:mt-0">
          <div className="hidden sm:flex absolute top-8 left-16 bg-ec-variant-blue rounded-full w-10 h- 10 sm:w-80 sm:h-80"></div>
          <img
            className="z-10 sm:pb-16 hidden sm:flex w-auto h-auto sm:w-full sm:h-full"
            src="./assets/img/person1.png"
            alt="person"
          />
          <button
            onClick={() => console.log("Consulta del Dia")}
            className="hover:drop-shadow-[0_4px_80px_#5F6F94] flex w-80 justify-center items-center gap-4 font-sans tracking-wide sm:absolute bottom-0 bg-ec-blue z-20  px-8 py-4 rounded-md right-0"
          >
            <img
              className="w-6 h-6 sm:h-auto sm:w-auto"
              src="./assets/icons/question-answer.svg"
              alt="icon button"
            />
            <span className="text-white text-xs sm:text-sm font-sans font-bold uppercase">
              Responde la consulta del día
            </span>
          </button>
        </div>
      </section>
      <section className="flex flex-col px-6 sm:px-24 py-6 h-full gap-6">
        <div className="flex">
          <span className="uppercase font-poppins font-medium text-ec-blue">
            Quiénes Somos
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
          <div
            className="h-64 w-auto sm:h-96 sm:w-96 rounded-sm sm:rounded-3xl bg-cover"
            style={{ backgroundImage: "url(./assets/img/img1.jpg)" }}
          ></div>
          <div className="flex flex-col sm:w-3/4 text-left justify-center gap-4">
            <span className="font-poppins font-medium text-2x1">
              Empresa de Consultoría
            </span>
            <span className="font-sans font-normal text-base">
              ESTRATEGIA es una empresa de consultoría centrada en la generación
              de información y análisis de mercados, opinión pública, procesos
              de innovación y comunicación integral, para organizaciones
              públicas y privadas a nivel nacional. Constituimos un grupo
              consultor multidisciplinario integrado por profesionales con más
              de 22 años de experiencia en las áreas de Opinión Pública,
              Investigación de Mercados, Economía, Marketing, Comunicación,
              Proyectos y Estadística, trabajando para empresas nacionales e
              internacionales de reconocida trayectoria. Contamos con oficinas
              en Loja y Quito, además de representantes en Guayaquil y Cuenca,
              con lo cual se garantiza una capacidad nacional de operación.
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col px-6 sm:px-24 py-6 h-full gap-6">
        <div className="flex">
          <span className="uppercase font-poppins font-medium text-ec-blue">
            Nuestros Servcios
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
          <div className="flex flex-col sm:w-1/4 text-left justify-center gap-4">
            <span className="font-poppins font-medium text-2x1">Ofrecemos</span>
            <span className="font-sans font-normal text-base">
              Servicios sobre investigación de mercados, análisis, diseño,
              planes y asesorías.
            </span>
            <button
              onClick={() => console.log("Servcios...")}
              className="flex w-32 px-4 py-2 border border-ec-blue text-sm text-ec-blue font-sans font-semibold rounded-md justify-center mt:4 sm:mt-11 hover:text-white hover:bg-ec-blue"
            >
              Saber Más
            </button>
          </div>
          <div
            className="h-64 w-auto sm:h-96 rounded-sm sm:rounded-3xl bg-cover sm:w-3/4"
            style={{ backgroundImage: "url(./assets/img/img2.jpg)" }}
          ></div>
        </div>
      </section>
    </div>
  );
};
export default Home;