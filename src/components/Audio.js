function Audio ({date, description, image}) {
    return (
      <div className="flex flex-col items-center justify-center pb-5 w-full sm:w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg h-full w-full"
          srcSet={`${image} 1127w`}
          sizes="25vw"
          alt="World"
        />
        <div className="p-5">
          <span className="flex mb-2 text-xs text-left font-poppins font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            {date}
          </span>
          <p className="flex text-left mb-2 font-sans font-medium text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <a
          href="https://sputniknews.lat/20210401/elecciones-en-ecuador-cualquier-cosa-puede-pasar-seran-dias-intensos-1110723999.html"
          className="flex w-40 justify-center items-center py-3 px-6 text-xs font-sans font-medium text-center text-white bg-ec-blue rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Escuchar audio
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    );
}
export { Audio };
