const Survey = () => {
  return (
    <div className="w-full h-screen dark:bg-gray-900">
      <section className="mt-20 sm:mt-24 h-full">
        <iframe
          className="md:w-11/12 w-full h-5/6"
          title="Consulta del Dia"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeUXjWWTloAm9phaqR4CNJCLnqonB9bv_D3wIHlH1xCt6fZZA/viewform?embedded=true"
        >
          Cargando…
        </iframe>
      </section>
    </div>
  );
};

export default Survey;
