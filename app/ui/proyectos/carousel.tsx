"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {

console.log('op',activeImage === images.length - 1)
console.log('dato',activeImage )
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  return (
    <div className=" lg:w-1/2  md:w-full  xl:w-1/2 h-full flex-1  flex items-center justify-center">
    <div id="controls-carousel" className="relative w-full h-full " data-carousel="static">
    
    <div className="relative  overflow-hidden rounded-lg md:h-96 ">
         
    
   
   {images.map((elem, idx) => (
     <div key={idx}       className={`${
        idx === activeImage
          ?"flex flex-row items-center  justify-center":"hidden" }`}>
     <div
      
       className={`${
         idx === activeImage
           ? "block w-full  md:h-dvh lg:h-[80vh] text-left "
           : "hidden"
       }`}
     >
       
<h2    className={`${
        idx === activeImage
          ? "text-black": "hidden"}`}> {elem.id}</h2>
     
      
     </div>
     <div >   <Image
    
           src={elem.src}
           alt={elem.title}
           width={400}
           height={400}
           className={`${
            idx === activeImage
              ? "w-full  object-cover  md:rounded-tl-3xl md:rounded-bl-3xl": "hidden"}`}
         />
</div>
</div>
   ))}
 



   
       
         
       
    

    </div>
    

    <button type="button"  onClick={clickNext} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" onClick={clickPrev} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>






 
</div>
      
      
</div> 
   
  );
};

export default Slider;