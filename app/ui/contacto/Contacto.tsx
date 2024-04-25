import React from 'react'

const Contacto = () => {
  return (
<div className={`Spaceship bg-cover bg-center bg-no-repeat bg-[url('/spaceship.jpg')] w-1/2 h-80 flex-1 flex items-center justify-center relative rounded-xl`}>

<div className="card absolute bottom-0 right-0">
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="card-inner">  
  
    <span className="flex items-center">
      <span className="h-px flex-1 bg-white"></span> 
      <span className="px-10 text-white">Contacto</span>
      <span className="h-px flex-1 bg-white"></span> 
    </span>

    <ul className='flex items-center flex-col justify-center space-x-4 mt-3'>
      <li className='flex items-center space-x-2'> {/* Agregué space-x-2 para dar espacio entre los elementos */}
        <svg className='h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#fff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
        </svg>  
        <strong className='p-1'>Email: </strong>
       <a >cocleas87@gmail.com</a> 
      </li>
      <li className='flex items-center space-x-2'>     
      <svg className='h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        <strong className='p-1'>Teléfono: </strong>
       <a >5540876115</a> </li>

       <li className='flex items-center space-x-2'>     
       <svg className='h-5 w-5 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
        <strong className='p-1'>Ubicación: </strong>
       <a >Estado de México, México </a> </li>


    </ul>

  </div>
</div>

</div>


  )
}

export default Contacto