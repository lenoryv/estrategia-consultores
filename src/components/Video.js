function Video() {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <iframe
          className="w-full sm:w-full h-[354px] rounded-lg"
          src="https://www.youtube.com/embed/SN3t8qiTa2Q"
          title="Cómo incorporar videos y listas de reproducción"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </a>
    </div>
  );
}

export { Video };
