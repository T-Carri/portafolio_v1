import React from 'react'
import { tecnologias } from './constants'
import { Kanit} from "next/font/google";

const kanit = Kanit({
  weight: '500', // Aquí especifica el peso deseado, por ejemplo, '400' para regular.
  subsets: ['latin'],
});

const Tecnologias = () => {
  return (
    <div className=" w-full xl:w-1/2 h-90 block  sm:block  lg:flex md:items-center lg:justify-center xl:flex xl:items-center xl:justify-center border border-dotted border-4 border-white p-2">

    <div className='border border-solid border-4 border-white p-2' >
      <div className={` text-center ${kanit.className}`}>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">    <h5 className='text-lg'>Herramientas de entorno</h5></span>
      </div>
      <div className='flex flex-row lg:flex-col xl:flex-col m-1'>
        {tecnologias[0].herramientasEntorno.map((svg, index) => (
          <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
        ))}
      </div>
    </div>
  
    <div className='border border-dashed border-4  border-white p-2 h-90 '>
      <div className={` text-center ${kanit.className}`}>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">   <h5 className='text-lg'>Front end</h5></span>
     
      </div>
      <div className='flex flex-row lg:flex-col xl:flex-col m-1'>
        {tecnologias[0].frontend.map((svg, index) => (
          <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
        ))}
      </div>
    </div>
  
    <div className='border border-solid  border-4 border-white p-7 '>
      <div className={` text-center m-1 ${kanit.className}`}>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">   <h5 className='text-lg'>Full stack</h5></span>
        </div>
      <div>
        <div className='flex flex-row lg:flex-col xl:flex-col m-1'>
          {tecnologias[0].fullstack.map((svg, index) => (
            <img key={index} src={svg} alt="Tecnología de Entorno" width={100} height={70} />
          ))}
        </div>
      </div>
    </div>
  
    <div className='border border-dashed border-4 border-white p-2'>
      <div className={` text-center ${kanit.className}`}>
        
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"><h5 className='text-lg'> Back end</h5> </span>
        </div>
      <div>
        <div className='flex flex-row lg:flex-col xl:flex-col m-1'>
          {tecnologias[0].backend.map((svg, index) => (
            <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
          ))}
        </div>
      </div>
    </div>
  
    <div className='border border-solid border-4 border-white p-2'>
      <div className={` text-center ${kanit.className}`}>      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"><h5 className='text-lg'> Tecnologias en proceso de aprendizaje</h5> </span></div>
      <div>
        <div className='flex flex-row lg:flex-col xl:flex-col m-1'>
          {tecnologias[0].tecnologias.map((svg, index) => (
            <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
          ))}
        </div>
      </div>
    </div>
  

  </div>
  
  
  )
}

export default Tecnologias