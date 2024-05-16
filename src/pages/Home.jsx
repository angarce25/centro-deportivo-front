import React from 'react'
import ImgAboutus from '../assets/home/imgabout.png'
import Slide from '../components/home/Slide'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'


const Home = () => {
 
  return (
    <div className='home'>
      <Header/>
      <Slide/>
      {/* about us section */}
      <div className='min-h[550px] flex justify-center items-center py-12 
      sm:py-0'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2
          gap-6 items-center'>
            <div data-aos="zoom-in">
              <img 
              src={ImgAboutus} alt=""
              className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' />
            </div>

            {/* text details section */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
              <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'>
                ¿Quienes somos?
              </h1>
              <div data-aos="fade-up" className='etxt-sm text.grey tracking-wide leading-5'>
              <p>
                El barrio Madrileño de la Ciudad de los Ángeles tiene una gran tradicón futbolística.
                Existían dos grandes equipos el CD. Ciudad los Ángeles y la AD. Rayo los Ángeles.
                Diversos motivos hicieron que ambos clubes desaparecieran y para que los chicos de nuestro barrio no se quedasen sin la posibilidad de practicar su deporte preferido en 
                Marzo de 2003 nació el Club Deportivo Ciudad de los Ángeles, con el objetivo de que nuestro barrio siga representando en los mejores Campos de la Comunidaad de Madrid y solucionar ese hambre de fútbol de todos nuestros vecinos y vecinas.
              </p>
              <p>
                Así comenzó nuestra historia, un grupo de amigos jugando futbol, comprometidos
                con el barrio y su gente, apoyados por los comercios para sacar adelante el equipo económicamente, transmitiendo sus magníficos velores y su amor por este deporte.
              </p>
              <p>
                Lo mas importante del club son nuestros niños, niñas, adolescentes y adultos que sienten el club un lugar en el que se sienten felices, plenos de alegría y encuentran
                diversión, amistad y aamor por sus compañeros y compañeras.
                Actualmente el club está en su mejor momento, lo que empezó siendo un equipo de amigos, ahora se ha convertido en un club deportivo que celebra entrenamientos todos los días de la semana y juega sus partidos durante el fin de semana de manera interrrumpida.
              </p>
              </div>   
            </div>
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  
  
  )
}

export default Home