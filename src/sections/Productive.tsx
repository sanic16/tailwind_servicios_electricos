import productive from "@/../public/images/worker2.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const Productive = () => {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">
      {/* Productive Container */}
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        <div className="md:w-1/2 relative">
          <Image src={productive} alt="" className="mb-10" />
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Servicios de calidad
            </h4>
            <p className="text-md md:text-lg">
              Contamos con un equipo de profesionales altamente capacitados para
              brindarte un servicio de calidad y confiable.
            </p>
            <p className="text-md md:text-lg">
              Nuestros servicios están garantizados y te ofrecemos una garantía
              de satisfacción.
            </p>
          </div>

          <div className="block mt-4 relative">
            <a
              href="#"
              className="py-3 rounded-full px-16 bg-black text-white hover:bg-black/90 flex items-center gap-4 dark:bg-white dark:text-black"
            >
              Ver más{" "}
              <div className="flex">
                <FaArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
