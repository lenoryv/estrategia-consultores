function CardImage () {
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <span className="flex mb-2 text-xs text-left font-poppins font-bold tracking-tight text-gray-900 dark:text-white uppercase">
            05 de octubre de 2022
          </span>
          <p className="flex text-left mb-2 font-sans font-light text-base text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021
          </p>
        </div>
        <img
          className="rounded-b-lg h-36 w-full"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
          alt="Imagen del Documento"
        />
      </div>
    );
}
export { CardImage };