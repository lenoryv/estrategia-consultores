function Footer () {
    return (
      <footer className="p-4 bg-white sm:px-8 sm:py-8 dark:bg-gray-900 w-full pt-6 sm:pt-16">
        <div className="md:flex md:justify-between sm:gap-8">
          <div className="mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="./assets/logos/isotipo.svg" alt="EC Isotipo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-start">
              <h2 className="font-poppins mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Dirección
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 text-base text-left">
                <li className="mb-4">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=-3.9968579812559%2C-79.198765313507&fbclid=IwAR3RinYqauTfjcjOlPUMrh4QwGjtPq4FMOACMPhKziW5rdVXLS96i0dhNTs"
                    className="hover:underline"
                  >
                    Oficinas: Loja, calle Juan José Peña entre 10 de Agosto y
                    Rocafuerte, Piso 2.
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-poppins mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Síguenos en
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 text-base text-left">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/consultoresestrategia"
                    className="hover:underline"
                  >
                    Facebook: Estrategia Consultores
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-poppins mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contactos
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 text-base text-left">
                <li className="mb-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=593998200312"
                    className="hover:underline"
                  >
                    Telf: (+593) 99 820 0312
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=593997909371"
                    className="hover:underline"
                  >
                    Telf: (+593) 99 790 9371
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:estrategialoja@gmail.com"
                    className="hover:underline"
                  >
                    Correo: estrategialoja@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Estrategia Consultores
            </a>
            . Todos los Derechos Reservados.
          </span>
        </div>
      </footer>
    );
}

export {Footer};