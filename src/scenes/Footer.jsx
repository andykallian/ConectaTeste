import React from 'react';
import logo from '../assets/union.png';
import facebookLogo from '../assets/instagram-logo.png';
import instagramLogo from '../assets/facebook-logo.png';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from '../components/Button';



const Footer = () => {
  return (
    <Router>
      <div className='bg-black h-[792px] sm:justify-center md:justify-normal z-10 flex relative'>
        <div className='flex w-4/5 sm:mx-0 sm:w-11/12 md:mx-auto justify-center flex-col gap-22'>

          <div className='flex justify-between items-center sm:flex-col md:flex-row sm:gap-[40px] md:gap-0'>

            <div className='flex flex-col sm:items-center md:items-start gap-4'>

              <h2 className='text-white font-vollkorn font-bold text-[40px] leading-[52px]'>Fale Conosco.</h2>
              <div className='flex items-center gap-4'>
                <Link to='#'>
                  <img src={facebookLogo} className='w-[18px] h-[18px] rounded' alt='' />
                </Link>
                <Link to='#'>
                  <img src={instagramLogo} className='w-[18px] h-[18px] rounded' alt='' />
                </Link>
                <p className='text-white font-inter text-[12px]'> | REDES SOCIAIS</p>
              </div>

            </div>

            <div className='sm:w-11/12 md:w-[555px] flex flex-col items-end'>
              <form action='' className='w-full'>

                <div className='mb-4'>
                  <label htmlFor='nome' className='text-green-500 font-roboto text-[14px]'>
                    Nome:
                  </label>
                  <input type='text' id='nome' name='nome' placeholder='John Doe' className='border-t border-r border-b-0 border-l-0 focus:border-t focus:border-r focus:border-b-0 focus:border-l-0 rounded bg-black p-2 w-full text-white' required />
                </div>

                <div className='mb-4 flex justify-between'>

                  <div className='flex flex-col w-2/6 '>
                    <label htmlFor='telefone' className='text-white font-roboto text-[14px]'>
                      Telefone:
                    </label>
                    <input type='tel' id='telefone' name='telefone' placeholder='(21) 00000-0000' className='border-t border-r border-b-0 border-l-0 rounded bg-black p-2 w-full text-white'  required />
                  </div>

                  <div className='flex flex-col w-7/12'>
                    <label htmlFor='email' className='text-white font-roboto text-[14px]'>
                      Email:
                    </label>
                    <input type='email' id='email' name='email' placeholder='email@email.com' className='border-t border-r border-b-0 border-l-0 rounded bg-black p-2 w-full text-white' required />
                  </div>
                </div>

                <div className='mb-4'>
                  <label htmlFor='assunto' className='text-white font-roboto text-[14px]'>
                    Assunto:
                  </label>
                  <select id='assunto' name='assunto' placeholder='Selecione um Assunto' className='border-t border-r border-b-0 border-l-0 rounded bg-black p-2 w-full text-white' required>
                    <option value='' disabled selected hidden>Selecione um Assunto</option>
                    <option value='vagas_frontend'>Vagas Frontend</option>
                    <option value='vagas_backend'>Vagas Backend</option>
                    <option value='vagas_fullstack'>Vagas Fullstack</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label htmlFor='mensagem' className='text-white font-roboto text-[14px]'>
                    Mensagem:
                  </label>
                  <textarea id='mensagem' name='mensagem' rows='4' className='border-t border-r border-b-0 border-l-0 rounded bg-black p-2 w-full text-white' required></textarea>
                </div>
              </form>

              <Button buttonClass={'bg-green-500'} buttonText={'Enviar'} />
            </div>

          </div>

          <div className='flex justify-between sm:flex-col md:flex-row md:items-center sm:gap-[20px] md:gap-0'>
            <p className='font-inter text-white text-[12px] leading-[14px]'>Todos os direitos reservados © 2020 Conecta</p>
            <div className='flex items-center'>
              <p className='font-inter text-[9px] leading-[10px] text-white mr-2'>PROJETADO POR</p>
              <Link to="#">
                <img src={logo} alt='Logo' className='w-[78px] h-[11px]' />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Router>
  );
};

export default Footer;
