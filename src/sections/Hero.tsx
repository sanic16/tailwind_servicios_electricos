import HeroImage from "@/../public/images/worker.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-top"
    >
      {/* Hero Container */}
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <div className="relative h-80">
          <Image
            src={HeroImage}
            alt=""
            className="mx-auto h-full object-contain"
          />
        </div>
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          Toda tu instalación elécrica en un solo lugar
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Te garantizamos un servicio de calidad, seguro y confiable. Contamos
          con una amplia gama de servicios para tu hogar o empresa.
        </p>
        <button className="py-3 rounded-full px-16 bg-black text-white hover:scale-95 dark:text-black dark:bg-white ">
          Contactanos
        </button>
      </div>
    </section>
  );
};

export default Hero;
