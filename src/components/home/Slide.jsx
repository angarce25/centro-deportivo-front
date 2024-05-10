import React from 'react'
import Img2 from '../../assets/slide/sponsors.png'
import Img1 from '../../assets/slide/team.png'
import Img3 from '../../assets/slide/aftermatch.png'

const ImageList = [
  {
    id: 1,
    img: Img1,
    title: "Bienvenido al Centro Deportivo Ciudad de Los Angeles",
    description: "",
  },
  {
    id: 2,
    img: Img2,
    title: "Bienvenido al Centro Deportivo Ciudad de Los Angeles",
    description: "Estos son nuestro patrocinadores",
  },
  {
    id: 3,
    img: Img3,
    title: "Bienvenido al Centro Deportivo Ciudad de Los Angeles",
    description: "El fútbol base fomenta el compañerismo",
  }

]

const Hero = () => {
  return (
  <>
  <div className='relative overflow-hidden min-h-[500px]
  sm:min-h-[650px] bg-gray-l flex justify-center items-center dark:bg-white dark:text-black
  duration-200'>
      {/* background pattern */}
    {/* <div className='h-[700px] w-[700px] bg-gray
     absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9 '>
    </div> */}
      {/* slide section */}
      <div className='container pb-8 sm:pb-0'>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text content section */}
            <div>
              <h1 className='text-5xl sm:text-6xl
              lg:text-7xl font-bold'>
                Lorem ipsum dolor
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus illum accusantium aspernatur earum
                tempore quos minus blanditiis quo sequi,
              </p>
              <button className='bg-yellow-d hover:scale-105
              duration-200 text-gray py-2 px-4
              rounded-full'>Inscripción de jugadores</button>
            </div>
            {/* image section */}
            <div>
              <div>
                <img src={Img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Hero
