import React from 'react'
import { tecnologias } from './constants'
import { Kanit} from "next/font/google";
import Image from 'next/image';

const kanit = Kanit({
  weight: '500', // Aquí especifica el peso deseado, por ejemplo, '400' para regular.
  subsets: ['latin'],
});

const Tecnologias = () => {
  return (
    <div className=" w-full  h-90 block  sm:block  lg:flex md:items-center lg:justify-center xl:flex xl:items-center xl:justify-center  p-2">

    <div className=' p-2 flex flex-col justify-center items-center xl:flex xl:flex-col' >
      <div className={` m-5 xl:m-5 text-center ${kanit.className}`}>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">    <h5 className='text-lg'>Herramientas de entorno</h5></span>
      </div>
      <div className=' tecnologies border border-solid border-3 border-white flex flex-wrap lg:flex-col xl:flex-col m-1 p-5'>
        {tecnologias[0].herramientasEntorno.map((svg, index) => (
          <Image key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} className='m-1' />
        ))}
      </div>
    </div>
  
    <div className=' p-2 h-90  flex flex-row justify-center items-center  xl:flex xl:flex-col '>
      <div className={` m-10 xl:m-5 text-center ${kanit.className}`}>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">   <h5 className='text-lg'>Front end</h5></span>
     
      </div>
      <div className='tecnologies border border-solid border-3 border-white flex flex-wrap lg:flex-col xl:flex-col m-1 p-5'>
  {tecnologias[0].frontend.map((svg, index) => (
    <Image key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} className='m-1 flex-grow-0' />
  ))}
</div>
    </div>
  
    <div className='  p-7  flex flex-row justify-center items-center  xl:flex xl:flex-col '>
      <div className={`m-10 xl:m-5 text-center m-1 ${kanit.className}`}>
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">   <h5 className='text-lg'>Full stack</h5></span>
        </div>
      <div>
        <div className=' tecnologies border border-solid  border-3 border-white flex flex-wrap lg:flex-col xl:flex-col m-1 p-5'>
          {tecnologias[0].fullstack.map((svg, index) => (
            <Image key={index} src={svg} alt="Tecnología de Entorno" width={100} height={70} />
          ))}
        </div>
      </div>
    </div>
  
    <div className='  p-2  flex flex-row justify-center items-center  xl:flex xl:flex-col'>
      <div className={` m-10 xl:m-5text-center ${kanit.className}`}>
        
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"><h5 className='text-lg'> Back end</h5> </span>
        </div>
      <div>
        <div className=' tecnologies border border-solid border-3 border-white flex flex-wrap lg:flex-col xl:flex-col m-1 p-5'>
          {tecnologias[0].backend.map((svg, index) => (
            <Image key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
          ))}
        </div>
      </div>
    </div>
  
    <div className=' p-2  flex flex-col justify-center items-center  xl:flex xl:flex-col'>
      <div className={` m-5 xl:m-5 text-center ${kanit.className}`}>      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"><h5 className='text-lg'> Tecnologias en proceso de aprendizaje</h5> </span></div>
      <div>
        <div className=' tecnologies border border-solid border-3 border-white flex flex-wrap lg:flex-col xl:flex-col m-1 p-5'>
          {tecnologias[0].tecnologias.map((svg, index) => (
            <Image key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
          ))}
        </div>
      </div>
    </div>
  

  </div>
  
  
  )
}

export default Tecnologias