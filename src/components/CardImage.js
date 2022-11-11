function CardImage ({date, description, image}) {
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <span className="uppercase font-bold">
            Noticias
          </span>
          <span className="flex mb-2 text-xs text-left font-poppins font-semibold tracking-tight text-gray-900 dark:text-white">
            {date}
          </span>
          <p className="flex text-left mb-2 font-sans font-normal text-base text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <img
          className="rounded-b-lg h-36 w-full"
          src={image}
          alt="Card"
        />
      </div>
    );
}
export { CardImage };