import React from 'react'
import Button from './Button'

const buttonClass = 'absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-green-500'

const ProductCard = ({image, product, description}) => {
  return (
    <div className='sm:w-11/12 w-[360px] h-[484px] rounded-2xl shadow-custom flex flex-col items-center justify-center relative'>
      <div>
        <img src={image} alt="" className=' h-[290px]' />
        <h2 className='text-center'>{product}</h2>
        <p className='text-center'>{description}</p>
      </div>

      <Button
        buttonClass={buttonClass}
      />
    </div>
  )
}

export default ProductCard