import React from "react";
import { images } from "./constants";

import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    

<div id="controls-carousel" className="relative w-full mt-4" data-carousel="static">
    
    <div className="relative  h-56 overflow-hidden rounded-lg md:h-96">
         
    
   
   {images.map((elem, idx) => (
     <div className="flex flex-row ">
     <div
       key={idx}
       className={`${
         idx === activeImage
           ? "block w-full  md:h-[50vh] text-left"
           : "hidden"
       }`}
     >
       
<h2></h2>
     
      
     </div>
     <div>   <Image
           src={elem.src}
           alt={elem.src}
           width={400}
           height={400}
           className="w-full  object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
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
























    
     
  );
};

export default Description;