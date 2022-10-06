function CardPerson({ people }) {
  return people?.map((person) => {
    return (
      <div
        key={person.name}
        className="flex flex-col md:flex-row items-start  gap-6 md:w-auto md:max-h-min p-6 md:p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col md:w-3/4 md:max-h-max">
          <h5 className="mb-2 text-left text-xl font-bold font-poppins tracking-tight text-gray-900 dark:text-white">
            {person.name}
          </h5>
          <h6 className="mb-2 text-lg font-semibold font-sans text-left tracking-tight text-gray-900 dark:text-white">
            {person?.position}
          </h6>
          <p className="leading-relaxed whitespace-pre-line font-normal font-sans text-sm text-left text-gray-700 dark:text-gray-400">
            {person.description}
          </p>
        </div>
        <div className="flex flex-col md:w-[240px] md:h-[320px] rounded-lg overflow-hidden">
          <img src={person?.img} alt="Person" />
        </div>
      </div>
    );
  });
}
export { CardPerson };
