import React from 'react'
import ProductCard from '../components/ProductCard'

import garrafaGuarana from "../assets/garrafa-guarana.png"
import lataGuarana from "../assets/lata-guarana.png"
import SliderComponent from '../components/SliderComponent'


const Body = () => {
  return (
    <div className='w-5/6 flex flex-col items-center mx-auto'>
      
      <div className='flex flex-col my-[55px] items-center'>
        <h2 className='font-vollkorn font-extrabold text-[24px] leading-8'>Produtos</h2>
        <p className='font-vollkorn font-normal text-[16px] leading-8 w-[458px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.</p>
      </div>

      <div className='flex gap-24 mb-28'>
        <ProductCard
          image={garrafaGuarana}
          product={'Garrafa 350ml'}
          description={'Lorem ipsum dolor sit amet'}
        />
        <ProductCard
          image={lataGuarana}
          product={'Garrafa 100ml'}
          description={'Lorem ipsum dolor sit amet'}
        />
      </div>

      <SliderComponent/>

    </div>
  )
}

export default Body