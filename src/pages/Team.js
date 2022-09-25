import { Directivos, Asociados } from "../data/LocalDB";
import { CardPerson } from "../components/CardPerson";

const Team = () => {
    return (
      <div>
        <section className="sm:w-full flex flex-col sm:px-24 sm:h-full px-6 sm:mt-24 mt-24 gap-6">
          <span className="text-left uppercase font-poppins text-base sm:text-2xl font-medium text-ec-blue">
            Equipo Ejecutivo
          </span>
          <CardPerson people={Directivos} />
        </section><span className="flex mx-6 sm:mx-24 text-left uppercase font-poppins text-base sm:text-2xl font-medium mt-8 text-ec-blue">
            Consultores Asociados
          </span>
        <section className="grid sm:grid sm:grid-cols-3 sm:grid-rows-2 flex-col sm:px-24 sm:h-full px-6 sm:mb-24 my-8 gap-6">
          <CardPerson people={Asociados} />
        </section>
      </div>
    );
}
export default Team;