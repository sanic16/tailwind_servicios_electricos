import Image from "next/image";
import { FaTools } from "react-icons/fa";
import { FaLightbulb, FaPlugCircleBolt, FaSolarPanel } from "react-icons/fa6";

const features = [
  {
    id: 1,
    title: "Instalaciones Eléctricas",
    description:
      "Realizamos instalaciones eléctricas residenciales y comerciales con las normas de seguridad vigentes. ",
    image: FaPlugCircleBolt,
  },
  {
    id: 2,
    title: "Soluciones de Iluminación",
    description:
      "Diseñamos e instalamos sistemas de iluminación eficientes tanto para interiores como exteriores.",
    image: FaLightbulb,
  },
  {
    id: 3,
    title: "Inspecciones y Mantenimiento",
    description:
      "Realizamos inspecciones y mantenimiento preventivo para garantizar el correcto funcionamiento de tus instalaciones.",
    image: FaTools,
  },
  {
    id: 4,
    title: "Sistemas de Energía Solar",
    description:
      "Diseñamos e instalamos sistemas de energía solar para reducir tu consumo de energía y ahorrar en tus facturas.   ",
    image: FaSolarPanel,
  },
];
const Features = () => {
  return (
    <section id="features" className="pt-12 bg-[#e6e6e6ff] dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-16 md:gap-y-20">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center space-y-2 text-center bg-white px-4 py-8 rounded dark:bg-darkBlue3"
            >
              <div className="relative flex items-center justify-center mb-6">
                <feature.image className="text-5xl" />
              </div>
              <h3 className="font-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
