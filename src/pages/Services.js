import { MyServices } from "../data/LocalDB";
import { CardHorizontal } from "../components/CardHorizontal";

const Services = () => {
  return (
    <div className="h-full w-full px-6 pb-10 sm:px-24 sm:pt-4 pt-4 dark:bg-gray-900">
      <h1 className="text-xl sm:text-2xl text-ec-blue font-medium font-montserrat dark:text-white mt-20 sm:mt-32 sm:mb-10">
        <small className="mr-2 text-xl sm:text-2xl text-gray-500 font-medium font-montserrat dark:text-white mt-20 sm:mt-32 sm:mb-10">
          Entre los servicios ofrecidos por
        </small>
        Estrategia Consultores
        <small className="ml-2 text-xl sm:text-2xl text-gray-500 font-medium font-montserrat dark:text-white mt-20 sm:mt-32 sm:mb-10">
          están:
        </small>
      </h1>
      <section className="flex w-full text-base sm:text-lg font-medium font-sans mt-4 sm:mt-6 flex-col sm:grid sm:grid-cols-2 gap-4 sm:grid-rows-6">
        <CardHorizontal Services={MyServices} />
      </section>
    </div>
  );
};

export default Services;
