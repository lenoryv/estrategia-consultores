import React, { useState } from "react";
import { NavItem } from "./NavItem/NavItem";

function Navbar() {

  const [openNavbar, setOpenNavbar] = useState(false);

  function scrollBottom() {
    setOpenNavbar(false);
    let element = document.querySelector("footer");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <nav className="bg-sky-700 px-6 sm:px-8 py-2.5 sm:py-3 dark:bg-gray-900 fixed w-full z-30 top-0 left-0 dark:border-gray-600">
      <div className="flex flex-wrap justify-between items-center m-auto">
        <a href="/" className="flex items-center">
          <img
            src="./assets/logos/logotipo-white.svg"
            className="mr-3 h-6 sm:h-9"
            alt="EC Logo"
            fill="currentColor"
          />
        </a>
        <div className="flex md:order-2">
          {openNavbar ? (
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className="inline-flex items-center p-2 text-sm bg-sky-700 dark:bg-gray-900 text-white rounded-lg md:hidden hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-ec-blue dark:text-gray-300 dark:hover:bg-gray-900 dark:focus:ring-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setOpenNavbar(!openNavbar)}
              className="inline-flex items-center p-2 text-sm bg-ec-blue dark:bg-gray-900 text-white rounded-lg md:hidden hover:bg-ec-blue focus:outline-none focus:ring-2 focus:ring-ec-blue dark:text-gray-300 dark:hover:bg-gray-900 dark:focus:ring-gray-300"
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
          )}
        </div>
        <div
          className={
            (openNavbar ? "block" : "hidden") +
            " justify-between items-center w-full md:flex md:w-auto md:order-1"
          }
          id="navbar-sticky"
        >
          <ul className="text-white flex flex-col gap-2 rounded-lg p-4 mt-4 bg-sky-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-extralight md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-400 font-poppins">
            <NavItem content="Quienes Somos" href="/" />
            <NavItem content="Nuestros Servicios" href="/servicios" />
            <NavItem content="Equipo" href="/equipo" />
            <NavItem content="Experiencia/Clientes" href="/clientes" />
            <NavItem content="Consulta del Día" href="/encuesta" />
            <li className="md:hidden flex justify-left">
              <button
                className="text-gray-700 text-center sm:py-2 sm:pr-4 sm:pl-3 md:hidden"
                onClick={() => scrollBottom()}
              >
                Contactos
              </button>
            </li>
          </ul>
        </div>
        <div className="order-first md:order-last hidden md:block">
          <button
            className="bg-sky-700 text-white py-2 px-4 rounded font-poppins text-base"
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
