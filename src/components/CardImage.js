import { Link } from "react-router-dom";

function CardImage({ date, description, image }) {
  return (
    <div className="flex p-5 sm:h-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/pdf" target="_blank" rel="noopener noreferrer">
        <div className="sm:h-2/5">
          <span className="flex uppercase font-bold dark:text-white">
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
          className="hidden sm:flex rounded-b-lg w-full h-3/5"
          srcSet={`${image} 439w`}
          sizes="50vw"
          src={image}
          alt="News"
        />
      </Link>
    </div>
  );
}
export { CardImage };
