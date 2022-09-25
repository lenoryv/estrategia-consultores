function CardPerson({ people }) {
  return people?.map((person) => {
    return (
      <div
        key={person.name}
        className="flex flex-col sm:w-auto p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold font-poppins tracking-tight text-gray-900 dark:text-white">
          {person.name}
        </h5>
        <h6 className="mb-2 text-xl font-semibold font-sans text-left tracking-tight text-gray-900 dark:text-white">
          {person?.position}
        </h6>
        <p className="leading-relaxed whitespace-pre-line font-normal font-sans text-base text-left text-gray-700 dark:text-gray-400">
          {person.description}
        </p>
      </div>
    );
  });
}
export { CardPerson };