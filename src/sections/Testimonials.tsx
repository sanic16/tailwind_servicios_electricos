import Image from "next/image";

import profile1 from "@/../public/images/profile-1.jpg";
import profile2 from "@/../public/images/profile-2.jpg";
import profile3 from "@/../public/images/profile-3.jpg";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "Henry Espinoza",
    title: "Dueño de Servicios Telec",
    description:
      "El servicio que me brindaron fue excelente, son muy profesionales y confiables. Los recomiendo.",
    image: profile1,
  },
  {
    id: 2,
    name: "María Gonzales",
    title: "Dueña de Empresa",
    description:
      "Estoy muy contenta con el servicio que me brindaron, son muy profesionales y confiables. Los recomiendo.",
    image: profile3,
  },
  {
    id: 3,
    name: "Juan Perez",
    title: "Dueño de Empresa",
    description:
      "El servicio que me brindaron fue excelente, son muy profesionales y confiables. Los recomiendo.",
    image: profile2,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#e6e6e6ff] dark:bg-darkBlue">
      {/* Testimonials Container */}
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex flex-col  w-full space-y-6 lg:flex-row lg:space-y-0 lg:space-x-16">
          <div className="text-5xl absolute left-0 top-0">
            <FaQuoteLeft />
          </div>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col p-10 space-y-6 rounded-lg bg-white dark:bg-darkBlue3 lg:w-1/3"
            >
              <p className="text-sm leading-5 md:text-lg">
                {testimonial.description}
              </p>
              <div className="flex space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>
                  <h5 className="text-sm font-semibold">{testimonial.name}</h5>
                  <p className="text-xs font-extralight">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
