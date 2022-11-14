import { Card } from '../components/Card'
import { Video } from '../components/Video';
import { CardImage } from '../components/CardImage';
import { Audio } from '../components/Audio';
import { MyServices } from '../data/LocalDB';
import { BtnService} from '../components/BtnService';

const Home = () => {
  return (
    <div className="sm:mt-18 mt-14 pt-6 bg-ec-blue dark:bg-gray-900">
      <section className="flex flex-col sm:flex-row sm:px-24 h-full px-6 sm:my-0 my-6">
        <div className="flex flex-col sm:w-3/4 gap-4 justify-end sm:pb-6">
          <span className="flex flex-col md:flex-row font-extrabold font-montserrat text-4xl sm:text-5xl text-left text-white uppercase">
            Estrategia
            <small className="flex sm:ml-4 font-light font-montserrat text-4xl sm:text-5xl text-left text-white uppercase">
              Consultores
            </small>
          </span>
          <span className="flex font-light text-base sm:text-base sm:w-3/4 text-left text-white">
            Es una empresa dedicada al análisis de mercados y estudios de
            opinión pública.
            <br />
            Realizamos además asesoría empresarial en innovación,
            emprendimiento, planeación, marketing y comunicación integral.
          </span>
        </div>
        <div className="flex flex-col items-center gap-10 pt-8 sm:mt-0">
          <img
            className="z-10 hidden sm:flex w-72 h-72"
            src="./assets/logos/isotipo-metallic.svg"
            alt="Isotipo"
          />
          <a
            href="/encuesta"
            type="button"
            className="hover:drop-shadow-[0_4px_80px_#5F6F94] flex w-full items-center font-sans tracking-wide bg-gray-100 z-20 px-4 py-2 rounded-md sm:rounded-lg border border-gray-900"
          >
            <img
              className="sm:h-auto sm:w-8"
              width="24"
              height="24"
              src="./assets/icons/question-answer-v2.svg"
              alt="icon button"
            />
            <span className="w-80 text-center text-ec-blue text-xs sm:text-sm font-montserrat font-semibold">
              Responde nuestra encuesta de hoy
            </span>
          </a>
        </div>
      </section>
      <section className="flex flex-col px-6 sm:px-24 py-8 h-full gap-6 bg-white sm:mt-10 dark:bg-gray-900">
        <div className="flex sm:grid w-full flex-col sm:flex-row gap-4 sm:gap-8 grid-cols-3 items-center">
          <div className="flex flex-col w-full justify-start items-start gap-4">
            <span className="uppercase font-montserrat text-base font-medium text-ec-blue dark:text-white">
              Quiénes Somos
            </span>
            <p className="flex font-sans font-normal text-justify text-sm text-gray-700 dark:text-white sm:mr-6 leading-relaxed">
              Constituimos un grupo consultor multidisciplinario integrado por
              profesionales con más de 22 años de experiencia en las áreas de
              Opinión Pública, Investigación de Mercados, Economía,
              Emprendimiento, Marketing, Comunicación, Proyectos y Estadística,
              trabajando para empresas nacionales e internacionales de
              reconocida trayectoria. Contamos con oficinas en Loja y Cuenca,
              además de representantes en Guayaquil y Quito, con lo cual se
              garantiza una capacidad nacional de operación.
            </p>
          </div>
          <div className="w-full">
            <Video
              video={
                "https://www.youtube.com/embed/P-ltn1kC9EY?controls=0&amp;start=435&end=612"
              }
            />
          </div>
          <div className="w-full">
            <CardImage
              date="07 de noviembre de 2022"
              description="Estudio de Opinión pública sobre candidatos a prefecto de Loja"
              image="https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg?format=webp&auto=compress&cs=tinysrgb&w=439&h=291&dpr=1"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-6 pb-8 sm:pt-10 sm:px-24 px-6 py-6 h-full gap-6 sm:gap-0 bg-slate-50">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
          <div className="flex flex-col sm:w-1/4 text-left justify-center gap-4 sm:gap-8 items-center sm:items-start">
            <span className="flex uppercase font-montserrat font-medium text-base text-ec-blue">
              Nuestros Servicios
            </span>
            <span className="font-montserrat font-light text-base  text-ec-blue">
              Entre los servicios ofrecidos por ESTRATEGIA CONSULTORES están:
            </span>
            <a
              href="/servicios"
              type="button"
              className="flex w-32 items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-ec-blue focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-ec-blue hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Saber Más
            </a>
          </div>
          <div className="grid flex-nowrap gap-4 h-full w-auto sm:h-auto rounded-sm sm:rounded-3xl bg-cover sm:w-3/4 grid-cols-2 sm:grid-cols-4 sm:auto-rows-auto">
            <BtnService Services={MyServices} />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center px-6 sm:px-24 py-8 bg-white dark:bg-gray-900 gap-4 sm:gap-8">
        <span className="w-full text-left uppercase font-poppins font-medium text-base text-ec-blue dark:text-white">
          Estrategia en los medios
        </span>
        <div className="max-w-screen-xl flex flex-col sm:flex-row h-full gap-6 mt-4 sm:pb-8">
          <Card />
          <Audio
            date="01 de abril de 2021"
            description="Elecciones en Ecuador: La agencia internacional Sputink comunica los resultados de Estrategia Consultores"
            image="https://cdnnmundo1.img.sputniknews.com/img/07e5/04/01/1110726748_14:0:626:344_600x0_80_0_0_146942e0f76f0d4b5b093b8878838b7d.jpg.webp"
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
