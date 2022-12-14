import { Directivos, Asociados } from "../data/LocalDB";
import { CardPerson } from "../components/CardPerson";
import { CardPartner } from "../components/CardPartner";

const Team = () => {
    return (
      <div className="dark:bg-gray-900">
        <section className="sm:w-full flex flex-col sm:px-24 sm:h-full px-6 sm:pt-28 pt-24 gap-6">
          <span className="text-left uppercase font-montserrat text-base sm:text-2xl font-medium text-ec-blue dark:text-white">
            Equipo Ejecutivo
          </span>
          <CardPerson people={Directivos} />
        </section>
        <span className="flex mx-6 sm:mx-24 text-left uppercase font-montserrat text-base sm:text-2xl font-medium mt-8 text-ec-blue dark:text-white">
          Consultores Asociados
        </span>
        <section className="flex sm:grid md:grid-cols-1 lg:grid-cols-2 sm:grid-rows-2 xl:grid-cols-3 flex-col sm:px-24 sm:h-auto px-6 sm:mb-24 my-8 gap-6">
          <CardPartner people={Asociados} />
        </section>
      </div>
    );
}
export default Team;