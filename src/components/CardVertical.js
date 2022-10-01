function CardVertical({ people }) {
  return people?.map((person) => {
    return (
      <div
        key={person.name}
        className="flex flex-col items-end justify-start gap-6 sm:w-auto sm:max-h-min p-6 sm:p-8 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col rounded-lg overflow-hidden">
          <img src={person?.img} alt="Person" />
        </div>
        <div className="flex flex-col sm:max-h-max">
          <h5 className="mb-2 text-left text-2xl font-bold font-poppins tracking-tight text-gray-900 dark:text-white">
            {person.name}
          </h5>
          <h6 className="mb-2 text-xl font-semibold font-sans text-left tracking-tight text-gray-900 dark:text-white">
            {person?.position}
          </h6>
          <p className="leading-relaxed whitespace-pre-line font-normal font-sans text-base text-left text-gray-700 dark:text-gray-400">
            {person.description}
          </p>
        </div>
      </div>
    );
  });
}
export { CardVertical };
