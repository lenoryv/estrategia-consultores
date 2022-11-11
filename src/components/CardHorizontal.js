function CardHorizontal({ Services }) {
  return Services.map((service) => {
    return (
      <div
        key={service.name}
        className="flex flex-col w-full text-left items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        style={{ boxShadow: `0 4px 8px -3px ${service.color}` }}
      >
        <img
          className="object-cover rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
          src={service.img}
          alt="Service"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="flex mb-2 text-base font-bold font-montserrat tracking-tight text-gray-900 dark:text-white">
            {service.name}
          </h5>
          <p className="flex mb-3 font-normal text-xs font-sans text-gray-700 dark:text-gray-400">
            {service.description}
          </p>
        </div>
      </div>
    );
  });
}

export { CardHorizontal };
