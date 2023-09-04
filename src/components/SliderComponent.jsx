import React, { useState } from 'react';

import pessoasFesta from "../assets/michael-discenza.png"
import garcon from "../assets/ash-edmonds.png"



const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      name: '@danielmaciel 1',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
    },
    {
      id: 2,
      name: '@danielmaciel 2',
      description: '“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, amet praesentium.”',
    },
    {
      id: 3,
      name: '@danielmaciel 3',
      description: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eveniet earum!”',
    },
    {
      id: 4,
      name: '@danielmaciel 4',
      description: '“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, ab tempora?”',
    },
  ];

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-carrousel-bg h-full flex flex-col items-center justify-center">

      <div>
        <h2 className='font-vollkorn  font-normal leading-6 m-auto text-center w-[367px] text-white'>{slides[currentIndex].description}</h2>
        <p className='font-vollkorn  font-normal leading-6 w-2/5 m-auto text-center mt-1 text-white'>{slides[currentIndex].name}</p>
      </div>

      <div className="flex gap-4 mt-2">
        <button onClick={handlePrevSlide} className='font-vollkorn text-[18px] font-normal leading-6 text-white'>&lt;</button>
        <div>
          {slides.map((slide) => (
            <span
              key={slide.id}
              
            ></span>
          ))}
        </div>

        <button onClick={handleNextSlide} className='font-vollkorn text-[18px] font-normal leading-6 text-white'>&gt;</button>

      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="flex flex-col justify-between">
        <Slider />
        <div>
          <img src={garcon} alt="" className='w-full' />
        </div>
    </div>
  );
};

const LeftSection = () => {
  return (
    <div>
      <img src={pessoasFesta} alt="" className='h-full' />
    </div>
  );
};

const SliderComponent = () => {
  return (
    <div className="flex sm:flex-col md:flex-row mb-28 h-[811px] w-[1132px] sm:w-11/12">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default SliderComponent;
