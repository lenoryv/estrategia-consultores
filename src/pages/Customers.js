import { Organizaciones } from "../data/LocalDB";
import { CardOrg } from "../components/CardOrg";

const Customers = () => {

  return (
    <div className="h-full w-full px-6 sm:px-24 dark:bg-gray-900">
      {" "}
      <h1 className="text-2xl sm:text-2xl font-medium text-ec-blue font-montserrat dark:text-white mt-20 sm:mt-32">
        <span className="mr-2 font-medium font-montserrat text-gray-500 dark:text-gray-400">
          Entre las
        </span>
        Organizaciones
        <span className="ml-2 font-medium font-montserrat text-gray-500 dark:text-gray-400">
          con las que hemos colaborado en los últimos años están:
        </span>
      </h1>{" "}
      <section className="relative flex overflow-hidden md:h-auto items-center bg-gray-100 h-auto mt-6 sm:mt-10 ">
        <div
          id="cards"
          className="pb-6 px-4 flex flex-wrap justify-center h-auto sm:px-10 bg-white gap-4 dark:bg-gray-900"
        >
          <CardOrg orgs={Organizaciones} />
        </div>
      </section>
      <span className="flex font-sans text-base font-normal text-left my-6  text-gray-700 dark:text-white">
        Adicionalmente, hemos trabajado en investigación política y de opinión
        pública para otras diversas fundaciones, organizaciones políticas y
        personalidades a nivel nacional y de las regiones 6 y 7 del Ecuador,
        como Partido Social Cristiano, Alianza País, Pachacutik, CREO, etc. con
        datos y resultados verificables que denotan el nivel de certeza y la
        calidad de la información generada.
      </span>
      <div
        id="toast-simple"
        className="flex flex-col sm:flex-row divide-y sm:divide-y-0 gap-2 items-center my-6 p-4 sm:space-x-4 font-sans font-semibold text-xl w-full text-gray-500 bg-white rounded-lg sm:divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
        role="alert"
      >
        <svg
          className="w-8 h-8 mr-4 text-green-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        Importante
        <div className="flex w-full sm:w-3/4 pt-2 sm:pt-0 px-4 text-left text-base font-normal">
          Fuimos la única empresa que acertó con márgenes de error menores al 1%
          en las últimas elecciones a asambleístas provinciales 2017 y en las
          anteriores elecciones para alcaldes 2014, en las provincias de El Oro,
          Loja y Zamora.{" "}
        </div>
      </div>
    </div>
  );
};

export default Customers;
