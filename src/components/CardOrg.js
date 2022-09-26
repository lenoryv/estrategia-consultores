function CardOrg({orgs}) {
    return orgs?.map((org) => {
      return (
        <a
          key={org.name}
          href="/"
          className="flex h-auto w-full sm:w-auto sm:max-w-[400px] sm:max-h-40 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex items-center min-w-max h-full mr-4">
            <img src={org.urlImage} className="w-24 h-24" alt="Logo"/>
          </div>
          <div className="flex flex-col">
            <h5 className="flex mb-2 text-left text-xl font-semibold font-poppins tracking-tight text-gray-900 dark:text-white">
              {org.name}
            </h5>
            <p className="flex font-normal font-sans text-base text-left text-gray-700 dark:text-gray-400">
              {org?.countries}
            </p>
            <p className="flex font-normal text-left text-sm text-gray-700 dark:text-gray-400">
              {org?.years}
            </p>
          </div>
        </a>
      );  
    });
    
}
export {CardOrg};