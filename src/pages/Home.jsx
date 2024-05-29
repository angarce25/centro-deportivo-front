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
      sm:py-0"
      >
        <div className="container">
          <div
            className="grid grid-cols-1 lg:grid-cols-2
          gap-6 items-center mb-5"
          >
            <div data-aos="zoom-in">
              <img
                src={ImgAboutus}
                alt=""
                className="max-w-[600px] h-[480px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg"
              />
            </div>

            {/* text details section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 mb-5">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold mt-12 ml-14"
              >
                ¿Quienes somos?
              </h1>
              <div
                data-aos="fade-up"
                className="etxt-sm text.grey tracking-wide leading-5"
              >
                <p className="mt-2 ml-12 mr-12 text-justify">
                  Así se escribió el comienzo de nuestra historia, con un grupo
                  de amigos que se reunían para jugar al fútbol, unidos por su
                  compromiso con el barrio y su comunidad. Con el respaldo de
                  los comercios locales, lograron sostener económicamente al
                  equipo, transmitiendo sus magníficos valores y su profundo
                  amor por este deporte.
                </p>
                <p className="mt-5 ml-12 mr-12 text-justify">
                  Sin embargo, lo más destacado de nuestro club son nuestros
                  niños, niñas, adolescentes y adultos, quienes lo consideran un
                  lugar donde encuentran verdadera felicidad. Para ellos, el
                  club es mucho más que un campo de juego; es un espacio donde
                  experimentan alegría, donde encuentran diversión, amistad y
                  amor por sus compañeros y compañeras. Este crecimiento
                  constante no ha hecho más que fortalecer los lazos que nos
                  unen como comunidad, reafirmando nuestro compromiso con el
                  desarrollo integral de nuestros jugadores y jugadoras. Cada
                  día, nos esforzamos por mejorar y ofrecer nuevas oportunidades
                  para que todos los miembros del club puedan alcanzar su máximo
                  potencial en el deporte que amamos.
                </p>
                <p className="mt-5 mb-9 ml-12 mr-12 text-justify">
                  Este crecimiento constante no ha hecho más que fortalecer los
                  lazos que nos unen como comunidad, reafirmando nuestro
                  compromiso con el desarrollo integral de nuestros jugadores y
                  jugadoras. Cada día, nos esforzamos por mejorar y ofrecer
                  nuevas oportunidades para que todos los miembros del club
                  puedan alcanzar su máximo potencial en el deporte que amamos.
                </p>
              </div>
            </div>

            {/* seccion de historia del club */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 m-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold mt-2 ml-14"
              >
                Historia del Club
              </h1>
              <div
                data-aos="fade-up"
                className="etxt-sm text.grey tracking-wide leading-5"
              >
                <p className="mt-0 ml-12 mr-12 text-justify">
                  El barrio Madrileño de la Ciudad de los Ángeles tiene una gran
                  tradición futbolística. Existían dos grandes equipos el CD.
                  Ciudad los Ángeles y la AD. Rayo los Ángeles. Diversos motivos
                  hicieron que ambos clubes desaparecieran y para que los chicos
                  de nuestro barrio no se quedasen sin la posibilidad de
                  practicar su deporte preferido en Marzo de 2003 nació el Club
                  Deportivo Ciudad de los Ángeles, con el objetivo de que
                  nuestro barrio siga representado en los mejores Campos de la
                  Comunidad de Madrid y solucionar ese hambre de fútbol de todos
                  nuestros vecinos y vecinas.
                </p>
                <p className="mt-5 ml-12 mr-12 text-justify">
                  En Marzo de 2003 con una enorme ilusión de un grupo de amigos
                  del barrio de la Ciudad de los Ángeles (distrito Villaverde),
                  decidieron crear y creer en este maravilloso proyecto.
                </p>
                <p className="mt-5 ml-12 mr-12 text-justify">
                  Así comenzó nuestra historia, un grupo de amigos jugando al
                  fútbol, comprometidos con el barrio y su gente, apoyados por
                  los comercios para sacar adelante el equipo económicamente,
                  transmitiendo sus magníficos valores y su amor por este
                  deporte.
                </p>
                <p className="mt-5 mb-5 ml-12 mr-12 text-justify">
                  Ahora se cumplen 21 años desde que todo empezó y estamos
                  orgullos de ver que seguimos adelante, que tenemos equipos en
                  todas las categorías y que los chic@s del barrio pueden
                  disfrutar del fútbol defendiendo la camiseta y el escudo de su
                  barrio, Ciudad de los Ángeles.
                </p>
              </div>
            </div>

            <div data-aos="zoom-in" className="mb-5 mt-2">
              <img
                src={HistoriaClub}
                alt=""
                className="max-w-[600px] h-[480px] w-full mx-auto shadow-xl object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
