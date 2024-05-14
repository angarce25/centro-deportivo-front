import React from 'react'
import Img2 from '../../assets/slide/sponsors.png'
import Img1 from '../../assets/slide/team.png'
import Img3 from '../../assets/slide/aftermatch.png'
import Slider  from 'react-slick'

const ImageList = [
  {
    id: 1,
    img: Img1,
    title: "Bienvenido al Club Deportivo Ciudad de Los Ángeles",
    description: "Hazte socio y disfruta de todos los benecificios",
  },
  {
    id: 2,
    img: Img2,
    title: "Bienvenido al Club Deportivo Ciudad de Los Ángeles",
    description: "Conoce quienes son nuestro patrocinadores",
  },
  {
    id: 3,
    img: Img3,
    title: "Bienvenido al Club Deportivo Ciudad de Los Ángeles",
    description: "El fútbol base fomenta el compañerismo",
  }

];

const Slide = () => {
  
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  
  return (
    <div className='relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-l flex justify-center items-center
     dark:bg-white dark:text-black duration-200'>
       {/* background section */}
      <div className='h-[700px] w-[700px] bg-gray/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8] '>
      </div>
      {/* slider section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((data) =>(
          <div>
           {/* text content section */}
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              <div  className='flex flex-col justify-center
                gap-4 pt-12 sm:pt-0 text-center sm:text-left
                order-2 sm:order-1 relative z-10'>
                  <h1 className='text-5xl sm:text-6xl
                   lg:text-7xl font-bold'>
                    {data.title}
                  </h1>
                  <p className='text-s'>
                  {data.description}
                  </p>
                  <div>
                    <button 
                      className='bg-gradient-to-r from-yellow-d to-beige hover:scale-105
                       duration-200 text-black py-2 px-4
                       rounded-full'>
                        Únete a nosostros
                    </button>
                  </div>
                </div>
                <div className='order-1 sm:order-2'>
                  <div className='relative z-10'>
                    <img 
                     src={data.img}
                     alt=''
                     className='w-[300px] h-[300px] sm:h-[450px] 
                     sm:w-[450px] sm:scale-125 lg:scale-120
                     object-contain mx-auto'
                    />
                  </div>
                </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide
