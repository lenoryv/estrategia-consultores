function CardOrg({orgs}) {
    return orgs?.map((org) => {
      return (
        <div
          key={org.name}
          className="flex h-auto w-full sm:w-auto sm:max-w-[320px] sm:max-h-40 p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          style={{ boxShadow: `0 10px 15px -3px ${org.color}` }}
        >
          <div className="flex items-center min-w-max h-full mr-4">
            <img
              src={
                org.urlImage ??
                "https://icones.pro/wp-content/uploads/2021/04/icone-cercle-gris.png"
              }
              className="w-16 h-16"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col">
            <h5 className="flex text-left text-sm font-semibold font-poppins tracking-tight text-gray-900 dark:text-white">
              {org.name}
            </h5>
            <p className="flex font-semibold font-sans text-xs text-left text-gray-700 dark:text-gray-400">
              {org?.countries}
            </p>
            <p className="flex font-light text-left text-xs text-gray-700 dark:text-gray-400">
              {org?.years}
            </p>
          </div>
        </div>
      );  
    });
    
}
export {CardOrg};