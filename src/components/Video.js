function Video({ video }) {
  return (
    <div className="w-auto sm:h-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="https://www.youtube.com/embed/P-ltn1kC9EY?controls=0&amp;start=435&end=612">
        <div className="flex px-4 pt-3 pb-1">
          <p className="flex text-left mb-2 font-sans font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-400">
            Carlos Vera: Encuestas presidenciales de Estrategia Consultores 2021
          </p>
        </div>
      </a>
      <iframe
        className="hidden sm:flex w-full h-3/4 rounded-b-lg"
        sandbox="allow-scripts allow-same-origin allow-popups-to-escape-sandbox"
        loading="lazy"
        src={video}
        title="Estrategia Consultores"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export { Video };
