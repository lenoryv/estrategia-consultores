const Services = () => {
    return (
      <div className="h-full w-full px-6 pb-10 sm:px-24 dark:bg-gray-900">
        <h1 className="text-xl sm:text-4xl font-bold font-montserrat dark:text-white mt-20 sm:mt-32 sm:mb-10">
          <small className="mr-2 font-medium font-montserrat text-gray-500 dark:text-gray-400">
            Entre los servicios ofrecidos por
          </small>
          Estrategia Consultores
          <small className="ml-2 font-medium font-montserrat text-gray-500 dark:text-gray-400">
            están:
          </small>
        </h1>
        <section className="flex w-full text-base sm:text-lg font-medium font-sans mt-4 sm:mt-6 flex-col sm:grid sm:grid-cols-2 gap-4 sm:grid-rows-6">
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Estudios de Opinión Pública (Política)
          </span>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Estudios cuantitativos de mercado
          </span>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Análisis cualitativos (grupos focales, entrevistas de profundidad,
            clientes fantasma, simulaciones, etc.)
          </span>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Diseño y evaluación de proyectos
          </span>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Design Thinking para innovación de productos y servicios
          </span>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Levantamiento y diseño de Procesos
          </span>
          <a
            href="https://utpl.zoom.us/j/81263233768"
            className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="flex mr-4">
              Modelos de negocios, unirse a través de
            </span>
            <img
              className="h-8 flex"
              src="./assets/logos/zoomus-ar21.svg"
              alt="Logo Zoom"
            />
          </a>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Asesoría en formulación de proyectos
          </span>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Análisis estadístico y financiero
          </span>
          <span className="flex justify-center items-center p-4  text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Planes de marketing y publicidad
          </span>
          <span className="flex justify-center items-center p-4 text-gray-500 bg-gray-50 rounded-lg dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
            Asesoría en comunicación institucional
          </span>
        </section>
      </div>
    );
}

export default Services;