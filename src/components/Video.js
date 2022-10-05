function Video() {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <iframe
          className="w-full sm:w-full h-64 rounded-lg"
          src="https://www.youtube.com/embed/SN3t8qiTa2Q"
          title="Cómo incorporar videos y listas de reproducción"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </a>
    </div>
  );
}

export { Video };
