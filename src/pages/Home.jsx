import ImgAboutus from "../assets/home/imgabout.png";
import HistoriaClub from "../assets/home/FotoHistoriaClub.jpg"
import Header from "../components/home/Header.jsx";
import Slide from "../components/home/Slide";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Slide />

      {/* about us section */}
      <div
        className="min-h[550px] flex justify-center items-center py-12 
      sm:py-0 mt-2"
      >
        <div className="container">
          <div
            className="grid grid-cols-1 lg:grid-cols-2
          gap-6 items-center mb-5"
          >
            {/* text details section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 mb-5">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-3xl font-bold mt-9 ml-10"
              >
                ¿Quienes somos?
              </h1>
              <hr className="border-t-4 border-yellow-300 mt-2 mb-3 ml-12" />

              <div
                data-aos="fade-up"
                className="etxt-sm text.grey tracking-wide leading-5"
              >
                <p
                  className="mt-2 ml-12 mr-12 text-gray-700 text-lg text-justify mb-6 "
                  style={{ textIndent: "2rem" }}
                >
                  El barrio madrileño de la Ciudad de los Ángeles tiene una gran
                  tradición futbolística. Existían dos grandes equipos: CD
                  Ciudad de los Ángeles y AD Rayo los Ángeles. Diversos motivos
                  llevaron a la desaparición de ambos clubes. Para que los
                  jóvenes del barrio no se quedaran sin practicar su deporte
                  favorito, en marzo de 2003 nació el Club Deportivo Ciudad de
                  los Ángeles, con el objetivo de que nuestro barrio siga
                  representado en los mejores campos de la Comunidad de Madrid y
                  satisfacer la pasión por el fútbol de nuestros vecinos.
                </p>
                <p className="mt-5 ml-12 mr-12 text-gray-700 text-lg text-justify">
                  En marzo de 2003, un grupo de amigos del barrio de la Ciudad
                  de los Ángeles (distrito Villaverde) decidió crear este
                  proyecto con gran ilusión.
                </p>
                <p className="mt-5 ml-12 mr-12 text-gray-700 text-lg text-justify">
                  Así comenzó nuestra historia: un grupo de amigos jugando al
                  fútbol, comprometidos con el barrio y su gente, apoyados por
                  los comercios para sacar adelante el equipo económicamente,
                  transmitiendo sus valores y su amor por este deporte.
                </p>
              </div>
            </div>

            <div data-aos="zoom-in" className="lg:mt-10 md:mt-4 sm:mt-2">
              <img
                src={HistoriaClub}
                alt=""
                className="max-w-[600px] h-[480px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg"
              />
            </div>

            {/* seccion de historia del club */}
            <div data-aos="zoom-in" className="mb-5 mt-2">
              <img
                src={ImgAboutus}
                alt=""
                className="max-w-[600px] h-[480px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0 m-0">
              <div
                data-aos="fade-up"
                className="etxt-sm text.grey tracking-wide leading-5"
              >
                <p className="mt-2 mb-9 ml-12 mr-12 text-gray-700 text-lg text-justify">
                  Ahora, 21 años después, estamos orgullosos de ver que seguimos
                  adelante, con equipos en todas las categorías, y que los
                  chicos y chicas del barrio pueden disfrutar del fútbol
                  defendiendo la camiseta y el escudo de Ciudad de los Ángeles.
                </p>

                <p className="mt-0 ml-12 mr-12 text-justify text-gray-700 text-lg">
                  Actualmente el club está es su mejor momento, lo que empezó
                  siendo un equipo de amigos, ahora se ha convertido en un club
                  deportivo que celebra entrenamientos todos los días de la
                  semana y juega sus partidos durante el fin de semana de manera
                  ininterrumpida.
                </p>
                <p className="mt-5 ml-12 mr-12 text-justify text-gray-700 text-lg">
                  En esta temporada 2023/24 contamos 12 equipos, formados por
                  244 jugadores/as y 23 entrenadores, compitiendo todos ellos en
                  la Federación de Fútbol de Madrid.
                </p>
                <p className="mt-5 mb-10 ml-12 mr-12 text-justify text-gray-700 text-lg">
                  Así comenzó nuestra historia: un grupo de amigos jugando al
                  fútbol, comprometidos con el barrio y su gente, apoyados por
                  los comercios para sacar adelante el equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
