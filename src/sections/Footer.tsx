import { FaMailBulk } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="dark:bg-darkBlue2 dark:text-white">
      <div className="container mx-auto pt-12 px-5 pb-10">
        <div className="grid gap-y-8 xs:grid-cols-2 items-start justify-items-start xs:gap-x-8 xs:gap-y-4 md:gap-x-16 md:gap-y-8 lg:grid-cols-4 lg:gap-x-4 lg:justify-items-center">
          <div>
            <div className="flex flex-col pb-5">
              <div>
                <h1 className="font-crimsonText text-4xl font-bold mb-4">
                  Electroser
                </h1>
                <p>
                  Somos una empresa dedicada a brindar servicios de calidad en
                  instalaciones eléctricas, iluminación y energía solar.
                </p>
              </div>
              <div className="flex justify-start gap-x-4 mt-8">
                <div>
                  <a href="#" className="relative">
                    <FaFacebook />
                  </a>
                </div>
                <div>
                  <a href="#" className="relative">
                    <FaTwitter />
                  </a>
                </div>
                <div>
                  <a href="#" className="relative">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold text-lg">Contáctanos</h1>
              <div className="flex items-center space-x-3 ">
                <div className="w-6 relative">
                  <FaPhone />
                </div>
                <div>+502 5838-5838</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 relative">
                  <FaMailBulk />
                </div>
                <div>julio@email.com</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-lg">Enlaces</h1>

              <div className="flex flex-col space-y-3">
                <a href="#">Nosotros</a>
                <a href="#">Ofertas de Trabajo</a>
                <a href="#">Servicos</a>
                <a href="#">Nosotros</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="font-bold text-lg">Términos y Condiciones</h1>

              <div className="flex flex-col space-y-3">
                <a href="#">Contáctanos</a>
                <a href="#">Términos</a>
                <a href="#">Privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
