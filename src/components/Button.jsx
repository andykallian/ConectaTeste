import React from 'react';

const Button = ({ buttonClass }) => {
  
  const defaultClasses = 'bg-green-500 w-[188px] h-[56px] rounded-full text-black font-bold';

  const buttonClasses = buttonClass ? `${defaultClasses} ${buttonClass}` : defaultClasses;

  return (
    <button className={buttonClasses}>
      Aqui um CTA
    </button>
  );
}

export default Button;