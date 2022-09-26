import React, { useEffect} from "react";

function Navbar() {
  const pathname = window.location.pathname;
  let newStr = pathname.substring(1);

  if (pathname==="/") newStr="home";

  useEffect(() => {
    let menu = document.getElementsByClassName("block");
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.color = "";
    }
    document.getElementById(newStr).style.color = "#001D6E";
  }, [newStr]);

  return (
    <nav className="bg-white px-6 sm:px-16 py-2.5 dark:bg-gray-900 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="./assets/logos/logotipo20years.svg"
            className="mr-3 h-6 sm:h-9"
            alt="EC Logo"
          />
        </a>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-400 font-poppins">
            <li>
              <a
                id="home"
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
                aria-current="page"
              >
                Quiénes Somos
              </a>
            </li>
            <li>
              <a
                id="equipo"
                href="/equipo"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Equipo
              </a>
            </li>
            <li>
              <a
                id="servicios"
                href="/servicios"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Nuestros Servicios
              </a>
            </li>
            <li>
              <a
                id="clientes"
                href="/clientes"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Experiencia/Clientes
              </a>
            </li>
            <li>
              <a
                id="Question"
                href="/"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Consulta del Día
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export { Navbar };
