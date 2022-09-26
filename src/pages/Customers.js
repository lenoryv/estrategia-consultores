import { Organizaciones } from "../data/LocalDB";
import { CardOrg } from "../components/CardOrg";

const Customers = () => {

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
      </section>
    </div>
  );
};

export default Customers;
