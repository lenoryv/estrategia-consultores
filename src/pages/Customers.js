import { Organizaciones } from "../data/LocalDB";
import { CardOrg } from "../components/CardOrg";

import { useState } from "react";

const Customers = () => {
  const [position, setPosition] = useState(400);

  const pressNext = () => {
    const div = document.getElementById("cards");
    let string = position.toString();
    console.log(string);
    div.style.transform = "translate(-25%)";
  };
  const pressBack = () => {
    const div = document.getElementById("cards");
    let string = position.toString();
    console.log(string);
    div.style.transform = "translate(0px)";
  };

  return (
    <div className="h-full w-full px-6 sm:px-24">
      {" "}
      <h1 className="text-xl sm:text-5xl font-bold font-poppins dark:text-white mt-20 sm:mt-32">
        <small className="mr-2 font-medium font-poppins text-gray-500 dark:text-gray-400">
          Entre las
        </small>
        Organizaciones
        <small className="ml-2 font-medium font-poppins text-gray-500 dark:text-gray-400">
          con las que hemos colaborado en los últimos años están:
        </small>
      </h1>{" "}
      <section className="relative flex overflow-hidden md:h-auto items-center bg-gray-100 h-auto mt-6 sm:mt-16">
        <div
          id="cards"
          className="flex flex-wrap h-auto sm:px-10 bg-white gap-4"
        >
          <CardOrg orgs={Organizaciones} />
        </div>
        {/* <button
          onClick={() => pressBack()}
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-200/30 group-hover:bg-gray-300/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-black dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={() => pressNext()}
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-200/30 group-hover:bg-gray-300/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-black dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button> */}
      </section>
    </div>
  );
};

export default Customers;
