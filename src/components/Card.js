import {Videos} from "../data/LocalDB";

function Card() {
  return Videos.map((video) => {
    return (
      <div
        key={video.id}
        className="flex flex-col w-64 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <iframe
            className="w-full sm:w-64 h-40 rounded-t-lg"
            src={"https://www.youtube.com/embed/" + video.url.substring(32)}
            title="Carlos Granda l Resultados del Estudio sobre el primer año de gestión del gobierno"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col p-5 h-full justify-between items-center">
          <div>
            <h5 className="mb-2 text-left text-base font-semibold font-sans tracking-tight text-gray-900 dark:text-white">
              {video.title}
            </h5>
          </div>
          <a
            href={"https://www.youtube.com/embed/" + video.url.substring(32)}
            className="flex justify-center items-center mt-4 py-3 px-6 text-xs font-sans font-medium text-center text-white bg-ec-blue rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver video
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
      </div>
    );
  });
}

export { Card };
