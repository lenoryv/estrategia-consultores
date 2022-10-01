import { Card } from '../components/Card'

const Home = () => {
  return (
    <div className="sm:mt-18 mt-14 bg-ec-blue dark:bg-gray-900">
      <section className="flex flex-col sm:flex-row sm:px-24 h-full px-6 sm:my-0 my-6">
        <div className="flex flex-col sm:w-3/4 gap-4 justify-end sm:pb-24">
          <span className="font-semibold text-4xl sm:text-8xl text-left text-white">
            Estrategia Consultores
          </span>
          <span className="font-normal text-base sm:text-base sm:w-3/4 text-left text-white">
            Es una empresa de consultoría centrada en la generación de
            información y análisis de mercados, opinión pública, procesos de
            innovación y comunicación integral, para organizaciones públicas y
            privadas a nivel nacional.
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
            type="button"
            className="hover:drop-shadow-[0_4px_80px_#5F6F94] flex w-80 justify-center items-center gap-4 font-sans tracking-wide sm:absolute bottom-0 bg-white z-20  px-8 py-4 rounded-md right-0"
          >
            <img
              className="w-6 h-6 sm:h-auto sm:w-auto"
              src="./assets/icons/question-answer-v2.svg"
              alt="icon button"
            />
            <a
              href="/encuesta"
              className="text-ec-blue text-xs sm:text-sm font-sans font-bold uppercase"
            >
              Responde la consulta del día
            </a>
          </button>
        </div>
      </section>
      <section className="flex flex-col px-6 sm:px-24 py-8 h-full gap-6 bg-white sm:mt-16 dark:bg-gray-900">
        <div className="flex">
          <span className="uppercase font-poppins text-base font-medium text-ec-blue dark:text-white">
            Quiénes Somos
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
          <div
            className="h-64 w-auto sm:h-96 sm:w-96 rounded-sm sm:rounded-3xl bg-cover"
            style={{ backgroundImage: "url(./assets/img/img1.jpg)" }}
          ></div>
          <div className="flex flex-col sm:w-3/4 text-left justify-center gap-4">
            <span className="font-poppins font-medium text-2x1 text-black dark:text-white">
              Empresa de Consultoría
            </span>
            <span className="font-sans font-normal text-base text-gray-700 dark:text-white">
              Constituimos un grupo consultor multidisciplinario integrado por
              profesionales con más de 22 años de experiencia en las áreas de
              Opinión Pública, Investigación de Mercados, Economía, Marketing,
              Comunicación, Proyectos y Estadística, trabajando para empresas
              nacionales e internacionales de reconocida trayectoria. Contamos
              con oficinas en Loja y Quito, además de representantes en
              Guayaquil y Cuenca, con lo cual se garantiza una capacidad
              nacional de operación.
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-6 pb-8 sm:pb-12 sm:px-24 px-6 py-6 h-full gap-6 sm:gap-0">
        <div className="flex">
          <span className="uppercase font-poppins font-medium text-base text-white">
            Nuestros Servcios
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
          <div className="flex flex-col sm:w-1/4 text-left justify-center gap-4">
            <span className="font-poppins font-medium text-2x1  text-white">
              Ofrecemos
            </span>
            <span className="font-sans font-normal text-base  text-white">
              Servicios sobre investigación de mercados, análisis, diseño,
              planes y asesorías.
            </span>
            <a
              href="/servicios"
              type="button"
              className="flex w-32 px-6 py-3 border bg-white border-ec-blue text-sm text-ec-blue font-sans font-semibold rounded-md justify-center mt:4 sm:mt-11 hover:text-black hover:bg-gray-300"
            >
              Saber Más
            </a>
          </div>
          <div
            className="h-64 w-auto sm:h-96 rounded-sm sm:rounded-3xl bg-cover sm:w-3/4"
            style={{ backgroundImage: "url(./assets/img/img2.jpg)" }}
          ></div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center px-6 sm:px-24 py-8 bg-white dark:bg-gray-900">
        <span className="w-full text-left uppercase font-poppins font-medium text-base text-ec-blue dark:text-white">
          Estrategia en los medios
        </span>
        <div className="max-w-screen-xl flex flex-col sm:flex-row h-full gap-6 mt-4 overflow-x-auto">
          <Card />
        </div>
      </section>
    </div>
  );
};
export default Home;
