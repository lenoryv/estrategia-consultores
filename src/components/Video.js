function Video({Video}) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex px-4 pt-3 pb-1">
        <p className="flex text-left mb-2 font-sans font-semibold text-base text-gray-700 dark:text-gray-400">
          Carlos Vera: Encuestas presidenciales de Estrategia Consultores 2021
        </p>
      </div>
      <a href="/">
        <iframe
          className="w-full sm:w-full h-[186px] rounded-lg"
          src={Video}
          title="Estrategia Consultores"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </a>
    </div>
  );
}

export { Video };
