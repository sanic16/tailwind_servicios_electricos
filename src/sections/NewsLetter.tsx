const NewsLetter = () => {
  return (
    <section
      id="early-access"
      className="relative px-6 dark:bg-darkBlue2 md:px-0"
    >
      <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-300 dark:bg-darkBlue1 md:px-16">
        <h5 className="text-2xl font-bold">
          ¿Quieres ser el primero en recibir nuestras promociones?
        </h5>
        <p className="text-sm">
          Suscríbete a nuestro boletín y recibe nuestras promociones exclusivas.
          No te preocupes, no hacemos spam.
        </p>
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="w-full md:flex-1">
            <input
              type="email"
              className="w-full px-10 py-3 rounded-full focus:outline-none"
              placeholder="Tu correo electrónico"
            />
          </div>
          <button className="w-full p-3 px-6 rounded-full bg-black text-white md:w-56 hover:scale-95 dark:bg-white dark:text-black">
            Suscribirme
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
