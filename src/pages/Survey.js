const Survey = () => {
  return (
    <div className="w-full h-screen sm:pt-4 pt-4 dark:bg-gray-900">
      <section className="mt-20 sm:mt-24 h-full">
        <iframe
          className="md:w-11/12 w-full h-full pb-20"
          title="Consulta del Dia"
          src="https://docs.google.com/forms/d/e/1FAIpQLSddI9JOFCEKh67Z3gdCb6g3cIbeHhXnFDzae0OwRGAFQXd98Q/viewform?embedded=true"
        >
          Cargando…
        </iframe>
      </section>
    </div>
  );
};
export default Survey;
