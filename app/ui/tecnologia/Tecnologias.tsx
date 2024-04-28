import React from 'react'
import { tecnologias } from './constants'
const Tecnologias = () => {
  return (
    <div className="bg-black w-full xl:w-1/2 h-90 flex-1 flex items-center justify-center">
    <div className='border border-solid border-white p-2'>
    
    
     <div>

      <h6>Herramientas de entorno</h6>
     </div>
     <div>
     <div>
    {tecnologias[0].herramientasEntorno.map((svg, index) => (
      <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
    ))}
     </div>

     </div>
    </div>
    <div className='border border-solid border-white p-2 h-90'>
      <div>
      Front end

      </div>
      <div >
      {tecnologias[0].frontend.map((svg, index) => (
      <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
    ))}
      </div>
      
      
      </div>
    <div className='border border-solid border-white p-7'>
    <div>Full stack</div>
      
      
      <div>   <div >
      {tecnologias[0].fullstack.map((svg, index) => (
      <img key={index} src={svg} alt="Tecnología de Entorno"width={100} height={70}  />
    ))}
      </div></div>
      
      
      </div>
    <div className='border border-solid border-white p-2'>
      <div>Back end</div>
      
      
      <div>  <div >
      {tecnologias[0].backend.map((svg, index) => (
      <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70} />
    ))}
      </div></div>
      
      </div>
    <div className='border border-solid border-white p-2'>
    <div>  Tecnologias en proceso de aprendizaje</div>
    <div>
    <div >
      {tecnologias[0].tecnologias.map((svg, index) => (
      <img key={index} src={svg} alt="Tecnología de Entorno" width={70} height={70}  />
    ))}
      </div>
    </div>
      
    </div>
   
  </div>
  )
}

export default Tecnologias