import React, { useState } from 'react';

import pessoasFesta from "../assets/michael-discenza.png"
import garcon from "../assets/ash-edmonds.png"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      name: '@danielmaciel1',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
    },
    {
      id: 2,
      name: '@danielmaciel2',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
    },
    {
      id: 3,
      name: '@danielmaciel3',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
    },
    {
      id: 4,
      name: '@danielmaciel4',
      description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”',
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

      <div className="slider-content">
        <h2 className='font-artigo text-[18px] font-normal leading-6 text-white'>{slides[currentIndex].description}</h2>
        <p className='font-artigo text-[18px] font-normal leading-6 text-white'>{slides[currentIndex].name}</p>
      </div>

      <div className="slider-controls">
        <button onClick={handlePrevSlide} className='font-artigo text-[18px] font-normal leading-6 text-white'>&lt;</button>
        <div className="dots">
          {slides.map((slide) => (
            <span
              key={slide.id}
              className={currentIndex === slide.id - 1 ? 'dot active' : 'dot'}
            ></span>
          ))}
        </div>

        <button onClick={handleNextSlide} className='font-artigo text-[18px] font-normal leading-6 text-white'>&gt;</button>

      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="flex flex-col justify-between">
        <Slider />
        <div>
          <img src={garcon} alt="" />
        </div>
    </div>
  );
};

const LeftSection = () => {
  return (
    <div className=''>
      <img src={pessoasFesta} alt="" />
    </div>
  );
};

const SliderComponent = () => {
  return (
    <div className="flex mb-28 h-[811px] w-[1132px]">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default SliderComponent;
