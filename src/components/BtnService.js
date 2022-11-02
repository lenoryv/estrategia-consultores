function BtnService ({Services}) {
    return (
        Services.map(service => {
            return (
              <a
                href="/servicios"
                className="flex h-auto justify-center items-center text-ec-blue border bg-gradient-to-r bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                key={service.id}
                style={{ boxShadow: `0 4px 8px -3px ${service.color}` }}
              >
                <span className="flex font-sans">{service.name}</span>
              </a>
            );
        }
    ))
}

export { BtnService };