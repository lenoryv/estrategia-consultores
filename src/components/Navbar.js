import React, { useEffect, useState } from "react";

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(true);

  const pathname = window.location.pathname;
  let newStr = pathname.substring(1);

  let mql = window.matchMedia("(min-width: 768px)");

  if (pathname === "/") newStr = "home";

  useEffect(() => {
    let menu = document.getElementsByClassName("block");
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.color = "";
    }
    document.getElementById(newStr).style.color = "white";
  }, [newStr]);

  window.addEventListener("resize", function () {
    let navbar = document.getElementById("navbar-sticky");
    navbar = document.getElementById("navbar-sticky");
    if (mql.matches) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  });

  const buttonNavbar = () => {
    setOpenNavbar((prevState) => !prevState);
    let navbar = document.getElementById("navbar-sticky");
    console.log(openNavbar);
    if (openNavbar && !mql.matches) {
      navbar.style.display = "block";
      console.log("Abrir");
    } else if (!openNavbar && !mql.matches) {
      navbar.style.display = "none";
      console.log("Cerrar");
    } else {
      navbar.style.display = "block";
      console.log("Abrir SC");
    }
  };

  function scrollBottom() {
    buttonNavbar();
    let element = document.querySelector("footer");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <nav className="bg-ec-blue px-6 sm:px-8 py-2.5 sm:py-3 dark:bg-gray-900 fixed w-full z-30 top-0 left-0 dark:border-gray-600">
      <div className="flex flex-wrap justify-between items-center m-auto">
        <a href="/" className="flex items-center">
          <img
            src="./assets/logos/logotipo-white.svg"
            className="mr-3 h-6 sm:h-9"
            alt="EC Logo"
          />
        </a>
        <div className="flex md:order-2">
          <button
            onClick={() => buttonNavbar()}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm bg-ec-blue dark:bg-gray-900 text-white rounded-lg md:hidden hover:bg-ec-blue focus:outline-none focus:ring-2 focus:ring-ec-blue dark:text-gray-300 dark:hover:bg-gray-900 dark:focus:ring-gray-300"
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
          className="hidden sm:block justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col gap-2 rounded-lg p-4 mt-4 bg-ec-blue md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-400 font-poppins">
            <li>
              <a
                id="home"
                href="/"
                className="py-2 pr-4 pl-3 text-gray-400 sm:text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-100 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
                aria-current="page"
              >
                Quiénes Somos
              </a>
            </li>
            <li>
              <a
                id="equipo"
                href="/equipo"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-100 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Equipo
              </a>
            </li>
            <li>
              <a
                id="servicios"
                href="/servicios"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-100 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Nuestros Servicios
              </a>
            </li>
            <li>
              <a
                id="clientes"
                href="/clientes"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-100 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Experiencia/Clientes
              </a>
            </li>
            <li>
              <a
                id="encuesta"
                href="/encuesta"
                className="block py-2 pr-4 pl-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-100 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-400"
              >
                Consulta del Día
              </a>
            </li>
            <li className="md:hidden">
              <button
                className="text-gray-400 py-2 pr-4 pl-3 md:hidden"
                onClick={() => scrollBottom()}
              >
                Contactos
              </button>
            </li>
          </ul>
        </div>
        <div className="order-first md:order-last hidden md:block">
          <button
            className="bg-ec-blue text-white py-2 px-4 rounded font-poppins text-base"
            onClick={() => scrollBottom()}
          >
            Contactos
          </button>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
